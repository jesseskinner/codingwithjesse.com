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
			Interested in web development? Subscribe to my newsletter!
			<NewsletterSubscribe />
		</div>
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

	.newsletter {
		margin: 3em 0;
		border-top: 1px solid #aaa;
		padding-top: 1em;
	}

	@media (min-width: 1350px) {
		aside {
			position: absolute;
			top: 260px;
			right: 5vw;
		}
	}
</style>
