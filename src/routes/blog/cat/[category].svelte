<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch(`/blog/cat/${page.params.category}.json`);
    const posts = await res.json();

    return { posts, category: page.params.category };
  }
</script>

<script>
  import Posts from "../../_components/Posts.svelte";
  export let posts;
  export let category;
</script>

<svelte:head>
  <title>Posts about {category} - Coding with Jesse</title>
</svelte:head>

<Posts {posts} />
