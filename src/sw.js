var CACHE_NAME = 'my-site-cache-v2';
var urlsToCache = [
  '/',
  '/index_bundle.js'
];

self.addEventListener('install', function(event) {
  // global.fetch('https://api.github.com/users/katlavan').then(res => res.json()).then(users => console.log('katlavan', users))
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache', cache);
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', (event) => {
  console.log('Активирован', event);
});

// self.addEventListener('fetch', (event) => {
//   console.log('Происходит запрос на сервер', event);
// });

self.addEventListener('fetch', function(event) {
  // event.waitUntil(async function() {
  //   // Exit early if we don't have access to the client.
  //   // Eg, if it's cross-origin.
  //   if (!event.clientId) return;
  //
  //   // Get the client.
  //   const client = await clients.get(event.clientId);
  //   // Exit early if we don't get the client.
  //   // Eg, if it closed.
  //   if (!client) return;
  //
  //   // Send a message to the client.
  //   client.postMessage({
  //     msg: "Hey I just got a fetch from you!",
  //     url: event.request.url
  //   });
  //
  // }());
});
self.addEventListener('message', function(event){
  console.log("SW Received Message: " + event.data);
});

