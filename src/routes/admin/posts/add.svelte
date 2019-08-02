<script>
  import Template from "../template.svelte";

  let slug = "";

  function setSlug(text) {
    slug = text
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-");
  }
</script>

<Template>
  <a href="/admin/">Back</a>

  <h1>Add Post</h1>

  <form method="post" action="">
    <fieldset class="form-group">
      <label for="title">Title</label>
      <input
        name="title"
        class="form-control"
        on:input={event => setSlug(event.target.value)} />
    </fieldset>
    <fieldset class="form-group">
      <label for="slug">Slug</label>
      <input
        name="slug"
        class="form-control"
        on:input={event => setSlug(event.target.value)}
        value={slug} />
    </fieldset>
    <fieldset class="form-group">
      <label for="body">Body</label>
      <textarea name="body" class="form-control" rows="10" />
    </fieldset>
    <button type="submit" class="btn btn-default">Add Post</button>
  </form>
</Template>
