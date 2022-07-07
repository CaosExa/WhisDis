<script>
	import { headerDrinks, imgRoot } from '../stores.js'
	import Offer from '$lib/Offer.svelte'
	export let offers

	function getCardInfo(drink) {
		const amount = offers.filter( offer => offer.productGroup.alias === drink).length
		const imgIndex = offers.findIndex( offer => offer.productGroup.alias === drink)
		const imagePath = $imgRoot + offers[imgIndex].products[0].images[0]
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

	<ul>
	{#each $headerDrinks as drink}
		<li>
			<a sveltekit:prefetch href={'/'+drink[0]}>
				<span class="badge badge-right">{getCardInfo(drink[0]).amount} Angebote</span>
				<img src="{getCardInfo(drink[0]).imagePath}" alt={drink[1]}>
				<span class="card-text">{drink[1]}</span>
			</a>
		</li>
	{/each}
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
	a{
		margin-bottom: 0.5em;
	}
	ul{
		margin: 0 0 1.5em 0;
		padding: 0;
		width:100%;
		display:grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(min(9em, 47%), 1fr));
	}
	li{
		border-radius: 0.3em;
		background-color: white;
		padding: 0 1rem;
		box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
		position: relative;
		overflow: hidden;
	}
	a > img{
		max-height: 7rem;
		display: block;
		margin: 1em auto -1.5em auto;
	}
	.card-text{
		margin-top: 2em;
		display: block;
		margin-bottom: 0.5em;
		font-weight: bold;
		text-align: center;
	}
</style>
