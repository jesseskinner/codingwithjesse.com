<script>
  export let post;
</script>

<style>
  article {
    background: white;

    padding:1em;
    margin-bottom: 1em;
    box-shadow: 2px 2px 2px #222;
  }

  h1 {
    margin-top: 0;
    font-size: 32px;
  }

  h1 a {
    color: #000;
  }

  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
</style>

<article>
  <h1>
    <a href="/blog/{post.slug}">{post.title}</a>
  </h1>
  <p>{post.body}</p>
</article>
