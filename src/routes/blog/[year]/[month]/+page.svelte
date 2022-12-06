<script>
	import Posts from '../../../_components/Posts.svelte';
	export let data;

	$: posts = data.posts;
	$: month = data.month;
</script>

<svelte:head>
	<title>Posts from {month} - Coding with Jesse</title>
</svelte:head>

<Posts {posts} />
