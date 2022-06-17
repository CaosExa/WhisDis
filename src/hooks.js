export async function handle({ event, resolve }) {
	const url =
		'https://es-api.drankdozijn.nl/sale-products?country=DE&language=de&cacheKey=1&premiumMember=N';
	const proxy = 'https://cors-anywhere.herokuapp.com/';
	if (event.url.pathname.startsWith('/custom')) {
		// const res = await fetch(url);
		// const data = await res.json();
		// console.log(data);
		return new Response('custom response');
	}

	const response = await resolve(event);
	return response;
}
