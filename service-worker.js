self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('motivador-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './transiciones.css',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
