"use strict";var precacheConfig=[["/engine.worker.js","91f7f30379e5a70bcd82d220c621f24f"],["/index.html","93e2d09559cb5ad575f59ccdc29fa116"],["/static/css/main.68c6d3d0.css","9ad53e4506661f342609ff750f7a7de9"],["/static/js/main.cb910afc.js","28b5624b808531de93860915714b7d0b"],["/static/media/archers.9cebfc5d.png","9cebfc5d150c1202cad8b1a2e34a712e"],["/static/media/arrows.e04f5680.png","e04f568071c69107d2a76a5f80f6e2dc"],["/static/media/baby-dragon.a601424c.png","a601424c249d5bcd37f601e97b9e7edf"],["/static/media/balloon.25b8ae49.png","25b8ae49ef7045e063e7789b42a972ad"],["/static/media/bandit.80c8079a.png","80c8079a63fea277e6382e8500095752"],["/static/media/barbarian-hut.1b011701.png","1b0117018d04b5919e47247088b65b4e"],["/static/media/barbarians.916a499a.png","916a499aa9259dedc5c56139ddcbc47a"],["/static/media/bats.5187d4f3.png","5187d4f3595452e702375ee2ff7af697"],["/static/media/battle-ram.fbfab643.png","fbfab6430e0328df43425e409ffd364d"],["/static/media/bomb-tower.7977422e.png","7977422e1f1b9a849388cf8cddbdbb99"],["/static/media/bomber.deae55f3.png","deae55f3ad688d7b8928095f7401df71"],["/static/media/bowler.6d405615.png","6d405615a2bd8b794268691b79559913"],["/static/media/cannon-cart.bee29c89.png","bee29c89e1bfc4c874dec191901e8248"],["/static/media/cannon.ce33ccb3.png","ce33ccb3445732c23e902804d50ba555"],["/static/media/clone.025820d4.png","025820d459187edae4bb41245ebad1ee"],["/static/media/dark-prince.23bf27ef.png","23bf27ef2ea27c4fc786ae7f03434dae"],["/static/media/dart-goblin.e264c2db.png","e264c2db07bc0e79623b61e2bd60b5ca"],["/static/media/electro-wizard.e91b6609.png","e91b66095ee660ff09014a02797b3cff"],["/static/media/elite-barbarians.662ac839.png","662ac839f2e8e61f793964de28105a7c"],["/static/media/elixir-collector.d04b9c0f.png","d04b9c0f4026019d46f8a73b77a7570f"],["/static/media/executioner.635bc5e7.png","635bc5e7f6a55d236d37012ee18b7257"],["/static/media/fire-spirits.fc10df52.png","fc10df52cfcdb41264d56614304e6ee7"],["/static/media/fireball.025f16c4.png","025f16c4054cf023d6c7e81cee307fb0"],["/static/media/flying-machine.bb8e5ee0.png","bb8e5ee034d233e07d77487313a6393b"],["/static/media/freeze.ddbf6686.png","ddbf66863166b5ca5f89f2d541c08efc"],["/static/media/furnace.e03107dc.png","e03107dce92711f953d7e93d6b0827c2"],["/static/media/giant-skeleton.6dd8dd1b.png","6dd8dd1ba9128d3c119706e1e943c796"],["/static/media/giant.2c9aa301.png","2c9aa301c9b178f7f4a06551b2a22110"],["/static/media/goblin-barrel.ec81b217.png","ec81b217988058d84da02b3d3fd13e1c"],["/static/media/goblin-gang.1316dab7.png","1316dab7e48cae3020e110d1ab394774"],["/static/media/goblin-hut.d65f3ae5.png","d65f3ae51383fa0e56d256599955b2fa"],["/static/media/goblins.fb34a390.png","fb34a3908d47b85fc658b30e70e15581"],["/static/media/golem.afc4f040.png","afc4f0405a51cb3cb160e38a916a546a"],["/static/media/graveyard.e74ee9ab.png","e74ee9ab50fc271037d63ba007dae0fd"],["/static/media/guards.f9d45abb.png","f9d45abbf8cb2518d5cb4a76a8134f4d"],["/static/media/heal.9e99ff9c.png","9e99ff9cb24e664a842430f288da1ac2"],["/static/media/hog-rider.716cc57c.png","716cc57c231cabe5b0ef02df08461f81"],["/static/media/hunter.f71c6779.png","f71c6779147cba38a1f45feeb8f3488c"],["/static/media/ice-golem.f1e968c3.png","f1e968c38fb4e3332034936ffc636372"],["/static/media/ice-spirit.7ac79000.png","7ac79000938b36062af15adaabcc2ee5"],["/static/media/ice-wizard.6355d3b0.png","6355d3b05a045cd67a9a2a4ed8bce0df"],["/static/media/inferno-dragon.e10f063e.png","e10f063e66e621865e977a74e8cc1f2f"],["/static/media/inferno-tower.83f93f52.png","83f93f52924c3bb1a36429abefbc7d4c"],["/static/media/knight.e76b8bef.png","e76b8bef89d424a1c9d889669f0b5812"],["/static/media/lava-hound.299003fd.png","299003fd6110bdbe4cf490ed8df9ff48"],["/static/media/lightning.9fd61af2.png","9fd61af21ac03f6a6616f277bf6cb01e"],["/static/media/lumberjack.539475d5.png","539475d50502986c7462dff200ce10fd"],["/static/media/magic-archer.95796203.png","95796203ecb2e3fcf75c046320c732b7"],["/static/media/mega-knight.b726c86e.png","b726c86eda1dc3a50235f9282fa9263d"],["/static/media/mega-minion.46497ee1.png","46497ee11f1f5ceed5d1615043654459"],["/static/media/miner.547346f4.png","547346f40c4e90dd20ec48d811aeb98d"],["/static/media/mini-pekka.6b0e0cde.png","6b0e0cdec1cd741fa96f94c303a8b1f5"],["/static/media/minion-horde.f4830501.png","f483050101e7aaeeea9a3e0c8dea7712"],["/static/media/minions.77d8f4eb.png","77d8f4eb782d959b7f47ccb917af6692"],["/static/media/mirror.f45037ef.png","f45037effb2e183cf8ad38f5f61c463f"],["/static/media/mortar.ea9eb809.png","ea9eb8093aefccf2666e9bdb3ffe47ec"],["/static/media/musketeer.48858adc.png","48858adc5362ff637d723f14cf5dab13"],["/static/media/night-witch.7cbb7af0.png","7cbb7af0b0ee7d5b7740972f653fb291"],["/static/media/pekka.994b9c74.png","994b9c7420a90591ec73bf2e6b2e7960"],["/static/media/poison.fa6ab63e.png","fa6ab63eb71b96809670d5a6ba56b0b9"],["/static/media/prince.f513cd6a.png","f513cd6a465b4403b4090a3f8d20d96c"],["/static/media/princess.b571831a.png","b571831a45c3e682c4f620c55e186811"],["/static/media/rage.f8dd7a48.png","f8dd7a482054828a73f1c6ac1a061749"],["/static/media/rocket.7166652d.png","7166652da6d07268d5a7fab59a4cdce8"],["/static/media/royal-ghost.6fb4b2cc.png","6fb4b2ccc625ac5b89272b72feb79c19"],["/static/media/royal-giant.4189161e.png","4189161e4f0b1b6a2ab73a3b7c0cb2bd"],["/static/media/skeleton-army.2e609019.png","2e6090194f714fbfa8a2f3b7a85c0618"],["/static/media/skeleton-barrel.f7ae85d1.png","f7ae85d10644c35e9033eae4566211ef"],["/static/media/skeletons.24d9632d.png","24d9632df477e28ff43716f632d5965b"],["/static/media/sparky.8ea7ef53.png","8ea7ef532348d1a9552e92a4a2bec265"],["/static/media/spear-goblins.b397933e.png","b397933e5a003cc9cb9153516bbd9efe"],["/static/media/tesla.fcfbb9b8.png","fcfbb9b846236b0bb1a003d423404f01"],["/static/media/the-log.63e9c609.png","63e9c6096abb83eee2db46fdc1ff997a"],["/static/media/three-musketeers.3379ce86.png","3379ce86f1a427423271542876a570d4"],["/static/media/tombstone.391bf3bb.png","391bf3bbe694af32d1b8875729a7cdcf"],["/static/media/tornado.235fdb87.png","235fdb87753d8cfb913eec573569bd07"],["/static/media/valkyrie.fcd53654.png","fcd53654a0dae031cd7db83eea1abbb0"],["/static/media/witch.d4267cc1.png","d4267cc18eb1cc2325312a26de94df55"],["/static/media/wizard.6c9a710a.png","6c9a710acf367ea68af2952ba9544be0"],["/static/media/x-bow.933eea74.png","933eea74441c6aba61626cedd9184b6c"],["/static/media/zap.8e168792.png","8e1687925787216a89e5e9d14aa6e08b"],["/static/media/zappies.05d57fa3.png","05d57fa32251b335148a208c63975fba"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){var i=new URL(e);return t&&i.pathname.match(t)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),i=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c));var i="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL(i,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});