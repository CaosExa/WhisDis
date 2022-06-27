<script>
	import { offerList } from '../stores.js'
	import Offer from '$lib/Offer.svelte'
	export let data
	offerList.set(data)
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="w" />
</svelte:head>

<section>
	<h1><a rel="external" target="blank" href="https://drankdozijn.de">Drankdozijn</a> Angebote</h1>

	<ul>
		<li>Es gibt <strong>{$offerList.filter( offer => offer.productGroup.alias === 'whisky').length} Whisky </strong>Angebote</li>
		<li>Es gibt <strong>{$offerList.filter( offer => offer.productGroup.alias === 'rum').length} Rum </strong>Angebote</li>
		<li>Es gibt <strong>{$offerList.filter( offer => offer.productGroup.alias === 'port-sherry').length} Porto & Sherry </strong>Angebote</li>
		<li>Es gibt <strong>{$offerList.filter( offer => offer.productGroup.alias === 'bier').length} Bier </strong>Angebote</li>
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
	li::marker{
		color: var(--accent-color)
	}
	li{
		padding: 0.5em;
	}
</style>
