<script>
  import Article from "./Article.svelte";
  import NewsletterSubscribe from "./NewsletterSubscribe.svelte";

  export let post;
  export let link = true;
</script>

<style>
  .content :global(img) {
    border: 0;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .newsletter {
    margin: 1em 0;
  }
</style>

<Article
  title={post.title}
  date={post.display ? post.posted_at : false}
  link={link ? `/blog/${post.slug}/` : false}>

  <div class="content">
    {@html post.html}
  </div>

  {#if post.display}
    <hr />
    <div class="newsletter">
      Interested in web development? Subscribe to my newsletter!
      <NewsletterSubscribe />
    </div>
  {/if}
</Article>
