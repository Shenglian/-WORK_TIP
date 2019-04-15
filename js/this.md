#### This (指向，及目標方向，所對的方位)

- 普通調用 - (誰調用，就指向誰)
- apply/call [前往](https://github.com/Shenglian/work-tip/blob/master/scope.md)
- arrow function this === current function ( 箭頭函數內部不會定義`this`，都是由它外部的詞法作用域來決定的，也就是說，箭頭函數的外部的`this`指向的是誰，那箭頭函數內部的`this`指向的也是誰 )
- normal function this === window
- (This in JavaScript)[https://zellwk.com/blog/this/]
  ps1. 要注意 native function 是依附在誰身上，裡面的 cb this 會指向它
  ps2. simple function this 都是指向 windows



```js
var o = {
    doSomeThingLater() {
        console.log('1. where is this? ', this);
        setTimeout(function(){
            console.log('2. where is this? ', this);
            try {
                this.speakLeet();
            } catch(error) {
                console.log('error', error);
            }
        }, 0)
    },
    speakLeet() {
        console.log('Here is speakLeet function');
    },
    todoList() {
        console.log('3. where is this? ', this);
        this.speakLeet();  
    },
}

o.todoList();
o.doSomeThingLater();
```



### 用 ECMAScript 規範解讀 this

[文章出處](<https://juejin.im/post/5c1c5bfcf265da614c4cc40e#heading-6>)



![img](https://user-gold-cdn.xitu.io/2018/12/21/167cec74a1455c7b?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



1. ##### 在對象內部調用

```js
let a = 'm';
function test() {
  console.log(this.a);
}
test(); // m
/*
我們用剛剛所看到的3個步驟來判斷下this:

1. test()的Ref就是test引用，它關聯到在內存中存儲了test()的某一片段。
2. 判斷test()是否為引用類型=>true
3. 判斷Ref是否是屬性引用類型=> false，它並沒有定義在某個引用類型的內部。
4. 進入到圖中的第九個步驟：this = ImplicitThisValue(Ref)，在Environment Records下返回undefined,而在非嚴格模式下，瀏覽器會把this指向window

*/ 

```



2. ##### 在對象內部調用

```js
function test() {
  console.log(this.a);
}
let parent = {
  a: 's',
  test: test
};
parent.test(); // s
/*
1. parent.test()的Ref就是parent.test引用，它關聯到在內存中存儲了test()的某一片段。
2. 判斷parent.test()是否為引用類型=>true
3. 判斷Ref是否是屬性引用類型=>true
4. 進入到圖中的第八個步驟：this = GetBase(Ref)那這個test()方法是基於誰呢？很明顯就是parent,所以this指向parent
*/
```

