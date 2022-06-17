<script>
  import { getRelativeDiscount } from '../utils'
  export let offer
</script>

<li>
  <a href={"https://drankdozijn.de/artikel/"+offer.products[0].alias}>
    {offer.saleDescription} { getRelativeDiscount(offer).toFixed(2)}% ({offer.salePrice}€ statt {offer.price}€ = {(offer.price-offer.salePrice).toFixed(2)}€)
  </a>
</li>

<style>
li {
    border-radius: 0.3em;
    background-color: white;
    padding: 0 1rem;
  }
  
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .card h4,
  h3,
  h5 {
    margin-bottom: 0.5em;
    color: var(--btn-bg-color);
    letter-spacing: 0.1em;
  }
</style>