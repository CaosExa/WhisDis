<script>
  import { getRelativeDiscount } from '../utils'
  export let offer
</script>

<li>
  {#if offer.structuredData}
    <img src={offer.structuredData.image[0]} alt={offer.saleDescription} />
  {/if}
  <a href={"https://drankdozijn.de/artikel/"+offer.products[0].alias}>
    {offer.saleDescription} 
  </a>
  
  <span class="rel-disc">
    { getRelativeDiscount(offer).toFixed(2)} % 
  </span>
  <b>{offer.salePrice.toFixed(2)}€</b> 
  <span class="old-price">{offer.price.toFixed(2)}€</span> 
  <span class="abs-disc">-{(offer.price-offer.salePrice).toFixed(2)}€</span>
</li>

<style>
img{
  max-height: 9rem;
  object-fit: contain;
  object-position: 0 ;
  display: block;
  margin: 0.5em auto -1em auto;
  transform: scale(1.05)
}
li {
    border-radius: 0.3em;
    background-color: white;
    padding: 0 1rem;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    position: relative;
    overflow: hidden;
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
}
.rel-disc{
  border-radius: 0px 0.3em ;
  right: 0;
}

.abs-disc{
  border-radius: 0.3em 0 ;
  left: 0;
}

.old-price{
  margin-left: 2em;
  text-decoration: line-through;
  font-size: 0.9em;
}
</style>