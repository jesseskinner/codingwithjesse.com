<script>
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	import Template from '../../../_Template.svelte';
	import Post from '../../../_components/Post.svelte';
	export let posts;
	export let page;
</script>

<Template>
	{#each posts as post}
		<Post {post} />
	{/each}

	<section class="pagination">
		{#if posts.length === 5}
			<a class="older" href={`/blog/page/${page + 1}`}> &lt;&lt; older posts </a>
		{/if}
		{#if page <= 2}
			<a class="newer" href="/">newer posts &gt;&gt;</a>
		{:else}
			<a class="newer" href={`/blog/page/${page - 1}`}> newer posts &gt;&gt; </a>
		{/if}
		<a href="/blog/all">All posts</a>
	</section>
</Template>

<style>
	.pagination {
		margin-bottom: 2em;
		text-align: center;
	}

	.older {
		float: left;
	}

	.newer {
		float: right;
	}
</style>
