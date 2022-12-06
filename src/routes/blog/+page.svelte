<script>
	import Template from '../_Template.svelte';
	import Post from '../_components/Post.svelte';

	export let data;
</script>

<Template>
	{#each data.posts as post}
		<Post {post} />
	{/each}

	<section>
		<a href="/blog/page/2">&lt;&lt; older posts</a>
	</section>
</Template>
