<script>
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

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
