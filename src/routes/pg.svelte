<script context="module"> 
  export async function load({ fetch }){
    const headers = new Headers({'accept':'application/json'})
    const res = await fetch(`/__data.json`,headers)
    const { data } = await res.json()

    if(res.ok){
      return { 
        status: res.status,
        props: {data}
        
      }
    } else {
      return {
        status: 404
      }
    }
  }
</script>

<script>
  export let data
  const getCardinfo = (drink) => {
    const const imgRoot = 'https://res.cloudinary.com/boozeboodcdn/image/upload/q_auto/w_200,h_300,c_limit/'
    const amount = data.filter( offer => offer.productGroup.alias === drink).length
    const imgIndex = data.findIndex( offer => offer.productGroup.alias === drink)
    const imagePath = imgRoot + data[imgIndex].products[0].images[0]
    return {
      amount, imagePath
    }
  }
</script>

<div class="overview-container">
  <div class="overview item">
    <span class="amount">{getCardInfo('whisky').amount}</span>
    <img src={getCardInfo('whisky').imagePath} alt="whisky">
    <a sveltekit:prefetch href="/whisky">Whisky</a>
  </div>
</div>

<style>
  .overview-container{
    margin: 0;
    padding: 0;
    display:grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(min(12em, 47%), 1fr));
    list-style: none;
  }
  .overview-item{
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
img{
  max-height: 7rem;
  display: block;
  margin: 1em auto -1.5em auto;
}
a {
  margin-top: 2em;
  display: block;
  font-size: 0.9em;
  margin-bottom: 0.5em;
}
.amount{
  background-color: var(--accent-color);
  color: white;
  padding: 0.3em 0.5em;
  position: absolute;
  top: 0;
  font-size: 0.9em;
  border-radius: 0px 0.3em ;
  right: 0;
}
</style>