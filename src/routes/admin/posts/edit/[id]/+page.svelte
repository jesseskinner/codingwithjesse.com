<script>
	import PostForm from '../../_PostForm.svelte';
	import Template from '../../../_AdminTemplate.svelte';

	export let data;

	$: post = data.post;
</script>

<Template>
	<a href="/admin/">Back</a>

	<h1>Edit Post #{post.id}</h1>

	<form method="post" action="/admin/api/posts.json">
		<input type="hidden" name="id" value={post.id} />
		<PostForm {post} />

		<button type="submit" class="btn btn-default">Save Post</button>
		<button name="submit" value="delete" type="submit" class="btn btn-danger"> Delete Post </button>
	</form>
</Template>
