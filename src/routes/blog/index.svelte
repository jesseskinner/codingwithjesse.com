<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/homepage.json');
		const posts = await res.json();

		return {
			props: { posts }
		};
	}
</script>

<script>
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
