<script>
  import { formatDate } from "../model/posts";

  export let title = '';
  export let date = false;
  export let link = false;
</script>

<style>
  article {
    position: relative;
    background: white;
    padding: 2em 3em;
    margin-bottom: 3em;
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
    overflow: auto;
    margin: 0 -3em;
    padding: 2em 3em;
    background: #29292e;
    color: #fff;
  }
</style>

<article>
  <h1>
    {#if link}
      <a href={link}>{title}</a>
    {:else}{title}{/if}
  </h1>
  {#if date}
    <div class="date">{formatDate(date)}</div>
  {/if}
  <slot />
</article>
