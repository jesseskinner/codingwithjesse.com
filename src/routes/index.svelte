<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch("/api/homepage");
    const posts = await res.json();

    return { posts };
  }
</script>

<script>
  import Template from "./template.svelte";
  export let posts;
</script>

<Template>
  {#each posts as { title, posted_at, id, body }}
    <article>
      <h1>{title}</h1>
      <p>{body}</p>
    </article>
  {/each}
</Template>
