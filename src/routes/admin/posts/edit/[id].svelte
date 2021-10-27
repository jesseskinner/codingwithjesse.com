<script context="module">
	export async function load({ page, fetch }) {
		const res = await fetch('/admin/api/posts.json');
		const posts = await res.json();
		const id = +page.params.id;
		const post = posts.find((post) => post.id === id);

		return {
			props: { post }
		};
	}
</script>

<script>
	import PostForm from '../_PostForm.svelte';
	import Template from '../../_AdminTemplate.svelte';

	export let post;
</script>

<Template>
	<a href="/admin/">Back</a>

	<h1>Edit Post #{post.id}</h1>

	<form method="post" action="/admin/api/posts.json">
		<input type="hidden" name="id" value={post.id}/>
		<PostForm {post} />

		<button type="submit" class="btn btn-default">Save Post</button>
		<button name="submit" value="delete" type="submit" class="btn btn-danger"> Delete Post </button>
	</form>
</Template>
