
### Event-Loop

> 1. microtasks 會先執行完，才會去執行 marcotasks 
> 2. 事件循環由三部分組成：執行（宏）任務，執行microtask。
>    UI渲染具體步驟：執行一個（宏）任務（整體代碼也是一個宏觀的任務），然後清空microtask隊列，最後UI渲染（並不是每次都會執行渲染，瀏覽器只需保證60Hz的刷新率即可）。
>
> 3. 看一下瀏覽器執行一次UI渲染的基本流程：
>
> - 解構HTML構建DOM樹;
> - 解構CSS構建CSSOM樹;
> - 結合DOM樹與CSSOM樹構建渲染樹;
> - 根據渲染樹計算每個節點的位置信息;
> - 在屏幕上繪製節點。
>
> 4. 可以看到，一次UI渲染瀏覽器的計算量是非常大的，所以 Vue 在 nextTick 函數的實現中優先使用microtask，因為一次渲染之前只會執行一個（宏）任務，但會執行完所有的microtask。

```
[MACROTASK](tasks): script(整体代码), setTimeout, setInterval, setImmediate, I/O, UI rendering
[MICROTASK](jobs): process.nextTick, Promise, Object.observe(已废弃), MutationObserver(html5新特性)
```

首先, 全部代碼(script) 算是一個 `macrotask`.

- 第一步：瀏覽器先執行一個 macrotask `全部代碼(script)`，並且掛起 tasks queue and jobs queue
- 第二步：執行 micro -> 將清空所有的 mircotask queue 
- 第三步：執行 macro -> 將所有的 marcotask queue 取出
- 第四步：看 mirco 裡面有沒有 queue 或是 看 marco 裡面有沒有 queue

- 所有 queue 都 clean，結束。

ex: 
`input:`
```js
console.log('start - 1'); 

setTimeout(function(){ 
  console.log('0-1');
}, 0);

setTimeout(function(){ 
  console.log('1000');
}, 1000);

Promise.resolve().then(function() { 
  console.log('Promise1-1');
  setTimeout(function(){ 
    console.log('Promise1-1000');
  }, 1000);
}).then(function(){
  console.log('Promise1-2');
}).then(function() {
  console.log('Promise1-3');
})

console.log('start - 2'); 

setTimeout(function(){ 
  console.log('0-2');
}, 0);

setTimeout(function(){ 
  console.log('2000');
  Promise.resolve().then(function() { 
    console.log('額外題');
  })
}, 1000);

Promise.resolve().then(function() { 
  console.log('Promise2-1');
  setTimeout(function(){ 
    console.log('Promise2-1000');
  }, 1000);
}).then(function(){
  console.log('Promise2-2');
});
```
`output`: 
```js
start - 1
start - 2
Promise1-1
Promise2-1
Promise1-2
Promise2-2
Promise1-3
0-1
0-2
1000
2000
Promise1-1000
Promise2-1000
額外題
```
`過程：`
```js
在 script(marcotask)

console.log -> start - 1, start - 2
insert marcotask: 0-1, 1000, 0-2, 2000, Promise-1000, Promise-2000
       mircotask: P1, P2

之後就繼續反覆查看 mircotask and marcotask queue 裡面有沒有東西
```

實作1：

可以調整事件的發生順序。

```js
var input = document .getElementsByTagName( 'input[type=button]' )[ 0 ];

input.onclick = function  A () { 
  setTimeout( function  B () { 
    input.value += ' input' ; 
  }, 0 ) 
};

document .body.onclick = function  C () { 
  input.value += ' body'
 };
```

實作2：

如果一段程序過大，我們可以拆分成若干細小的塊。

```js
var div = document .getElementsByTagName( 'div' )[ 0 ];

//寫法一
for ( var i= 0xA00000 ;i< 0xFFFFFF ;i++) { 
  div.style.backgroundColor = '#' +i.toString( 16 ); 
}

//寫法二
var timer; 
var i= 0x100000 ;

function  func () { 
  timer = setTimeout(func, 0 ); 
  div.style.backgroundColor = '#' +i.toString( 16 ); if (i++ == 0xFFFFFF ) clearInterval(timer); }
  


timer = setTimeout(func, 0 );
```



資料來源：

1. [Philip Roberts: Help, I’m stuck in an event-loop.](https://vimeo.com/96425312)
2. [Promise的队列与setTimeout的队列有何关联？](https://www.zhihu.com/question/36972010)