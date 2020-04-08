<script context="module">
  export async function preload(page) {
    const videos = [
      {
        id: "introduction",
        title: "Introduction",
        src: "/example.mp4?1",
        bookmarks: [
          { time: 60, title: "The funny part" },
          { time: 120, title: "The serious part" }
        ]
      },
      {
        id: "second",
        title: "Second Video",
        src: "/example.mp4?2",
        bookmarks: [
          { time: 0, title: "What's going on?" },
          { time: 300, title: "Spoiler" }
        ]
      }
    ];

    return {
      video: videos.find(({ id }) => id === page.params.video),
      videos
    };
  }
</script>

<script>
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";
  import Template from "../_Template.svelte";

  export let videos;
  export let video;

  let videoElement;

  onMount(onHashChange);

  function onHashChange() {
    const parts = /^#?([\d.]+)$/.exec(location.hash);

    if (parts && parts[1] !== undefined) {
      videoElement.currentTime = parseInt(parts[1]);
    }
  }

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  }
</script>

<style>
  nav {
    clear: both;
    margin-top: 1px;
    margin-bottom: 1em;
  }
  ol,
  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  video {
    width: 100%;
  }
  ul > li > a {
    display: block;
    padding: 0 1em;
    line-height: 2;
    background: beige;
    border: 1px solid #000;
    color: blue;
    margin-top: -1px;
  }
  ol {
    margin: 1em 0 1em 3em;
  }
  ol a {
    display: block;
    line-height: 2;
    text-decoration: none;
    color: #000;
  }
  ol a:hover {
    background: yellow;
  }
  .time {
    display: inline-block;
    width: 3em;
  }

  @media (min-width: 800px) {
    nav {
      width: 25%;
      float: left;
      font-size: 80%;
      padding-right: 1em;
      box-sizing: border-box;
    }
    section {
      width: 75%;
      float: left;
    }
  }
</style>

<svelte:window on:hashchange={onHashChange} />

<Template>
  <nav>
    <ul>
      {#each videos as { id, title, bookmarks }}
        <li>
          <a href="/videos/{id}">{title}</a>
          {#if bookmarks.length && id === video.id}
            <ol transition:slide>
              {#each bookmarks as { time, title }}
                <li>
                  <a href="/videos/{id}#{time}">
                    <span class="time">{formatTime(time)}s</span>
                    {title}
                  </a>
                </li>
              {/each}
            </ol>
          {/if}
        </li>
      {/each}
    </ul>
  </nav>
  <section>
    <video bind:this={videoElement} src={video.src} controls />
    <h1>{video.title}</h1>
    <p>Some content of some kind</p>
  </section>
</Template>
