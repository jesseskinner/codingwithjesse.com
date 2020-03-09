<style>
  :global(html),
  :global(body) {
    border: 0;
    margin: 0;
    padding: 0;
    font: 16px/1.58 Verdana, Geneva, Tahoma, sans-serif;
    background: #e0edff;
    background: linear-gradient(#e0edff, #fff 80vh);
    /* background: #fff linear-gradient(#acf, #fff 75vh); */
    color: #000;
  }

  :global(a) {
    color: blue;
  }

  :global(h1 a) {
    color: black;
  }

  :global(a:visited) {
    color: purple;
  }

  header {
    background: #acf url("/images/background.gif") repeat;
  }

  nav {
    line-height: 3em;
    overflow: auto;
    text-align: center;
  }

  nav a {
    color: #000;
    display: inline-block;
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

  main {
    max-width: 1000px;
    margin: 0 1em;
  }

  footer {
    float: right;
    text-align: right;
    margin-right: 5%;
    padding: 0 0.5em;
  }

  footer,
  footer a {
    color: #666;
  }

  @media (min-width: 700px) {
    :global(body) {
      font-size: 21px;
    }

    nav {
      text-align: left;
      padding-bottom: 0;
    }

    nav a {
      display: inline-block;
    }

    nav form {
      float: right;
      margin-right: 1em;
    }

    main {
      width: 90vw;
      max-width: 1000px;
      margin: 0 0 0 5vw;
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

<nav>
  <a href="/">Home</a>
  <a href="/blog/about-me">About Jesse</a>
  <a href="/contact/me">Contact Jesse</a>
  <form method="GET" action="/blog/search">
    <input type="search" name="terms" size="15" aria-label="Search" />
    <input type="submit" value="Search" />
  </form>
</nav>

<main>
  <slot />
</main>

<footer>
  Copyright © {new Date().getFullYear()}
  <a href="/contact/me">Jesse Skinner</a>
</footer>
