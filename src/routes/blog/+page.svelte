<script>
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	import Template from '../_Template.svelte';
	import Post from '../_components/Post.svelte';
	export let posts;
</script>

<Template>
	{#each posts as post}
		<Post {post} />
	{/each}

	<section>
		<a href="/blog/page/2">&lt;&lt; older posts</a>
	</section>
</Template>
