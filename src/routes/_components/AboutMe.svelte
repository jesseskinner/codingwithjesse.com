<script>
	import NewsletterSubscribe from '../_components/NewsletterSubscribe.svelte';
</script>

<section>
	<aside>
		<a href="https://www.joyofsvelte.com/">
			Check out my new video course,<br />
			<span>The Joy of Svelte</span>!</a
		>
	</aside>

	<a href="/blog/about-me">
		<img src="/images/me_umbrella.jpg" alt="Jesse Skinner" />
	</a>
	<h1>Hi, I'm <a href="/blog/about-me">Jesse Skinner.</a></h1>
	<p>
		I'm a freelance web developer, author, college professor, youtuber,
		twitch streamer, husband and father. I've been making web sites for over
		25 years. I love coding, especially JavaScript, CSS, HTML and Svelte!
	</p>
	<div class="newsletter">
		<p>Want to stay in touch?<br /> Subscribe to my newsletter!</p>
		<NewsletterSubscribe />
	</div>
	<p>
		<strong>Email:</strong>
		<a
			href="mailto:jesse@codingwithjesse.com"
			target="_blank"
			rel="noopener"
		>
			jesse@codingwithjesse.com
		</a>
		<br />
		<strong>Twitter:</strong>
		<a
			href="https://twitter.com/jesseskinner"
			target="_blank"
			rel="noopener"
		>
			twitter.com/JesseSkinner
		</a>
		<br />
		<strong>YouTube:</strong>
		<a
			href="https://www.youtube.com/codingwithjesse"
			target="_blank"
			rel="noopener"
		>
			youtube.com/codingwithjesse
		</a>
		<br />
		<strong>Twitch:</strong>
		<a href="https://twitch.tv/jesseskinner" target="_blank" rel="noopener">
			twitch.tv/JesseSkinner
		</a>
		<br />
		<strong>DEV:</strong>
		<a href="https://dev.to/jesseskinner/" target="_blank" rel="noopener">
			dev.to/jesseskinner
		</a>
		<br />
		<strong>GitHub:</strong>
		<a
			href="https://github.com/jesseskinner"
			target="_blank"
			rel="noopener"
		>
			github.com/JesseSkinner
		</a>
		<br />
		<strong>LinkedIn:</strong>
		<a
			href="https://www.linkedin.com/in/jesseskinner/"
			target="_blank"
			rel="noopener"
		>
			linkedin.com/in/jesseskinner
		</a>
		<br />
	</p>
</section>

<style>
	section {
		font-size: 15px;
		line-height: 1.66;
	}

	img {
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
		line-height: 48px;
	}

	p strong {
		display: inline-block;
		min-width: 5em;
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
		display: block;
		font-size: 18px;
		padding: 0.5em;
		background: white;
		box-shadow: 5px 5px rgba(0, 0, 0, 0.5);
		border: 1px solid #666;
		margin-bottom: 2em;
		text-align: center;
	}

	aside span {
		color: blue;
		text-decoration: underline;
	}

	@media (min-width: 1100px) {
		p {
			font-size: 18px;
		}
	}
</style>
