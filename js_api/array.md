
# Array 

> slice - [question](https://stackoverflow.com/questions/8495687/split-array-into-chunks)
```js
//  slice chunk
function chunk(size, total) {
    const newArr = [];
    for(let i = 0; i < total.length; i+=size) {
        newArr.push(total.slice(i, i + size));
    }
    return newArr;
}

// clone array
function clone(arr) {
	return arr.slice(0);
}
```

> splice - [source](https://davidwalsh.name/array-insert-index)
```js
let array = ["a", "b", "c", "a", {name: 'sheng'}, {age: 20}];

// remove items 
let getPositionIndex = array.indexOf("b");
getPositionIndex ? array.splice(i, 1) : null;

// remove multiple items 
for (let i = array.length - 1; i--;) {
  array[i] === "a" ? array.splice(i, 1) : null;
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
