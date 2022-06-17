import { set_data } from 'svelte/types/runtime/internal/dom';
import { offerList } from '../stores.js';
export async function get() {
	const url =
		'https://es-api.drankdozijn.nl/sale-products?country=DE&language=de&cacheKey=1&premiumMember=N';
	const res = await fetch(url);
	const data = await res.json();
	if (data) {
		offerList.set(data);
		return {
			body: { data }
		};
	}
	return {
		status: 404
	};
}
