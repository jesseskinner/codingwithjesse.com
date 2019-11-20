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
  import Template from "../../../../components/AdminTemplate.svelte";

  export let post;

  $: ({ id, markdown, title, slug } = post);
</script>

<Template>
  <a href="/admin/">Back</a>

  <h1>Edit Post #{id}</h1>

  <form method="post" action="">
    <fieldset class="form-group">
      <label htmlFor="title">Title</label>
      <input name="title" class="form-control" value={title} />
    </fieldset>
    <fieldset class="form-group">
      <label htmlFor="slug">Slug</label>
      <input name="slug" class="form-control" value={slug} />
    </fieldset>
    <fieldset class="form-group">
      <label htmlFor="markdown">Body</label>
      <textarea
        name="markdown"
        class="form-control"
        rows="10"
        value={markdown} />
    </fieldset>
    <button type="submit" class="btn btn-default">Save Post</button>
    <button name="submit" value="delete" type="submit" class="btn btn-danger">
      Delete Post
    </button>
  </form>
</Template>
