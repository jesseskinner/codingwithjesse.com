<script>
  import Article from "./Article.svelte";
  import NewsletterSubscribe from "./NewsletterSubscribe.svelte";

  export let post;
  export let link = true;
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
