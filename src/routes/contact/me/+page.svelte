<script>
	import Template from '../../_Template.svelte';
	import Article from '../../_components/Article.svelte';
</script>

<svelte:head>
	<title>Contact Jesse Skinner - Coding with Jesse</title>
</svelte:head>

<Template>
	<Article title="Contact Jesse" style="padding-bottom: 0; margin-bottom: 0; border-bottom: 0">
		<p>I'm available for web development consulting and training.</p>
		<p>
			Feel free to get in touch if you would like my help with something, or have any questions or
			comments about the blog.
		</p>
		<p>
			<strong>Email</strong>
			<a href="mailto:jesse@codingwithjesse.com" target="_blank" rel="noreferrer me">
				jesse@codingwithjesse.com
			</a>
			<br />
			<strong>LinkedIn</strong>
			<a href="https://www.linkedin.com/in/jesseskinner/" target="_blank" rel="noreferrer me">
				linkedin.com/in/jesseskinner
			</a>
			<br />
			<strong>Mastodon</strong>
			<a href="https://toot.cafe/@JesseSkinner" target="_blank" rel="noreferrer me"
				>toot.cafe/@JesseSkinner</a
			>
		</p>
	</Article>

	<Article title="About Jesse">
		<p>
			<img src="/images/me_umbrella.jpg" alt="Jesse Skinner" class="me" /> My name is Jesse Skinner.
			I'm a web consultant, developer, author, speaker, husband and father. I'm a Canadian from Barrie,
			Ontario, near Toronto.
		</p>
		<p>
			I've been working as web developer since 2001, and graduated in 2004 with a Computer Science
			degree from the University of Waterloo. I've worked as an independent web developer since
			2006, helping a wide variety of clients build web applications with JavaScript, CSS and HTML.
			Previously I heavily used jQuery, then React, and lately I've been mostly using Svelte.
		</p>
		<p>
			I love to help people learn web development, and I enjoy sharing my learning and development
			process. I stream regularly on <a href="https://twitch.tv/jesseskinner">Twitch</a>. I also
			record coding videos for
			<a href="https://www.youtube.com/channel/UC6Ak0hMzttpQYAxzTe8kx7A">YouTube</a>.
		</p>
		<p>
			I write regularly here on <a href="https://www.codingwithjesse.com/">Coding with Jesse</a>. I
			wrote a book for O'Reilly called
			<a href="https://www.codingwithjesse.com/blog/free-book-unobtrusive-ajax">Unobtrusive Ajax</a
			>. I've also given a number of talks, and sometimes I teach at Georgian College.
		</p>
	</Article>
</Template>

<style>
	.me {
		float: right;
		width: 300px;
		max-width: 90%;
		margin: 0 1em 1em 1em;
	}
</style>
