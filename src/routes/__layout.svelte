<script>
	import Header from '$lib/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
