<script>
  import Template from "./_Template.svelte";
  import Article from "./_components/Article.svelte";
  import NewsletterSubscribe from "./_components/NewsletterSubscribe.svelte";
</script>

<svelte:head>
  <title>Subscribe to the Coding with Jesse newsletter</title>
</svelte:head>

<Template>
  <Article title="Subscribe to the Coding with Jesse newsletter">
    <p>Interested in web development? Subscribe to my newsletter!</p>

    <NewsletterSubscribe />
  </Article>
</Template>
