<script>
	import Template from '../../_Template.svelte';

	$: href = typeof location === 'object' && location.href;
</script>

<Template>
	<form method="POST" action="http://localhost:4000/login">
		{#if href}
			<input type="hidden" name="redirect" value={href} />
		{/if}
		<p>
			<label>
				Email
				<input type="email" name="email" />
			</label>
		</p>
		<p>
			<label>
				Password
				<input type="password" name="password" />
			</label>
		</p>
		<p><input type="submit" value="Login" /></p>
	</form>
</Template>

<style>
	input {
		display: block;
		font-size: 100%;
	}
</style>
