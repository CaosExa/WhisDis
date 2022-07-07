
// export async function get({ url }) {
// 	const res = await fetch(
// 		'https://es-api.drankdozijn.nl/sale-products?country=DE&language=de&cacheKey=1&premiumMember=N'
// 	);
// 	let offers = await res.json();
// 	if (offers) {
// 		offerList.set(offers);
// 		let data = offers;
// 		if (url.searchParams.has('drink')) {
// 			data = offers.filter((offer) => offer.productGroup.alias === url.searchParams.get('drink'));
// 		}
// 		return {
// 			body: { data }
// 		};
// 	}
// 	return {
// 		status: 404
// 	};
// }

import offers from '$lib/test.json';
console.log('ext fetch');
export async function get({ url }) {
	let data = offers;
	if (url.searchParams.has('drink')) {
		data = offers.filter((offer) => offer.productGroup.alias === url.searchParams.get('drink'));
	}
	return { body: { data } };
}
