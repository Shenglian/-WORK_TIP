# Date

> setDate()

```js

/*
  DateObj.setDate(dayValue)

  @param:  dayValue 傳入值，是一個1~31的整數，若是傳入的值超出當月份的正常範圍，setDate()方法也會依據超出的數值進行計算。
  @param:  dayValue 傳入 0 ，是上個月的最後一天
  @return: 從1970年1月1日0時0分到該UTC時間經過的毫秒數。
*/

function setDate(value) {
  const current_date = new Date('Mar 31, 2013 21:00:00'); 
  switch (value) {
    case 10:
      let new_date_10 = current_date.setDate(value);
      console.log('new_date with variable is 10: ', new_date_10);
      console.log('new_date with variable is 10: ', current_date.toLocaleString());
      break;

    case -1:
      let new_date_1 = current_date.setDate(value);
      console.log('new_date with variable is -1: ', new_date_1);
      console.log('new_date with variable is -1: ', current_date.toLocaleString());
      break;

    case 0:
      let new_date_0 = current_date.setDate(value);
      console.log('new_date with variable is 0: ', new_date_0);
      console.log('new_date with variable is 0: ', current_date.toLocaleString());
      break;
    default:
  }
}
```