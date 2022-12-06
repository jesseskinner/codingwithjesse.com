<script>
  import PostForm from "../_PostForm.svelte";
  import Template from "../../_AdminTemplate.svelte";
</script>

<Template>
  <a href="/admin/">Back</a>

  <h1>Add Post</h1>

  <form method="post" action="/admin/api/posts.json">
    <PostForm />
    <button type="submit" class="btn btn-default">Add Post</button>
  </form>
</Template>
