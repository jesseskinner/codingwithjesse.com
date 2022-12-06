<script>
	import { onMount } from 'svelte';
	import sanitizeHtml from 'sanitize-html';
	import { formatDate } from '../_date.js';

	export let comments;
	export let url;

	let post;
	let likes;
	let boosts;
	let replies;

	onMount(async () => {
		const { children } = await fetch(`https://webmention.io/api/mentions.jf2?target=${url}`).then(
			(r) => r.json()
		);

		if (children.length) {
			const mentions = children.sort((a, b) => (a['wm-received'] < b['wm-received'] ? 1 : -1));

			post = mentions
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
					`"${title}" by @JesseSkinner@toot.cafe\n\n${url}`
				)}`
			);
		}
	}
</script>

{#if comments.length}
	<section class="comments">
		<h1>Comments</h1>
		{#each comments as { title, author, avatar, date, body }, i}
			<div id="comment{i + 1}" class="comment">
				<h2>
					<a href="{url}#comment{i + 1}">{i + 1}</a>
					. {author} on {formatDate(date)}
				</h2>
				<img src={avatar} alt={author} />
				<p>
					{@html body}
				</p>
			</div>
		{/each}
	</section>
{/if}

{#if likes?.length}
	<section class="mentions">
		<h1>Favourites</h1>
		{#each likes as { author: { name, photo, url } }}
			<a href={url} target="_blank" title={name}>
				<img src={photo} alt={name} />
			</a>
		{/each}
	</section>
{/if}

{#if boosts?.length}
	<section class="mentions">
		<h1>Boosts</h1>
		{#each boosts as { author: { name, photo, url } }}
			<a href={url} target="_blank" title={name}>
				<img src={photo} alt={name} />
			</a>
		{/each}
	</section>
{/if}

{#if replies?.length}
	<section class="comments">
		<h1>Replies</h1>
		{#each replies as { author, url, published, content }}
			<div class="comment">
				<a href={url} target="_blank" title={author.name}>
					<img src={author.photo} alt={author.name} />
					{author.name} on {formatDate(published)}
				</a>

				{@html sanitizeHtml(content.html)}
			</div>
		{/each}
	</section>
{/if}

{#if post}
	<a class="action" href={post} target="_blank">Discuss this article on Mastodon</a>
{:else if typeof window !== 'undefined'}
	<!-- svelte-ignore a11y-invalid-attribute -->
	<a class="action" href="javascript:;" on:click={onShare}>Share this article on Mastodon</a>
{/if}

<style>
	.comments,
	.mentions,
	.action {
		padding: 2em 0;
		margin: 0;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}

	.comment {
		position: relative;
		min-height: 130px;
		margin-bottom: 1em;
		max-width: 100%;
		overflow: auto;
	}

	.comments h2 {
		margin: 0;
		font-size: 100%;
	}

	.comments p {
		margin: 5px 0 0 25px;
	}

	.comments img {
		float: left;
		width: 80px;
		height: 80px;
		margin: 10px 15px 5px 25px;
	}

	@media (min-width: 700px) {
		.comments {
			margin-right: 90px;
		}
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
