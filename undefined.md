# undefined

[資料來源：7 tips to handle undefined in JavaScript](https://rainsoft.io/7-tips-to-handle-undefined-in-javascript/?utm_source=javascriptweekly&utm_medium=email)

```js

// 產生 undefined 的情況：

// 1.
let number;
number; // undefined;
// an uninitialized variable number 

// 2.
let movie = { name: 'Intersteller'; }
movie.year; // undefined;
// a non-existing object proprty movie.year

// 3.
let movies = ['Intersteller', 'Alexander'];
movies[3]; // undefined;
// a non-existing array element movies[3]

```