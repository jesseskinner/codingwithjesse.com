<script>
  import Template from "../_Template.svelte";
  import Post from "./Post.svelte";

  export let posts;
</script>

<Template>
  {#each posts as post (post.id)}
    <Post {post} />
  {/each}
</Template>
