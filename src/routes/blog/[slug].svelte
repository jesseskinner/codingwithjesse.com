<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch(`/blog/${page.params.slug}.json`);
    const post = await res.json();

    return { post };
  }
</script>

<script>
  import Template from "../../components/Template.svelte";
  import Post from "../../components/Post.svelte";

  export let post;
</script>

<Template>
  <Post {post} link={false} />
</Template>
