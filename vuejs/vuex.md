

# 什麼是 Vuex

- http://vuefe.cn/vuex/intro.html
- vuex 是什么，怎么搭，以及 要有用什么角度来理解这个插件

- [视频：什么是 vuex for (youtube)] (https://youtu.be/3tnclLf3Zw4)
- [视频：什么是 vuex for (bilibili)] (http://www.bilibili.com/video/av6829088/)

> ### 建立下述观念：

> 1. state (状态)，驱动我们应用的真实的源；
> 2. view (视图)，对应着 状态 的声明式映射；
> 3. actions (动作)，用户在 视图 上的输入引起状态的更改的可能方式。

# 观念讲解 ： vuex，action ，mutations 做什么用的？

> 在讲解答案之前，先建立一个观念，vuex是一个模组，而这个模组，有 6个流程（见以下内容），请依序看完，才能对 vuex 的做基本的了解。仅对 action ，mutations这两个单字去拆解，你还是写不出 vuex 模组的配置。

> 同步：
> 当函数执行时，就得到结果，那这个函数就是同步的。

> 异步：
> 当函数执行时，不会马上有结果，甚至有时间差的问题，那这个函数就是异步的。

## 观念讲解 ： vuex，action ，mutations 做什么用的？ (1) state

> 中文翻译成「状态」，建议尽量用 state 这个单字来阅读 vuex 文檔，不然你脑海一直出现状态状态状态，反而会卡死。
> 整个 vuex 是一颗 独立的 state tree,规定：只允许 mutation ，才能改变 state

```js
const state = {
  count: 0,
}
```

## 观念讲解 ： vuex，action ，mutations 做什么用的？(2) mutation

> 更改 Vuex 的 store 中的 state 的唯一方法是提交 mutation。
> mutation，会与插件 devtools 协作，当 mutation 有变化时, 就做 state 的纪录，来协助开发者 debug，所以这里的函数要求同步，以便插件来调试。

> 来源：https://vuex.vuejs.org/zh-cn/mutations.html

``` js
// 建议把此区当做事件注册来看（同步不是马上执行的意思，而是在当函数执行时，就得到结果）
const mutations = {
  increment(state) {
    state.count++
  },
  decrement(state) {
    state.count--
  }
}

```
## 观念讲解 ： vuex，action ，mutations 做什么用的？(3) Action 

> 类似于 mutation，不同在于：
> Action 提交的是 mutation(让 mutation 处理插件的调试工作 )，而不是直接变更 state 。
> Action 的函数可以包含任意异步操作，但永远只提交 mutation。
> 来源：https://vuex.vuejs.org/zh-cn/actions.html

```js
// 建议把此区当做事件注册来看, action 也不是马上就执行，只向 mutation 做 commit 的指令。

const actions = {
  increment: ({
    commit
  }) => commit('increment'),
  decrement: ({
    commit
  }) => commit('decrement'),
  incrementIfOdd({
    commit,
    state
  }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },

  // 如果 action 有异步的要求时，可以参考下列的写法，对 mutation 提出 commit 。
  incrementAsync({
    commit
  }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }

```

## 观念讲解 ： vuex，action ，mutations 做什么用的？(4) getters

> 请当做 计算属性来写，所有的 getter, 接收 完整的state树，做第一个参数

``` js
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? '偶数' : '奇数'
}

```

## 观念讲解 ： vuex，action ，mutations 做什么用的？(5) (Vuex 实例依  state, mutations, actions,and getters 组合)

```js
// 小凡 (Vuex 实例依  state, mutations, actions,and getters 组合)
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
```

## 观念讲解 ： vuex，action ，mutations 做什么用的？(6) .vue 使用  mapGetters, mapActions，操作 Vuex. 

> 前面的工作做好了，到了 .vue , 就只是下指令，单纯执行 getter，action

```html

<template>
  <div id="app">
    <!--file : /my-project/src/vuex-demo/v02_counter.vue -->
    <h1>点击: {{ $store.state.count }} 次数,此為 {{ evenOrOdd }} <br></h1>
    <button class="btn"  @click="increment">+</button>
    <button class="btn"  @click="decrement">-</button><br>
    <button class="btn"  @click="incrementIfOdd">业务设计：当 奇数时，才增加</button><br>
    <button class="btn"  @click="incrementAsync">业务设计：1秒后，才会增加 1</button><br>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters([
    'evenOrOdd'
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ])
}
</script>

```
