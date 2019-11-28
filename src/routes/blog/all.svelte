<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch(`/blog/all.json`);
    const posts = await res.json();

    return {
      posts
    };
  }
</script>

<script>
  import Template from "../_Template.svelte";
  import Article from "../_components/Article.svelte";

  export let posts;

  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${date.getFullYear()}/${month < 10 ? `0${month}` : month}/${
      day < 10 ? `0${day}` : day
    }`;
  }
</script>

<Template>
  <Article title="All Articles">
    <p>
      Here are the {posts.length} articles I've written, from today back until
      April 6th, 2005.
    </p>

    <p>
      {#each posts as p}
        <em>{formatDate(p.posted_at)}</em>
        &nbsp;
        <a href="/blog/{p.slug}">{p.title}</a>
        <br />
      {/each}
    </p>

    <hr />

    <p>
      Here are some other pages on this site (so the static site generation
      crawler will know about them).
    </p>

    <p>
      <a href="/blog/rss">RSS</a>
      <a href="/blog/feed">feed</a>
      <br />
      <a href="/blog">Recent posts</a>
      <br />
      <a href="/blog/search">Search</a>
    </p>
  </Article>
</Template>
