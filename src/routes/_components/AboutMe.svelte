<script>
	import NewsletterSubscribe from '../_components/NewsletterSubscribe.svelte';
</script>

<section>
	<aside>
		<a href="https://www.joyofsvelte.com/">
			<img
				src="https://www.joyofsvelte.com/svelte-logo.svg"
				width="107"
				height="128"
				alt="Svelte"
			/>
			<span>
				Want to learn Svelte?<br />
				Check out my video course!<br />
				<u>The Joy of Svelte</u>
			</span></a
		>
	</aside>

	<a href="/blog/about-me">
		<img src="/images/me_umbrella.jpg" alt="Jesse Skinner" class="me" />
	</a>
	<h1>Hi, I'm <a href="/blog/about-me">Jesse Skinner.</a></h1>
	<p>
		I'm a web consultant, developer, author, college professor, youtuber, twitch streamer, husband
		and father. I've been making web sites for {new Date().getFullYear() - 1995} years. I love coding,
		especially JavaScript, CSS, HTML and Svelte!
	</p>
	<div class="newsletter">
		<p>Want to stay in the loop?<br /> Subscribe to my newsletter!</p>
		<NewsletterSubscribe />
	</div>
	<div class="social">
		<p>
			<strong>Email</strong>
			<a href="mailto:jesse@codingwithjesse.com" target="_blank" rel="me">
				jesse@codingwithjesse.com
			</a>
			<br />
			<strong>YouTube</strong>
			<a href="https://www.youtube.com/codingwithjesse" target="_blank" rel="me">
				youtube.com/codingwithjesse
			</a>
			<br />
			<strong>LinkedIn</strong>
			<a href="https://www.linkedin.com/in/jesseskinner/" target="_blank" rel="me">
				linkedin.com/in/jesseskinner
			</a>
			<br />
			<!-- <strong>Twitter</strong>
			<a href="https://twitter.com/jesseskinner" target="_blank" rel="me">
				twitter.com/JesseSkinner
			</a>
			<br /> -->
			<strong>GitHub</strong>
			<a href="https://github.com/jesseskinner" target="_blank" rel="me">
				github.com/JesseSkinner
			</a>
			<br />
			<strong>Mastodon</strong>
			<a href="https://toot.cafe/@JesseSkinner" target="_blank" rel="me">toot.cafe/@JesseSkinner</a
			><br />
			<strong>Twitch</strong>
			<a href="https://twitch.tv/jesseskinner" target="_blank" rel="me"> twitch.tv/JesseSkinner </a>
			<br />
			<!-- <strong>Discord</strong>
			<a href="https://discord.gg/3ZBDHb2" target="_blank" rel="me"> discord.gg/3ZBDHb2 </a>
			<br /> -->
			<strong>DEV</strong>
			<a href="https://dev.to/jesseskinner/" target="_blank" rel="me"> dev.to/jesseskinner </a>
			<br />
		</p>
	</div>
</section>

<svelte:head
	><link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" /></svelte:head
>

<style>
	section {
		font-size: 15px;
		line-height: 1.66;
	}

	img.me,
	aside a {
		width: 100%;
		max-width: 500px;
		border: 1px solid black;
	}

	h1 {
		font-size: 27px;
	}

	h1 a {
		color: black;
	}

	p a {
		display: inline-block;
		line-height: 36px;
	}

	p strong {
		display: inline-block;
		min-width: 6em;
	}

	.newsletter {
		margin: 2em 0;
		border-top: 1px solid #aaa;
		border-bottom: 1px solid #aaa;
		padding: 2em 0;
		text-align: center;
	}

	.newsletter p {
		margin: 0 0 0.5em;
	}

	aside a {
		text-decoration: none;
		color: black;
		display: flex;
		font-size: 1.1em;
		padding: 0.5em;
		background: white;
		box-shadow: 5px 5px rgba(0, 0, 0, 0.5);
		border: 1px solid #666;
		margin-bottom: 2em;
		text-align: center;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
	}

	aside img {
		flex: auto;
		max-height: 5em;
		margin: 0;
		vertical-align: top;
	}

	aside span {
		flex: auto;
		white-space: nowrap;
		font-weight: bold;
	}

	aside u {
		font-size: 200%;
		font-family: Lobster;
		text-decoration: none;
		color: #ff3e00;
		font-weight: normal;
	}

	.social {
		text-align: center;
	}

	.social p {
		display: inline-block;
		text-align: left;
		font-size: 17px;
		white-space: nowrap;
	}
	@media (min-width: 1100px) {
		p {
			font-size: 17px;
		}
	}
</style>
