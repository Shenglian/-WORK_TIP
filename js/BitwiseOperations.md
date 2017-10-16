# Bitwise Operations

> Bitwise operation 會先將值轉換成二進位再進行運算。
> 浮點數不支持位運算，會先轉成整數在進行運算
> 按位非(~) - 在有符號的32位二進位中，1代表負數，0代表整數。

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
    // 0001 | xxx1 就過了
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

### 按位非就是求二進制的反碼
```js
  var num = 1; // 二进制 00000000000000000000000000000001
  var num1 = ~num; // 二进制 11111111111111111111111111111110
```

### 符號左移 <<
```js
  function power(n) {
    return 1 << n
  }
```

### 符號右移 >>
```js
  function except(value, n) {
    return value >> n;
  }
```