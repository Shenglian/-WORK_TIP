# Declare var let const and fn

[原因出處](https://zhuanlan.zhihu.com/p/28140450)

In JavaScript, all binding declarations are instantiated when control flow enters the scope in which they appear. Legacy var and function declarations allow access to those bindings before the actual declaration, with a "value" of undefined. That legacy behavior is known as "hoisting". let and const binding declarations are also instantiated when control flow enters the scope in which they appear, with access prevented until the actual declaration is reached; this is called the Temporal Dead Zone. The TDZ exists to prevent the sort of bugs that legacy hoisting can create. -- [來源](https://gist.github.com/rwaldron/ca35924d59ddc60a6aa165e1e4a3acda)

- 變數三階段
  - created
  - initialize
  - assign 

- `var`
	- 有包含這三階段，只有 `created`, `initialize` 被 `hoisting` 。
	- `initialize` 時，為 undefined。
- `fn` 
	- 有包含這三階段，並且都被 `hoisting` 。
- `let`, `const` 
	- 只有在 `created` 階段才有被 `hosting`
	- 在沒有任何的 `initialize` 的情形發生，強制讀取 `let` or `const` 只是會發生reference error : let x is not defined
- `const` 
	- 沒有 assign （很合理）

- 結論：`let` and `const` 這些 keyword 會被這樣設計的原因。可能是要降低記憶體吧（其中之一）。當需要用到的時候，再去 `initialize` ，然後使用它們。