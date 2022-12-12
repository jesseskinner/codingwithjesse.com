<script>
	import { formatDate } from '../_date.js';

	export let title = '';
	export let date = false;
	export let link = false;
	export let style = '';
</script>

<article {style}>
	<h1>
		{#if link}
			<a href={link}>{title}</a>
		{:else}{title}{/if}
	</h1>
	{#if date}
		<div class="date">{formatDate(date)}</div>
	{/if}
	<slot />
</article>

<style>
	article {
		max-width: 800px;
		position: relative;
		padding-bottom: 2.5em;
		margin-bottom: 2.5em;
		border-bottom: 1px solid rgba(128, 128, 128, 0.25);
	}

	article:last-of-type {
		border-bottom: 0;
		margin-bottom: 0;
	}

	h1 {
		min-width: 50vw;
		margin: 90px 0 0.3em;
		font-size: 48px;
		font-family: Times New Roman, serif;
		line-height: 1.1;
	}

	.date {
		font-weight: bold;
		margin: 0 0 2em;
		opacity: 0.7;
		font-family: Times New Roman, serif;
	}

	article :global(pre) {
		padding: 2em 5vw;
		box-sizing: border-box;
		overflow: auto;
		background: #29292e;
		color: #ffffff;
	}

	article :global(pre) {
		margin: 0 0 0 -5vw;
	}

	article :global(h2) {
		font-size: 150%;
		margin-top: 1em;
	}

	article :global(h3) {
		font-size: 120%;
	}

	article :global(h4),
	article :global(h5),
	article :global(h6) {
		font-size: 100%;
	}

	article :global(blockquote) {
		border-left: 5px solid #ccc;
		display: block;
		padding: 1px 0 1px 1em;
	}

	@media (min-width: 1000px) {
		article :global(pre) {
			padding: 2em 15vw;
			border-radius: 0.25em;
			margin: 0 0 0 -15vw;
		}

		h1 {
			font-size: 3vw;
		}
	}

	@media (min-width: 1500px) {
		article :global(pre) {
			margin: 0 -25vw 0 -15vw;
		}
	}
</style>
