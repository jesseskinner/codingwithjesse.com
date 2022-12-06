<script>
	import Posts from '../../../_components/Posts.svelte';

	export let data;

	$: posts = data.posts;
	$: category = data.category;
</script>

<svelte:head>
	<title>Posts about {category} - Coding with Jesse</title>
</svelte:head>

<Posts {posts} />
