<script>
	import { offerList } from '../stores.js'
	import Offer from '$lib/Offer.svelte'
	export let data
	offerList.set(data)
</script>

<svelte:head>
	<title>Whis-Dis</title>
	<meta name="description" content="Meta search site for Drankdozijn sales" />
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
<section>
  <h2>
	  Weitere Angebote:
	</h2>
		<a sveltekit:prefetch href="/vodka">Vodka</a>
		<a sveltekit:prefetch href="/gin">Gin</a>
		<a sveltekit:prefetch href="/wijn">Wein</a>
		<a sveltekit:prefetch href="/cognac">Cognac</a>
		<a sveltekit:prefetch href="/likeuren">Likör</a>
		<a sveltekit:prefetch href="/jenever-vieux">Jenever & Brandy</a>
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
	a{
		margin-bottom: 1em;
	}
</style>
