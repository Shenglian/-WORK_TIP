
1. from .. to ..
2. efficiently 
3. vary 不同的
4. Currently 現在
5. It's worth nothing that 值得一提的是
6. metaphor 隱喻
7. interpreter 解釋
8. execute
9. Exception 例外錯誤
10. specify 指出，決定
11. priority 優先權
12. precedence 優先
13. bear in mind 牢記
14. belong to 屬於
15. restrict 限制

# Variable Scope

To work with JavaScript efficiently, one of the first things you need to understand is the concept of variable scope. The scope of a variable is controlled by the location of the variable declaration, and defines the part of the program where a particular variable is accessible.

想要高效率的運用 javascript，你第一件事情必須要先暸解什麼是 variable scope 的概念。一個 variable scope 的位置，是由 variable declaration 所控制著。和定義程式中哪些部分的特定變數可以被讀取。

Scoping rules vary from language to language. JavaScript has two scopes – global and local. **Any variable declared outside of a function belongs to the global scope**, and is therefore accessible from anywhere in your code. Each function has its own scope, and any variable declared within that function is only accessible from that function and any nested functions. **Because local scope in JavaScript is created by functions, it’s also called function scope.** When we put a function inside another function, then we create nested scope.

Scroping rule 從一個語言到另一個語言都不相同。Javascript 有兩種 scope 類型 - global and local。**任何一個變數被定義在 function 外面，都屬於 global**，因此在程式中的任何地方都可以讀取。每個 function 都有它自己的 scope，任何變數被宣告在 function 時，只有它和它內層的 functions 可以讀取變數們。**因為 Javascript 中的 local scope 是由 function 創造的。也被稱作為 function scope，** 當我們把一個 function 放置在另一個 function 中，也就建立了 nested scope。

Currently, JavaScript, unlike many other languages, does not support block level scoping. This means that declaring a variable inside of a block structure like a for loop, does not restrict that variable to the loop. Instead, the variable will be accessible from the entire function. It’s worth noting that the upcoming ECMAScript 6 will support block level scopes via the let keyword.

現在，Javascrtipt，不像其他語言，有支援 block level scoping，這也就意味著變數是直接宣告在 block 結構中。像是 for loop。並不會限制
variable 只能在 loop 中被存取。取而代之的 variable 可以在 function 中任何地方被讀取。值得一提的是，在 ECMAScript 6 中，透過 let 和 const 將會支援 block level scopes。

To make things clear let’s use a simple metaphor. Every country in our world has frontiers. Everything inside these frontiers belongs to the country’s scope. In every country there are many cities, and each one of them has its own city’s scope. The countries and cities are just like JavaScript functions – they have their local scopes. The same is true for the continents. Although they are huge in size they also can be defined as locales. On the other hand, the world’s oceans can’t be defined as having local scope, because it actually wraps all local objects – continents, countries, and cities – and thus, its scope is defined as global. Let’s visualize this in the next example:

用簡單的隱喻方式來解釋，這世界上每個國家都有邊界，在這邊界內的所有一切都是屬於這國家的。而每個國家都會有多個城市，每座城市都會有自己的範圍。國家和城市就像是 Javascript functions - 它們擁有自己的 local scope。而這同樣也適用於大陸。儘管它們版圖很大，它們也可以被定義為 locales。在另一方面，海洋不能被定義為具有 local scope，因為它實際上包了所有的 local 對象 - 大陸，國家和城市 - 因此，它的範圍被定義為全球性的。接下來讓我們想像這個例子：

