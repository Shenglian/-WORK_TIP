[TOC]

#### tofixed()
> 取小數第幾位 （會四捨五入）
```js
Math.tofixed(2)
```



#### parseFloat

> 解析參數，回傳浮點數

[參考資料](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)

```js
// The following examples all return `3.14`
parseFloat(3.14);
parseFloat('3.14');
parseFloat('3.140')
parseFloat('  3.14  ');
parseFloat('314e-2');
parseFloat('0.0314E+2');
parseFloat('3.14some non-digit characters');
parseFloat({ toString: function() { return "3.14" } });
```



#### parseInt()

> parseInt(string, radix) 建議 radix 要設定成 10

```js
parseInt('01920', 10) // 1920
// 其實直接用 +'string' 比較快
```



##### Number()

> Number(string) convert string of number to number

```js
// Convert strings
Number('123'); // returns 123
Number('12.3'); // returns 12.3
Number('3.14someRandomStuff'); // returns NaN
Number('42px'); // returns NaN

function isNumber({stirngNum} = {}) {
  return Number(stringNum) === 'NaN' ? false : true
}
```





