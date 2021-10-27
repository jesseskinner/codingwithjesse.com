<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/admin/api/posts.json');
		const posts = await res.json();

		return {
			props: { posts }
		};
	}
</script>

<script>
	import Template from './_AdminTemplate.svelte';
	export let posts;
</script>

<Template>
	<h1>Posts</h1>

	<a href="/admin/posts/add">Add new post</a>

	<table class="table">
		<tr>
			<th scope="col">Title</th>
			<th scope="col">Date</th>
		</tr>
		{#each posts as { title, posted_at, id }}
			<tr>
				<td>{title}</td>
				<td>{posted_at}</td>
				<td>
					<a href="/admin/posts/edit/{id}">Edit</a>
				</td>
			</tr>
		{/each}
	</table>

	<a href="/admin/posts/add">Add new post</a>
</Template>
