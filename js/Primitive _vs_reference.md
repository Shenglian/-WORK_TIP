[文章出處](<https://segmentfault.com/a/1190000002789651>)



```js
isPrimitive ? 'Undefined，Boolean，Number，String，Null，Symbol' : 'other'
```



`Primitive` 賦與值會開闢新的 `"栈"`

```js
var a = 10;
var b = a;

a ++ ;
console.log(a); // 11
console.log(b); // 10
```



`Reference Type` 是存在 `"堆"`

```js
var a = {}; // a保存了一个空对象的实例
var b = a;  // a和b都指向了这个空对象

a.name = 'jozo';
console.log(a.name); // 'jozo'
console.log(b.name); // 'jozo'

b.age = 22;
console.log(b.age);// 22
console.log(a.age);// 22

console.log(a == b);// true
```



`栈`：程序运行时系统分配的一小块内存，大小在编译期时由编译器参数决定。

`堆`：可以理解为当前可以使用的空闲内存，其大小是需要代码编写的人员自己去申请和释放。（在 JS 中，V8 下有自动垃圾回收机制不需要我们自己操作） [这里只做简单解释，有需要可以自行 Google 更多信息]





