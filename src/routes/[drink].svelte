<script context="module"> 
  export async function load({ params, fetch }){
    const headers = new Headers({'accept':'application/json'})
    const res = await fetch(`/__data.json?drink=${params.drink}`,headers)
    const { data } = await res.json()

    if(res.ok){
      console.log('gt flt list')
      const filteredOfferList = data.filter( offer => offer.productGroup.alias === params.drink)
      return { 
        status: res.status,
        props: {
          filteredOfferList,
          activeSort: ''}
        
      }
    } else {
      return {
        status: 404
      }
    }
  }
</script>

<script>
  //import { page } from '$app/stores';
  //import { offerList } from '../stores'
  import { getRelativeDiscount } from '../utils'
  import Offer from '$lib/Offer.svelte'
  export let filteredOfferList
  export let activeSort
  //$: filteredOfferList = $offerList.filter( offer => offer.productGroup.alias === $page.params.drink)

  function sortByRel () {
    filteredOfferList.sort((a,b) => getRelativeDiscount(b) - getRelativeDiscount(a))
    filteredOfferList = [...filteredOfferList]
    activeSort = 'rel'
  }

   function sortByAbs () {
    filteredOfferList.sort((a,b) => (b.price - b.salePrice) - (a.price - a.salePrice))
    filteredOfferList = [...filteredOfferList]
    activeSort = 'abs'
  }
</script>
<div class="sort-group">
  <button class:active={activeSort === 'rel'} on:click={sortByRel}>Sortieren %</button>
  <button class:active={activeSort === 'abs'} on:click={sortByAbs}>Sortieren €</button>
</div>
	<ul>
		{#each filteredOfferList as offer}
		  <Offer {offer} />
		{/each}
	</ul>

<style>
  ul{
    margin: 0;
    padding: 0;
    display:grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(min(12em, 47%), 1fr));
    list-style: none;
  }
  .sort-group{
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    overflow: hidden;
    width: min(30em, 100% );
    display: flex;
    gap:1px;
    
  }
  button{
    flex-grow: 1;
    border: none;
    background-color: var(--tertiary-color);
    color: var(--accent-color);
    padding: 0.5em 0 0.5em 0;
    font-weight: bold;
  }
  button:hover{
    transform: scale(1.05)
  }
  .active{
    background-color: white;
  }
</style>