<script>
	import Template from '../../_Template.svelte';
	import Article from '../../_components/Article.svelte';
</script>

<svelte:head>
	<title>Contact Jesse Skinner - Coding with Jesse</title>
</svelte:head>

<Template>
	<Article title="Contact Jesse" style="padding: 0; margin: 0; border-bottom: 0">
		<p>
			I work with development teams to speed up and stabilize web applications, reduce server costs,
			fix difficult bugs, modernize legacy applications, and improve developer productivity.
		</p>

		<p>
			Whether you're struggling with an existing system or planning a new one, I'd love to hear from
			you and see how I can help.
		</p>

		<p style:font-size="150%">
			<a href="mailto:jesse@codingwithjesse.com" target="_blank" rel="noreferrer me">
				jesse@codingwithjesse.com
			</a>
		</p>
	</Article>

	<Article title="About Jesse">
		<p>
			<img src="/images/me_umbrella.jpg" alt="Jesse Skinner" class="me" /> My name is Jesse Skinner.
			I'm a web developer, author, speaker, husband and father. I'm a Canadian from Barrie, Ontario,
			near Toronto.
		</p>
		<p>
			I started working as web developer in 2001, and graduated in 2004 with a Computer Science
			degree from the University of Waterloo. I've worked as an independent web developer and
			consultant since 2006, helping clients plan, develop, launch and grow a wide variety of web
			applications.
		</p>
		<p>
			I love to help people learn web development, and I enjoy sharing my learning and development
			process. I stream occasionally on <a href="https://twitch.tv/jesseskinner">Twitch</a>. I also
			record coding videos for
			<a href="https://www.youtube.com/channel/UC6Ak0hMzttpQYAxzTe8kx7A">YouTube</a>.
		</p>
		<p>
			I write both on <a href="https://www.codingwithjesse.com/">Coding with Jesse</a> and in my
			<a href="/newsletter">newsletter</a>. I wrote a book for O'Reilly called
			<a href="https://www.codingwithjesse.com/blog/free-book-unobtrusive-ajax">Unobtrusive Ajax</a
			>. I've also given a number of talks, and sometimes I teach at Georgian College.
		</p>
	</Article>
</Template>

<style>
	.me {
		float: left;
		width: 140px;
		max-width: 90%;
		margin: 0 1em 0 0;
	}
	strong {
		display: inline-block;
		width: 6em;
	}
</style>
