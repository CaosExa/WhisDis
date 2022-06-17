export async function get({ params }) {
	// `params.id` comes from [id].js
	const options = {
		mode: 'cors', // no-cors, *cors, same-origin,
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			redirect: 'follow', // manual, *follow, error
			referrerPolicy: 'no-referrer'
	}
	const item = 'Nico'; //await db.get(params.id);
  const url =
		'https://es-api.drankdozijn.nl/sale-products?country=DE&language=de&cacheKey=1&premiumMember=N';
	const proxy = 'https://cors-anywhere.herokuapp.com/';
	const res = await fetch(url);
	const data = await res.json();
	console.log(data);
		return {body:{data}}
	}
	// if (item) {
	// 	return {
	// 		body: { item }
	// 	};
	// }

	return {
		status: 404
	};
}
