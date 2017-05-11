# work-tip
工作上小技巧

## 演算法

1. [演算法](https://sort.hust.cc/1.bubbleSort.html)
2. 

## Javascript 

> Vanilla

* [The Basics of DOM Manipulation in Vanilla JavaScript (No jQuery)](https://goo.gl/Pd9ym7)
* [常用API合集](https://www.kancloud.cn/dennis/tgjavascript/241852) - 其他地方也能看
* [js 常用api背诵](http://www.jianshu.com/p/b678628d114c)
* [fullscreen api](https://heeroluo.net/article/detail/97/native-fullscreen-javascript-api)
* [Display fullscreen website using javascript (Internet Explorer/Safari/Chrome/Firefox)](http://xme.im/display-fullscreen-website-using-javascript)
* [不可错过的javascript迷你库](http://yanhaijing.com/javascript/2015/12/29/mini-js-lib/)

```js

// 同時監聽許多元素時，透過 event.target 來取得是哪個元素觸發的。
Array.from(allElements).forEach(element => {
  element.addEventListener('change', function (event) {
    console.log(event.target.value)
  })
})

[JavaScript animations](https://javascript.info/js-animation)
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

> Prototype
* [Javascript 原型中的哲学思想](https://goo.gl/nRNrke) 
* [JavaScript 的 constructor 、 prototype 和 __proto__ 屬性](https://github.com/Shenglian/JavaScript-notes-from-Xitun/blob/master/Javascript-prototype.md)
* [js中__proto__和prototype的区别和关系？](https://www.zhihu.com/question/34183746)
* [該來理解 JavaScript 的原型鍊了](http://blog.techbridge.cc/2017/04/22/javascript-prototype/)

> Scope

1. [講解 javascript Scope](https://github.com/Shenglian/work-tip/blob/master/scope.md)

> event loop
'macro-task（宏任务）' , 'task'
    'script(整体代码), setTimeout, setInterval, setImmediate, I/O, UI rendering。'
'micro-task（微任务）' , 'jobs'
    'process.nextTick, Promise, Object.observe(已废弃), MutationObserver(html5新特性)'

1. [前端基础进阶（十二）：深入核心，详解事件循环机制](http://www.jianshu.com/p/12b9f73c5a4f#)
2. [JavaScript：彻底理解同步、异步和事件循环(Event Loop)](https://segmentfault.com/a/1190000004322358)

> Promise

1. [透彻掌握 Promise 的使用，读这篇就够了](https://juejin.im/entry/58e1d720ac502e006c0e0196)
2. [從Promise開始的JavaScript異步生活](https://eyesofkids.gitbooks.io/javascript-start-es6-promise/content/)

> Async Await

1. [[Javascript] ES7 Async Await 聖經](https://medium.com/@peterchang_82818/javascript-es7-async-await-%E6%95%99%E5%AD%B8-703473854f29-tutorial-example-703473854f29)
2. [JavaScript 好用的 async 異步函數！ ](http://fred-zone.blogspot.tw/2016/07/javascript-async.html)
3. [JavaScript async/await 的奇淫技巧 ](http://fred-zone.blogspot.tw/2017/04/javascript-asyncawait.html)
4. [Callback Promise Generator Async-Await 和异常处理的演进](http://www.jianshu.com/p/78dfb38ac3d7)

> 額外

* [Javascript分号，加还是不加？](https://segmentfault.com/a/1190000000437434)
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
  1. 參考 [angular-infinite-scroll](https://github.com/sparkalow/angular-infinite-scroll/blob/master/src/infinite-scroll.js)
  2. 我自己寫的
  ```js
  // 我自己寫的
  app.directive('infiniteScroll', [
    "$window", 
    function ($window) {
      return {
        /**
        * attrs.canLoad = 決定能不能繼續 load
        * attrs.isFinish = 判斷是否已經沒有資料
        * attrs.threshold = 距離多少才拉資料
        * infinite-scroll = call method
        * 
        * HTML:
        * <div infinite-scroll="addItems()" can-load="canLoad" is-finish="isFinish" threshold="100"></div>
        * 
        * CSS:
        * .infinite-scroll-style {
              opacity: 0;
              margin: 20px auto;
              width: 100%;
              height: 44px;
              line-height: 44px;
              text-align: center;
              background-color: #1EA9D4;
              font-size: 14px;
              color: #FFFFFF;

              border-radius: 5px;
              transition: all, .3s;
              cursor: pointer;
              
            }

            .infinite-scroll-style:hover {
              background-color:#38678f;
            }

            .infinite-scroll-style.finish {
              opacity: 1;
            }
        * 
        * 範例：
        * brand_master_management.js 
        * && 
        * brand_master_management/index.html
        */
        link: function (scope, element, attrs) {
          var offset = parseInt(attrs.threshold) || 0;
          var e = element[0];

          function scrollEvent() {
            if (scope.$eval(attrs.canLoad) && e.offsetTop - window.innerHeight - window.pageYOffset <= offset) {
              scope.$apply(attrs.infiniteScroll);
            } 

            // 因為還要 filter 資料，不能 remove eventlistener
            // if (scope.$eval(attrs.isFinish)) {
            //   window.removeEventListener('scroll', throttleScrollEvent, false);
            // }
          }

          // bind lodash throttle
          var throttleScrollEvent = _.throttle(scrollEvent, 100);

          window.addEventListener('scroll', throttleScrollEvent, false);

          // click to back Top
          e.addEventListener('click', function() {
            window.scrollTo(0, 0);
          }, false);
          
        }
      };
    }]);
  ```
  

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
  * [Deleting Array index in Vue.js - this.delete](https://goo.gl/2ffvqE)
* [Vue2.0 原始碼簡析：](https://github.com/Shenglian/work-tip/blob/master/vuejs/vue.md)
* [Vue2.0 源码阅读：模板渲染](http://zhouweicsu.github.io/blog/2017/04/21/vue-2-0-template/)

* [个迷你vue库，虽然小但功能全面，可以作为想了解vue背后思想以及想学习vue源码而又不知如何入手的入门学习资料。](https://github.com/xiaofuzi/deep-in-vue/blob/master/src/the-super-tiny-vue.js)

* [入門 vuex](https://github.com/Shenglian/work-tip/blob/master/vuejs/vuex.md)


## Highcharts

1. [Highcharts API 文档 v5.0.7](https://api.hcharts.cn/highcharts)

## Public API

1. [Public APIs](https://github.com/toddmotto/public-apis#photography)

## Css

### Layout

1. [CSS Grid VS Flexbox: A Practical Comparison](http://tutorialzine.com/2017/03/css-grid-vs-flexbox/)
2. [Grid Garden is a game for learning CSS grid layout](http://cssgridgarden.com/)
3. [Flexboxdefense](http://www.flexboxdefense.com/)
4. [Flex 基礎文章](http://www.w3cplus.com/css3/understanding-flexbox-everything-you-need-to-know.html)
5. [Flex 比較深入的文章](http://www.w3cplus.com/css3/flexbox-layout-and-calculation.html)

> Tip

1. [css-protips](https://github.com/AllThingsSmitty/css-protips)
2. [Let’s Look at 50+ Interesting CSS Properties & Values](https://css-tricks.com/lets-look-50-interesting-css-properties-values/?utm_source=frontendfocus&utm_medium=email#all)


> Unix 

1. [7个你可能不认识的CSS单位](https://github.com/simaQ/cssfun/issues/1)

## Webpack

> CommonsChunkPlugin

1. [CommonsChunkPlugin](https://medium.com/webpack/webpack-bits-getting-the-most-out-of-the-commonschunkplugin-ab389e5f318)

## Git

1. [git-tips - Git的奇技淫巧](https://goo.gl/Hj7Ss4)

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
0. [DevTips](https://umaar.com/dev-tips/v)
1. [Chrome DevTools: A Modern Front-End Workflow - video and slides available for my Render Conf talk](https://umaar.com/dev-tips/140-modern-web-workflow-renderconf/)

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

# 問題的本質

> 從問題的本質 (管理資料和邏輯) 來看，自然會明白這些設計準則，還有區分出設計和實作 (準則和表現方式)。剩下的是衍生想法，像是管理 state 方法的優先順序:

* 沒有 member field (沒 state 最好!)
* 有 immutable member field (非得有 state 不可的話，至少讓它不可修改)
* private mutable member field (非改不可的話，盡可能減少能改它的程式碼)

> 重點還是掌握問題的本質，避免迷失在解決的方案之中。總結來說，一套程式語言有一套思維，試過多套不同特性的語言後，藉由它們之間的同異處，可以察覺這些語言想解決的問題是什麼。繼而明白真正的問題是什麼，再回饋到解決問題的思維中，避免落入特定解決模式裡 (如道地的 OOP 或 FP)。起初學不同語言只是覺得好玩，誤打誤撞得到這樣的體會，滿有意思的。

# UX

* [uxdesign.cc](https://uxdesign.cc/)
* [design-better-data-tables](https://uxdesign.cc/design-better-data-tables-4ecc99d23356)

# Cheatsheet

* [Terminal Cheatsheet for Mac (Basics)](https://github.com/0nn0/terminal-mac-cheatsheet)
