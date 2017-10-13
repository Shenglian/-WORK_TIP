# Bitwise Operations

> Bitwise operation 會先將值轉換成二進位再進行運算。
> 按位非(~) - 在二進位中，1代表負數，0代表整數。

### 判斷奇偶數

```js
  // 普通做法
  function assert(value) {
    return value % 2 ? console.log('單數') : console.log('複數')
  }
```

```js
  // Use Bitwise Operation
  function assert(value) {
    return (value & 1) ? console.log('單數') : console.log('複數')
  }
```

### 浮點數向下求最大正整數

```js
  // 普通做法
  function intValue(value) {
    return Math.floor(value);
  }
```

```js
  // Use Bitwise Operation
  function intValue(value) {
    return value | 0;
  }
```
