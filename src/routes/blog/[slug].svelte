<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch(`/blog/${page.params.slug}.json`);
    const post = await res.json();

    return { post };
  }
</script>

<script>
  import Template from "../_Template.svelte";
  import Post from "../_components/Post.svelte";
  import { formatDate } from "../_date.js";

  export let post;
</script>

<style>
  .comments {
    padding: 2em 3em;
    margin-bottom: 3em;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .comment {
    position: relative;
    min-height: 130px;
    margin-bottom: 1em;
  }

  h2 {
    margin: 0;
    font-size: 100%;
  }

  p {
    margin: 5px 0 0 25px;
  }

  img {
    float: left;
    width: 80px;
    height: 80px;
    margin: 10px 15px 5px 25px;
  }

  @media (min-width: 700px) {
    .comments {
      margin-right: 90px;
    }
  }
</style>

<svelte:head>
  <title>{post.title} - Coding with Jesse</title>

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:creator" content="@JesseSkinner" />
  <meta property="og:title" content="{post.title} - Coding with Jesse" />
  <meta
    property="og:url"
    content="https://www.codingwithjesse.com/blog/{post.slug}" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://www.codingwithjesse.com/images/background.gif" />
</svelte:head>

<Template>
  <Post {post} link={false} />

  {#if post.comments.length}
    <section class="comments">
      <h1>Comments</h1>
      {#each post.comments as { title, author, avatar, date, body }, i}
        <div id="comment{i + 1}" class="comment">
          <h2>
            <a href="/blog/{post.slug}/#comment{i + 1}">{i + 1}</a>
            . {author} on {formatDate(date)}
          </h2>
          <img src={avatar} alt={author} />
          <p>
            {@html body}
          </p>
        </div>
      {/each}

      <div>
        Comments are closed, but I'd still love to
        <a href="/contact/me">hear your thoughts.</a>
      </div>
    </section>
  {/if}

</Template>
