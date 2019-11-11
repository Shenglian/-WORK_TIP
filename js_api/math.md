[TOC]

#### round

> Math.round 四捨五入
```js
Math.round(3.14);   // 3
Math.round("5.5");  // 6
Math.round("5.3");  // 5
Math.round("-5.6"); // -6
Math.round("-5.3"); // -5
Math.round(-5.6);   // -6
```


#### floor
> Math.floor 最大整數 - 取小於這個數的最大整數 - (無條件進位)
```js
Math.floor(3.14);    // 3
Math.floor(5.4);     // 5
Math.floor(-5.4);    // -6
Math.floor("-5.5");  // -6
```

#### ceil 
> Math.ceil 最小整數 - 取大於這個數的最小整數 - (無條件捨去)
```js
Math.ceil(3.14);    // 3
Math.ceil(5.15);    // 5
Math.ceil(-5.15);   // -5
Math.ceil("-5.7");  // -5
```

#### abs
> Math.abs 絕對值
```js
Math.abs("Hello"); // NaN
```

#### sqrt
> Math.sqrt 平方根
```js
Math.sqrt(16); // 4
```

#### pow 
> Math.pow 基數 and 指數

```js
Math.pow(10, 2) // 100
```