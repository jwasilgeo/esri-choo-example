/* global self */

var VERSION = require('./package.json').version;
var URLS = process.env.FILE_LIST;

// Respond with cached resources
self.addEventListener('fetch', function(e) {
  e.respondWith(self.caches.match(e.request).then(function(request) {
    if (request) {
      return request;
    } else {
      return self.fetch(e.request);
    }
  }));
});

// Register worker
self.addEventListener('install', function(e) {
  e.waitUntil(self.caches.open(VERSION).then(function(cache) {
    return cache.addAll(URLS);
  }));
});

// Remove outdated resources
self.addEventListener('activate', function(e) {
  e.waitUntil(self.caches.keys().then(function(keyList) {
    return Promise.all(keyList.map(function(key, i) {
      if (keyList[i] !== VERSION) {
        return self.caches.delete(keyList[i]);
      }
    }));
  }));
});
