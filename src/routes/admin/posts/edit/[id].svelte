<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch("/admin/api/posts");
    const posts = await res.json();
    const id = +page.params.id;
    const post = posts.find(post => post.id === id);

    return { post };
  }
</script>

<script>
  import PostForm from "../../../../components/PostForm.svelte";
  import Template from "../../../../components/AdminTemplate.svelte";

  export let post;

  $: ({ id, markdown, title, slug, category } = post);
</script>

<Template>
  <a href="/admin/">Back</a>

  <h1>Edit Post #{id}</h1>

  <form method="post" action="">
    <PostForm {post} />

    <button type="submit" class="btn btn-default">Save Post</button>
    <button name="submit" value="delete" type="submit" class="btn btn-danger">
      Delete Post
    </button>
  </form>
</Template>
