if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>n(e,c),f={module:{uri:c},exports:t,require:r};s[c]=Promise.all(a.map((e=>f[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-3c9d0171"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/S8VGzBAWZKdryqfqGBETG/_buildManifest.js",revision:"1ef85ac565dda736d6fc16042235be6e"},{url:"/_next/static/S8VGzBAWZKdryqfqGBETG/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/10-09911123a2b5ddb7.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/154-72e14e5479ffd39f.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/208-f90e053cbe2c174d.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/269-153f80f0798cbd74.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/39a02dcd-27d1b1244f2bae90.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/5513923b-5c262dd6f46a1d93.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/588-ac267443dc3eccfa.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/70.6688ecd69094ca96.js",revision:"6688ecd69094ca96"},{url:"/_next/static/chunks/758-c5a43af430a75ef5.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/888-f7e01cca33db5e41.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/9-4a8233cb81b371e5.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/a71fc6ad-92fd999559bd639c.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/a84d1581-6cb264b0b4094731.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/app/_not-found/page-1b524e3f6f9611b1.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/app/activity/%5Bid%5D/page-e69a4956ff2dc331.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/app/activity/page-71568a29cbbdf3d1.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/app/add-item/page-7a0733f470d3e034.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/app/api/in-out-logs/route-b1116a98bac0cc4b.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/app/api/users/route-cc1cb7754dc87aa4.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/app/confirmation/page-75fd09983ac17f3f.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/app/crate/available/page-b53cf853756746eb.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/app/crate/total/page-9ab7d0c7b8665310.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/app/dashboard/page-0d28142b4bc44c7a.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/app/layout-79a3a9af1af67227.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/app/login/layout-ccb18127d20fe5c1.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/app/login/page-3ce981bc9507b511.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/app/page-23135f5c6e2c608e.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/app/pic-with-crate/page-3927a8d6274cb756.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/app/settings/page-536814d4994e2fea.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/b281fec4-a998a173a629e5d6.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/b5f12c68-f02329e29ad75b6f.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/c4aeae87-b0d94d0c41d39556.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/c556396d-cacbc889bd36d4ca.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/e0bc6c37-bcf04f4f5eb3454f.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/framework-e8725d3b0e06b9cb.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/main-app-f60fc206bec401b6.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/main-cb8cec5473f11dd1.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/pages/_app-8c9dff3b5fde59fd.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/pages/_error-a72847dc67c8f4a2.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-8393c568a88c2291.js",revision:"S8VGzBAWZKdryqfqGBETG"},{url:"/_next/static/css/1607d77964ccfb9e.css",revision:"1607d77964ccfb9e"},{url:"/_next/static/media/034043092db1e233-s.woff2",revision:"985e9b4713be3b0c3210a2f4a316492d"},{url:"/_next/static/media/2b3f1035ed87a788-s.p.woff2",revision:"03e877e75c5a1213e13a56b59471c946"},{url:"/_next/static/media/65053818c3abcf97-s.woff2",revision:"9b02c436a26a8afe2e94314fdaa6d6bd"},{url:"/_next/static/media/eed6db14ac3b93a0-s.woff2",revision:"bf5e9d3da99a28e7391571987186e6ea"},{url:"/beep.mp3",revision:"69c766aef8fc63e35455b621a7e7fef5"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/icon512.png",revision:"699027159df67798bb5210b642476cf5"},{url:"/icon512_maskable.png",revision:"356b52670d23ff39784d90c650058ecb"},{url:"/manifest.json",revision:"3108e43bd0612191873004fe899c640e"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:function(e){return _ref.apply(this,arguments)}}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var s=e.sameOrigin,n=e.url.pathname;return!(!s||n.startsWith("/api/auth/callback")||!n.startsWith("/api/"))}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var s=e.request,n=e.url.pathname,a=e.sameOrigin;return"1"===s.headers.get("RSC")&&"1"===s.headers.get("Next-Router-Prefetch")&&a&&!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var s=e.request,n=e.url.pathname,a=e.sameOrigin;return"1"===s.headers.get("RSC")&&a&&!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var s=e.url.pathname;return e.sameOrigin&&!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){return!e.sameOrigin}),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
