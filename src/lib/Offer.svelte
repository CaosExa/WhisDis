<script>
  import { getRelativeDiscount } from '../utils'
  export let offer

  const imgRoot = 'https://res.cloudinary.com/boozeboodcdn/image/upload/q_auto/w_200,h_300,c_limit/'
</script>

<li>
	<div>
		<span class="abs-disc">-{(offer.price-offer.salePrice).toFixed(2)}€</span>
    <span class="rel-disc">{ getRelativeDiscount(offer).toFixed(2)} % </span>
	</div>
	
  {#if offer.structuredData}
    <img src={imgRoot + offer.products[0].images[0]} alt={offer.saleDescription} />
  {:else if offer.products.length > 1}
		<div class="multi-img-container">
			{#each offer.products as product}
				 <img src={imgRoot + product.images[0]} alt={offer.saleDescription} />
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
.abs-disc, .rel-disc{
  background-color: var(--accent-color);
  color: white;
  padding: 0.3em 0.5em;
  position: absolute;
  top: 0;
  font-size: 0.9em;
}
.rel-disc{
  border-radius: 0px 0.3em ;
  right: 0;
}

.abs-disc{
  border-radius: 0.3em 0 ;
  left: 0;
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