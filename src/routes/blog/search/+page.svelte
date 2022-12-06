<script>
  throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

  import Template from "../../_Template.svelte";
  import Article from "../../_components/Article.svelte";
  import { onMount } from "svelte";

  export let posts;

  let SearchResults;

  onMount(async () => {
    const module = await import("../_SearchResults.svelte");
    SearchResults = module.default;
  });
</script>

<Template>
  <Article title="Search Results">
    <svelte:component this={SearchResults} {posts} />
  </Article>
</Template>
