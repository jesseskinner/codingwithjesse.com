<script>
	import NewsletterSubscribe from '../_components/NewsletterSubscribe.svelte';
</script>

<section>
	<a href="/contact/me">
		<img src="/images/me_umbrella.jpg" alt="Jesse Skinner" class="me" />
	</a>
	<h1>Hi, I'm <a href="/contact/me/" class="about-me">Jesse Skinner.</a></h1>
	<p>I'm a technical strategist. I help entrepreneurs avoid slow, unstable web apps.</p>
	<p>
		Whether you're struggling with an existing system or planning a new one, feel free to
		<a href="/contact/me/">get in touch</a>. I'd love to hear from you and see how I can help
		improve your business.
	</p>

	<div class="newsletter">
		<p>Subscribe to my newsletter for updates:</p>
		<NewsletterSubscribe />
	</div>
	<div class="social">
		<p>
			<strong>Email</strong>
			<a href="mailto:jesse@codingwithjesse.com" target="_blank" rel="noreferrer me">
				jesse@codingwithjesse.com
			</a>
			<br />
			<strong>YouTube</strong>
			<a href="https://www.youtube.com/codingwithjesse" target="_blank" rel="noreferrer me">
				youtube.com/codingwithjesse
			</a>
			<br />
			<strong>LinkedIn</strong>
			<a href="https://www.linkedin.com/in/jesseskinner/" target="_blank" rel="noreferrer me">
				linkedin.com/in/jesseskinner
			</a>
			<br />
			<!-- <strong>Twitter</strong>
			<a href="https://twitter.com/jesseskinner" target="_blank" rel="noreferrer me">
				twitter.com/JesseSkinner
			</a>
			<br /> -->
			<strong>GitHub</strong>
			<a href="https://github.com/jesseskinner" target="_blank" rel="noreferrer me">
				github.com/JesseSkinner
			</a>
			<br />
			<strong>Mastodon</strong>
			<a href="https://toot.cafe/@JesseSkinner" target="_blank" rel="noreferrer me"
				>toot.cafe/@JesseSkinner</a
			><br />
			<strong>Twitch</strong>
			<a href="https://twitch.tv/jesseskinner" target="_blank" rel="noreferrer me">
				twitch.tv/JesseSkinner
			</a>
			<br />
			<!-- <strong>Discord</strong>
			<a href="https://discord.gg/3ZBDHb2" target="_blank" rel="noreferrer me"> discord.gg/3ZBDHb2 </a>
			<br /> -->
			<strong>DEV</strong>
			<a href="https://dev.to/jesseskinner/" target="_blank" rel="noreferrer me">
				dev.to/jesseskinner
			</a>
			<br />
		</p>
	</div>
</section>

<svelte:head
	><link
		href="https://fonts.googleapis.com/css?family=Lobster"
		rel="noreferrer stylesheet"
	/></svelte:head
>

<style>
	section {
		font-size: 15px;
		line-height: 1.66;
		text-align: left;
	}

	img.me {
		width: 100%;
		max-width: 500px;
		border: 1px solid black;
	}

	h1 {
		font-size: 27px;
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
		border-top: 1px solid rgba(128, 128, 128, 0.4);
		border-bottom: 1px solid rgba(128, 128, 128, 0.4);
		padding: 2em 0;
		text-align: center;
	}

	.newsletter p {
		margin: 0 0 0.5em;
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
