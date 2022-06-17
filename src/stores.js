import offers from '$lib/test.json';
import { readable } from 'svelte/store';
const url = `https://es-api.drankdozijn.nl/sale-products?country=DE&language=de&cacheKey=1&premiumMember=N`;

async function getOffers() {
	var myHeaders = new Headers();
	myHeaders.append('origin', 'stackblitz.com');

	var requestOptions = {
		method: 'GET',
		headers: {},
		redirect: 'follow'
	};

	const res = await fetch(
		'https://es-api.drankdozijn.nl/sale-products?country=DE&language=de&cacheKey=1&premiumMember=N'
	);
	// .then(response => response.text())
	// .then(result => console.log(result))
	// .catch(error => console.log('error', error));
	console.log(res);
	// const data = await res.json();
	// console.log(data);
	// if (res.ok) return data;
}

export const offerList = readable(offers, function start(set) {
	//set(offers);
	//getOffers().then((res) => set(res));
	return function stop() {};
});
