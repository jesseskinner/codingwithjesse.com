<script>
	import { onMount } from 'svelte';
	import sanitizeHtml from 'sanitize-html';
	import { formatDate } from '../_date.js';

	export let post;
	export let url;

	$: comments = post.comments;

	let link;
	let likes;
	let boosts;
	let replies;

	onMount(async () => {
		const { children } = await fetch(`https://webmention.io/api/mentions.jf2?target=${url}`).then(
			(r) => r.json()
		);

		if (children.length) {
			const mentions = children.sort((a, b) => (a['wm-received'] < b['wm-received'] ? 1 : -1));

			link = mentions
				.find((m) => m.url.startsWith('https://toot.cafe/@JesseSkinner/'))
				?.url.split('#')[0];

			likes = mentions.filter((m) => m['wm-property'] === 'like-of');
			boosts = mentions.filter((m) => m['wm-property'] === 'repost-of');
			replies = mentions.filter((m) => m['wm-property'] === 'in-reply-to');
		}
	});

	function onShare() {
		const server = prompt('Mastodon Instance / Server Name?');

		if (server) {
			// test if server looks like a domain
			if (!server.match(/^[a-z0-9-]+\.[a-z0-9-]+$/)) {
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

<main>
	{#if link}
		<a class="action" href={link} target="_blank" rel="noreferrer"
			>Discuss this article on Mastodon</a
		>
	{:else if typeof window !== 'undefined'}
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
					{@html sanitizeHtml(
						content.html.replace(/<a /gi, '<a target="_blank" rel="noreferrer" ')
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
			<h1>Favourites</h1>
			{#each likes as { author: { name, photo, url } }}
				<a href={url} target="_blank" rel="noreferrer" title={name}>
					<img src={photo} alt={name} />
				</a>
			{/each}
		</section>
	{/if}

	{#if boosts?.length}
		<section class="mentions">
			<h1>Boosts</h1>
			{#each boosts as { author: { name, photo, url } }}
				<a href={url} target="_blank" rel="noreferrer" title={name}>
					<img src={photo} alt={name} />
				</a>
			{/each}
		</section>
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
		border: 1px solid #aaa;
		padding: 1em 0;
		border-radius: 1em;
	}

	.action:hover {
		background: #eee;
	}

	.comment {
		position: relative;
		margin-bottom: 1em;
		max-width: 100%;
		overflow: auto;
		border: 1px solid #ccc;
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
		width: 50px;
	}

	.comments h1 {
		border-bottom: 0;
	}

	header {
		display: flex;
		gap: 1em;
		height: 50px;
		align-items: center;
	}

	header > .avatar {
		flex: 0 0 50px;
	}

	header > div {
		flex: 1;
	}

	header img {
		display: block;
	}

	header a {
		color: #000;
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
		border-bottom: 1px solid #ccc;
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
		width: 50px;
		height: 50px;
		margin-right: 5px;
	}
</style>
