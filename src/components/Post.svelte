<script>
  import Article from "./Article.svelte";

  export let post;
  export let link = true;
</script>

<Article
  title={post.title}
  date={post.display ? post.posted_at : false}
  link={link ? `/blog/${post.slug}` : false}>
  {@html post.html}
</Article>
