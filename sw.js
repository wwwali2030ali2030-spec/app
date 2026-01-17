const cacheName = 'gym-app-v1';
const assets = [
  './',
  './index.html',
  './manifest.json'
];

// تثبيت الخدمة وخزن الملفات
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// تشغيل التطبيق من الذاكرة (Offline)
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
