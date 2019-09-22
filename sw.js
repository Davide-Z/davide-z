importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0c19ed4b393e9e2e7a45.js",
    "revision": "2d5f57965e375bd90110e4dc0451a854"
  },
  {
    "url": "/_nuxt/4daddb5622de0cf75d5f.js",
    "revision": "ddf966d8c529e51fbcaf19d921f4b035"
  },
  {
    "url": "/_nuxt/5133a4efe23c2ceb87c3.js",
    "revision": "4e556967583c97c6054ca15596bd752a"
  },
  {
    "url": "/_nuxt/6bf31d81970d60debb5d.js",
    "revision": "19a70a58476d5a6a232ea98700220ada"
  },
  {
    "url": "/_nuxt/8d274cc50d2e19e20f60.js",
    "revision": "f41dc29a7acd06fcc526dfd8c2a744fe"
  },
  {
    "url": "/_nuxt/8e4a862f0c604eb0d007.js",
    "revision": "920781e7aa2b805c4be7fbbafef7d223"
  },
  {
    "url": "/_nuxt/8e975ebbb126b66830c9.js",
    "revision": "464bfddce6eaeef56fdb1a1a9d43d0d7"
  },
  {
    "url": "/_nuxt/a55e8dcf9e25735c8024.js",
    "revision": "6ee4d08f80080c2a8e9910a53723483e"
  },
  {
    "url": "/_nuxt/e11ef20f2fb2d197e96b.js",
    "revision": "434bf993440c22d856ffb5feac318f2c"
  },
  {
    "url": "/_nuxt/ec376b0cc4064c95425b.js",
    "revision": "bf16e98fc483c81e6032eed9b54ed8a0"
  },
  {
    "url": "/_nuxt/f0bfea62cfb679d85503.js",
    "revision": "03139a9bc9a5b41b7a06720060c834a9"
  },
  {
    "url": "/_nuxt/fbf8aa6de45073c581be.js",
    "revision": "a8f09c7d6fcaf5149b8a8642567b331c"
  }
], {
  "cacheId": "github-io",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
