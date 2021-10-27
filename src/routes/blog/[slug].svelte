<script context="module">
	export async function load({ page, fetch }) {
		const res = await fetch(`/api/article/${page.params.slug}.json`);

		if (res.status === 200) {
			const post = await res.json();

			return {
				props: { post }
			};
		}
	}
</script>

<script>
	import Template from '../_Template.svelte';
	import Post from '../_components/Post.svelte';
	import AboutMe from '../_components/AboutMe.svelte';
	import Comments from '../_components/Comments.svelte';

	export let post;
</script>

<svelte:head>
	<title>{post.title} - Coding with Jesse</title>

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content="@JesseSkinner" />
	<meta property="og:title" content="{post.title} - Coding with Jesse" />
	<meta property="og:url" content="https://www.codingwithjesse.com/blog/{post.slug}/" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://www.codingwithjesse.com/images/background.gif" />
</svelte:head>

<Template>
	<Post {post} link={false} />

	{#if post.comments.length}
		<Comments comments={post.comments} url="/blog/{post.slug}/" />
	{/if}

	<aside>
		<AboutMe />
	</aside>
</Template>

<style>
	aside {
		max-width: 380px;
		margin: 2em auto;
	}

	@media (min-width: 1350px) {
		aside {
			position: absolute;
			top: 260px;
			right: 5vw;
		}
	}
</style>
