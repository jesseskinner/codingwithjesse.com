<script>
  import PostForm from "../../../components/PostForm.svelte";
  import Template from "../../../components/AdminTemplate.svelte";
</script>

<Template>
  <a href="/admin/">Back</a>

  <h1>Add Post</h1>

  <form method="post" action="">
    <PostForm />
    <button type="submit" class="btn btn-default">Add Post</button>
  </form>
</Template>
