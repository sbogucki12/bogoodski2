"use strict";var precacheConfig=[["/index.html","095a4b91d733df33aff5f70e6bb72896"],["/static/css/main.4d5a52c0.css","412d42fffb5b4bb791c59184937e8cab"],["/static/js/main.8c909f6d.js","c2f33cafbd1997d29c29787823740eb6"],["/static/media/Dactw10Image.317321da.JPG","317321da807a37b35a70872b0233a7d1"],["/static/media/Dactw11Image.21b9210d.JPG","21b9210d397eceb9f3ce49f6c543629a"],["/static/media/Dactw12Image.94711641.JPG","94711641c19b37f4361985e770672c36"],["/static/media/Dactw13Image.07d9aed7.JPG","07d9aed7b919b847b562f07e2603b369"],["/static/media/Dactw14Image.33b0aaff.JPG","33b0aaffed6bd8cea181d3f26ae3ff20"],["/static/media/Dactw1Image.34d8ab2b.JPG","34d8ab2b6a46fb4139bd780eecfed67c"],["/static/media/Dactw2Image.74814e30.JPG","74814e303cb8d749c073c5daca71dd8f"],["/static/media/Dactw3Image.48757997.JPG","48757997076456ea0dac0389f60d1435"],["/static/media/Dactw4Image.c0a02995.JPG","c0a029958dd9fc30bd620592960629a9"],["/static/media/Dactw5Image.b296e477.JPG","b296e47748dabebf7b04ba70d8adbf60"],["/static/media/Dactw6Image.fca25c18.JPG","fca25c18eeedf32f999996724ad98eca"],["/static/media/Dactw7Image.8f60e97f.JPG","8f60e97f39b0e771807ef3d294607a8d"],["/static/media/Dactw9Image.6d9de5db.JPG","6d9de5db4c2f95b6cecf81c6c8ff3cc0"],["/static/media/MeThumbnail.a67d0439.jpg","a67d0439a7d7a794ca9062db3bc7be4a"],["/static/media/MeWork.bf6ca5fb.jpg","bf6ca5fbcde4808dfd2ca6cbb846753d"],["/static/media/academind.2c012dc0.JPG","2c012dc050de10841a4bb4ac37587db9"],["/static/media/angularMax.2df1d46d.JPG","2df1d46d5f15a867a5ba7ac6c13bfcbc"],["/static/media/cSharp1.a6697594.JPG","a6697594e8931a3a46a487766f4a362d"],["/static/media/cSharp2.0a766152.JPG","0a766152cae49098cd0c54214c79c98b"],["/static/media/cSharp3.885fc6e9.JPG","885fc6e95f0885d512e0f85adf8041fa"],["/static/media/codeBook.fd72d1c8.JPG","fd72d1c807ede5ac3955f9bd82e72c63"],["/static/media/cs50.a2fe3302.JPG","a2fe33021df0abfb7e30861d9ddc8315"],["/static/media/hacking.71d37f53.JPG","71d37f53d734efa7cc5e30481c3bdb6b"],["/static/media/inMyDefenseVol1.f765848c.JPG","f765848c718a99d66939e78196515fdb"],["/static/media/interviewCake.b7da240b.JPG","b7da240b2d5de8f0f5ee37c51751feef"],["/static/media/jsWeird.cce67994.JPG","cce67994201b789ced9b606017405b75"],["/static/media/nodeGrider.0a96e19f.JPG","0a96e19f38f9f118f217ec99f997014f"],["/static/media/nodeMead.f50e069f.JPG","f50e069ff6d1f30116c4ccdd2667ae6b"],["/static/media/sqlColt.fd8c301e.JPG","fd8c301ec07969648a83b38d5aa58027"],["/static/media/traversy.03c7bfeb.JPG","03c7bfebb057a90c1e531a1a51ca63dc"],["/static/media/unity.2466bade.JPG","2466bade7ffa996d72d3128b0934cf3d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});