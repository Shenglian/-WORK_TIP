# Overview

* [leapYear](#leapYear)



# Source Code
<a target="_blank" href="https://stackoverflow.com/questions/16353211/check-if-year-is-leap-year-in-javascript" name="leapYear" id="leapYear">leapYear</a>

```js
function leapYear(year) {
  return ((year % 4 === 0) && (year % 100 != 0)) || (year % 400 === 0);
}
```
