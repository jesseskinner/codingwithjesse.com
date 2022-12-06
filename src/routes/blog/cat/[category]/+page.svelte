<script>
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	import Posts from '../../../_components/Posts.svelte';
	export let posts;
	export let category;
</script>

<svelte:head>
	<title>Posts about {category} - Coding with Jesse</title>
</svelte:head>

<Posts {posts} />
