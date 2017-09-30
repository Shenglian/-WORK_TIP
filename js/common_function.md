# Overview

* [leapYear](#leapYear)
* [Get Last Day Of Month](#Get_Last_Day_Of_Month)


# Source Code
<a target="_blank" href="https://stackoverflow.com/questions/16353211/check-if-year-is-leap-year-in-javascript" name="leapYear" id="leapYear">leapYear</a>

```js
function leapYear(year) {
  return ((year % 4 === 0) && (year % 100 != 0)) || (year % 400 === 0);
}
```

<a target="_blank" href="https://stackoverflow.com/questions/222309/calculate-last-day-of-month-in-javascript" name="Get_Last_Day_Of_Month" id="Get_Last_Day_Of_Month">Get Last Day Of Month</a>

```js
// 思維：
// 直接抓下個月的排序 0 ， 就是這個月的最後一天，因為第一天是從 1 開始
function GetLastDayOfMonth({year, month} = {}) {
  const lastDay = new Date(year, month + 1, 0);
  return 
}
```