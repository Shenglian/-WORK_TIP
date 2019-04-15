> matches 

```js
oneElement.matches('.element') === true
```



> foreach NodeList

```js
// 1
Array.form()

// 2
Array.prototype.forEach.call()

// 3
[].forEach.call()
```



> modify attribute

```js
// get value
const oneValue = oneElement.value

// set value 
const oneElement.value = 'hello'

// set multi values
Object.assign(oneElement, {
  value: 'value',
  id: 'world'
})

// delete value

oneElement.value = null
```



> getComputeStyle

```js
window.getComputeStyle(oneElement).getPropertyValue('padding-top')
```



> modify dom

```js
element.appendChild(element)

element.insertBefore(newElement, element)

element.insertBefore(newElement, element.nextSibling)

element.cloneNode()

parentElement.removeChild(element)
```



> DocumentFragment

```js
const fragment = document.createDocumentFragment()

fragment.appendChild(element_1)
fragment.appendChild(element_2)

finallyAppend.appendChild(fragment)
```



> insertAdjacentHTML

```js
element.insertAdjacentHTML(['beforebegin', 'afterbegin', 'beforeend', 'afterend'], string)
```



> Event for Once

```js
oneElement.addEventListener('click', function listener(event) {
  console.log(event.target.value)
  oneElement.removeEventListener('click', listener)
})
```



> requestAnimationFrame

```js
const start = window.performance.now()
const duration = 2000

window.requestAnimationFrame(function fadeIn(now) {
  const progress = now - start
  oneElement.style.opacity = progress / duration
  
  if (progress < duration) {
    window.requestAnimationFrame(fadeIn)
  }
})
```



> Chainable

```js
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  
  swim(){
    console.log('swimming...')
    return this
  }
  
  walk() {
    console.log('walking...')
    return this
  }
  
  info() {
    console.log(`Name: ${this.name}, Age: ${this.age}`)
    return this
  }
}

const sheng = new Person('sheng', 22)


```



> setProperty

```js
document.styleSheets[0].rules[0].style.setProperty('--red', '#FF00000')
```

