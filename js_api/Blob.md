# Blob

> 一直以來，JS都沒有比較好的可以直接處理二進制的方法。而斑點的存在，允許我們可以通過JS直接操作二進制數據。

[原文](https://github.com/pfan123/code-snippet/issues/10)



# Blob对象

一个 Blob对象表示一个不可变的, 原始数据的类似文件对象。Blob表示的数据不一定是一个JavaScript原生格式。 [File](https://developer.mozilla.org/zh-CN/docs/Web/API/File) 接口基于Blob，继承 blob功能并将其扩展为支持用户系统上的文件。

## 构造Blob对象

生成Blob对象有两种方法：一种是使用Blob构造函数，另一种是对已有的Blob对象使用slice()方法切出一段。

### Blob构造函数

```
var blob = new Blob(data[, options]))
```

返回一个新创建的 Blob 对象，其内容由参数中给定的数组串联组成。

Blob构造函数接受两个参数：

参数data是一组数据，所以必须是数组，即使只有一个字符串也必须用数组装起来.

参数options是对这一Blob对象的配置属性，目前也只有一个type也就是相关的MIME需要设置 type的值：
`'text/csv,charset=UTF-8'` 设置为csv格式，并设置编码为`UTF-8，'text/html'`设置成html格式。

> 注意：任何浏览器支持的类型都可以这么用

```
var blob = new Blob(['我是Blob'],{type: 'text/html'});
```

### Blob属性

```
blob.size   //Blob大小（以字节为单位）
blob.type   //Blob的MIME类型，如果是未知，则是“ ”（空字符串）
```

### slice() 创建

>  slice()返回一个新的Blob对象，包含了源Blob对象中指定范围内的数据。

```
Blob.slice([start[, end[, contentType]]])
```

参数说明：

- start 可选，开始索引,可以为负数,语法类似于数组的slice方法.默认值为0.
- end 可选，结束索引,可以为负数,语法类似于数组的slice方法.默认值为最后一个索引.
- contentType可选 ，新的Blob对象的MIME类型,这个值将会成为新的Blob对象的type属性的值,默认为一个空字符串.



## URL.createObjectURL()

URL.createObjectURL() 静态方法会创建一个 DOMString，其中包含一个表示参数中给出的对象的URL。这个 URL 的生命周期和创建它的窗口中的 document 绑定。这个新的URL 对象表示指定的 File 对象或 Blob 对象。

```
objectURL = URL.createObjectURL(blob);
```

使用URL.createObjectURL()函数可以创建一个Blob URL，参数blob是用来创建URL的File对象或者Blob对象，返回值格式是：blob://URL。

> 在每次调用 createObjectURL() 方法时，都会创建一个新的 URL 对象，即使你已经用相同的对象作为参数创建过。当不再需要这些 URL 对象时，每个对象必须通过调用 URL.revokeObjectURL() 方法传入创建的URL为参数，用来释放它。浏览器会在文档退出的时候自动释放它们，但是为了获得最佳性能和内存使用状况，应该在安全的时机主动释放掉它们。

## URL.revokeObjectURL()

URL.revokeObjectURL() 静态方法用来释放一个之前通过调用 URL.createObjectURL() 创建的已经存在的 URL 对象。当你结束使用某个 URL 对象时，应该通过调用这个方法来让浏览器知道不再需要保持这个文件的引用了。

```
window.URL.revokeObjectURL(objectURL);
```

> 参数: objectURL 是一个通过URL.createObjectURL()方法创建的对象URL.



## Blob的使用

1. 使用Blob最简单的方法就是创建一个URL来指向Blob：

```
<a download="data.txt" id="getData">下载</a>   

var data= 'Hello world!';  
var blob = new Blob([data], {   
  type: 'text/html,charset=UTF-8'   
});
window.URL = window.URL || window.webkitURL; 
document.querySelector("#getData").href = URL.createObjectURL(blob);
```

上面的代码将Blob URL赋值给a，点击后提示下载文本文件data.txt，文件内容为“Hello World”。

2.Blob 响应

```
window.URL = window.URL || window.webkitURL;  // Take care of vendor prefixes.

var xhr = new XMLHttpRequest();
xhr.open('GET', '/path/to/image.png', true);
xhr.responseType = 'blob';
xhr.send()

xhr.onload = function(e) {
  if (this.status == 200) {
    var blob = this.response;

    var img = document.createElement('img');
    var URL = window.URL || window.webkitURL;  //兼容处理
    var objectUrl = URL.createObjectURL(blob);
    img.onload = function(e) {
      window.URL.revokeObjectURL(img.src); // 释放 url.
    };

    img.src = objectUrl;
    document.body.appendChild(img);
    ...
  }
};

xhr.send();
```

## 总结

目前，Blob对象大多是运用在，处理大文件分割上传（利用Blob中slice方法），处理图片canvas跨域(避免增加crossOrigin = "Anonymous",生成当前域名的url，然后 URL.revokeObjectURL()释放，createjs有用到)，以及隐藏视频源路径等等。

① 大文件分割上传

```
function upload(blobOrFile) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/server', true);
  xhr.onload = function(e) { ... };
  xhr.send(blobOrFile);
}

document.querySelector('input[type="file"]').addEventListener('change', function(e) {
  var blob = this.files[0];

  const BYTES_PER_CHUNK = 1024 * 1024; // 1MB chunk sizes.
  const SIZE = blob.size;

  var start = 0;
  var end = BYTES_PER_CHUNK;

  while(start < SIZE) {
    upload(blob.slice(start, end));

    start = end;
    end = start + BYTES_PER_CHUNK;
  }
}, false);

})();
```

② 图片跨域请求，处理跨域问题，参考 [createjs ImageLoader.js](http://createjs.com/docs/preloadjs/files/preloadjs_loaders_ImageLoader.js.html#l37)

③ 隐藏视频源路径

```
var video = document.getElementById('video');
var obj_url = window.URL.createObjectURL(blob);
video.src = obj_url;
video.play()
window.URL.revokeObjectURL(obj_url);
```

> 在使用 preloadJS处理加载问题时，我们可以绕过其他方式跨域Queue = new createjs.LoadQueue(true, '', "Anonymous"); `语法 LoadQueue (preferXHR, basePath, crossOrigin)`则可以达到 image.crossOrigin = "Anonymous"设置跨域的效果，这个文档里面没有说明，需要阅读源码才能知道。

④ 使用 createObjectURL(blob) 输出页面，移动端长按保存，转发