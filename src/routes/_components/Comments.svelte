<script>
	import { onMount } from 'svelte';
	import sanitizeHtml from 'sanitize-html';
	import { formatDate } from '../_date.js';

	export let post;
	export let url;

	$: comments = post.comments;

	let mentions;
	let link;
	let likes;
	let boosts;
	let replies;

	async function getMentions(url) {
		let mentions = [];
		let page = 0;
		let perPage = 100;

		while (true) {
			const results = await fetch(
				`https://webmention.io/api/mentions.jf2?target=${url}&per-page=${perPage}&page=${page}`
			).then((r) => r.json());

			mentions = mentions.concat(results.children);

			if (results.children.length < perPage) {
				break;
			}

			page++;
		}

		return mentions.sort((a, b) =>
			(a.published || a['wm-received']) < (b.published || b['wm-received']) ? -1 : 1
		);
	}

	onMount(async () => {
		mentions = await getMentions(url);

		if (mentions.length) {
			link = mentions
				.filter((m) => m.url.startsWith('https://toot.cafe/@JesseSkinner/'))
				.map(({ url }) => url.split('#')[0])
				.sort()
				.shift();

			likes = unique(mentions.filter((m) => m['wm-property'] === 'like-of'));
			boosts = unique(mentions.filter((m) => m['wm-property'] === 'repost-of'));
			replies = mentions.filter((m) => m['wm-property'] === 'in-reply-to');
		}
	});

	function unique(mentions) {
		const seen = {};

		return mentions.filter((m) => {
			if (!seen[m.author.url]) {
				return (seen[m.author.url] = true);
			}
		});
	}

	function onShare() {
		const server = prompt('Mastodon Instance / Server Name?');

		if (server) {
			// test if server looks like a domain
			if (!server.match(/^[^\s]+\.[^\s]+$/)) {
				alert('Invalid server name');
				return;
			}

			window.open(
				`https://${server}/share?text=${encodeURIComponent(
					`"${post.title}" by @JesseSkinner@toot.cafe\n\n${url}`
				)}`
			);
		}
	}
</script>

<main id="comments">
	{#if mentions}
		{#if link}
			<a class="action" href={link} target="_blank" rel="noreferrer"
				>Discuss this article on Mastodon</a
			>
		{:else}
			<!-- svelte-ignore a11y-invalid-attribute -->
			<a class="action" href="javascript:;" on:click={onShare}>Share this article on Mastodon</a>
		{/if}

		{#if comments.length}
			<section class="comments">
				<h1>Comments</h1>
				{#each comments as { title, author, avatar, date, body }, i}
					<div id="comment{i + 1}" class="comment">
						<header>
							<span class="avatar">
								<img src={avatar} alt={author} />
							</span>

							<div>
								{author}
								<span class="date">{formatDate(date)}</span>
							</div>
						</header>
						<div>
							<p>{@html body}</p>
							<br />
						</div>
					</div>
				{/each}
			</section>
		{/if}

		{#if replies?.length}
			<section class="comments">
				<h1>Replies</h1>
				{#each replies as { author, url, published, content }}
					{@const name =
						'https://toot.cafe/@JesseSkinner' === author.url ? 'Jesse Skinner' : author.name}
					<div class="comment">
						<header>
							<span class="avatar">
								<a href={author.url} target="_blank" rel="noreferrer" title={name}>
									<img src={author.photo} alt={name} />
								</a>
							</span>

							<div>
								<a href={author.url} target="_blank" rel="noreferrer" title={name}>
									{name}
								</a>
								<a class="date" href={url} target="_blank" rel="noreferrer" title={published}
									>{formatDate(published)}</a
								>
							</div>
						</header>
						{@html sanitizeHtml(content.html).replace(
							/<a /gi,
							'<a target="_blank" rel="noopener noreferrer" '
						)}
						<a class="reply" href={url} target="_blank" rel="noreferrer" title="Reply on Mastodon">
							Reply
						</a>
					</div>
				{/each}
			</section>
		{/if}

		{#if likes?.length}
			<section class="mentions">
				<h1>Favourited</h1>
				{#each likes as { author: { name, photo, url } }}
					<a href={url} target="_blank" rel="noreferrer" title={name}>
						<img src={photo} alt={name} />
					</a>
				{/each}
			</section>
		{/if}

		{#if boosts?.length}
			<section class="mentions">
				<h1>Boosted</h1>
				{#each boosts as { author: { name, photo, url } }}
					<a href={url} target="_blank" rel="noreferrer" title={name}>
						<img src={photo} alt={name} />
					</a>
				{/each}
			</section>
		{/if}
	{/if}
</main>

<style>
	main {
		max-width: 800px;
	}

	.comments,
	.mentions,
	.action {
		padding: 0;
		margin-bottom: 1em;
		font-size: 16px;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}

	.action {
		font-size: 110%;
		display: block;
		margin: 0 0 2em 0;
		text-align: center;
		border: 1px solid rgba(128, 128, 128, 0.25);
		padding: 1em 0;
		border-radius: 1em;
	}

	.action:hover {
		background: rgba(128, 128, 128, 0.25);
	}

	.comment {
		position: relative;
		margin-bottom: 1em;
		max-width: 100%;
		overflow: auto;
		border: 1px solid rgba(128, 128, 128, 0.25);
		border-radius: 1em;
		padding: 1em 1em 0;
	}

	.comments h2 {
		margin: 0;
		font-size: 100%;
	}

	.comments p {
		margin: 1em 0 0 0;
	}

	.comments img {
		width: 64px;
		height: 64px;
	}

	.comments h1 {
		border-bottom: 0;
	}

	header {
		display: flex;
		gap: 1em;
		height: 64px;
		align-items: center;
	}

	header > .avatar {
		flex: 0 0 64px;
	}

	header > div {
		flex: 1;
	}

	header img {
		display: block;
	}

	header a {
		color: inherit;
		text-decoration: none;
	}

	header a:hover {
		text-decoration: underline;
	}

	header .date,
	.reply {
		float: right;
	}

	.reply {
		display: block;
		margin: -0.5em 1em 1em;
	}

	h1 {
		font-size: 100%;
		text-transform: uppercase;
		padding-bottom: 0;
		margin-bottom: 0.5em;
		border-bottom: 1px solid rgba(128, 128, 128, 0.25);
	}

	.mentions {
		display: inline-block;
		margin-right: 2em;
	}

	.mentions a {
		display: inline-block;
	}

	.mentions img {
		display: block;
		border: 0;
		width: 64px;
		height: 64px;
		margin-right: 5px;
	}
</style>
