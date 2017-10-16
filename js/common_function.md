# Overview

* [leapYear](#leapYear)
* [Get First Day Of Month](#Get_First_Day_Of_Month)
* [Get Last Day Of Month](#Get_Last_Day_Of_Month)
* [Get Month Length](#Get_Month_Length)
* [Compare time](#Compare_Time)
* [expect number by two](#Expect_Number_By_Two)
* [remove repeat value](#Remove_Repeat_Value)
* [left right change](#Left_Right_Value)


# Source Code
<a target="_blank" href="https://stackoverflow.com/questions/16353211/check-if-year-is-leap-year-in-javascript" name="leapYear" id="leapYear">leapYear</a>

```js
function leapYear(year) {
  return ((year % 4 === 0) && (year % 100 != 0)) || (year % 400 === 0);
}
```

<a target="_blank" href="" name="Get_First_Day_Of_Month" id="Get_First_Day_Of_Month">Get First Day Of Month</a>

```js
function getFirstDayOfMonth({ year, month } = {}) {
  return new Date(year, month, 1);
}
```

<a target="_blank" href="https://stackoverflow.com/questions/222309/calculate-last-day-of-month-in-javascript" name="Get_Last_Day_Of_Month" id="Get_Last_Day_Of_Month">Get Last Day Of Month</a>

```js
// 思維：
// 直接抓下個月的排序 0 ， 就是這個月的最後一天，因為第一天是從 1 開始
function getLastDayOfMonth({ year, month } = {}) {
  return new Date(year, month + 1, 0);
}
```

<a target="_blank" href="" name="Get_Month_Length" id="Get_Month_Length">Get_Month_Length</a>

```js
function getMonthLength({ year, month } = {}) {
  return new Date(year, month, 0).getDate();
}
```

<a target="_blank" href="https://stackoverflow.com/questions/35697037/how-to-compare-time-in-js" name="Compare_Time" id="Compare_Time">Compare_Time</a>

```js
function compareTimeWithNow(compareTime) {
  return Date.parse(new Date()) > Date.parse(compareTime);
}
```

<a target="_blank" href="" name="Expect_Number_By_Two" id="Expect_Number_By_Two">Expect Number By Two</a>

```js
function expectNumberByTwo(value) {
  return value >> 1;
}
```

<a target="_blank" href="" name="Remove_Repeat_Value" id="Remove_Repeat_Value">remove repeat value</a>

```js
// ES6
function removeRepeatValue(array) {
  // set object
  let setObject = new Set(array);
  // array object
  let arrayObject = Array.form(setObject);
  return arrayObject;
}
```

<a target="_blank" href="" name="Left_Right_Value" id="Left_Right_Value">left right change</a>

```js
// ES5
var x = 1,
    y = 2,
    _ref = [x, y];

x = _ref[1];
y = _ref[0];

console.log(x); // 2
console.log(y); // 1
```

```js
// ES6
let x = 1,
    y = 2;

[y, x] = [x, y];

console.log(x); // 2
console.log(y); // 1
```