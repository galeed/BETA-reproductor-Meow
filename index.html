const CACHE_NAME = 'reproductor-unico-v2';
const ASSETS = [
  './',
  'index.html'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Ignorar peticiones de audio local (blobs) o streaming con peticiones de rango HTTP
  if (req.url.startsWith('blob:') || req.headers.get('range')) {
    return;
  }

  // Peticiones estándar tratadas mediante estrategia Cache First con caída a Red
  event.respondWith(
    caches.match(req).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(req).then((networkResponse) => {
        // Guardar automáticamente páginas o recursos estáticos adicionales
        if (req.method === 'GET' && networkResponse.status === 200 && !req.url.startsWith('chrome-extension')) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, responseToCache));
        }
        return networkResponse;
      });
    }).catch(() => {
      if (req.mode === 'navigate') {
        return caches.match('./index.html');
      }
    })
  );
});
