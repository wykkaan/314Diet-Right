if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>n(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"b495b822eb8c6aa750b4f83aa04fa182"},{url:"/_next/static/8wcIblEy8zxTkChefjIn5/_buildManifest.js",revision:"3e2d62a10f4d6bf0b92e14aecf7836f4"},{url:"/_next/static/8wcIblEy8zxTkChefjIn5/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/3620-2f280c6c798b5c2c.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/4396-5970e57283691313.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/4866.1c0042e9618427c6.js",revision:"1c0042e9618427c6"},{url:"/_next/static/chunks/5251.9062fc0d4ec975a0.js",revision:"9062fc0d4ec975a0"},{url:"/_next/static/chunks/6648-210bd1b15500a2fd.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/7016-df256f7ab2abba8a.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/7023-55e3cfa711cdffec.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/7035.cb726032edead13d.js",revision:"cb726032edead13d"},{url:"/_next/static/chunks/7138-779e230f1ff21893.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/_not-found/page-571bd13cf2fae39e.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/add-food/%5BmealType%5D/page-e6063ca2d86534b7.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/admin/dashboard/page-bf8af836642d4731.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/admin/layout-05402df1885751e5.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/admin/login/page-d88fbbb4b4070384.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/admin/users/%5Bid%5D/page-a21aff052cf4fab9.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/dashboard/page-9cd42ead568c2175.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/email-confirmation-pending/page-c8c649fe22a59f0c.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/goals/page-ffbcd0773981ab15.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/image-recognition/page-691526faf7b6b511.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/layout-66193351384d610e.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/login/page-8e2f4e7940e302b8.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/meal-assistant/page-221e93d19d6ec6f6.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/more/page-82333615c0bbaf5d.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/my-recipes/page-53218860a512fb82.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/offline/page-91d406f00550d7cf.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/onboarding/age/page-66c98ea9d9e65bfe.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/onboarding/begin/page-6cdde72c1a77c067.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/onboarding/calories/page-f1a8507a4d9d43e4.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/onboarding/gender/page-5c525b1c9e2ad65c.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/onboarding/goal/page-a4bbf360c2d70935.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/onboarding/height/page-cb531a67ae571e35.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/onboarding/loading/page-df109e1091db00e6.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/onboarding/name/page-8d8d76a0f14dba36.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/onboarding/weight/page-8c039f319ce6087e.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/page-ddb6ed041a713c4a.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/profile/page-70c9ed8551c26d9b.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/progress/page-6ac9b5fd1c1d5860.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/search-recipes/page-60ba9fb51ac231e6.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/seller/add-product/page-a94b4d60c3c5579e.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/seller/dashboard/page-922af1cf29fda6ec.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/seller/login/page-13f324232440e5fb.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/seller/manage-orders/page-cfd73ab9464988b9.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/seller/manage-products/page-b45494573591ecf3.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/shop/cart/page-83e0f6dab247e55a.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/shop/page-dea5a8980ef5c69c.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/shop/past-orders/page-d896938dc2a3e51b.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/shop/success/page-af3fc2f84d39172c.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/app/signup/page-3dd0d2b46050e8c4.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/fd9d1056-cdab7a03578cb8e2.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/framework-8e0e0f4a6b83a956.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/main-590ac16ed4860219.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/main-app-074d17f1aef99508.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/pages/_app-f870474a17b7f2fd.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/pages/_error-c66a4e8afc46f17b.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-a499886c09f67494.js",revision:"8wcIblEy8zxTkChefjIn5"},{url:"/_next/static/css/b3dbce7c3f992dd5.css",revision:"b3dbce7c3f992dd5"},{url:"/_next/static/css/c104401138f68e2c.css",revision:"c104401138f68e2c"},{url:"/checkmark.svg",revision:"c0e4ffa80114edc2939699d5c43d0389"},{url:"/icons/icon-192x192.png",revision:"7592c2c3490f6d76e1fa9f78114052c7"},{url:"/icons/icon-512x512.png",revision:"627588111c189929426fd9d3a0b64d90"},{url:"/manifest.json",revision:"daa68992eaab0cf462d37701d550de00"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/worker.js",revision:"be22046cb0fc5877491dc70316fee783"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
