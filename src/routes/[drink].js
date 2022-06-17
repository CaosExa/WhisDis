import { offerList } from '../stores';
export async function get({ params }) {
	const res = await fetch('/api/test.json');
	const offerList = await res.json()
	const filteredOfferList = offerList.filter((offer) => offer.productGroup.alias === params.drink);
	return {
		body: { filteredOfferList }
	};
}
