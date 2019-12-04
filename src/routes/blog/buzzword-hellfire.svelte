<script>
  /******************************************
     Buzzword Hell (c) 2006 Jesse Skinner
    
    http://www.thefutureoftheweb.com/blog/2006/2/buzzword-hellfire
    
    Of course, I don't mind if you see how I wrote this,
    but if you make a shitty rip-off version, I ask that
    you at least link back to my site. And if you want to
    make improvements, that's cool too. Just let me know
    so I can improve it here.
    
    Have fun, and play safe.
    ******************************************/

  import Template from "../_Template.svelte";
  import Article from "../_components/Article.svelte";
  import { onMount } from "svelte";

  const words = [
    "Web 2.0",
    "Tagging",
    "Mashup",
    "Blogosphere",
    "Folksonomy",
    "Social Software",
    "Conversation",
    "The Long Tail",
    "Radical Trust",
    "Less is More",
    "Meme",
    "Content Remixing",
    "Semantic Web",
    "Building to Flip",
    "Web as Platform",
    "Public Beta",
    "Social Web",
    "Rich User Experience",
    "AJAX",
    "Web 2.0"
  ];

  const MAX_W = 430;
  const MAX_H = 300;

  let anim;
  let xft = 0.4;
  let yft = 0.3;
  let lasttime = Date.now();
  let showMessage = true;
  let activeWord = false;
  let isExploding = false;
  let explosion;
  let piece;

  let x = 0;
  let y = 0;
  let miss = 0;
  let hit = 0;
  let wordCount = 0;
  let explosionTop;
  let explosionLeft = -1000;

  onMount(() => {
    showMessage = false;
    activeWord = words[wordCount++];

    startAnimation();

    return () => clearInterval(anim);
  });

  function startAnimation() {
    anim = setInterval(function() {
      const width = piece.offsetWidth;
      const height = piece.offsetHeight;
      const now = Date.now();
      const elapsed = now - lasttime;
      let xf = xft * elapsed;
      let yf = yft * elapsed;
      lasttime = now;
      if (x + width + xf > MAX_W || x + xf < 0) {
        xft *= -1;
        xf *= -1;
      } else {
        xft *= Math.random() < 0.01 ? -1 : 1;
      }
      if (y + height + yf > MAX_H || y + yf < 0) {
        yft *= -1;
        yf *= -1;
      } else {
        yft *= Math.random() < 0.05 ? -1 : 1;
      }

      x = Math.min(Math.max(0, x + xf), MAX_W - width);
      y = Math.min(Math.max(0, y + yf), MAX_H - height);
    }, 12);
  }

  function onPieceMouseDown() {
    isExploding = true;
    clearInterval(anim);

    const width = piece.offsetWidth;
    const height = piece.offsetHeight;

    explosionTop = piece.offsetTop + (height - 150) / 2;
    explosionLeft = piece.offsetLeft + (width - 200) / 2;

    --miss;
    ++hit;

    setTimeout(function() {
      if (wordCount == words.length) {
        if (confirm("You have saved the world! Play again?")) {
          activeWord = words[0];
          wordCount = 1;
          miss = 0;
          hit = 0;
        } else {
          return;
        }
      }
      explosionLeft = -1000;
      activeWord = words[wordCount++];
      isExploding = false;
      startAnimation();
    }, 200);
  }
</script>

<style>
  .board {
    user-select: none;
  }

  .board,
  .board * {
    font: bold 24px Georgia, Times New Roman, serif;
  }
  .board p {
    text-align: center;
  }
  .game {
    text-align: left;
    border: 5px solid black;
    width: 430px;
    height: 300px;
    background: #013;
    color: #000;
    -moz-user-select: none;
    cursor: crosshair;
    margin: 20px auto;
  }
  .piece {
    text-align: center;
    border: 5px solid #fff;
    background: #fff;
    position: relative;
    -moz-user-select: none;
    cursor: crosshair;
    left: -1000px;
  }
  .blown {
    position: relative;
    z-index: 2;
    text-align: center;
    -moz-user-select: none;
  }
  img {
    width: 200px;
    height: 150px;
    position: absolute;
    z-index: 1;
    left: -1000px;
    -moz-user-select: none;
  }
  .score {
    margin: 0 auto;
    width: 400px;
    padding: 0 40px;
  }
  .score label {
    margin: 0 20px;
    text-align: center;
    display: inline;
    line-height: 30px;
  }
  input {
    width: 50px;
    height: 30px;
    border: 5px solid black;
    text-align: center;
    display: inline;
  }
  .message {
    width: 500px;
    height: 300px;
    background: white;
    text-align: center;
  }
</style>

<Template>
  <Article title="Buzzword Hellfire">
    <div class="board">
      <p>
        Blow up the Web 2.0 buzzwords before they infect every blog, magazine
        and marketing department in the world!
      </p>
      <div class="game" on:mousedown={() => ++miss}>
        {#if showMessage}
          <div class="message">
            <br />
            <br />
            <br />
            <br />
            This game requires Web 2.0. Please
            <a href="http://www.mozilla.com/firefox/">upgrade your browser</a>
            .
          </div>
        {/if}
        <img
          bind:this={explosion}
          src="/images/explosion.gif"
          alt="boom"
          style="left:{explosionLeft}px; top:{explosionTop}px" />
        {#if activeWord}
          <span
            bind:this={piece}
            class={isExploding ? 'blown' : 'piece'}
            style="left:{x}px; top:{y}px"
            on:mousedown={onPieceMouseDown}>
            {activeWord}
          </span>
        {/if}
      </div>
      <div class="score">
        <label>
          misses:
          <input value={miss} />
        </label>
        <label>
          hits:
          <input value={hit} />
        </label>
      </div>
    </div>
    <p>
      <a href="https://www.codingwithjesse.com/blog/death-to-web20-buzzwords">
        What is this game?
      </a>
    </p>

  </Article>
</Template>
