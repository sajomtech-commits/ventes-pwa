const CACHE = 'ventes-v1';
const ASSETS = ['/', '/index.html', '/manifest.json'];

self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))));
self.addEventListener('fetch', e => {
  if (e.request.url.includes('nocodb') || e.request.url.includes('sagetech.vip/api')) return;
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
