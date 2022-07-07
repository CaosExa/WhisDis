<script>
	import { headerDrinks, imgRoot } from './stores.js'
	import Offer from '$lib/Offer.svelte'
	export let data

	function getCardInfo(drink) {
		const amount = data.filter( offer => offer.productGroup.alias === drink).length
		const imgIndex = data.findIndex( offer => offer.productGroup.alias === drink)
		const imagePath = $imgRoot + data[imgIndex].products[0].images[0]
		return {
			amount, imagePath
		}
}
</script>

<svelte:head>
	<title>Whis-Dis</title>
	<meta name="description" content="Meta search site for Drankdozijn sales" />
</svelte:head>

<section>
	<h1><a rel="external" target="blank" href="https://drankdozijn.de">Drankdozijn</a> Angebote</h1>

	<div class="overview-container">
	{#each $headerDrinks as drink}
		<div class="overview-item">
			<span class="amount">{getCardInfo(drink[0]).amount} Angebote</span>
			<img src="{getCardInfo(drink[0]).imagePath}" alt={drink[1]}>
			<a sveltekit:prefetch href={'/'+drink[0]}>{drink[1]}</a>
		</div>
	{/each}
	</div>
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
	a{
		margin-bottom: 0.5em;
	}

	.overview-container{
		margin: 0;
		padding: 0;
		display:grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(min(16em, 47%), 1fr));
	}
	.overview-item{
		border-radius: 0.3em;
		background-color: white;
		padding: 0 1rem;
		box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
		position: relative;
		overflow: hidden;
	}
	.overview-item > img{
		max-height: 7rem;
		display: block;
		margin: 1em auto -1.5em auto;
	}
	.overview-item > a {
		margin-top: 2em;
		display: block;
		margin-bottom: 0.5em;
		font-weight: bold;
		text-align: center;
	}
</style>
