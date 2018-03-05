# By value vs by reference OR by Sharing?

### by value 
  假如變數是 primitive value 是 Number, Boolean, String
  這時候變數會在記憶體中存在一個自我的位置，每個 primitive value 都是 unique location

### by reference
  假如變數是物件(object)/方法(fn)，只單純修改變數的值，是變成 by reference

  ```js
    let a = { greeting: 123 };
    let b = a;

    // a, b 是 by reference
    console.log('a => ', a); // { greeting: 123 }
    console.log('b => ', b); // { greeting: 123 }
    
    b.greeting = 222;

    // a, b 還是 by reference
    console.log('a => ', a); // { greeting: 222 }
    console.log('b => ', b); // { greeting: 222 }

    let a = { foo: 999 };

    // a 被 assign new value ， 就不是 by reference
    console.log('a => ', a); // { foo: 999 }
    console.log('b => ', b); // { greeting: 222 }
  ```
  
參考資料 1：[[JavaScript] by value V.S by reference的行為](http://myohmy10420-blog.logdown.com/posts/1752866)
參考資料 2：[談談JavaScript中by reference和by value的重要觀念](https://pjchender.blogspot.tw/2016/03/javascriptby-referenceby-value.html)

# Function parameters 

> by value: Boolean, null, undefined, String, and Number.
> by reference: Array, Function, Object

---

> Variables that are assigned a non-primitive value are given a reference to that value. That reference points to the object’s location in memory. The variables don’t actually contain the value.

---

> Passing Parameters through Functions: 
When we pass primitive values into a function, the function copies the values into its parameters. It’s effectively the same as using `=`.

```js
// function parameters 
var hundred = 200;

function pure(value) {
  _value = value + 100
  return _value;
}

function notPure(value) {
  // 這邊的 hundred => window.hundred;
  hundred = value + 1000
  return hundred;
}

function sameVariable(hundred) {
  // 這邊會把 hundred copy 一份出來
  // 類似：var hundred = hundred !== window.hundred
  hundred = hundred + 1111;
  return hundred;
}

console.log('sameVariable: ', sameVariable(hundred));
console.log('hundred: ', hundred);
```
參考資料：[Explaining Value vs. Reference in Javascript](
https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0)