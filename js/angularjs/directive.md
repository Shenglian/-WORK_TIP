## $eval, $parse 和 $observe 的使用狀況，最基本的狀況如下 (沒有 isolate scope)：

```js
angular.directive('foo', function() {
  var linker = function(scope, element, attrs) {
    ...
  };
  return {
    restrict: 'EA',
    link: linker
  };
});
```

### 想要在沒有 isolate scope 的 directive 中取出 foo 的屬性值，會有幾種狀況：

1. foo 屬性值是固定的字串值，例如想要傳 class name，id 等。

```html
<div foo="fadeOut"></div>
```
因為這種狀況是直接給定固定字串值，可以直接在 foo directive 中的 link function 直接取出屬性值，attrs.foo。

 
2. foo 屬性值是非字串的值，例如：boolean, number 等。
```html
<div foo="true"></div>, <div foo="123"></div>
```
如果透過 attrs.foo 直接取值的話會是字串型態，但是我想要取值後就是正確的 type 的話，可以使用 scope.$eval(attrs.foo)。

3. foo 屬性質是一個 scope property。

```js
angular.controller('BarCtrl', function($scope) {
  $scope.bar = {
    test: ''
  };
});
```
```html
<div ng-controller="BarCtrl">
  <div foo="bar.test"></div>
</div>
```

> 如果想要在 foo directive 中去更動 bar.test 的值的話，可以使用 $parse 來取值，$parse(attrs.foo)，$parse 會 return 一個 function，之後你可以透過這個 function 的 assign property 去設定 bar.test 的值：
```js
var model = $parse(attrs.foo);
model.assign(scope, 'Hello world');    // scope 為 link function 的 scope
```

4. foo 屬性值是 interpolated attribute。
```html
<div foo="{{1+1}}"></div>, <div foo="{{bar}}"></div>
```

如果直接在 link function 直接使用 attrs.foo 取值的話，會是 undefined，因為此時 interpolated attribute 尚未被 evaluated，所以我們可以透過 $observe 來取值，attrs.$observe

以上是 directive 取屬性值的狀況。

[資料來源：](http://zack9433.pixnet.net/blog/post/164296263-%5Bangularjs%5D-%E5%8D%80%E5%88%A5-%24eval%2C-%24parse-%E5%92%8C-%24observe)
