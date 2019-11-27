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

  export let post;
</script>

<style>
.comments {
    background: white;
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
  margin:0;
  font-size: 100%;
}
p {
  margin: 0 0 0 120px;
}

img {
  position: absolute;
  width: 80px;
  height: 80px;
  margin: 10px 0 0 25px;
}

@media (min-width: 700px) {
    .comments {
      margin-right: 90px;
    }
}
</style>

<Template>
  <Post {post} link={false} />
  
  {#if post.comments.length}
    <section class="comments">
      <h1>Comments</h1>
      {#each post.comments as {title, author, avatar, date, body}, i}
        <div id="comment{i + 1}" class="comment">
          <h2><a href="/blog/{post.slug}#comment{i + 1}">{i + 1}</a>. {author} at {date}</h2>
          <img src={avatar} alt={author}>
          <p>{@html body}</p>
        </div>
      {/each}
    </section>
  {/if}
  
</Template>
