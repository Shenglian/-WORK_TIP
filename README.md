# work-tip
工作上小技巧

## 演算法

1. [演算法](https://sort.hust.cc/1.bubbleSort.html)
2. 

## Javascript 

> Vanilla

1. [The Basics of DOM Manipulation in Vanilla JavaScript (No jQuery)](https://goo.gl/Pd9ym7)
2. [常用API合集](https://www.kancloud.cn/dennis/tgjavascript/241852) - 其他地方也能看
3. [js 常用api背诵](http://www.jianshu.com/p/b678628d114c)
4. [fullscreen api](https://heeroluo.net/article/detail/97/native-fullscreen-javascript-api)
5. [Display fullscreen website using javascript (Internet Explorer/Safari/Chrome/Firefox)](http://xme.im/display-fullscreen-website-using-javascript)

```js
element.matches

> Object 
Object.assign(target, ...sources)
  // method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.

  // 可以用來設定修改多值
  Object.assign(oneElement, {
    value: 'hello',
    id: 'world',
  });

  // 要刪除屬性，設定成 null 就好
  oneElement.value = null

Object.create(proto, [ propertiesObject ])
  // method creates a new object with the specified prototype object and properties.


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


> prototype
0. [Javascript 原型中的哲学思想](https://goo.gl/nRNrke) 
1. [JavaScript 的 constructor 、 prototype 和 __proto__ 屬性](https://github.com/Shenglian/JavaScript-notes-from-Xitun/blob/master/Javascript-prototype.md)
2. [js中__proto__和prototype的区别和关系？](https://www.zhihu.com/question/34183746)

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

0. VueCheatSheet
  1. [vuex-cheatsheet](https://vuejs-tips.github.io/vuex-cheatsheet/#)
  2. [vue-cheatsheet](https://vuejs-tips.github.io/cheatsheet/)

1. [Vue 插件開發](https://zhuanlan.zhihu.com/p/26057542)
2. [Vue.js 组件编码规范](https://pablohpsilva.github.io/vuejs-component-style-guide/#/chinese?id=vue-%E7%BB%84%E4%BB%B6%E5%91%BD%E5%90%8D)
3. [提高 webpack 构建 Vue 项目的速度](https://github.com/lin-xin/blog/issues/10)
4. [如何写一手漂亮的 Vue](http://jeffjade.com/2017/03/11/120-how-to-write-vue-better/)
5. [Axios 入門配置](https://blog.ygxdxx.com/2017/01/29/Axios-Config/)

## Highcharts

1. [Highcharts API 文档 v5.0.7](https://api.hcharts.cn/highcharts)

## Public API

1. [Public APIs](https://github.com/toddmotto/public-apis#photography)

## Css

> Tip

1. [css-protips](https://github.com/AllThingsSmitty/css-protips)
2. [Let’s Look at 50+ Interesting CSS Properties & Values](https://css-tricks.com/lets-look-50-interesting-css-properties-values/?utm_source=frontendfocus&utm_medium=email#all)

> layout

1. [Grid Garden is a game for learning CSS grid layout](http://cssgridgarden.com/)
2. [Flexboxdefense](http://www.flexboxdefense.com/)
3. [CSS Grid VS Flexbox: A Practical Comparison](http://tutorialzine.com/2017/03/css-grid-vs-flexbox/)

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
