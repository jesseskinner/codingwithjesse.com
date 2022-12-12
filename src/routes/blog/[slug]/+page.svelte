<script>
	import Template from '../../_Template.svelte';
	import Post from '../../_components/Post.svelte';
	import AboutMe from '../../_components/AboutMe.svelte';
	import Comments from '../../_components/Comments.svelte';
	import NewsletterSubscribe from '../../_components/NewsletterSubscribe.svelte';

	export let data;

	$: post = data.post;
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

	<Comments {post} url="https://www.codingwithjesse.com/blog/{post.slug}/" />

	{#if post.display}
		<div class="newsletter">
			Subscribe to my newsletter to get updates on new articles &amp; videos:
			<NewsletterSubscribe />
		</div>
	{/if}

	<aside>
		<main>
			<AboutMe />
		</main>
	</aside>
</Template>

<style>
	.newsletter {
		max-width: 800px;
		margin: 3em 0;
		border: 1px solid rgba(128, 128, 128, 0.25);
		padding: 1.5em;
		box-sizing: border-box;
		text-align: center;
	}

	aside {
		margin: 2em 0;
		max-width: 800px;
		text-align: center;
	}

	aside main {
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
