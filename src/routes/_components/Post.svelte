<script>
	import Article from './Article.svelte';

	export let post;
	export let link = true;

	$: loadCodePen(post);

	function loadCodePen() {
		if (typeof window === 'object' && post && post.html && post.html.indexOf('codepen.io')) {
			post.html = post.html.replace(
				/<a href="[^"]+codepen.io[^"]+\/([a-z0-9]+)">[^<]+<\/a>/gi,
				'<p class="codepen" data-height="500" data-default-tab="js,result" data-slug-hash="$1" data-editable="true" data-user="jesseskinner" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"></p>'
			);

			const script = document.createElement('script');
			script.async = true;
			script.src = 'https://cpwebassets.codepen.io/assets/embed/ei.js';

			document.body.appendChild(script);
		}
	}
</script>

<Article
	title={post.title}
	date={post.display ? post.posted_at : false}
	link={link ? `/blog/${post.slug}/` : false}
>
	<div class="content">
		{@html post.html}
	</div>
</Article>

<style>
	.content :global(img) {
		display: block;
		border: 0;
		max-width: 100%;
		height: auto;
		margin-left: auto;
		margin-right: auto;
	}
</style>
