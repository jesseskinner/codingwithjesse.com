<script>
  import { formatDate } from "../_date.js";

  export let title = "";
  export let date = false;
  export let link = false;
</script>

<style>
  article {
    max-width: 800px;
    position: relative;
    margin: 3em 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  h1 {
    min-width: 70vw;
    margin-top: 0;
    font-size: 32px;
  }

  h1 a {
    color: #000;
  }

  .date {
    font-weight: bold;
  }

  article :global(pre) {
    padding: 2em 1em;
    box-sizing: border-box;
    overflow: auto;
    background: #29292e;
    color: #ffffff;
  }

  article :global(pre),
  .separator {
    margin: 0 -1em;
  }

  article :global(h2) {
    font-size: 150%;
  }

  article :global(h3) {
    font-size: 120%;
  }

  article :global(h4),
  article :global(h5),
  article :global(h6) {
    font-size: 100%;
  }

  .separator {
    border-bottom: 1px solid #ccc;
  }

  @media (min-width: 1000px) {
    article :global(pre) {
      padding: 2em 15vw;
    }
    article :global(pre),
    .separator {
      margin: 0 0 0 -15vw;
      width: 99vw;
    }
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

<div class="separator" />
