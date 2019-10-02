[TOC]



#### Decimal base exponents

```js
1e0 === 1;
1e1 === 10;
1e2 === 100;
1e3 === 1000;
```
#### Implicit Return Shorthand
```js
function calcCircumfunction(diameter) {
	return Math.PI * diameter;
}
```
|||
```js
const calcCircumfunction = diameter => Math.PI * diameter;
```

#### Mandatory Parameter Shorthand
```js
const mandatory = () => {
	throw new Error('Missing parameter');
}
```
`then`
```js
const foo = (bar = mandatory()) => {
	return bar;
}
```

#### Operator Shorthand
```js
if (x) {
   y();
 }
```
|||
```js
// Shorthand:
x && y();
```

#### 同時監聽許多元素時，透過 event.target 來取得是哪個元素觸發的
```js
Array.from(allElements).forEach(element => {
  element.addEventListener('change', function (event) {
    console.log(event.target.value)
  })
})
```

#### animate window.requestAnimationFrame
```js
const start = window.performance.now()
const duration = 2000

window.requestAnimationFrame(function fadeIn (now) {
  const progress = now - start
  oneElement.style.opacity = progress / duration

  if (progress < duration) {
    window.requestAnimationFrame(fadeIn)
  }
}
```

####  原本 undefined 是可以被 overwirten ，但是 ES5 之後就不行了
```js
// http://stackoverflow.com/questions/7452341/what-does-void-0-mean
void 0; // undefied;
```

#### 分段處理數據
```js
function get(url) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = () => req.status === 200 ? resolve(req.response) : reject(Error(req.statusText));
    req.onerror = (e) => reject(Error(`Network Error: ${e}`));
    req.send();
  });
}

get('https://gist.githubusercontent.com/Shenglian/57b157cd8c9c52fa9af9fcdf17becea0/raw/9cb237c9a332d19caab674354c831418126fd8b7/person.json')
.then((data) => {
    var result = JSON.parse(data);
    response(result);
})
.catch((error) => {
    console.log('error', error);
});

var res = [];

function response(data) {
  
  var chunk = data.splice(0, 100);
  res = res.concat(chunk.map(function(p){
    return p.age;
  }));

  console.log(res);

  if (data.length > 0) {
    setTimeout(function(){
      response(data);
      
    }, 0);
  }
}
```

####  block
```js
{
	function foo () { return 1 }
	foo() === 1
	{
		function foo () { return 2 }
		foo() === 2
	}
	foo() === 1
}
```

####  
```js
function quux(){
  return 'quux';
}

let obj = {
  foo: "bar",
  [ "baz" + quux() ]: 42
}

console.log({obj});
```

#### getter setter
```js
class Rectangle {
  constructor (width, height) {
    this._width  = width
    this._height = height
  }
  set d_width (width)  { this._width = width               }
  get d_width ()       { return this._width * 2            }

  set width   (width)  { this._width = width               }
  get width   ()       { return this._width                }

  set height  (height) { this._height = height             }
  get height  ()       { return this._height               }

  get area    ()       { return this._width * this._height }
}

var r = new Rectangle(50, 20)
r.area === 1000

console.log('r.d_width: ', r.d_width);
```
#### write fs.writeFile

```js
fs.writeFile('issues.json', JSON.stringify(response.data), function (err) {
    err ? console.log(err) : console.log('Write operation complete.');
});
```

#### Use Map 

```js
function pinkFruitColor(color) {
	const fruitColor = new Map()
        .set('red', ['apple', 'strawberry'])
        .set('yellow', ['banana', 'pineapple'])
        .set('purple', ['grape', 'plum'])
    
    return fruitColor.get(color) || []
}
```

#### find / some : if data is `unique ID`. use `find` better than `filter`.  

#### otherwise, want to boolean use `some`

```js
const characters = [
   	{id: 1, name: 'ironman' },
    {id: 2, name: 'black_widow' },
    {id: 3, name: 'captain_america' },
    {id: 4, name: 'captain_america' }
]

function getCharacter(name) {
    return character => character.name === name
}

characters.filter(getCharacter('captain_america'))
// [
// 	{id: 3, name: 'captain_america' },
//  {id: 4, name: 'captain_america' }	
// ]

characters.find(getCharacter('captain_america'))
// [
//   {id: 3, name: 'captain_america'}
// ]

characters.some(getCharacter('captain_america'))
```



#### 一次性函數

> 適用於只需要運行一次的初始化代碼

```js
let sca = function() {
  console.log('msg')
  sca = function() {
    console.log('msgs')
  }
}

sca() // msg
sca() // msgs
sca() // msgs
```



#### 構造參數 with reduce

> 混合使用

```js
function add(first, second, ...remaining) {
  return first + second + reminding.reduce((acc, curr) => acc + curr, 0)
}
```



