
# Array 

> pushState - add query at location url [stackoverflow](https://stackoverflow.com/questions/10970078/modifying-a-query-string-without-reloading-the-page)
```js
function addUrlQuery(query_type, value) {
  if (history.pushState) {
    const newurl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?${query_type}=${value}`
    window.history.pushState({ path: newurl }, '', newurl);
  }
}
```

> slice - [question](https://stackoverflow.com/questions/8495687/split-array-into-chunks)
```js
  function chunk(size, total) {
    const newArr = [];
    for(let i = 0; i < total.length; i+=size) {
      newArr.push(total.slice(i, i + size));
    }
    return newArr;
  }

```

