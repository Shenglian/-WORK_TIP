> Overview ：

* [fizzbuzz](#fizzbuzz)
* [Harmless Ransom Note](#HarmlessRansomNote)
* [isPalindrome](#isPalindrome)
* [ReverseArrayInPlace](#ReverseArrayInPlace)
* [MeanMedianMode](#MeanMedianMode)
* [twoSum](#twoSum)

<a name="fizzbuzz" id="fizzbuzz">fizzbuzz</a>

```js
function fizzbuzz(num) {
  if (num % 5 === 0 && num % 3 === 0) {
    console.log('fizzbuzz');
  } else if (num % 3 === 0) {
    console.log('fizz');
  } else if (num % 5 === 0) {
    console.log('buzz');
  } else {
    console.log(i);
  }
}
```

<a name="HarmlessRansomNote" id="HarmlessRansomNote">Harmless Ransom Note</a>

```js
function harmlessRansomNote (noteText, magazineText) {
  var noteArr = noteText.split(' ');
  var magazineArr = magazineText.split(' ');
  var magazineObj = {};

  magazineArr.forEach(word => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });

  var noteIsPossible = true;
  noteArr.forEach(word => {
    if (!magazineObj[word]) {
      noteIsPossible = false;
    }
  });

  return noteIsPossible;
}
```

<a name="isPalindrome" id="isPalindrome">isPalindrome</a>


```js
function isPalindrome(str) {
  var re = /[^A-Za-z0-9]/g;
  var string = str.toLowerCase().replace(re, '');
  var reserveString = string.split('').reverse().join('');

  return string === reserveString;
}
```

<a name="ReverseArrayInPlace" id="ReverseArrayInPlace">ReverseArrayInPlace</a>

```js
// Be sure to manipulate the array passed in
// Do NOT push elements into a new array and return that array
// Do not use array.reverse() method
function reverseArrayInPlace(arr) {
  for (var i = 0; i < arr.length / 2; i++) {
    var tempVar = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVar;
  }
  
  return arr;
}
```

<a name="MeanMedianMode" id="MeanMedianMode">MeanMedianMode</a>

* Mean, Median, Mode
```js
function meanMedianMode(arr) {
  return {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr)
  }
}

function getMean(arr) {
  var sum = 0;
  
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

function getMedian(arr) {
  var median = 0;

  if (arr.length % 2 !== 0) {
    median = arr[Math.floor(arr.length / 2)];
  } else {
    var med1 = arr[(arr.length / 2) - 1];
    var med2 = arr[(arr.length / 2)];

    median = (med1 + med2) / 2;
  }

  return median;
}

function getMode(arr) {
  
  var modeObj = {};
  arr.forEach(num => {
    if (!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  });

  var MaxFrequency = 0;
  var modes = [];
  for (num in modeObj) {
    if (modeObj[num] > MaxFrequency) {
      MaxFrequency = modeObj[num];
      modes = [ num ];
    } else if (modeObj[num] === MaxFrequency) modes.push(num);
  }

  if (modes.length === Object.keys(modeObj).length) modes = 0;

  return modes;
}
```

<a name="twoSum" id="twoSum">twoSum</a>

```js
function twoSum(arrayNum, sum) {
  var pairs = [];
  var hashTable = [];

  for (var i = 0; i < arrayNum.length; i++) {
    var currentNum = arrayNum[i];
    // 假如要算兩者差異數，sum and currentNum 互相調換就行
    var counterNum = sum - currentNum;
    if (hashTable.indexOf(counterNum) > -1) {
      pairs.push([ currentNum, counterNum ]);
    }
    hashTable.push(currentNum);
  }

  return pairs;
}
```
