<script context="module">
	export async function preload(page, session) {
		const res = await this.fetch(`/blog/page/${page.params.page}.json`);
		const posts = await res.json();

		return { posts, page: +page.params.page };
	}
</script>

<script>
	import Template from '../../_Template.svelte';
	import Post from '../../_components/Post.svelte';
	export let posts;
	export let page;
</script>

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

<Template>
	<div>
		{#each posts as post}
			<Post {post} />
		{/each}
	</div>

	<section class="pagination">
		{#if posts.length === 5}
			<a class="older" href={`/blog/page/${page + 1}`}>
				&lt;&lt; older posts
			</a>
		{/if}
		{#if page <= 2}
			<a class="newer" href="/">newer posts &gt;&gt;</a>
		{:else}
			<a class="newer" href={`/blog/page/${page - 1}`}>
				newer posts &gt;&gt;
			</a>
		{/if}
		<a href="/blog/all">All posts</a>
	</section>
</Template>
