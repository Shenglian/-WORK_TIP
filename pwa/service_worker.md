### Vue + PWA實踐過程 [Source](https://juejin.im/post/5de8c1ade51d45582f582bd2)

### pwa在项目中的实践 [Source](https://www.yuque.com/endday/blog/pwa)

### PWA進階：Service Worker一問一答
PWA的核心在於Service Worker，目前中文社區中關於Service Worker的知識深度普遍不夠，難以應對實際項目中的問題。例如我想要知道在卸載sw（下文簡稱sw）後需不需要手動清理caches，搜索引擎是沒有什麼好答案的。這篇文章結合淘寶首頁PWA的經驗，分享出我認為非常有價值的關於Service Worker的知識點。

先從註冊說起，sw應該在什麼時候註冊？
一些教程是這樣註冊sw的

```js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
}
```

這樣做會造成第一個問題，sw線程將加劇對CPU和內存的使用，並且sw內預緩存的資源是需要下載的，移動設備帶寬有限，sw線程佔用的同時，主進程帶寬就變成了小水管了。

首次打開各種資源都非常寶貴，況且是漸進式，完全沒有必要爭第一次打開頁面就要緩存資源。正確的做法是，頁面加載完以後sw的事。

```js
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js');
  });
}
```

我想註銷所有已註冊用戶的sw，怎麼做才最穩妥？
並不是所有移動端瀏覽器都支持getRegistrations，getRegistration更靠譜，可以先嘗試使用getRegistrations，如果無法使用再嘗試getRegistration，如下。

```js
var serviceWorker = navigator.serviceWorker;

serviceWorker.getRegistrations ? serviceWorker.getRegistrations().then(function(sws) {
  sws.forEach(function(sw) {
    sw.unregister();
  });
}) : serviceWorker.getRegistration && serviceWorker.getRegistration().then(function(sw) {
  sw && sw.unregister();
});
```

我註銷了sw，之前留下的caches還需要自己動手處理嗎？
需要，cacheStorage雖然屬於PWA規範API當中，但它是獨立的，雖然註銷了service worker，caches裡垃圾不清掉，它就會一直留在那裡了。這麼清

```js
window.caches && caches.keys && caches.keys().then(function(keys) {
  keys.forEach(function(key) {
    caches.delete(key);
  });
});
```

該不該使用self.clients.claim？
clients.claim的作用是使當前SW接管已經打開的所有標籤頁，使用場景是用戶首次打開註冊sw的頁面時，還存在其他同域頁面的瀏覽器標籤的情況。之前打開的頁面沒有被接管，所以通過clients.claim接管已經打開但沒受到控制的瀏覽器標籤頁面。

skipWaiting的使用場景是在sw更新時，因為有上一個sw正在控制著所有該站點的頁面，新的sw在active後進入waiting狀態，直到用戶將所有該站點頁面關閉，新的sw才上位。這跟Chrome和VScode的更新機制一樣，在使用過程中有更新的時候，並不影響你繼續使用老版本，而是在重啟程序後，直接才變成新版。通過skipWaiting方法，可以直接讓waiting狀態的新sw替換掉老的sw，注意還會自動接管上一個sw管轄的頁面。

我是不推薦使用clients.claim的，首先出現不受控標籤的情況相對比較少，況且首次加載速度尤其重要，能省點開銷就省點吧。

在sw裡監聽fetch事件，請求多過了一層sw，會有性能損耗嗎？
當然會，像下面這樣搞，是萬萬不要的

```js
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
```

為什麼我在sw中postMessage到頁面，頁面無法收到message
這是在測試serviceWorker的postMessage能力時，經常遇到的一個問題，想要找到原因就要從sw接管的頁面說起。在sw.js中使用self.clients.matchAll方法獲取當前serviceWorker實例所接管的所有標籤頁，注意是當前實例已經接管的，並且sw.js中的代碼只會執行一次，當sw.js代碼中存在如下代碼時

```js
self.clients.matchAll()
  .then(function (clients) {
    clients.forEach(client => {
      client.postMessage('这条消息不会被收到');
    })
  });
```

clients一定是個空數組，所以永遠也postMessage不到頁面。那要如何才能在首次install就postMessage到頁面上那？答案是self.skipWaiting，然後在activate事件中使用self.clients.matchAll，因為調用了skipWaiting，當前的sw在install以後會立刻avtivate並接管上一個sw的所有標籤頁，這樣就能在新sw中拿到標籤頁postMessage了

```js
self.skipWaiting()
self.addEventListener('activate', () => {
  self.clients.matchAll()
    .then(function (clients) {
      clients.forEach(client => {
        client.postMessage('skipWaiting让新的sw接管了页面，这样就可以收到');
      })
    });
})
```