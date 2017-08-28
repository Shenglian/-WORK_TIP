
[O_nonation_img]: https://github.com/Shenglian/WORK_TIP/blob/master/imgs/observer.png

# work-tip
工作上小技巧

## 需要做筆記
* [JavaScript 疲劳终极指南：我们行业的真相](http://www.zcfy.cc/article/3914)
* [CSS技巧之'text-justify'](http://www.zcfy.cc/article/text-justify-css-tricks-3946.html?t=new)
* [Node.js教程：使用async库来优化代码 - Node Beginner Blog](https://goo.gl/z6Cssp)
* [去其糟粕，取其精华——我如何重拾对 JavaScript 的爱](https://goo.gl/BC27fU) - 
  - functional javascript
  - replace `for loop`, `break`, `switch`
* [八段代码彻底掌握Promise](https://goo.gl/xW8AMm)
* [JavaScript核心概念归纳整理](https://mp.weixin.qq.com/s/I7A1iC8Et6uOGZ234DsTlA)

## 演算法

1. [演算法](https://sort.hust.cc/1.bubbleSort.html)
2. [算法：找出缺失的整数](http://blog.jobbole.com/106521/)
3. [算法：如何判断链表有环？](http://blog.jobbole.com/106227/#comment-158642)
4. [算法：什么是 B 树？](http://blog.jobbole.com/111757/)

### Time vs input size
![Time_vs_input_size][O_nonation_img]

* fizzbuzz
```js
function fizzbuzz(num) {
  if (num % 5 === 0 && num % 3 === 0) {
    console.log('fizzbuzz');
  } else if (num % 3 === 0) {
    console.log('fizz');
  } else if (num % 5 === 0) {
    console.log('buzz');
  } else {
    console.log(i);
  }
}
```
* Harmless Ransom Note
```js
function harmlessRansomNote (noteText, magazineText) {
  var noteArr = noteText.split(' ');
  var magazineArr = magazineText.split(' ');
  var magazineObj = {};

  magazineArr.forEach(word => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });

  var noteIsPossible = true;
  noteArr.forEach(word => {
    if (!magazineObj[word]) {
      noteIsPossible = false;
    }
  });

  return noteIsPossible;
}
```
* isPalindrome
```js
function isPalindrome(str) {
  var re = /[^A-Za-z0-9]/g;
  var string = str.toLowerCase().replace(re, '');
  var reserveString = string.split('').reverse().join('');

  return string === reserveString;
}
```

## Javascript 

### Basic

  > var, fn, let, const [出處](https://zhuanlan.zhihu.com/p/28140450)

  In JavaScript, all binding declarations are instantiated when control flow enters the scope in which they appear. Legacy var and function declarations allow access to those bindings before the actual declaration, with a "value" of undefined. That legacy behavior is known as "hoisting". let and const binding declarations are also instantiated when control flow enters the scope in which they appear, with access prevented until the actual declaration is reached; this is called the Temporal Dead Zone. The TDZ exists to prevent the sort of bugs that legacy hoisting can create. -- [來源](https://gist.github.com/rwaldron/ca35924d59ddc60a6aa165e1e4a3acda)
  
  變數三階段： created, initialize, assign 

  > `var`
  有包含這三階段，只有 `created`, `initialize` 被 `hoisting` 。 `initialize` 時，為 undefined。
  > `fn` 
  有包含這三階段，並且都被 `hoisting` 。
  > `let`, `const` 
  只有在 `created` 階段才有被 `hosting`，在沒有任何的 `initialize` 的情形發生，強制讀取 `let` or `const` 只是會發生reference error : let x is not defined
  > `const` 
  沒有 assign （很合理）

  - 結論：`let` and `const` 這些 keyword 會被這樣設計的原因。可能是要降低記憶體吧（其中之一）。當需要用到的時候，再去 `initialize` ，然後使用它們。


  > for-in
  ```js
  for (let index in values) {
    console.log('index =>', index);
    console.log(`${index} =>`, values[index]);
  }
  ```

  > Decimal base exponents
  ```js
  1e0 === 1;
  1e1 === 10;
  1e2 === 100;
  1e3 === 1000;
  ```

  > Implicit Return Shorthand
  ```js
  function calcCircumfunction(diameter) {
    return Math.PI * diameter;
  }

  |||

  calcCircumfunction = diameter => (
    Math.PI * diameter;
  )
  ```

  > Mandatory Parameter Shorthand
  ```js
  mandatory = () => {
    throw new Error('Missing parameter');
  }

  foo = (bar = mandatory()) => {
    return bar;
  }
  ```

  > Operator Shorthand
  ```js
  if (x) {
    y();
  }

  |||

  // Shorthand:
  x && y();

  ```
  > Prototype
  * [Javascript 原型中的哲学思想](https://goo.gl/nRNrke) 
  * [JavaScript 的 constructor 、 prototype 和 __proto__ 屬性](https://github.com/Shenglian/JavaScript-notes-from-Xitun/blob/master/Javascript-prototype.md)
  * [js中__proto__和prototype的区别和关系？](https://www.zhihu.com/question/34183746)
  * [該來理解 JavaScript 的原型鍊了](http://blog.techbridge.cc/2017/04/22/javascript-prototype/)

  > Scope
  * [講解 javascript Scope](https://github.com/Shenglian/work-tip/blob/master/scope.md)

  > Closures

  > This (指向，及目標方向，所對的方位)
  * 普通調用 - (誰調用，就指向誰)
  * apply/call [前往](https://github.com/Shenglian/work-tip/blob/master/scope.md)
  * arrow function this === current function
  * normal function this === window
  * (This in JavaScript)[https://zellwk.com/blog/this/]
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
    

  > Event-Loop
    ```
    macrotask（tasks）: script(整体代码), setTimeout, setInterval, setImmediate, I/O, UI rendering
    microtask（jobs）: process.nextTick, Promise, Object.observe(已废弃), MutationObserver(html5新特性)'

    microtasks 會先執行完，才會去執行 marcotasks 
    ```
  * [前端基础进阶（十二）：深入核心，详解事件循环机制](http://www.jianshu.com/p/12b9f73c5a4f#)
  * *[Philip Roberts: What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ) - JavaScript programmers like to use words like, “event-loop”, “non-blocking”, “callback”, “asynchronous”, “single-threaded” and “concurrency”.
  * [浏览器渲染详细过程：重绘、重排和 composite 只是冰山一角](https://juejin.im/entry/590801780ce46300617c89b8)
  * [JavaScript中的microtask与task](https://flyyang.github.io/2017/03/07/javascript%E4%B8%AD%E7%9A%84microtask%E4%B8%8Etask/)

  > Other 
  * By value vs by reference [前往](https://github.com/Shenglian/work-tip/blob/master/js/by_value_vs_by_reference.md)
  * Javascript分号，加还是不加？[前往](https://segmentfault.com/a/1190000000437434)
  
  ```js
    s = function(x){return x}
    (1 + 2).toString()
    // parse to 
    s = function(x){return x}(1 + 2).toString()
    // so we can to 
    s = function(x){return x}
    ;(1 + 2).toString()
    // we often to see 
    ;(function(){
        // ...
    })();
    // 在 function 的前面加了一个分号，目的就是为了防止整个函数的返回值作为参数送入上一条语句之中。
  ```
  
> Js Api
  * Date [前往](https://github.com/Shenglian/work-tip/blob/master/js_api/date.md)

  * Fullscreen
    * [fullscreen api](https://heeroluo.net/article/detail/97/native-fullscreen-javascript-api)    
    * [Display fullscreen website using javascript (Internet Explorer/Safari/Chrome/Firefox)](http://xme.im/display-fullscreen-website-using-javascript)
  
  * Animatie
    [前往](https://javascript.info/js-animation)
  * [js 常用api背诵](http://www.jianshu.com/p/b678628d114c)

  * [常用API合集](https://www.kancloud.cn/dennis/tgjavascript/241852)

> Vanilla
* [The Basics of DOM Manipulation in Vanilla JavaScript (No jQuery)](https://goo.gl/Pd9ym7)
* [不可错过的javascript迷你库](http://yanhaijing.com/javascript/2015/12/29/mini-js-lib/)

```js

// 同時監聽許多元素時，透過 event.target 來取得是哪個元素觸發的。
Array.from(allElements).forEach(element => {
  element.addEventListener('change', function (event) {
    console.log(event.target.value)
  })
})
```

```js
// animate window.requestAnimationFrame()
const start = window.performance.now()
const duration = 2000

window.requestAnimationFrame(function fadeIn (now) {
  const progress = now - start
  oneElement.style.opacity = progress / duration

  if (progress < duration) {
    window.requestAnimationFrame(fadeIn)
  }
}
```

```js

// http://stackoverflow.com/questions/7452341/what-does-void-0-mean
// 原本 undefined 是可以被 overwirten ，但是 ES5 之後就不行了

void 0; // undefied;

```

> Promise

* [透彻掌握 Promise 的使用，读这篇就够了](https://juejin.im/entry/58e1d720ac502e006c0e0196)
* [從Promise開始的JavaScript異步生活](https://eyesofkids.gitbooks.io/javascript-start-es6-promise/content/)
* [八段代码彻底掌握Promise](https://goo.gl/7dnJR5) 

> Async Await

1. [[Javascript] ES7 Async Await 聖經](https://medium.com/@peterchang_82818/javascript-es7-async-await-%E6%95%99%E5%AD%B8-703473854f29-tutorial-example-703473854f29)
2. [JavaScript 好用的 async 異步函數！ ](http://fred-zone.blogspot.tw/2016/07/javascript-async.html)
3. [JavaScript async/await 的奇淫技巧 ](http://fred-zone.blogspot.tw/2017/04/javascript-asyncawait.html)
4. [Callback Promise Generator Async-Await 和异常处理的演进](http://www.jianshu.com/p/78dfb38ac3d7)

> 面試

1. [80% 应聘者都不及格的 JS 面试题](https://juejin.im/post/58cf180b0ce4630057d6727c)

> Variable

> Function

1. [剩余参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Rest_parameters)
2. [扩展语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_operator)

> String 

1. [replace](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
2. [search](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search)

## Angularjs

1. directive [區別 $eval, $parse 和 $observe](https://github.com/Shenglian/work-tip/blob/master/angularjs/directive.md)
  * 參考 [angular-infinite-scroll](https://github.com/sparkalow/angular-infinite-scroll/blob/master/src/infinite-scroll.js)
  
## Vue

* VueCheatSheet
  * [vuex-cheatsheet](https://vuejs-tips.github.io/vuex-cheatsheet/#)
  * [vue-cheatsheet](https://vuejs-tips.github.io/cheatsheet/)

* [Vue 插件開發](https://zhuanlan.zhihu.com/p/26057542)
* [Vue.js 组件编码规范](https://pablohpsilva.github.io/vuejs-component-style-guide/#/chinese?id=vue-%E7%BB%84%E4%BB%B6%E5%91%BD%E5%90%8D)
* [提高 webpack 构建 Vue 项目的速度](https://github.com/lin-xin/blog/issues/10)
* [如何写一手漂亮的 Vue](http://jeffjade.com/2017/03/11/120-how-to-write-vue-better/)
* [Axios 入門配置](https://blog.ygxdxx.com/2017/01/29/Axios-Config/)

* [Vuejs-tips](https://medium.com/vuejs-tips)
  * [Always declare your data before use it](https://goo.gl/duZYY6)
  * [Reactive dynamic properties - use $set](https://goo.gl/2RpNXE)
  *  [vue中的$set](http://www.jianshu.com/p/358c1974d9a5)
  * [Deleting Array index in Vue.js - this.
  > Other 
  * [Vue2.0 源码阅读：模板渲染](http://zhouweicsu.github.io/blog/2017/04/21/vue-2-0-template/)
  
* [Vue2.0 原始碼簡析：](https://github.com/Shenglian/work-tip/blob/master/vuejs/vue.m

> Js Api
  delete](https://goo.gl/2ffvqE)
* [个迷你vue库，虽然小但功能全面，可以作为想了解vue背后思想以及想学习vue源码而又不知如何入手的入门学习资料。](https://github.com/xiaofuzi/deep-in-vue/blob/master/src/the-super-tiny-vue.js)

* [入門 vuex](https://github.com/Shenglian/work-tip/blob/master/vuejs/vuex.md)


## Highcharts

1. [Highcharts API 文档 v5.0.7](https://api.hcharts.cn/highcharts)

## Public API

1. [Public APIs](https://github.com/toddmotto/public-apis)

## Css

### Cursor

* [Cursor Style](https://css-tricks.com/almanac/properties/c/cursor/)

### Layout

* [CSS Grid VS Flexbox: A Practical Comparison](http://tutorialzine.com/2017/03/css-grid-vs-flexbox/)
* [Grid Garden is a game for learning CSS grid layout](http://cssgridgarden.com/)
* [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/?utm_campaign=CodeTengu&utm_medium=email&utm_source=CodeTengu_99)
* [Flexboxdefense](http://www.flexboxdefense.com/)
* [Flex 基礎文章](http://www.w3cplus.com/css3/understanding-flexbox-everything-you-need-to-know.html)
* [Flex 比較深入的文章](http://www.w3cplus.com/css3/flexbox-layout-and-calculation.html)

### css variables
* [CSS 变量教程](http://www.ruanyifeng.com/blog/2017/05/css-variables.html)

> Tip

1. [css-protips](https://github.com/AllThingsSmitty/css-protips)
2. [Let’s Look at 50+ Interesting CSS Properties & Values](https://css-tricks.com/lets-look-50-interesting-css-properties-values/?utm_source=frontendfocus&utm_medium=email#all)

> Unix 

1. [7个你可能不认识的CSS单位](https://github.com/simaQ/cssfun/issues/1)

## Webpack

> CommonsChunkPlugin

1. [CommonsChunkPlugin](https://medium.com/webpack/webpack-bits-getting-the-most-out-of-the-commonschunkplugin-ab389e5f318)
2. [HTML-WEBPACK-TEMPLATE 參數設定](https://goo.gl/xwcY6t)

## Git

* [git-tips - Git的奇技淫巧](https://goo.gl/Hj7Ss4)
* [遇到需要使用 GIT 的問題](https://github.com/Shenglian/work-tip/blob/master/git.md)

## mobile 坑

1. [[移动端]移动端上遇到的各种坑与相对解决方案](http://blog.csdn.net/BaiHuaXiu123/article/details/68925120)
2. [腾讯2016公司代码报告总结](http://www.jianshu.com/p/40a41bdbe054) - 主要看 video 播放的部分

## ESLint 

1. [详解 ESLint 规则，规范你的代码](http://blog.guowenfh.com/2016/08/07/ESLint-Rules/)

## 緩存

1. [九种浏览器端缓存机制知多少](http://jixianqianduan.com/frontend-javascript/2015/12/28/nine-browser-cache-methods.html)

## bash 

1. [bash-guide](https://github.com/Idnan/bash-guide)

## DevTool 
* [DevTips](https://umaar.com/dev-tips/v)
* [Chrome DevTools: A Modern Front-End Workflow - video and slides available for my Render Conf talk](https://umaar.com/dev-tips/140-modern-web-workflow-renderconf/)

1. Setting > General > Show rulers 下可以啟用尺規，當滑鼠停留在控制台顯示的某個元素上或者選中一個元素的時候，會顯示出來。
2. Select element > Break on > subtree modification
                               attribute modification
                               node removal
代表監聽底下所限定的條件，非常好用。

* [inspect animations](https://developers.google.com/web/tools/chrome-devtools/inspect-styles/animations)
* [Memory problems](https://developers.google.com/web/tools/chrome-devtools/memory-problems/)

## Ruby on Rails
0. [為你自己學 Ruby on Rails](http://railsbook.tw/table-of-content)

## MatterJs
0. [Matter.js 2D 物理引擎试玩报告](https://aotu.io/notes/2017/04/17/Matter-js/)

## React
0. [大型高性能React PWA如何消除各类性能瓶颈？](https://zhuanlan.zhihu.com/p/26489388)

## javascript es6
0. [深入理解ES6中的解构](http://zhouweicsu.github.io/blog/2015/09/01/es6-destructuring-in-depth/)

# Nginx
* [了解 Nginx 的基本概念](https://goo.gl/Az5W4u)

## Architecture Scenarios
* [Architecture Scenarios](https://auth0.com/docs/architecture-scenarios)

# WebGL && Three.js
* [图解WebGL&Three.js工作原理](http://www.cnblogs.com/wanbo/p/6754066.html)

# UX

* [uxdesign.cc](https://uxdesign.cc/)
* [design-better-data-tables](https://uxdesign.cc/design-better-data-tables-4ecc99d23356)

# Cheatsheet

* [Terminal Cheatsheet for Mac (Basics)](https://github.com/0nn0/terminal-mac-cheatsheet)

# Rails 

* [Rails 命令列](http://rails.ruby.tw/command_line.html)

# Service-workers
* [Understanding Service Workers](http://blog.88mph.io/2017/07/28/understanding-service-workers/)

# HTTP
* [HTTP1.0、HTTP1.1和HTTP2.0的区别](http://www.jianshu.com/p/be29d679cbff)

# Google Tag Manager
* [Bind UserId Data to GA](http://ieg.wnet.org/2017/04/gtm-user-id-tracking-4-steps/)

# npm [additional shorthand](https://docs.npmjs.com/misc/config#shorthands-and-other-cli-niceties)

* npm i --save pkg     => npm i -S pkg
* npm i --save-dev pkg => npm i -D pkg
* npm test             => npm t
* npm ls --depth 0 (list installed packages)
* npm ls -g --depth 0  (list installed global packages)
* ./node_modules/.bin/<name> (execute local mode_module path)
* npm repo <name>
* npm home
* npm docs
* npm version <name>
* npm search <name>
* npm info/view <name> version

# Frontend-Cheat-Sheets - [Sheets](https://github.com/logeshpaul/Frontend-Cheat-Sheets)