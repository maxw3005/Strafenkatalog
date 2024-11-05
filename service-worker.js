const CACHE_NAME = 'v1';
const CACHE_ASSETS = [
    'Strafenkatalog.html',
    'styles.css',
    'Images/Logo-TSU.png', 
    'manifest.json'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Caching all assets');
            return cache.addAll(CACHE_ASSETS);
        })
    );
});

// Fetch Event
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('install', (event) => {
    console.log('Service Worker is installing...');
});

self.addEventListener('fetch', (event) => {
    console.log('Fetching:', event.request.url);
});