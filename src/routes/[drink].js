import { offerList } from '../stores';
export async function get({ params }) {
	const filteredOfferList = $offerList.filter((offer) => offer.productGroup.alias === params.drink);
	return {
		body: { filteredOfferList }
	};
}
