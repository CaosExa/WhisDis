const cacheName = 'WhisDisCache';

self.addEventListener('fetch', (event) => {
	// Check if this is a request for an image
	if (
		event.request.destination === 'image' ||
		event.request.destination === 'font' ||
		event.request.destination === 'style' ||
		event.request.destination === 'script' ||
		event.request.destination === 'document' ||
		event.request.destination === 'manifest'
	) {
		event.respondWith(
			caches.open(cacheName).then((cache) => {
				// Go to the cache first
				return cache.match(event.request.url).then((cachedResponse) => {
					// Return a cached response if we have one
					if (cachedResponse) {
						return cachedResponse;
					}

					// Otherwise, hit the network
					return fetch(event.request).then((fetchedResponse) => {
						// Add the network response to the cache for later visits
						cache.put(event.request, fetchedResponse.clone());

						// Return the network response
						return fetchedResponse;
					});
				});
			})
		);
	} else {
		return;
	}
});
