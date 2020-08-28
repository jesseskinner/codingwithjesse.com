<script>
	import NewsletterSubscribe from '../_components/NewsletterSubscribe.svelte';
</script>

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

	@media (min-width: 1100px) {
		p {
			font-size: 16px;
		}
	}
</style>

<section>
	<a href="/blog/about-me">
		<img src="/images/me_umbrella.jpg" alt="Jesse Skinner" />
	</a>
	<h1>
		Hi, I'm
		<a href="/blog/about-me">Jesse Skinner.</a>
	</h1>
	<p>
		I'm a freelance web developer. I love writing code, especially Svelte,
		JavaScript, HTML and CSS. I also love writing about writing code, and
		teaching people how to write code.
	</p>
	<div class="newsletter">
		<p>Like web dev? Subscribe to my newsletter!</p>
		<NewsletterSubscribe />
	</div>
	<p>
		<strong>Email:</strong>
		<a
			href="mailto:jesse@codingwithjesse.com"
			target="_blank"
			rel="noopener">
			jesse@codingwithjesse.com
		</a>
		<br />
		<strong>Twitter:</strong>
		<a
			href="https://twitter.com/jesseskinner"
			target="_blank"
			rel="noopener">
			twitter.com/JesseSkinner
		</a>
		<br />
		<strong>YouTube:</strong>
		<a
			href="https://www.youtube.com/codingwithjesse"
			target="_blank"
			rel="noopener">
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
			rel="noopener">
			github.com/JesseSkinner
		</a>
		<br />
		<strong>LinkedIn:</strong>
		<a
			href="https://www.linkedin.com/in/jesseskinner/"
			target="_blank"
			rel="noopener">
			linkedin.com/in/jesseskinner
		</a>
		<br />
	</p>
</section>
