<script>
	import Template from '../../_Template.svelte';
	import Article from '../../_components/Article.svelte';
	import { onMount } from 'svelte';

	export let data;

	$: posts = data;

	let SearchResults;

	onMount(async () => {
		const module = await import('../_SearchResults.svelte');
		SearchResults = module.default;
	});
</script>

<Template>
	<Article title="Search Results">
		<svelte:component this={SearchResults} {posts} />
	</Article>
</Template>
