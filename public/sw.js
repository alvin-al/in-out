if(!self.define){let e,s={};const t=(t,n)=>(t=new URL(t+".js",n).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>t(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(a(...e),c)))}}define(["./workbox-3c9d0171"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/81t9E5WoH-EOfrqpbewXQ/_buildManifest.js",revision:"65c99258e68baf3feff01bd664fb5d51"},{url:"/_next/static/81t9E5WoH-EOfrqpbewXQ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/10-09911123a2b5ddb7.js",revision:"81t9E5WoH-EOfrqpbewXQ"},{url:"/_next/static/chunks/248-70562256c4ce646f.js",revision:"81t9E5WoH-EOfrqpbewXQ"},{url:"/_next/static/chunks/258-fda3259023b7b5e3.js",revision:"81t9E5WoH-EOfrqpbewXQ"},{url:"/_next/static/chunks/39a02dcd-27d1b1244f2bae90.js",revision:"81t9E5WoH-EOfrqpbewXQ"},{url:"/_next/static/chunks/5513923b-5c262dd6f46a1d93.js",revision:"81t9E5WoH-EOfrqpbewXQ"},{url:"/_next/static/chunks/667-ea8deb54b87baf1a.js",revision:"81t9E5WoH-EOfrqpbewXQ"},{url:"/_next/static/chunks/70.6688ecd69094ca96.js",revision:"6688ecd69094ca96"},{url:"/_next/static/chunks/888-f7e01cca33db5e41.js",revision:"81t9E5WoH-EOfrqpbewXQ"},{url:"/_next/static/chunks/9-4a8233cb81b371e5.js",revision:"81t9E5WoH-EOfrqpbewXQ"},{url:"/_next/static/chunks/app/_not-found/page-1b524e3f6f9611b1.js",revision:"81t9E5WoH-EOfrqpbewXQ"},{url:"/_next/static/chunks/app/activity/%5Bid%5D/page-9b204e806d4b70a9.js",revision:"81t9E5WoH-EOfrqpbewXQ"},{url:"/_next/static/chunks/app/activity/page-b4f095f9c1ff0872.js",revision:"81t9E5WoH-EOfrqpbewXQ"},{url:"/_next/static/chunks/app/add-item/page-3c04a2222dfa90e6.js",revision:"81t9E5WoH-EOfrqpbewXQ"},{url:"/_next/static/chunks/app/api/in-out-logs/route-d210b0493ed8edbc.js",revision:"81t9E5WoH-EOfrqpbewXQ"},{url:"/_next/static/chunks/app/api/users/route-c69c15af0e4b5e0e.js",revision:"81t9E5WoH-EOfrqpbewXQ"},{url:"/_next/static/chunks/app/confirmation/page-6b07df00b6c514cc.js",revision:"81t9E5WoH-EOfrqpbewXQ"},{url:"/_next/static/chunks/app/dashboard/page-8eeb0eedc307aa9f.js",revision:"81t9E5WoH-EOfrqpbewXQ"},{url:"/_next/static/chunks/app/layout-79e636a36d2626aa.js",revision:"81t9E5WoH-EOfrqpbewXQ"},{url:"/_next/static/chunks/app/login/layout-fe227aefbdcbf7d3.js",revision:"81t9E5WoH-EOfrqpbewXQ"},{url:"/_next/static/chunks/app/login/page-c9e6da25aefcaf1c.js",revision:"81t9E5WoH-EOfrqpbewXQ"},{url:"/_next/static/chunks/app/page-62288be31d25a0c0.js",revision:"81t9E5WoH-EOfrqpbewXQ"},{url:"/_next/static/chunks/app/settings/page-5bc7977287c036d0.js",revision:"81t9E5WoH-EOfrqpbewXQ"},{url:"/_next/static/chunks/b5f12c68-86484b0266030d65.js",revision:"81t9E5WoH-EOfrqpbewXQ"},{url:"/_next/static/chunks/e0bc6c37-bcf04f4f5eb3454f.js",revision:"81t9E5WoH-EOfrqpbewXQ"},{url:"/_next/static/chunks/framework-e8725d3b0e06b9cb.js",revision:"81t9E5WoH-EOfrqpbewXQ"},{url:"/_next/static/chunks/main-app-f60fc206bec401b6.js",revision:"81t9E5WoH-EOfrqpbewXQ"},{url:"/_next/static/chunks/main-cb8cec5473f11dd1.js",revision:"81t9E5WoH-EOfrqpbewXQ"},{url:"/_next/static/chunks/pages/_app-8c9dff3b5fde59fd.js",revision:"81t9E5WoH-EOfrqpbewXQ"},{url:"/_next/static/chunks/pages/_error-a72847dc67c8f4a2.js",revision:"81t9E5WoH-EOfrqpbewXQ"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-14ec34e61b770b10.js",revision:"81t9E5WoH-EOfrqpbewXQ"},{url:"/_next/static/css/3880091134b8462f.css",revision:"3880091134b8462f"},{url:"/_next/static/media/569ce4b8f30dc480-s.p.woff2",revision:"ef6cefb32024deac234e82f932a95cbd"},{url:"/_next/static/media/747892c23ea88013-s.woff2",revision:"a0761690ccf4441ace5cec893b82d4ab"},{url:"/_next/static/media/93f479601ee12b01-s.p.woff2",revision:"da83d5f06d825c5ae65b7cca706cb312"},{url:"/_next/static/media/ba015fad6dcf6784-s.woff2",revision:"8ea4f719af3312a055caf09f34c89a77"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/icon512.png",revision:"699027159df67798bb5210b642476cf5"},{url:"/icon512_maskable.png",revision:"356b52670d23ff39784d90c650058ecb"},{url:"/manifest.json",revision:"3108e43bd0612191873004fe899c640e"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:function(e){return _ref.apply(this,arguments)}}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var s=e.sameOrigin,t=e.url.pathname;return!(!s||t.startsWith("/api/auth/callback")||!t.startsWith("/api/"))}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var s=e.request,t=e.url.pathname,n=e.sameOrigin;return"1"===s.headers.get("RSC")&&"1"===s.headers.get("Next-Router-Prefetch")&&n&&!t.startsWith("/api/")}),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var s=e.request,t=e.url.pathname,n=e.sameOrigin;return"1"===s.headers.get("RSC")&&n&&!t.startsWith("/api/")}),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var s=e.url.pathname;return e.sameOrigin&&!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){return!e.sameOrigin}),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
