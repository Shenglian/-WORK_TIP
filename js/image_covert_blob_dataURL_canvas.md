### blob 轉成 dataURL

> blob 和 file 都可以使用，從 blob 讀取資料的唯一方式就是使用 FileReader。

```js
function blobToDataURL(blob, callback) {
    var fr = new FileReader();
    fr.onload = function(e) {
        callback(e.target.result);
    };
    fr.readAsDataURL(blob)
}

blobToDataURL(blob, function(dataURL) {
    console.log(dataURL)
})
```



### dataURL 繪製到 canvas

> 新增一個 image 和 canvas，image src 屬性帶入 dataURL，然後用 canvas drawImage 繪製剛才新增的 image。之後就可以用 canvas 來幫 image 做很多事，例如裁切、縮放、打字、畫線條等等。

```JS
var img = new Image(),
    canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');

img.onload = function () {
    ctx.drawImage(img)
}

img.src = dataURL;
```



### canvas 轉成 dataURL

> EASY WAY

```js
canvas.toDataURL();					// 預設會轉成 image/png
canvas.toDataURL('img/jpeg', 0.8) 	// 可指定 jpeg 品質
```



### canvas 轉成 blob

> 目前只有 Firefox 支援，其他瀏覽器可使用 [canvas-to-blob.js](https://github.com/blueimp/JavaScript-Canvas-to-Blob)



```js
canvas.toBlob(function(blob){
    console.log(blob);
}, "image/jpeg", 0.8);
```



### dataURL 轉成 blob

> 資源來源：[stackoverflow](http://stackoverflow.com/questions/4998908/convert-data-uri-to-file-then-append-to-formdata)

```js
function dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], {type:mimeString});
}
```

