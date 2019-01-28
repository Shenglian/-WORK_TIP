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

