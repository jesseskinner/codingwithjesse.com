<style>
  :global(body) {
    background: #fff;
    font: 21px/1.58 Georgia, serif;
  }

  :global(html),
  :global(body) {
    border: 0;
    margin: 0;
    padding: 0;
  }

  main {
    max-width: 800px;
    margin: 0 auto;
  }

  h1 {
    background: #acf url("/images/background.png");
    background-size: contain;
    margin: 0;
  }

  footer {
    text-align: right;
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
      <img src="/images/title.svg" alt="Coding with Jesse" width="100%" />
    </a>
  </h1>
</header>

<main>
  <slot />
</main>

<footer>Copyright © {new Date().getFullYear()} Jesse Skinner</footer>
