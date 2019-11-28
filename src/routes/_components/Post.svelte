<script>
  import Article from "./Article.svelte";

  export let post;
  export let link = true;

  function openNewsletterWindow() {
    window.open(
      "https://tinyletter.com/JesseSkinner",
      "popupwindow",
      "scrollbars=yes,width=800,height=600"
    );
  }
</script>

<style>
  form {
    text-align: center;
  }
  form input {
    font-size: 120%;
  }
</style>

<Article
  title={post.title}
  date={post.display ? post.posted_at : false}
  link={link ? `/blog/${post.slug}` : false}>

  {@html post.html}

  {#if post.display}
    <form
      action="https://tinyletter.com/JesseSkinner"
      method="post"
      target="popupwindow"
      on:submit={openNewsletterWindow}>
      <hr />
      <p>Interested in web development? Subscribe to my newsletter!</p>
      <input type="hidden" value="1" name="embed" />
      <input
        name="email"
        placeholder="jesse@example.com"
        aria-label="Email address" />
      <input type="submit" value="Subscribe" />
    </form>
  {/if}
</Article>
