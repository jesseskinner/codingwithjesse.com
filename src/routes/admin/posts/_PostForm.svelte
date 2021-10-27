<script>
	export let post = {
		title: '',
		markdown: '',
		html: '',
		tags: '',
		category: 0,
	};

	const categoriesFetch = getCategories();

	let slug = post.slug || '';

	function setSlug(text) {
		slug = text
			.trim()
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-');
	}

	async function getCategories() {
		if (typeof fetch !== 'undefined') {
			const res = await fetch('/admin/api/categories.json');
			return res.json();
		}
	}
</script>

<fieldset class="form-group">
	<label htmlFor="title">Title</label>
	<input
		name="title"
		class="form-control"
		value={post.title}
		on:input={(event) => setSlug(event.target.value)} />
</fieldset>
<fieldset class="form-group">
	<label htmlFor="slug">Slug</label>
	<input
		name="slug"
		class="form-control"
		value={slug}
		on:input={(event) => setSlug(event.target.value)} />
</fieldset>
<fieldset class="form-group">
	<label htmlFor="markdown">Body</label>
	<textarea
		name="markdown"
		class="form-control"
		rows="10"
		value={post.markdown} />
</fieldset>
<fieldset class="form-group">
	<label htmlFor="markdown">HTML</label>
	<textarea
		name="html"
		class="form-control"
		rows="10"
		value={post.markdown ? '' : post.html} />
</fieldset>
<fieldset>
	<label for="category">Category:</label>
	{#await categoriesFetch}
		...
	{:then categories}
		<select name="category">
			<option>Select a category...</option>
			{#each categories as c}
				<option value={c.id} selected={c.category === post.category}>
					{c.category}
				</option>
			{/each}
		</select>
	{:catch e}
		Error: {e.message}
	{/await}
</fieldset>
<fieldset class="form-group">
	<label for="tags">Tags</label>
	<input name="tags" class="form-control" value={post.tags || ''} />
</fieldset>
