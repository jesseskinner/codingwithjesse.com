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

  nav {
    background: #acf;
    line-height: 2em;
    padding: 0 0 10px 0;
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
    background: rgba(0, 0, 0, 0.2);
  }

  nav form {
    margin: 0 auto;
  }
  nav input {
    font-size: 100%;
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

 @media (min-width: 700px) {
   nav {
     text-align: left;
     padding-bottom: 0;
   }
   nav form {
    float: right;
    margin-right: 1em;
  }
 }
</style>

<header>
  <nav>
    <a href="/">Home</a>
    <a href="/contact/me">Contact me</a>
    <form method="GET" action="/blog/search">
      <input type="search" name="terms" size="15" />
      <input type="submit" value="Search" />
    </form>
  </nav>
  <h1>
    <a href="/">
      <img src="/images/title.svg" alt="Coding with Jesse" />
    </a>
  </h1>
</header>

<main>
  <slot />
</main>

<footer>
  Copyright © {new Date().getFullYear()}
  <a href="/contact/me">Jesse Skinner</a>
</footer>
