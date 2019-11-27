<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch(`/blog/cat/${page.params.category}.json`);
    const posts = await res.json();

    return { posts };
  }
</script>

<script>
  import Posts from "../../_components/Posts.svelte";
  export let posts;
</script>

<Posts {posts} />
