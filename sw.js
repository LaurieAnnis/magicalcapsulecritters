const CACHE_NAME = 'unity-webgl-v1';
const urlsToCache = ['./', './index.html', './Build/magicalcapsulecritters.loader.js', './Build/magicalcapsulecritters.framework.js', './Build/magicalcapsulecritters.data', './Build/magicalcapsulecritters.wasm'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(urlsToCache))); });
self.addEventListener('fetch', (e) => { e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))); });