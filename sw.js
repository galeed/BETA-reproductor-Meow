self.addEventListener('fetch', (event) => {

  if (event.request.url.startsWith('blob:') || event.request.headers.get('range')) {
    return; 
});


const CACHE_NAME = 'reproductor-unico-v1';
const ASSETS = [
  './',
  'index.html'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});


self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});