export async function get({ url }) {
	const res = await fetch(
		'https://es-api.drankdozijn.nl/sale-products?country=DE&language=de&cacheKey=1&premiumMember=N'
	);
	const data = await res.json();
	if (data) {
		let offers = data;
		if (url.searchParams.has('drink')) {
			offers = data.filter((offer) => offer.productGroup.alias === url.searchParams.get('drink'));
		}
		return {
			body: { offers }
		};
	}
	return {
		status: 404
	};
}

// import offers from '$lib/test.json';
// console.log('ext fetch');
// export async function get({ url }) {
// 	let data = offers;
// 	if (url.searchParams.has('drink')) {
// 		data = offers.filter((offer) => offer.productGroup.alias === url.searchParams.get('drink'));
// 	}
// 	return { body: { data } };
// }
