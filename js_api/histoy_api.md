
# HISTORY API

> pushState - add query at location url [stackoverflow](https://stackoverflow.com/questions/10970078/modifying-a-query-string-without-reloading-the-page)
```js
function addUrlQuery(query_type, value) {
  if (history.pushState) {
    const newurl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?${query_type}=${value}`
    window.history.pushState({ path: newurl }, '', newurl);
  }
}
```
