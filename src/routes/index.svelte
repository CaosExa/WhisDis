<script context="module">
	import { offerList } from '../stores.js'
	export const prerender = true;
	
</script>

<script>
	import Offer from '$lib/Offer.svelte'
	export let data
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="w" />
</svelte:head>

<section>
	<h1>
		welcome	to WihDis
	</h1>


	<ul>
		{#each data as offer}
			<Offer {offer} />
		{/each}
	</ul>
 
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}
</style>
