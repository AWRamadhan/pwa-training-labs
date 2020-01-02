const cacheName = 'chace-v1';
const precacheResources = [
    '/',
    'index.html',
    'styles/main.css',
    '/images/space1.jpg',
    '/images/space2.jpg',
    '/images/space3.jpg'
]

self.addEventListener('install', event => {
    console.log('Install begin');
    event.waitUntil(
        caches.open(cacheName)
            .then(cahce => {
                return cahce.addAll(precacheResources);
            })
    );
});

self.addEventListener('active', event => {
    console.log('installing...')
});

self.addEventListener('fetch', event => {
    console.log(event.request.url);
    event.respondWith(caches.match(event.request)
        .then(cachedResponse => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request);
        }))
});