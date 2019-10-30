<style>
  :global(body) {
    background: #acf url("/images/background.gif") repeat;
    font: 21px/1.58 Georgia, serif;
  }

  :global(html),
  :global(body) {
    border: 0;
    margin: 0;
    padding: 0;
  }

  main {
    width: 90%;
    max-width: 1000px;
    margin-left: 5%;
  }

  h1 {
    margin: 0;
  }
  h1 img {
    margin-left: 5%;
    width: 90%;
    max-width: 1200px;
    filter: drop-shadow(2px 2px 2px #222);
  }

  footer {
    float: right;
    text-align: right;
    margin-right: 5%;
    padding: 0 0.5em;
    color: #000;
    background: #acf;
  }

  @media (prefers-color-scheme: dark) {
    :global(body) {
      background: #000;
      color: #fff;
    }
  }
</style>

<header>
  <h1>
    <a href="/">
      <img src="/images/title.svg" alt="Coding with Jesse" />
    </a>
  </h1>
</header>

<main>
  <slot />
</main>

<footer>Copyright © {new Date().getFullYear()} Jesse Skinner</footer>
