<script>
  import { page } from '$app/stores';
  import { offerList } from '../stores'
  import { getRelativeDiscount } from '../utils'
  import Offer from '$lib/Offer.svelte'

  $: filteredOfferList = $offerList.filter( offer => offer.productGroup.alias === $page.params.drink)

  function sortByRel () {
    filteredOfferList.sort((a,b) => getRelativeDiscount(b) - getRelativeDiscount(a))
    filteredOfferList = [...filteredOfferList]
  }

   function sortByAbs () {
    filteredOfferList.sort((a,b) => (b.price - b.salePrice) - (a.price - a.salePrice))
    filteredOfferList = [...filteredOfferList]
  }
</script>
this is {$page.params.drink} site
<button on:click={sortByRel}>Sort by Rel</button>
<button on:click={sortByAbs}>Sort by Abs</button>
	<ul>
		{#each filteredOfferList as offer}
		  <Offer {offer} />
		{/each}
	</ul>

<style>
  ul{
    display:grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(min(16em, 50%), 1fr));
  }
</style>