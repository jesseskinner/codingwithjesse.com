<script>
  import Template from "../_Template.svelte";
  import Post from "./Post.svelte";

  export let posts;
</script>

<Template>
  {#each posts as post}
    <Post {post} />
  {/each}
</Template>
