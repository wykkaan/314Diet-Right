if(!self.define){let e,n={};const s=(s,a)=>(s=new URL(s+".js",a).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(n[t])return;let c={};const r=e=>s(e,t),o={module:{uri:t},exports:c,require:r};n[t]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"b66e577309cd9ea421eb5e36281ea423"},{url:"/_next/static/chunks/138-ecd7d3e2c3c4c8af.js",revision:"nrDMnLRMCfpXoYeKGVmm2"},{url:"/_next/static/chunks/16-605ff0f967c7d3f7.js",revision:"nrDMnLRMCfpXoYeKGVmm2"},{url:"/_next/static/chunks/23-060548e28da60efe.js",revision:"nrDMnLRMCfpXoYeKGVmm2"},{url:"/_next/static/chunks/35.03ae917f238a8966.js",revision:"03ae917f238a8966"},{url:"/_next/static/chunks/396-1a09110d58bb3131.js",revision:"nrDMnLRMCfpXoYeKGVmm2"},{url:"/_next/static/chunks/595-07ead90d95110ebb.js",revision:"nrDMnLRMCfpXoYeKGVmm2"},{url:"/_next/static/chunks/app/_not-found/page-91447e1b7663de8b.js",revision:"nrDMnLRMCfpXoYeKGVmm2"},{url:"/_next/static/chunks/app/add-food/%5BmealType%5D/page-96f9d0f3c99614a7.js",revision:"nrDMnLRMCfpXoYeKGVmm2"},{url:"/_next/static/chunks/app/dashboard/page-e8f6e5131f2d8e7e.js",revision:"nrDMnLRMCfpXoYeKGVmm2"},{url:"/_next/static/chunks/app/goals/page-100e87280c323100.js",revision:"nrDMnLRMCfpXoYeKGVmm2"},{url:"/_next/static/chunks/app/layout-99b0ef44d8a611da.js",revision:"nrDMnLRMCfpXoYeKGVmm2"},{url:"/_next/static/chunks/app/login/page-241231c02c2f691e.js",revision:"nrDMnLRMCfpXoYeKGVmm2"},{url:"/_next/static/chunks/app/more/page-0afd6c75750e9479.js",revision:"nrDMnLRMCfpXoYeKGVmm2"},{url:"/_next/static/chunks/app/offline/page-1f09315ef5431035.js",revision:"nrDMnLRMCfpXoYeKGVmm2"},{url:"/_next/static/chunks/app/onboarding/age/page-6476077c2184f84c.js",revision:"nrDMnLRMCfpXoYeKGVmm2"},{url:"/_next/static/chunks/app/onboarding/begin/page-5fcb08db43fbd9a1.js",revision:"nrDMnLRMCfpXoYeKGVmm2"},{url:"/_next/static/chunks/app/onboarding/calories/page-daeb13873f42fd4c.js",revision:"nrDMnLRMCfpXoYeKGVmm2"},{url:"/_next/static/chunks/app/onboarding/gender/page-328bb681a688a372.js",revision:"nrDMnLRMCfpXoYeKGVmm2"},{url:"/_next/static/chunks/app/onboarding/goal/page-7b7d1aad85577feb.js",revision:"nrDMnLRMCfpXoYeKGVmm2"},{url:"/_next/static/chunks/app/onboarding/height/page-36f326df0e31d1f9.js",revision:"nrDMnLRMCfpXoYeKGVmm2"},{url:"/_next/static/chunks/app/onboarding/loading/page-17e78818e0e05d6f.js",revision:"nrDMnLRMCfpXoYeKGVmm2"},{url:"/_next/static/chunks/app/onboarding/name/page-426531baf461a6dd.js",revision:"nrDMnLRMCfpXoYeKGVmm2"},{url:"/_next/static/chunks/app/onboarding/weight/page-a3246b37002dc60a.js",revision:"nrDMnLRMCfpXoYeKGVmm2"},{url:"/_next/static/chunks/app/page-5e3b42d5f95b9f3d.js",revision:"nrDMnLRMCfpXoYeKGVmm2"},{url:"/_next/static/chunks/app/progress/page-ca0dba034929dc6c.js",revision:"nrDMnLRMCfpXoYeKGVmm2"},{url:"/_next/static/chunks/app/signup/page-343dd43059ca0d0e.js",revision:"nrDMnLRMCfpXoYeKGVmm2"},{url:"/_next/static/chunks/fd9d1056-8b46e16b4593ee55.js",revision:"nrDMnLRMCfpXoYeKGVmm2"},{url:"/_next/static/chunks/framework-00a8ba1a63cfdc9e.js",revision:"nrDMnLRMCfpXoYeKGVmm2"},{url:"/_next/static/chunks/main-a8eb60ee1d6de8fc.js",revision:"nrDMnLRMCfpXoYeKGVmm2"},{url:"/_next/static/chunks/main-app-a40ab1c5229b4332.js",revision:"nrDMnLRMCfpXoYeKGVmm2"},{url:"/_next/static/chunks/pages/_app-037b5d058bd9a820.js",revision:"nrDMnLRMCfpXoYeKGVmm2"},{url:"/_next/static/chunks/pages/_error-6ae619510b1539d6.js",revision:"nrDMnLRMCfpXoYeKGVmm2"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-f4d35c857dc8e491.js",revision:"nrDMnLRMCfpXoYeKGVmm2"},{url:"/_next/static/css/54de328d4b0a9c21.css",revision:"54de328d4b0a9c21"},{url:"/_next/static/nrDMnLRMCfpXoYeKGVmm2/_buildManifest.js",revision:"a0ae24e7f29dd3809ab75b5dd91a79dc"},{url:"/_next/static/nrDMnLRMCfpXoYeKGVmm2/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/checkmark.svg",revision:"c0e4ffa80114edc2939699d5c43d0389"},{url:"/icons/icon-192x192.png",revision:"7592c2c3490f6d76e1fa9f78114052c7"},{url:"/icons/icon-512x512.png",revision:"627588111c189929426fd9d3a0b64d90"},{url:"/manifest.json",revision:"5d14f808b584f88f63b54d1f0dfcca0d"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/worker.js",revision:"be22046cb0fc5877491dc70316fee783"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:s,state:a})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
