self.addEventListener("fetch", (event) => {
    if (event.request.destination === "image"){
        event.respondWith(caches.match(event.request).then(rep => {
            if(rep) return rep;
            return caches.open("v1").then(cache => {
                return fetch(event.request).then(response => {
                    cache.put(event.request, response.clone());
                    return response
                })
            });
        }));
    }
})