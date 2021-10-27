<script context="module">
	import { months } from '../../_date.js';

	export async function load({ page, fetch }) {
		const res = await fetch(`/blog/${page.params.year}/${page.params.month}.json`);
		const posts = await res.json();

		return {
			props: {
				posts,
				month: `${months[page.params.month - 1]}, ${page.params.year}`
			}
		};
	}
</script>

<script>
	import Posts from '../../_components/Posts.svelte';
	export let posts;
	export let month;
</script>

<svelte:head>
	<title>Posts from {month} - Coding with Jesse</title>
</svelte:head>

<Posts {posts} />
