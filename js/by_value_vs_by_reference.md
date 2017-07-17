# By value vs by reference OR by Sharing?

### by value 
  假如變數是 primitive value 是 Number, Boolean, String
  這時候變數會在記憶體中存在一個自我的位置，每個 primitive value 都是 unique location

### by reference
  假如變數是物件，只單純修改變數的值，是變成 by reference

  ```js
    let a = { greeting: 123 };
    let b = a;

    // a, b 是 by reference
    console.log('a => ', a); // { greeting: 123 }
    console.log('b => ', b); // { greeting: 123 }
    
    b.greeting = 222;

    // a, b 還是 by reference
    console.log('a => ', a); // { greeting: 222 }
    console.log('b => ', b); // { greeting: 222 }

    let a = { foo: 999 };

    // a 被 assign new value ， 就不是 by reference
    console.log('a => ', a); // { foo: 999 }
    console.log('b => ', b); // { greeting: 222 }
  ```
  
參考資料 1：[[JavaScript] by value V.S by reference的行為](http://myohmy10420-blog.logdown.com/posts/1752866)
參考資料 2：[談談JavaScript中by reference和by value的重要觀念](https://pjchender.blogspot.tw/2016/03/javascriptby-referenceby-value.html)
