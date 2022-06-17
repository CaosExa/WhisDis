export function getRelativeDiscount({ price, salePrice }) {
	const number = 100 - (salePrice / price) * 100;
	return Math.round((number + Number.EPSILON) * 10) / 10;
}
