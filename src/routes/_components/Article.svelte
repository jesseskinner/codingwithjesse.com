<script>
	import { formatDate } from '../_date.js';

	export let title = '';
	export let date = false;
	export let link = false;
</script>

<style>
	article {
		max-width: 800px;
		position: relative;
		padding-bottom: 2.5em;
		margin-bottom: 2.5em;
		border-bottom: 1px solid #eee;
	}

	article:last-child {
		border-bottom: 0;
		margin-bottom: 0;
	}

	h1 {
		min-width: 70vw;
		margin: 0 0 0.25em;
		font-size: 32px;
	}

	.date {
		font-weight: bold;
		margin: 0 0 2em;
	}

	article :global(pre) {
		padding: 2em 5vw;
		box-sizing: border-box;
		overflow: auto;
		background: #29292e;
		color: #ffffff;
	}

	article :global(pre) {
		margin: 0 -2.5vw 0 -5vw;
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

	@media (min-width: 1000px) {
		article :global(pre) {
			padding: 2em 15vw;
		}
		article :global(pre) {
			margin: 0 0 0 -15vw;
		}
	}

	@media (min-width: 1500px) {
		article :global(pre) {
			margin: 0 -10vw 0 -15vw;
		}
	}
</style>

<article>
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
