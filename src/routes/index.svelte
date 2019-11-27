<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch("/homepage.json");
    const posts = await res.json();

    return { posts };
  }
</script>

<script>
  import Template from "./_Template.svelte";
  import Post from "./_components/Post.svelte";
  export let posts;
</script>

<svelte:head>
  <title>Coding with Jesse</title>
</svelte:head>

<Template>
  {#each posts as post}
    <Post {post} />
  {/each}

  <section>
    <a href="/blog/page/2">&lt;&lt; older posts</a>
  </section>
</Template>
