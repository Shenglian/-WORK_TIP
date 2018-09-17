# ArrayBuffer

 

> 簡單說，就是一大片內存

 

JS裡的Array，因為有很多功能，而且是不限制類型的，或者它還可能是稀疏的……總之這個Array是“託管”的，它內部有比較複雜的實現。
而如果你從XHR、File API、Canvas等等各種地方，讀取了一大串字節流，如果用JS裡的Array去存，又浪費，又低效。
於是為了配合這些新的API增強JS的二進制處理能力，就有了ArrayBuffer。

ArrayBuffer簡單說是一片內存，但是你不能（也不方便）直接用它。這就好比你在C裡面，malloc一片內存出來，你也會把它轉換成unsigned_int32或者int16這些你需要的實際類型的數組/指針來用。

這就是JS裡的TypedArray的作用，那些Uint32Array也好，Int16Array也好，都是給ArrayBuffer提供了一個“View”，MDN上的原話叫做“Multiple views on the same data”，對它們進行下標讀寫，最終都會反應到它所建立在的ArrayBuffer之上。

除了TypedArray以外，也可以使用DataView來讀寫ArrayBuffer，這樣會麻煩一些，但也更靈活。DataView能更自由的選擇字節序，對於對齊的要求也更低。



應用：

→ websocket通訊，用buffer傳二進制數據流，減少冗餘的字符，更高效。

→ 上傳圖片讀取圖片顯示，或者把canvas轉成圖片下載，通常需要用到Blob對象，Blob對象的參數類型就是arrayBuffer