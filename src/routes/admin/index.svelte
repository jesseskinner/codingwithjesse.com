<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch("/admin/api/posts");
    const posts = await res.json();

    return { posts };
  }
</script>

<script>
  import Template from "../../components/AdminTemplate.svelte";
  export let posts;
</script>

<Template>
  <h1>Posts</h1>
  <table class="table">
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Date</th>
    </tr>
    {#each posts as { title, posted_at, id }}
      <tr>
        <td>{title}</td>
        <td>{posted_at}</td>
        <td>
          <a href="/admin/posts/edit/{id}">Edit</a>
        </td>
      </tr>
    {/each}
  </table>

  <a href="/admin/posts/add">Add new post</a>
</Template>
