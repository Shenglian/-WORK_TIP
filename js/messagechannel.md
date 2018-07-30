## MessageChannel

```js
const ch = new MessageChannel()
let ch1 = ch.port1
let ch2 = ch.port2

ch1.onmessage = e => console.log(`${e.data}`)
ch2.onmessage = e => console.log(`${e.data}`)

ch1.postmessage('ch1')
ch2.postmessage('ch2')
```

