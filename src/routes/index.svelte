<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch("/homepage.json");
    const posts = await res.json();

    return { posts };
  }
</script>

<script>
  import Template from "../components/Template.svelte";
  import Post from "../components/Post.svelte";

  export let posts;
</script>

<Template>
  {#each posts as post}
    <Post {post} />
  {/each}
</Template>
