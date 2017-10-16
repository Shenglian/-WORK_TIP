# Caller and Callee

### Caller
  調用者返回一個對函數的引用，該函數調用了當前函數。
  對於函數來說，調用者屬性只有在函數執行時才有定義。如果函數是由Javascript程序的頂層調用的，那麼調用者包含的就是null。
```js
function callerDemo() {
  if (callerDemo.caller) {
      var a = callerDemo.caller.toString();
      alert(a);
      console.log('hereeeeee')
  } else {
      alert("this is a top function");
  }
}

function handleCaller() {
  callerDemo();
}

function calleeDemo() {
  alert(arguments.callee);
}

callerDemo();
calleeDemo();
handleCaller();
```

### Callee
  返回正被執行的功能對象，也就是所指定的功能對象的正文。
```js

//callee可以打印其本身
function calleeDemo() {
  console.log(arguments.callee.toString());
}
//用于验证参数
function calleeLengthDemo(arg1, arg2, arg3) {
  if (arguments.length == arguments.callee.length) {
    console.log("验证形参和实参长度正确！");
    return;
  } else {
    console.log("实参长度：" + arguments.length);
    console.log("形参长度： " + arguments.callee.length);
  }
}

calleeDemo();
calleeLengthDemo('1', 4);
```
```js
// 生成十六進位顏色值
let getRandomColor = function(){    
  return  '#' + (function(color){    
    return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)]) && 
    (color.length == 6) ? color : arguments.callee(color);    
  })('');    
}
```

  