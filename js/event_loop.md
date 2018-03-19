
### Event-Loop

> microtasks 會先執行完，才會去執行 marcotasks 

```
[MACROTASK](tasks): script(整体代码), setTimeout, setInterval, setImmediate, I/O, UI rendering
[MICROTASK](jobs): process.nextTick, Promise, Object.observe(已废弃), MutationObserver(html5新特性)
```

首先, 全部代碼(script) 算是一個 `macrotask`.

第一步：瀏覽器先執行一個 macrotask -> 全部代碼(script)，並且掛起 tasks queue and jobs queue
第二步：執行 micro -> 將所有的 mircotask queue 取出
第三步：執行 macro -> 將所有的 marcotask queue 取出
第四步：看 mirco 裡面有沒有 queue 或是 看 marco 裡面有沒有 queue

所有 queue 都 clean，結束。

ex: 
```
`input:`
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

`output`: 

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

`過程：`

在 script(marcotask)

console.log -> start - 1, start - 2
insert marcotask: 0-1, 1000, 0-2, 2000, Promise-1000, Promise-2000
       mircotask: P1, P2

之後就繼續反覆查看 mircotask and marcotask queue 裡面有沒有東西
```

