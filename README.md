# work-tip
工作上小技巧

## 看過的 Source Code 
* [IntersectionObserver/polyfill/intersection-observer.js](https://github.com/w3c/IntersectionObserver/blob/master/polyfill/intersection-observer.js)
* [vue/src/core/util/env.js](https://github.com/vuejs/vue/blob/dev/src/core/util/env.js)


## 需要做筆記
* [JavaScript 疲劳终极指南：我们行业的真相](http://www.zcfy.cc/article/3914)
* [CSS技巧之'text-justify'](http://www.zcfy.cc/article/text-justify-css-tricks-3946.html?t=new)
* [去其糟粕，取其精华——我如何重拾对 JavaScript 的爱](https://goo.gl/BC27fU) - 
  - functional javascript
  - replace `for loop`, `break`, `switch`
* [八段代码彻底掌握Promise](https://goo.gl/xW8AMm)
* [JavaScript核心概念归纳整理](https://mp.weixin.qq.com/s/I7A1iC8Et6uOGZ234DsTlA)

## 演算法
0. [演算法 - 每日練習](https://github.com/Shenglian/work-tip/blob/master/js/algorithm.md)
1. [演算法](https://sort.hust.cc/1.bubbleSort.html)
2. [算法：找出缺失的整数](http://blog.jobbole.com/106521/)
3. [算法：如何判断链表有环？](http://blog.jobbole.com/106227/#comment-158642)
4. [算法：什么是 B 树？](http://blog.jobbole.com/111757/)

## Javascript 

### ECMAScript 
* [ECMA-262-3 in detail](http://dmitrysoshnikov.com/)

### ES6 example
* [es6-features](http://es6-features.org/#IteratorForOfOperator)

### 從瀏覽器多進程到JS單線程，JS運行機制最全面的一次梳理
* [從瀏覽器多進程到JS單線程，JS運行機制最全面的一次梳理](http://www.dailichun.com/2018/01/21/js_singlethread_eventloop.html)

#### Prototype
* [原型基礎物件導向](https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/prototype.html)
* [Javascript 原型中的哲学思想](https://goo.gl/nRNrke) 
* [JavaScript 的 constructor 、 prototype 和 __proto__ 屬性](https://github.com/Shenglian/JavaScript-notes-from-Xitun/blob/master/Javascript-prototype.md)
* [js中__proto__和prototype的区别和关系？](https://www.zhihu.com/question/34183746)
* [該來理解 JavaScript 的原型鍊了](http://blog.techbridge.cc/2017/04/22/javascript-prototype/)



#### Other 
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

#### Js Api
  * Date [前往](https://github.com/Shenglian/work-tip/blob/master/js_api/date.md)

  * Fullscreen
    * [fullscreen api](https://heeroluo.net/article/detail/97/native-fullscreen-javascript-api)    
    * [Display fullscreen website using javascript (Internet Explorer/Safari/Chrome/Firefox)](http://xme.im/display-fullscreen-website-using-javascript)
  
  * Animatie
    [前往](https://javascript.info/js-animation)
  * [js 常用api背诵](http://www.jianshu.com/p/b678628d114c)

  * [常用API合集](https://www.kancloud.cn/dennis/tgjavascript/241852)

#### Vanilla
* [The Basics of DOM Manipulation in Vanilla JavaScript (No jQuery)](https://goo.gl/Pd9ym7)
* [不可错过的javascript迷你库](http://yanhaijing.com/javascript/2015/12/29/mini-js-lib/)

#### Promise

* [透彻掌握 Promise 的使用，读这篇就够了](https://juejin.im/entry/58e1d720ac502e006c0e0196)
* [從Promise開始的JavaScript異步生活](https://eyesofkids.gitbooks.io/javascript-start-es6-promise/content/)
* [八段代码彻底掌握Promise](https://goo.gl/7dnJR5) 

#### Async Await

1. [[Javascript ES7 Async Await 聖經](https://medium.com/@peterchang_82818/javascript-es7-async-await-%E6%95%99%E5%AD%B8-703473854f29-tutorial-example-703473854f29)
2. [JavaScript 好用的 async 異步函數！ ](http://fred-zone.blogspot.tw/2016/07/javascript-async.html)
3. [JavaScript async/await 的奇淫技巧 ](http://fred-zone.blogspot.tw/2017/04/javascript-asyncawait.html)
4. [Callback Promise Generator Async-Await 和异常处理的演进](http://www.jianshu.com/p/78dfb38ac3d7)

#### 非同步
* [非同步](https://cythilya.github.io/2017/06/27/asynchrony-now-and-later/)

1. [剩余参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Rest_parameters)
2. [扩展语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_operator)

#### String 

1. [replace](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
2. [search](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search)

####  Angularjs

1. directive [區別 $eval, $parse 和 $observe](https://github.com/Shenglian/work-tip/blob/master/angularjs/directive.md)
  * 參考 [angular-infinite-scroll](https://github.com/sparkalow/angular-infinite-scroll/blob/master/src/infinite-scroll.js)

####  Vue

* VueCheatSheet
  * [vuex-cheatsheet](https://vuejs-tips.github.io/vuex-cheatsheet/#)
  * [vue-cheatsheet](https://vuejs-tips.github.io/cheatsheet/)

* [Vue 插件開發](https://zhuanlan.zhihu.com/p/26057542)
* [Vue.js 组件编码规范](https://pablohpsilva.github.io/vuejs-component-style-guide/#/chinese?id=vue-%E7%BB%84%E4%BB%B6%E5%91%BD%E5%90%8D)
* [提高 webpack 构建 Vue 项目的速度](https://github.com/lin-xin/blog/issues/10)
* [如何写一手漂亮的 Vue](http://jeffjade.com/2017/03/11/120-how-to-write-vue-better/)
  Axios
  * [Axios 入門配置](https://blog.ygxdxx.com/2017/01/29/Axios-Config/)
  * [Axios 源碼解析](http://blog.acohome.cn/tag/axios/)
  * [Axios源码深度剖析 - AJAX新王者](https://juejin.im/post/5b0ba2d56fb9a00a1357a334)


* [Vuejs-tips](https://medium.com/vuejs-tips)
	* [Always declare your data before use it](https://goo.gl/duZYY6)
	* [Reactive dynamic properties - use $set](https://goo.gl/2RpNXE)
	* [vue中的$set](http://www.jianshu.com/p/358c1974d9a5)
	* [Vue2.0 源码阅读：模板渲染](http://zhouweicsu.github.io/blog/2017/04/21/vue-2-0-template/)
	* [Vue2.0 原始碼簡析：](https://github.com/Shenglian/work-tip/blob/master/vuejs/vue.md)
	* [delete index](https://goo.gl/2ffvqE)

####  Js Api

* [个迷你vue库，虽然小但功能全面，可以作为想了解vue背后思想以及想学习vue源码而又不知如何入手的入门学习资料。](https://github.com/xiaofuzi/deep-in-vue/blob/master/src/the-super-tiny-vue.js)

* [入門 vuex](https://github.com/Shenglian/work-tip/blob/master/vuejs/vuex.md)


## Highcharts

1. [Highcharts API 文档 v5.0.7](https://api.hcharts.cn/highcharts)

## Public API

1. [Public APIs](https://github.com/toddmotto/public-apis)

## Css
* [基礎觀念](https://github.com/Shenglian/WORK_TIP/blob/master/css/basic.md) 

### square
* [纯 CSS 实现自适应正方形](https://idiotwu.me/css-responsive-square/)

### Cursor
* [Cursor Style](https://css-tricks.com/almanac/properties/c/cursor/)

### Layout
* [CSS Grid VS Flexbox: A Practical Comparison](http://tutorialzine.com/2017/03/css-grid-vs-flexbox/)

#### Grid
* [Grid Garden is a game for learning CSS grid layout](http://cssgridgarden.com/)
* [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/?utm_campaign=CodeTengu&utm_medium=email&utm_source=CodeTengu_99)
* [auto-fit vs auto-fill](https://gridbyexample.com/video/series-auto-fill-auto-fit/)

#### Flexbox
* [Flexboxdefense](http://www.flexboxdefense.com/)
* [Flex 基礎文章](http://www.w3cplus.com/css3/understanding-flexbox-everything-you-need-to-know.html)
* [Flex 比較深入的文章](http://www.w3cplus.com/css3/flexbox-layout-and-calculation.html)
* [Flexbox 佈局](http://www.w3cplus.com/css3/css3-flexbox-layout.html)

### css variables
* [CSS 变量教程](http://www.ruanyifeng.com/blog/2017/05/css-variables.html)

### css bugs
* [CSS keylogger：攻擊與防禦](https://blog.techbridge.cc/2018/03/02/css-key-logger/)

### SVG
* [A Guide to SVG Animations (SMIL)](https://css-tricks.com/guide-svg-animations-smil/)

### RVM
* [How can I remove RVM (Ruby Version Manager) from my system?
](https://stackoverflow.com/questions/3558656/how-can-i-remove-rvm-ruby-version-manager-from-my-system)

### Laravel
* [Laravel](https://tony915.gitbooks.io/laravel4/content/install/install_composer.html)

### zsh
* zsh环境变量失效问题 - 編輯~/.zshrc文件，在開頭添加一下配置
```
export PATH=$HOME/bin:/usr/local/bin:$PATH
source $HOME/.bashrc
source $HOME/.bash_profile
```

> Tip

1. [css-protips](https://github.com/AllThingsSmitty/css-protips)
2. [Let’s Look at 50+ Interesting CSS Properties & Values](https://css-tricks.com/lets-look-50-interesting-css-properties-values/?utm_source=frontendfocus&utm_medium=email#all)

> Unix 

1. [7个你可能不认识的CSS单位](https://github.com/simaQ/cssfun/issues/1)

## Webpack

> CommonsChunkPlugin

1. [CommonsChunkPlugin](https://medium.com/webpack/webpack-bits-getting-the-most-out-of-the-commonschunkplugin-ab389e5f318)
2. [HTML-WEBPACK-TEMPLATE 參數設定](https://goo.gl/xwcY6t)
3. [看清楚真正的 Webpack 插件](https://zoumiaojiang.com/article/what-is-real-webpack-plugin/)

## Prettier

* [Prettier](https://prettier.io/)

## Git

* [git-tips - Git的奇技淫巧](https://goo.gl/Hj7Ss4)

## mobile 坑

1. [移动端上遇到的各种坑与相对解决方案](http://blog.csdn.net/BaiHuaXiu123/article/details/68925120)
2. [腾讯2016公司代码报告总结](http://www.jianshu.com/p/40a41bdbe054) - 主要看 video 播放的部分

## ESLint 

1. [详解 ESLint 规则，规范你的代码](http://blog.guowenfh.com/2016/08/07/ESLint-Rules/)

## 緩存

1. [九种浏览器端缓存机制知多少](http://jixianqianduan.com/frontend-javascript/2015/12/28/nine-browser-cache-methods.html)

## bash 

1. [bash-guide](https://github.com/Idnan/bash-guide)

* set variable for output 
  - [來源1](https://stackoverflow.com/questions/4651437/how-to-set-a-variable-to-the-output-from-a-command-in-bash)
  - [來源2](http://linux.vbird.org/linux_basic/0320bash/0320bash.php#variable)
```
OUTPUT="$(ls -1)"
echo OUTPUT
```

## AppleScript 

[AppleScript Basic](http://www.jianshu.com/p/76a5ff57798b)
[AppleScript Loop](https://alvinalexander.com/apple/applescript-for-loop-while-loop-examples)

* [iterate list](https://stackoverflow.com/questions/43613446/why-am-i-not-able-to-iterate-through-my-record-in-applescript)

```
set usergroup to {user1:{name:"Darth Vader", role:"leader"}, user2:{name:"Yoda", role:"instructor"}}
repeat with member in (usergroup as list) -- the member variable contains a record
    display dialog (name of member)
    --display dialog (role of member)
end repeat
```

## DevTool 
* [DevTips](https://umaar.com/dev-tips/v)
* [Chrome DevTools: A Modern Front-End Workflow - video and slides available for my Render Conf talk](https://umaar.com/dev-tips/140-modern-web-workflow-renderconf/)

1. Setting > General > Show rulers 下可以啟用尺規，當滑鼠停留在控制台顯示的某個元素上或者選中一個元素的時候，會顯示出來。
2. Select element > Break on > subtree modification
                  ​     ​    ​    attribute modification
                  ​     ​    ​    node removal
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

* npm i --save pkg   => npm i -S pkg
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

# Notification
* [利用 JavaScript 實作瀏覽器推播通知](https://cythilya.github.io/2017/07/09/notification/)

# Opensearch 
* [Opensearch](http://www.wemlion.com/post/opensearch/)

# Robots.txt
* [[SEO優化 解決Googlebot 無法存取網站上的CSS和JS檔案](https://sofree.cc/seo-googlebot-css-js-robots/)

# Android 
* [用 ConstraintLayout 解決鍵盤擋住輸入框及按鈕](https://goo.gl/rGkeoQ)

# MessageChannel
* [理解 MessageChannel](https://github.com/luokuning/blogs/issues/6)

## Koa
* [koa-router](https://github.com/alexmingoia/koa-router#module_koa-router--Router+routes)

## postgresql
* [官方文件](https://node-postgres.com/)
* [How to use PostgreSQL in Nodejs](http://www.jitendrazaa.com/blog/webtech/how-to-use-postgresql-in-nodejs/)

## 面試
* [80% 应聘者都不及格的 JS 面试题](https://juejin.im/post/58cf180b0ce4630057d6727c)

## Apple Developer Update

- [What's New in Safari](https://developer.apple.com/library/archive/releasenotes/General/WhatsNewInSafari/Articles/Safari_11_1.html)

## Http-cache
- [循序漸進理解 HTTP Cache 機制](https://blog.techbridge.cc/2017/06/17/cache-introduction/)
- [HTTP-Caching](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching)


