<script>
	import { formatDate } from '../_date.js';

	export let comments;
    export let url;
</script>

<section class="comments">
	<h1>Comments</h1>
	{#each comments as { title, author, avatar, date, body }, i}
		<div id="comment{i + 1}" class="comment">
			<h2>
				<a href="{url}#comment{i + 1}">{i + 1}</a>
				. {author} on {formatDate(date)}
			</h2>
			<img src={avatar} alt={author} />
			<p>
				{@html body}
			</p>
		</div>
	{/each}

	<div>
		Comments are closed, but I'd still love to
		<a href="/contact/me">hear your thoughts.</a>
	</div>
</section>

<style>
	.comments {
		padding: 2em 3em;
		margin-bottom: 3em;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}

	.comment {
		position: relative;
		min-height: 130px;
		margin-bottom: 1em;
		max-width: 100%;
		overflow: auto;
	}

	h2 {
		margin: 0;
		font-size: 100%;
	}

	p {
		margin: 5px 0 0 25px;
	}

	img {
		float: left;
		width: 80px;
		height: 80px;
		margin: 10px 15px 5px 25px;
	}

	@media (min-width: 700px) {
		.comments {
			margin-right: 90px;
		}
	}
</style>
