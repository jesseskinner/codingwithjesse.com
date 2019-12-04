<script>
  import { onMount } from "svelte";
  import Article from "./Article.svelte";
  import NewsletterSubscribe from "./NewsletterSubscribe.svelte";

  export let post;
  export let link = true;

  onMount(() => {
    // check for embeds that needs JavaScript
    if (document.querySelector(".twitter-tweet")) {
      addScript("https://platform.twitter.com/widgets.js");
    }
  });

  function addScript(src) {
    const s = document.createElement("script");
    s.async = true;
    s.charset = "utf-8";
    s.src = src;
    document.body.appendChild(s);
  }
</script>

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
