<script>
  import { getRelativeDiscount } from '../utils'
  export let offer
</script>

<li>
  <a href={"https://drankdozijn.de/artikel/"+offer.products[0].alias}>
    {offer.saleDescription} { getRelativeDiscount(offer).toFixed(2)}% ({offer.salePrice}€ statt {offer.price}€ = {(offer.price-offer.salePrice).toFixed(2)}€)
  </a>
</li>
