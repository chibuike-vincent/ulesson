/* eslint-disable no-restricted-globals */
// service-worker.js

const CACHE_NAME = 'my-video-cache';
// const isDevelopment = process.env.NODE_ENV === 'development';


self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  // if (isDevelopment) {
  //   event.respondWith(fetch(event.request));
  //   return;
  // }
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (!response) {
        return fetch(event.request).then((res) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, res.clone());
            return res;
          });
        });
      }
      return response;
    })
  );
});