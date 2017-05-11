
[Observer]: https://github.com/Shenglian/WORK_TIP/blob/master/imgs/observer.png
[Observer-flow]: https://github.com/Shenglian/WORK_TIP/blob/master/imgs/observer-flow.png

# Vue 原理解析之 observer模塊

observer 是 Vue核心中最重要的一個模塊（個人認為），能夠實現視圖與數據的響應式更新，底層全憑 observer 的支持。

> observer 模塊在 Vue項目中的代碼位置是 [src/core/observer](https://github.com/vuejs/vue/blob/dev/src/core/observer/index.js)，模塊共分為這幾個部分：
  * Observer: 數據的觀察者，讓數據對象的讀寫操作都處於自己的監管之下 
  * Watcher: 數據的訂閱者，數據的變化會通知到 Watcher，然後由 Watcher進行相應的操作，例如更新視圖
  * Dep: Observer 與 Watcher 的紐帶，當數據變化時，會被 Observer 觀察到，然後由 Dep 通知到 Watcher

示意圖如下：

![Observer-img][Observer]

# Observer

Observer 類定義在 [src/core/observer/index.js](https://github.com/vuejs/vue/blob/dev/src/core/observer/index.js#L34-L53) 中，先來看一下 Observer 的構造函數

```js
class Observer {
  value: any;
  dep: Dep;
  vmCount: number; // number of vms that has this object as root $data

  constructor (value: any) {
    this.value = value
    this.dep = new Dep()
    this.vmCount = 0
    def(value, '__ob__', this)
    if (Array.isArray(value)) {
      const augment = hasProto
        ? protoAugment
        : copyAugment
      augment(value, arrayMethods, arrayKeys)
      this.observeArray(value)
    } else {
      this.walk(value)
    }
  }
}
```

```js
// can we use __proto__? 
export const hasProto = '__proto__' in {}
```
[hasProto 定義在此 => ](https://github.com/vuejs/vue/blob/9478fde8c92d225661dcb4c949d0035284600fff/src/core/util/env.js#L8)

```js
// helpers

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src: Object) {
  /* eslint-disable no-proto */
  target.__proto__ = src
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target: Object, src: Object, keys: Array<string>) {
  for (let i = 0, l = keys.length; i < l; i++) {
    const key = keys[i]
    def(target, key, src[key])
  }
}
```
value 是需要被觀察的數據對象，在構造函數中，會給 value 增加__ob__屬性，作為數據已經被 Observer 觀察的標誌。如果 value 是數組，就使用 observeArray 遍歷 value，對 value 中每一個元素調用 observe 分別進行觀察。如果 value 是對象，則使用 walk 遍歷 value 上每個key，對每個 key 調用 defineReactive 來獲得該 key 的 set/get 控制權。

解釋下上面用到的幾個函數的功能：

* observeArray: 遍歷數組，對數組的每個元素調用 observe
* observe: 檢查對像上是否有__ob__屬性，如果存在，則表明該對像已經處於 Observer 的觀察中，如果不存在，則 new Observer 來觀察對象（其實還有一些判斷邏輯，為了便於理解就不贅述了）
* walk: 遍歷對像的每個 key，對對像上每個 key 的數據調用 defineReactive
* defineReactive: 通過 Object.defineProperty 設置對象的 key 屬性，使得能夠捕獲到該屬性值的 set/get 動作。一般是由  Watcher的實例對象進行 get 操作，此時 Watcher 的實例對象將被自動添加到 Dep 實例的依賴數組中，在外部操作觸發了 set 時，將通過 Dep 實例的 notify 來通知所有依賴的 watcher 進行更新。

如果不太理解上面的文字描述可以看一下圖：

示意圖如下：

![Observer-flow-img][Observer-flow]

# Dep

> Dep 是 Observer 與 Watcher 之間的紐帶，也可以認為 Dep 是服務於 Observer 的訂閱系統。Watcher 訂閱某個 Observer 的 Dep，當 Observer 觀察的數據發生變化時，通過 Dep 通知各個已經訂閱的 Watcher。

Dep 提供了幾個接口：

* addSub: 接收的參數為Watcher實例，並把Watcher實例存入記錄依賴的數組中
* removeSub: 與addSub對應，作用是將Watcher實例從記錄依賴的數組中移除
* depend: Dep.target上存放這當前需要操作的Watcher實例，調用depend會調用該Watcher實例的addDep方法，addDep的功能可以看下面對Watcher的介紹
* notify: 通知依賴數組中所有的watcher進行更新操作

```js

class Dep {
  static target: ?Watcher;
  id: number;
  subs: Array<Watcher>;

  constructor () {
    this.id = uid++
    this.subs = []
  }

  addSub (sub: Watcher) {
    this.subs.push(sub)
  }

  removeSub (sub: Watcher) {
    remove(this.subs, sub)
  }

  depend () {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }

  notify () {
    // stabilize the subscriber list first
    const subs = this.subs.slice()
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  }
}

```

# Watcher 

> 是用來訂閱數據的變化的並執行相應操作（例如更新視圖）的。Watcher的構造器函數定義如下：

```js

constructor (vm, expOrFn, cb, options) {
  this.vm = vm
  vm._watchers.push(this)
  // options
  if (options) {
    this.deep = !!options.deep
    this.user = !!options.user
    this.lazy = !!options.lazy
    this.sync = !!options.sync
  } else {
    this.deep = this.user = this.lazy = this.sync = false
  }
  this.cb = cb
  this.id = ++uid // uid for batching
  this.active = true
  this.dirty = this.lazy // for lazy watchers
  this.deps = []
  this.newDeps = []
  this.depIds = new Set()
  this.newDepIds = new Set()
  this.expression = process.env.NODE_ENV !== 'production'
    ? expOrFn.toString()
    : ''
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn
  } else {
    this.getter = parsePath(expOrFn)
    if (!this.getter) {
      this.getter = function () {}
      process.env.NODE_ENV !== 'production' && warn(
        `Failed watching path: "${expOrFn}" ` +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      )
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get()
}

```

> 參數中，vm表示組件實例，expOrFn 表示要訂閱的數據字段（字符串表示，例如a.b.c）或是一個要執行的函數，cb 表示 watcher 運行後的回調函數，options 是選項對象，包含 deep、user、lazy 等配置。

watcher 實例上有這些方法：

* get: 將Dep.target設置為當前watcher實例，在內部調用this.getter，如果此時某個被Observer觀察的數據對像被取值了，那麼當前watcher實例將會自動訂閱數據對象的Dep實例
* addDep: 接收參數dep(Dep實例)，讓當前watcher訂閱dep
* cleanupDeps: 清除newDepIds和newDep上記錄的對dep的訂閱信息
* update: 立刻運行watcher或者將watcher加入隊列中等待統一flush
* run: 運行watcher，調用this.get()求值，然後觸發回調
* evaluate: 調用this.get()求值
* depend: 遍歷this.deps，讓當前watcher實例訂閱所有dep
* teardown: 去除當前watcher實例所有的訂閱


# Array methods

> 在 [src/core/observer/array.js](https://github.com/vuejs/vue/blob/dev/src/core/observer/array.js) 中，Vue 框架對數組的 push、pop、shift、unshift、sort、splice、reverse 方法進行了改造，在調用數組的這些方法時，自動觸發 dep.notify()，解決了調用這些函數改變數組後無法觸發更新的問題


[資料來源：Vue原理解析之observer模块 ](https://segmentfault.com/a/1190000008377887)

[資料來源：Vue2.0 源码阅读：响应式原理 ](http://zhouweicsu.github.io/blog/2017/03/07/vue-2-0-reactivity/)

