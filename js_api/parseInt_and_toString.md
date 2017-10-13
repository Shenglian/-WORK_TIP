```js

// 2進位數字
var origin = '10000110'; 
// 先將字串以2進位方式解析為數值
var temp = parseInt(origin, 2);
// 將數值轉為16進位
var result = temp.toString(16);


// 二進位
var numbers = [
  { zero: '00000000' },
  { one: '00000001' },
  { two: '00000010' },
  { three: '00000011' },
  { four: '00000100' },
  { five: '00000101' },
  { six: '00000110' },
  { seven: '00000111' },
  { eight: '00001000' },
  { nine: '00001001' },
  { ten: '00001010' },
  { eleven: '00001011' },
  { twelve: '00001100' },
]

class Bitwise {
  constructor(numbers) {
    this.arrays = null;
    this.numbers = numbers;
  }

  separateNums(){

    const arrays = [];

    this.numbers.map(function(num, i){
      arrays.push(Object.values(num)[0]);
    });

    this.arrays = arrays;

    return this;
  }
  
  bitwiseByTwo() {
    this.arrays.map(function(num, i){
      console.log('bitwiseByTwo', parseInt(num, 2));
      return parseInt(num, 2);
    });
  
    return this;
  }

  bitwiseBySixteen() {
    this.arrays.map(function(num, i){
      console.log('bitwiseBySixteen', num.toString(16));
      num.toString(16)
    });
    return this;
  }

}

var bitwise = new Bitwise(numbers);

bitwise.separateNums().bitwiseByTwo().bitwiseBySixteen();

```