#### 統計 Array 中相同項目的個數

>  利用 `reduce` 統計個數

```js
let carsObj = ['BMW', 'BENZ', 'BENZ', 'TESLA', 'TOYOTA'].reduce((obj, name) => {
  obj[name] = obj[name] ? ++obj[name] : 1;
  return obj
}, {})

console.log({carsObj})
```



#### 對於 Array 的解構

> Array 也可以對象解構。可以方便地獲取 Array 的某個第 N 值

```js
const csvFileLine = "1997, John Doe, US, sheng@g.com"
const { 0: year, 1: name, 2: country, 3: email} = csvFileLine.split(',')

console.log({
 year, name, country, email
}) // year: '1997', name: 'John Doe', country: 'US', email: 'sheng@g.com'
```



#### Object and Array Destructure

> we can access nested properties even if they are in a different type of data structure than the external one we’re accessing.

```js
var organization = {
  user: ['aaa', 'bbb'],
  name: 'Magazine',
  url: 'https://www.smashingmagazine.com/'
}

const {users: [a]} = organization

console.log({a}) // a = aaa

var organization = [
  {
    name: 'far',
    age: 20
  },
  {
    name: 'bar',
    age: 40
  }
]

const [get1, get2] = organization

console.log(get1, get2) // get1: { name: 'far', age: 20 }, get2: { name: 'bar', age: 40 }
```



#### Destructure Aliases

> set data other variable name

```js
const users = [{
  name: 'rachel',
  title: 'editor'
}, {
  name: 'laurie',
  title: 'contributor'
}]

const [{'name': otherNameOne}, {'name': otherNameTwo}] = users

console.log({otherNameOne, otherNameTwo}) // { otherNameOne: 'rachel', otherNameTwo: 'laurie' }
```



#### Destructure Default Values

> set variable default value

```js
const {
  name = 'Cloud',
  age = 20,
  cb = function() { console.log('cb') }
} = {
  name: 'Luke',
  organzation: 'Acme Publisting'
}

console.log({name, age}) // Luke, 20

cb() // cb
```



#### Nested Destructure in function or not

> 使用深層解構賦值

```js
var car = {
  model: 'bmw 2018',
  engine: {
    v6: true,
    turbo: true,
    vin: 2093
  }
}

// in variable
const {
  model, 
  engine: {v6}
} = car

console.log(model, v6) // bmw 2018 true

// in function
const modelAndVIN = ({model, engine: {vin}}) => {
  console.log(`model : ${model}, VIN: ${vin}`);
}

modelAndVIN(car) // model: bmw 2018, VIN: 2093
```



#### Set default Value of function

> set default value

```js
function abc({
  a = 'a', 
  b = 'b', 
  c = 'c',
  d = function() { console.log('d') }
} = {}) {
  console.log(a, b, c, d)
}


abc() // a b c function() { console.log('d') }
```



#### reduce 同時使用 map and filter

> 只需要一次 for loop

```js
const numbers = [10, 20, 30, 40]
let tempNum = 0

const doubleOver50 = numbers.reduce((finalList, num) => {
  tempNum = num * 2
  if (tempNum > 50) {
    finalList.push(num)
  }
  return finalList
}, [])

console.log(doubleOver50) // [30, 40]
```



#### 數字補零 

> 有時候需要將一位數補成兩位數

```js
const addZero1 = (num, len = 2) => (`0${num}`).slice(-len)
const addZero2 = (num, len = 2) => (`${num}`).padStart(len, '0')
```



#### 惰性載入函數

> 這個判斷在整個項目中都不會變化，可以判斷分支在整個項目運行時，只執行某個分支

```js
function foo() {
  if (a !== b) {
    console.log('a1')
  } else {
    console.log('b2')
  }
}

// 改善後

function foo() {
  if (a !== b) {
    foo = function() {
      console.log('a1')
    }
  } else {
    foo = function() {
      console.log('b2')
    }
  }
  
  return foo();
}
```



#### 代碼複用

> 建構一個運行時的通用驗證函數

```js
const schema = {
  first: {
    required: true
  },
  last: {
    required: true
  }
}

const validate = (schema, values) => {
  for (field in schema) {
    if (schema[field].required) {
      if (!values[field]) {
        return false
      }
    }
  }
  
  return true
}

console.log(validate(schema, {first: 'Sheng'})); // false
console.log(validate(schema, {first: 'Sheng', last: 'Lin'})) // true
```



#### async/await 

> 範例

```js
async function getItems() {
  try {
    const user = await getUser();
    const order = await getOrderByUser(user);
    const items = await getOrderItemsByOrder(order);
    return items
  } catch(err) {
    // error handle
  }
}

getItems()
.then(res => {
  // do something
})
```



