<style>
  :global(html),
  :global(body) {
    border: 0;
    margin: 0;
    padding: 0;
    font: 16px/1.58 Georgia, serif;
  }

  header {
    background: #acf url("/images/background.gif") repeat;
  }

  nav {
    background: #fff;
    line-height: 3em;
    overflow: auto;
    text-align: center;
  }

  nav a {
    display: inline-block;
    color: #000;
    padding: 0 1em;
    text-decoration: none;
  }

  nav a:hover {
    text-decoration: underline;
  }

  nav form {
    margin: 0 auto;
  }
  nav input {
    font-size: 100%;
  }

  header h1 {
    margin: 0;
    text-align: center;
  }

  h1 img {
    width: 90%;
    max-width: 1200px;
    filter: drop-shadow(2px 2px 2px #222);
  }

  :global(iframe),
  :global(img) {
    max-width: 100%;
  }

  @media (min-width: 700px) {
    :global(body) {
      font-size: 21px;
    }

    nav {
      text-align: left;
      padding-bottom: 0;
    }
    nav form {
      float: right;
      margin-right: 1em;
    }
  }

  main {
    max-width: 1000px;
    margin: 0 1em;
  }

  footer {
    float: right;
    text-align: right;
    margin-right: 5%;
    padding: 0 0.5em;
    color: #666;
  }

  @media (min-width: 1000px) {
    main {
      width: 80vw;
      max-width: 1000px;
      margin: 0 0 0 15vw;
    }
  }
</style>

<header>
  <h1>
    <a href="/">
      <img src="/images/title.svg" alt="Coding with Jesse" />
    </a>
  </h1>
  <nav>
    <a href="/">Home</a>
    <a href="/blog/about-me">About Jesse</a>
    <a href="/contact/me">Contact Jesse</a>
    <form method="GET" action="/blog/search">
      <input type="search" name="terms" size="15" aria-label="Search" />
      <input type="submit" value="Search" />
    </form>
  </nav>
</header>

<main>
  <slot />
</main>

<footer>
  Copyright © {new Date().getFullYear()}
  <a href="/contact/me">Jesse Skinner</a>
</footer>
