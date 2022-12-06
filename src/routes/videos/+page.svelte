<script>
	import Template from '../_Template.svelte';
	import Article from '../_components/Article.svelte';

	export let data;

	$: videos = data.videos || [];

	function formatDate(timestamp) {
		const date = new Date(timestamp);
		const month = date.getMonth() + 1;
		const day = date.getDate();

		return `${date.getFullYear()}/${month < 10 ? `0${month}` : month}/${
			day < 10 ? `0${day}` : day
		}`;
	}
</script>

<Template>
	<Article title="All Videos" style="max-width: 100%">
		<p>
			Here are my {videos.length} YouTube videos, from today back until December 15th, 2014.
		</p>

		{#each videos as { url, title, thumbnail, date }}
			<p class="video">
				<a href={url} target="_blank" rel="noopener">
					<img src={thumbnail} alt={title} />
					<span>{formatDate(date)}: {title}</span>
				</a>
			</p>
		{/each}
	</Article>
</Template>

<style>
	.video {
		width: 320px;
		display: inline-block;
		margin: 0 1em 1em 0;
		vertical-align: top;
	}
	img {
		width: 320px;
		height: 180px;
		display: block;
	}
</style>
