<header>
	<h1>
		<a href="/">
			<img src="/images/title.svg" alt="Coding with Jesse" />
		</a>
	</h1>
</header>

<form method="GET" action="/blog/search">
	<input type="search" name="terms" size="15" aria-label="Search" />
	<input type="submit" value="Search" />
</form>

<main>
	<slot />
</main>

<footer>
	Copyright © {new Date().getFullYear()}
	<a href="/contact/me">Jesse Skinner</a>
</footer>

<style>
	:global(html),
	:global(body) {
		border: 0;
		margin: 0;
		padding: 0;
		font: 16px/1.58 Verdana, Geneva, Tahoma, sans-serif;
		background: #e0edff;
		background: linear-gradient(#e0edff, #fff 80vh);
		/* background: #fff linear-gradient(#acf, #fff 75vh); */
		color: #000;
	}

	:global(a) {
		color: blue;
	}

	:global(h1),
	:global(h2),
	:global(h3),
	:global(h4),
	:global(h5),
	:global(h6) {
		margin: 0;
	}

	:global(h1 a) {
		color: black;
	}

	:global(a:visited) {
		color: purple;
	}

	header {
		background: #acf url('/images/background.gif') repeat;
	}

	form {
		float: right;
		margin: 1em;
	}

	form input {
		font-size: 100%;
	}

	header h1 {
		margin: 0;
		text-align: center;
	}

	h1 img {
		width: 90%;
		max-width: 1200px;
		filter: drop-shadow(2px 2px 2px #222);
	}

	:global(iframe),
	:global(img) {
		max-width: 100%;
	}

	main {
		clear: both;
		padding: 1em;
		min-height: 1000px; /* give space for profile on side */
	}

	footer {
		clear: both;
		float: right;
		text-align: right;
		margin-right: 5%;
		padding: 0 0.5em;
	}

	footer,
	footer a {
		color: #666;
	}

	@media (min-width: 700px) {
		:global(body) {
			font-size: 21px;
		}

		form {
			margin-right: 5vw;
		}

		main {
			width: 90vw;
			margin: 0 0 0 5vw;
			padding: 1em 0;
		}
	}

	@media (min-width: 1300px) {
		main {
			clear: none;
		}
	}
</style>
