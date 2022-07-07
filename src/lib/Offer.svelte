<script>
  import { imgRoot } from './stores.js'
  import { getRelativeDiscount } from '../utils'
  export let offer

</script>

<li>
	<div>
		<span class="badge badge-left">-{(offer.price-offer.salePrice).toFixed(2)}€</span>
    <span class="badge badge-right">{ getRelativeDiscount(offer).toFixed(2)}%</span>
	</div>
	
  {#if offer.structuredData}
    <img src={$imgRoot + offer.products[0].images[0]} alt={offer.saleDescription} />
  {:else if offer.products.length > 1}
		<div class="multi-img-container">
			{#each offer.products as product}
				 <img src={$imgRoot + product.images[0]} alt={offer.saleDescription} />
			{/each}
		</div>
  {:else}
    <div style="display:flex; justify-content: center; margin: 3em ">No Image</div>
  {/if}

	<div class="card-footer">
		<a href={"https://drankdozijn.de/artikel/"+offer.products[0].alias}>
    	{offer.saleDescription} 
  	</a>
		<div class="card-pricing">
			<span><strong>{offer.salePrice.toFixed(2)}€</strong></span>
  		<span class="old-price">{offer.price.toFixed(2)}€</span> 
		</div>
	</div>

</li>

<style>
.multi-img-container{
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5em auto -1.5em auto; 
}
.multi-img-container > img{
  overflow: hidden;
}
li > img{
  max-height: 7rem;
  display: block;
  margin: 1em auto -1.5em auto;
}
li {
  border-radius: 0.3em;
  background-color: white;
  padding: 0 1rem;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  }
a {
  margin-top: 2em;
  display: block;
  font-size: 0.9em;
  margin-bottom: 0.5em;
}

.card-pricing{
	display: flex;
	justify-content: space-between;
	margin-bottom: 0.5em;
}
.old-price{
  text-decoration: line-through;
  font-size: 0.9em;
}
</style>