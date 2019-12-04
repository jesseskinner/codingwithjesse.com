<script>
  import { onMount } from "svelte";

  let posts;

  onMount(async () => {
    const res = await fetch("/blog/all.json");
    posts = await res.json();
  });

  $: match = /^\?terms=([^&]*)/.exec(location.search);
  $: terms =
    match &&
    match[1] &&
    decodeURIComponent(match[1])
      .toLowerCase()
      .split(/\s+/);
  $: results = getSearchResults(posts, terms);

  function getSearchResults(posts, terms) {
    if (posts && terms) {
      return posts.filter(p => postMatchesTerms(p, terms));
    }

    return [];
  }

  function postMatchesTerms(post, terms) {
    const text = `${post.title} ${post.html}`.toLowerCase();

    for (const term of terms) {
      if (text.indexOf(term) === -1) {
        return false;
      }
    }

    return true;
  }

  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${date.getFullYear()}/${month < 10 ? `0${month}` : month}/${
      day < 10 ? `0${day}` : day
    }`;
  }
</script>

{#if posts}
  <p>There are {results.length} articles matching "{terms.join(' ')}".</p>
  <p>
    {#each results as p}
      <em>{formatDate(p.posted_at)}</em>
      &nbsp;
      <a href="/blog/{p.slug}/">{p.title}</a>
      <br />
    {/each}
  </p>
{/if}
