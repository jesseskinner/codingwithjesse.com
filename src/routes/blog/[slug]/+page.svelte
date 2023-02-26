<script>
	import Template from '../../_Template.svelte';
	import Post from '../../_components/Post.svelte';
	import AboutMe from '../../_components/AboutMe.svelte';
	import Comments from '../../_components/Comments.svelte';
	import NewsletterSubscribe from '../../_components/NewsletterSubscribe.svelte';
	import JoyOfSvelte from '../../_components/JoyOfSvelte.svelte';

	export let data;

	$: post = data.post;

	function getImage(html) {
		const match = html.match(/<img[^>]+src="([^"]+)"/);
		return (match && match[1]) || 'https://www.codingwithjesse.com/images/background.gif';
	}
</script>

<svelte:head>
	<title>{post.title} - Coding with Jesse</title>

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content="@JesseSkinner" />
	<meta property="og:title" content="{post.title} - Coding with Jesse" />
	<meta property="og:url" content="https://www.codingwithjesse.com/blog/{post.slug}/" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={getImage(post.html)} />
	<meta property="og:description" content={post.description} />
</svelte:head>

<Template>
	<Post {post} link={false} />

	<h2>About the author</h2>
	<p style:max-width="800px" style:margin="1em 0 5em">
		<a href="/contact/me/" style:float="left" style:margin="0.15em 1em 0 0"
			><img src="/images/me_umbrella.jpg" alt="Jesse Skinner" class="me" width="140" /></a
		>
		Hi, I'm <a href="/contact/me/">Jesse Skinner</a>. I help entrepreneurs scale web apps and reduce
		costs. I'd love to learn about your business challenges and see how I can help. If you're
		interested, please
		<a href="/contact/me/">get in touch</a> to set up a free video call.
	</p>

	{#if post.display}
		<Comments {post} url="https://www.codingwithjesse.com/blog/{post.slug}/" />

		<div class="newsletter">
			Subscribe to my newsletter to get updates on new articles &amp; videos:
			<NewsletterSubscribe />
		</div>
	{/if}

	<aside>
		<main>
			<AboutMe />
			<JoyOfSvelte />
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