```js
var locals = {
  // The Europe continent's local scope
  europe: function(){
    var myFriend = 'Monique';

    // The France country's local scope
    var france = function(){
      // The Paris city's local scope
      var paris = function(){
        console.log(myFriend);
      }

      paris();
    }

    france();
  }
};

locals.europe();
```
[Try out the example in JS Bin](http://jsbin.com/lewufuroqi/1/edit?js,console,output)

Now that we understand what local and global scopes are, and how they are created, it’s time to learn how the JavaScript interpreter uses them to find a particular variable.

現在我們理解了 local scope 和 global scope，和它們如何被建立的，是時候該解釋 Javascript 是如何使用它們找到特定的變數。

Back to the given metaphor, let’s say I want to find a friend of mine whose name is Monique. I know that she lives in Paris, so I start my searching from there. When I can’t find her in Paris I go one level up and expand my searching in all of France. But again, she is not there. Next, I expand my searching again by going another level up. Finally, I found her in Italy, which in our case is the local scope of Europe.

回到剛剛的例子，如同剛剛所說，我想要找一位叫做 Monique 的朋友，知道她住在巴黎，所以我開始從那邊開始搜尋，當我沒有在巴黎找到她時，我就開始提高一個級別和擴大搜尋範圍到法國。但是，依樣一無所獲。再來，我再一次去其他級別擴大我的搜尋範圍。最後，我在歐洲的 local scope 的義大利境內找到她。

In the previous example my friend Monique is represented by the variable myFriend. In the last line we call the europe() function, which calls france(), and finally when the paris() function is called, the searching begins. The JavaScript interpreter works from the currently executing scope and works it way out until it finds the variable in question. If the variable is not found in any scope, then an exception is thrown.

在前面的例子中我的朋友 Monique 代表 myFriend 這變數。我們在最後一行中 call europe function，該 function 也 invoke france()，最後當在 paris()
中被 invoked，搜尋開始。javascript interpreter 從當前的 scope 執行，和直到找到該變數。假如該變數找不到時，就會噴出 Exception

This type of look up is called lexical (static) scope. The static structure of a program determines the variable scope. The scope of a variable is defined by its location within the source code, and nested functions have access to variables declared in their outer scope. No matter where a function is called from, or even how it’s called, its lexical scope depends only by where the function was declared.

這行為被稱作 (lexical (static) scope)[http://en.wikipedia.org/wiki/Lexical_scoping#Lexical_scoping]。城市的靜態結構決定於 variable scope。 定義 variable 的範圍是由 source code 的位置和 外部範圍 透過 declared variable nested functions，不論 function 在哪邊被呼叫，或是它怎樣被呼叫的，lexical scope 只依賴這 function 在哪邊被宣告的。

In JavaScript, variables with the same name can be specified at multiple layers of nested scope. In such case local variables gain priority over global variables. If you declare a local variable and a global variable with the same name, the local variable will take precedence when you use it inside a function. This type of behavior is called shadowing. Simply put, the inner variable shadows the outer.

在 Javascript 中，具有相同名稱的變數可以被多層的 nested scope 所指定。在這情況下，local variable 會比 global 更加優先，假如你宣告 local variable 和 global variable 是相同名稱時。 當你在內層的 function 時， 用 local variable 有優先權。這行為叫做 shadowing，內層變數會蓋過外面的。

That’s the exact mechanism used when a JavaScript interpreter is trying to find a particular variable. It starts at the innermost scope being executed at the time, and continue until the first match is found, no matter whether there are other variables with the same name in the outer levels or not. Let’s see an example:

JavaScript interpreter 就是在這樣的機制下，試圖找到一個特定的 variable，它開始於內層 scope ，並繼續下去，直到找到第一個匹配，無論外層是否有一樣名字的其他變量。讓我們看一個例子：

```js
var test: = "It is global";

function testScope(){
  var test = "It is local";
  console.log(test);
}

testScope(); // It is local

console.log(test); // It is global

```

[Try out the example in JS Bin](http://jsbin.com/lewufuroqi/2/edit?js,console,output)

As we can see even with the same name the local variable doesn’t overwrite the global one after the execution of testScope() function. But this is not always the truth. Let’s consider this:

如同上面看到的，即使 local variable 和 global variable 的名稱相同，在執行 testScope() 也不會將他 override，只不過這也不完全是這樣。

```js
var test = 'it is gloabl';

fucntion testScope(){
  test = "it is local";

  console.log(test);
}

console.log(test); // it is global

testScope(); // it is local

console.log(test); // it is local
```

This time the local variable test overwrites the global variable with the same name. When we run the code inside testScope() function the global variable is reassigned. If a local variable is assigned without first being declared with the var keyword, it becomes a global variable. To avoid such unwanted behavior you should always declare your local variables before you use them. Any variable declared with the var keyword inside of a function is a local variable. It’s considered best practice to declare your variables.

這次雖然名字相同，但是原本的值卻被覆蓋掉了。當我們去執行 testScope() 將裡面的 global variable 重新賦值了，這是因為如果在 local variable 沒有以 var 這個 key word 來 declare 的話，就變成 global variable 了。用 var key word 來 declare 任何 variable 是一個 local variable 被認為是 best practice。

# Scope

A JavaScript interpreter performs many things behind the scene, and one of them is called hoisting. If you are not aware of this “hidden” behavior, it can cause a lot of confusion. The best way of thinking about the behavior of JavaScript variables is to always visualize them as consisting of two parts: **a declaration and an assignment**:

Javascript interpreter 在背後做了很多事情，其中一項叫做 hoisting。假如你不知道這行為的話，會非常混亂。而思考 Javascript 最好方式就是，variable 總是由兩個部分所組成： **declaration and assignment**

```js
var state; // variable declaration
state = 'ready'; // variable definition (assignment)

var state = 'ready' // declaration plus definition 
```

In the above code we first declare variable state, and then we assign the value “ready” to it. And in the last line of code we see that these two steps can be combined. But what you need to bear in mind is, even though they seem like one statement, in practice, the JavaScript engine treats that single statement as two separate statements, just like in the first two lines in the example.

在上面的 code 中，我們先宣稱一個變數叫 state，然後我們給予一個值 "ready"，在最後一行我們結合兩個步驟，但是你需要牢記的是，雖然我們看起來只是一個語句，
但是， JavaScript engine 嘗試把這語句拆成兩個句子，就像是第一二行這樣。

We already know that any variable declared within a scope belongs to that scope. But what we don’t know yet, is that no matter where variables are declared within a particular scope, all variable declarations are moved to the top of their scope (global or local). This is called hoisting, as the variable declarations are hoisted to the top of the scope. Note that hoisting only moves the declaration. Any assignments are left in place. Let’s see an example:

我們已經知道當任何一個變數在 scope 被宣稱的時候，它是屬於當下那個 scope 的。但是我們還不知道，不管變數在哪個 scope 被宣稱，所有的變數都會一致它們處於的scope 範圍最高處 (global or local) ，這叫做 hoisting ，當變數被聲明的時候，它會在當下的 scope 被 hoisting 到高處，注意， hoisting 只移動聲明，任何的 assignments 都是會被留在原地的。

```js 
console.log(state);   // output: undefined

var state = "ready";
```

As you can see when we log the value of state, the output is undefined, because we reference it before the actual assignment. You may have expected a ReferenceError to be thrown because state is not declared yet. But what you don’t know is that the variable is declared behind the scene. Here is how the code is interpreted by a JavaScript engine:

正如你看到，當我們 log 出 state 的值，輸出是 undefined，因為我們在實際賦值之前引用它。你可能會預期會拋出 ReferenceError 因為 state 還沒有被 declare。但你不知道的是，該 variable 背後已經做了 declaration。下面是 code 將藉由通過 JavaScript engine 來解釋：

```js
var state;           // moved to the top
console.log(state);   
state = "ready";     // left in place
```

Hoisting also affects function declarations. But before we see some examples, let’s first learn the difference between function declaration and function expression.

Hoisting 也會影響 function 的 declaration。但在此之前，我們看一些例子，讓我們先了解 function declaration 和 function expression 之間的差異。

```js
function showState() {}          // function declaration
var showState = function() {};   // function expression
```

**The easiest way to distinguish a function declaration from a function expression is to check the position of the word function in the statement. If function is the very first thing in the statement, then it’s a function declaration. Otherwise, it’s a function expression.**

**區分 function expression 和 function declaration 最簡單的方法是檢查語句中 function 的位置。如果 function 是在 statement 的最前面，那麼它就是一個 function declaration。否則，它是一個 function expression。**

Function declarations are hoisted completely. This means that the entire function’s body is moved to the top. This allows you to call a function before it has been declared:

function declaration 會被完全 hoist。這意味著整個 function 的 body 被移動到頂部。這使你可以在 declaration 之前調用一個 function ：

```js
showState();            // output: Ready

function showState() {
  console.log("Ready");
}

var showState = function() {
  console.log("Idle");
};
```

The reason the preceding code works is that JavaScript engine moves the declaration of showState() function, and all its content, to the beginning of the scope. The code is interpreted like this:

前面的 code 之所以能 work 是因為 JavaScript engine 移動 showState() function 的 declaration，其所有的內容，範圍的開始。該 code 是這樣被解譯：

```js
function showState() {     // moved to the top (function declaration)
  console.log("Ready");
} 

var showState;            // moved to the top (variable declaration)

showState();  

showState = function() {   // left in place (variable assignment)
  console.log("Idle");
};
```

As you may have noticed, only the function declaration is hoisted, but the function expression is not. When a function is assigned to a variable, the rules are the same as for variable hoisting (only the declaration is moved, while the assignment is left in place).

你可能已經注意到了，只能在 function declaration hoist ，但 function expression 不是。當一個 function 被分配給一個 variable，和 variable hoist 規則一樣（僅 declaration 被移動，而 assignment 留在原處）。

In the code above we saw that the function declaration takes precedence over the variable declaration. And in the next example we’ll see that when we have function declaration versus variable assignment, the last takes priority.

在上面的 code 中我們看到 function declaration 優先於 variable declaration。但是在接下來的例子中，我們會看到，當我們有 function declaration 與 variable declaration，後者優先。

```js
var showState = function() {
  console.log("Idle");
};

function showState() {
  console.log("Ready");
}

showState();            // output: Idle
```

This time we call showState() function in the last line of code which change the situation. Now we get output “Idle”. Here is how it looks when interpreted by JavaScript engine:

這一次，我們在 code 的最後一行呼叫 showState() 改變了這個狀況。現在，我們得到了 Idle。下面是它的 JavaScript interpreter 解譯：

```js
function showState(){        // moved to the top (function declaration)
  console.log("Ready");
}

var showState;               // moved to the top (variable declaration)

showState = function(){      // left in place (variable assignment)
  console.log("Idle");
};

showState();
```

# Things to Remember
> All declarations, both functions and variables, are hoisted to the top of the containing scope, before any part of your code is executed.
所有 declaration，function 和 variable，在執行 code 的任何部分之前被 hoist 到含有範圍的頂部。

> Functions are hoisted first, and then variables.
function 首先 hoist，然後 variable。

> Function declarations have priority over variable declarations, but not over variable assignments.
function declaration 優先於 variable declaration，但不蓋過 variable assignment。

> 資料來源：
[資料來源 - 1](http://wellsonjain.github.io/2016/03/18/demystifying-javascript-variable-scope-hoisting/)
[資料來源 - 2](http://www.rootclay.club/?p=123)
[資料來源 - 3](https://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/)
