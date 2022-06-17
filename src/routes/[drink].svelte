<!-- <script context="module">
  import { offerList } from '../stores.js'
  const filteredOfferList = offerList.filter( offer => offer.productGroup.alias === $page.params.drink)

  export async function load({ params, fetch }) {
    // const url = `https://es-api.drankdozijn.nl/sale-products?country=DE&language=de&cacheKey=1&premiumMember=N`;
    // const response = await fetch(url);
    return {
      props: {
        filteredOfferList
      }
    };
  }
</script> -->

<script>
  //import { page } from '$app/stores';
  //import { offerList } from '../stores'
  import { getRelativeDiscount } from '../utils'
  //import Offer from '$lib/Offer.svelte'
  //$: filteredOfferList = $offerList.filter( offer => offer.productGroup.alias === $page.params.drink)
  export let filteredOfferList
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
