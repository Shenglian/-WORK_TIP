
# Array 

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

> from (es6)

```js

const inputs = document.querySelectorAll('input[name="hello"]');

if ("ES5") {
  Array.prototype.slice.call(inputs)
  .forEach(x => console.log(x));
} else {
  Array.from(inputs)
    .filter((x, i) => x < 10)
    .forEach(x => console.log(x));
}

```
