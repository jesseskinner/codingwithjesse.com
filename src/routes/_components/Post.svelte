<script>
  import Article from "./Article.svelte";
  import NewsletterSubscribe from "./NewsletterSubscribe.svelte";

  export let post;
  export let link = true;

  $: if (typeof window !== 'undefined' && /twitter-tweet/.test(post.html)) {
    addScript("https://platform.twitter.com/widgets.js");
  }

  function addScript(src) {
    const s = document.createElement("script");
    s.async = true;
    s.charset = "utf-8";
    s.src = src;
    document.body.appendChild(s);
  }
</script>

<style>
  :global(.twitter-tweet) {
    margin-left: auto;
    margin-right: auto;
  }
</style>

<Article
  title={post.title}
  date={post.display ? post.posted_at : false}
  link={link ? `/blog/${post.slug}/` : false}>

  {@html post.html}

  {#if post.display}
    <hr />
    <NewsletterSubscribe />
  {/if}
</Article>
