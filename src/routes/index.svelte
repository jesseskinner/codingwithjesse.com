<script context="module">
	export async function preload(page, session) {
		const res = await this.fetch('/homepage.json');
		return res.json();
	}
</script>

<script>
	import Template from './_Template.svelte';
	import Post from './_components/Post.svelte';
	import AboutMe from './_components/AboutMe.svelte';
	import { formatDate } from './_date.js';

	export let posts;
	export let videos;
</script>

<style>
	main {
		clear: both;
	}

	section {
		margin: 0 auto 2em;
		max-width: 80vw;
	}

	h1 a {
		color: inherit;
	}

	.about {
		padding-top: 0.5em;
		max-width: 320px;
	}

	.post a {
		display: block;
	}

	.post .date {
		font-size: 66%;
		display: block;
		font-style: italic;
		margin-bottom: 0.5em;
	}

	.text {
		font-size: 80%;
		display: block;
		text-decoration: none;
		color: inherit;
	}

	.videos {
		max-width: 320px;
	}

	.videos p a {
		font-size: 18px;
	}

	.videos div a {
		float: left;
		display: block;
		position: relative;
		overflow: hidden;
		margin-bottom: 1em;
	}

	.videos img {
		display: block;
	}

	.videos p {
		clear: both;
	}

	.videos span {
		position: absolute;
		top: 0;
		left: 0;
		right: 18%;
		color: #000;
		background: rgba(255, 255, 255, 0.9);
		font-weight: bold;
		text-decoration: none;
	}

	.videos a:hover span {
		background: #acf;
	}

	@media (min-width: 980px) {
		.about {
			max-width: 100%;
		}

		section {
			margin: 0;
			width: 28vw;
			float: left;
			box-sizing: border-box;
			margin-right: 2.5vw;
			border-right: 1px solid #aaa;
			padding-right: 2.5vw;
		}

		.videos {
			margin-right: 0;
			border-right: 0;
			padding-right: 0;
			max-width: 100%;
		}
	}

	@media (min-width: 1200px) {
		.videos a {
			font-size: 100%;
		}
	}

	@media (min-width: 1600px) {
		section {
			width: 21vw;
		}

		.videos {
			width: 42vw;
		}

		.videos a {
			margin-right: 1em;
		}
	}
</style>

<svelte:head>
	<title>Coding with Jesse</title>
</svelte:head>
<Template>
	<main>
		<section class="about">
			<AboutMe />
		</section>
		<section>
			<h1><a href="/blog/all">Recent articles</a></h1>
			{#each posts as { title, html, posted_at, slug }}
				<p class="post">
					<a href="/blog/{slug}/">{title}</a>
					<span class="date">{formatDate(new Date(posted_at))}</span>

					<a href="/blog/{slug}/" class="text">
						{@html html
							.replace(/<[^>]*>/g, '')
							.split(/\s+/)
							.slice(0, 25)
							.join(' ') + '...'}
					</a>
				</p>
			{/each}

			<p>
				<a href="/blog/all">See all posts...</a>
			</p>
		</section>

		<section class="videos">
			<h1><a href="/videos">Recent videos</a></h1>

			<div>
				{#each videos as { title, description, thumbnail, date, url }}
					<a href={url} target="_blank" rel="noopener">
						<img src={thumbnail} alt={title} />
						<span>{title}</span>
					</a>
				{/each}
			</div>

			<p>
				<a href="https://www.youtube.com/codingwithjesse">
					See all videos...
				</a>
			</p>
		</section>
	</main>
</Template>
