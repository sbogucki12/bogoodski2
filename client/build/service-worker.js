"use strict";var precacheConfig=[["/index.html","633eeb202edcebd46e68c720ed767e9b"],["/static/css/main.4d5a52c0.css","412d42fffb5b4bb791c59184937e8cab"],["/static/js/main.35eb4822.js","6f1e144d0e29eb4e3b8d657160686bc4"],["/static/media/MeThumbnail.a67d0439.jpg","a67d0439a7d7a794ca9062db3bc7be4a"],["/static/media/MeWork.bf6ca5fb.jpg","bf6ca5fbcde4808dfd2ca6cbb846753d"],["/static/media/academind.2c012dc0.JPG","2c012dc050de10841a4bb4ac37587db9"],["/static/media/angularMax.2df1d46d.JPG","2df1d46d5f15a867a5ba7ac6c13bfcbc"],["/static/media/cSharp1.a6697594.JPG","a6697594e8931a3a46a487766f4a362d"],["/static/media/cSharp2.0a766152.JPG","0a766152cae49098cd0c54214c79c98b"],["/static/media/cSharp3.885fc6e9.JPG","885fc6e95f0885d512e0f85adf8041fa"],["/static/media/codeBook.fd72d1c8.JPG","fd72d1c807ede5ac3955f9bd82e72c63"],["/static/media/cs50.a2fe3302.JPG","a2fe33021df0abfb7e30861d9ddc8315"],["/static/media/hacking.71d37f53.JPG","71d37f53d734efa7cc5e30481c3bdb6b"],["/static/media/interviewCake.b7da240b.JPG","b7da240b2d5de8f0f5ee37c51751feef"],["/static/media/jsWeird.cce67994.JPG","cce67994201b789ced9b606017405b75"],["/static/media/nodeGrider.0a96e19f.JPG","0a96e19f38f9f118f217ec99f997014f"],["/static/media/nodeMead.f50e069f.JPG","f50e069ff6d1f30116c4ccdd2667ae6b"],["/static/media/sqlColt.fd8c301e.JPG","fd8c301ec07969648a83b38d5aa58027"],["/static/media/traversy.03c7bfeb.JPG","03c7bfebb057a90c1e531a1a51ca63dc"],["/static/media/unity.2466bade.JPG","2466bade7ffa996d72d3128b0934cf3d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});