<script>
	import Template from '../_Template.svelte';
	import Article from '../_components/Article.svelte';
	import NewsletterSubscribe from '../_components/NewsletterSubscribe.svelte';
</script>

<svelte:head>
	<title>Subscribe to the Coding with Jesse newsletter</title>
</svelte:head>

<Template>
	<Article title="Subscribe to the Coding with Jesse newsletter">
		<p>
			Sign up to receive updates about any new articles and videos. You'll also keep up to date with
			what I'm most excited about, what I've been working on, and what I've been learning about.
		</p>

		<NewsletterSubscribe />
	</Article>
</Template>
