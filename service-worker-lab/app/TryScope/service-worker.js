self.addEventListener('install', event => {
    console.log('Installing...')
});

self.addEventListener('active', event => {
    console.log('Activating...')
});

self.skipWaiting();

self.addEventListener('fetch', event => {
    console.log('Fetching: ', event.request.url)
})