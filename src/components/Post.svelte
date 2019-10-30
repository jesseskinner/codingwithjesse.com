<script>
  import { formatDate } from "../model/posts";
  export let post;
  export let link = true;
</script>

<style>
  article {
    position: relative;
    background: white;
    padding: 1em;
    margin-bottom: 1em;
    box-shadow: 2px 2px 2px #222;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  h1 {
    margin-top: 0;
    font-size: 32px;
  }

  h1 a {
    color: #000;
  }

  .date {
    font-weight: bold;
  }

  @media (min-width: 700px) {
    article {
      margin-right: 90px;
    }

    .date {
      position: absolute;
      top: 30px;
      right: -90px;
      background: #d3e4ff;
      width: 90px;
      padding: 5px 0;
      font: 20px Georgia, sans-serif;
      line-height: 30px;
      text-align: center;
      z-index: -1;
      font-weight: normal;
      box-shadow: 2px 2px 2px #222;
    }
  }

  article :global(pre) {
    width: 93%;
    overflow: auto;
    padding: 15px 10px 15px;
    border: 1px dashed black;
    background: #e8f1ff;
  }
</style>

<article>
  <h1>
    {#if link}
      <a href="/blog/{post.slug}">{post.title}</a>
    {:else}{post.title}{/if}
  </h1>
  <div class="date">{formatDate(post.posted_at)}</div>
  {@html post.body}
</article>
