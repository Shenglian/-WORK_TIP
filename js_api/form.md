
# Form 

> GET input value && checked

```html

<form>
  <input type="radio" name="input_name" value="007" />
  <input type="radio" name="input_name" value="007" />
  <input type="radio" name="input_name" value="007" />
</form>
```

```js
const form = document.querySelector('form');

for (let o = 0; o < form.input_name.length; o++) {
  console.log(form.input_name[i].checked);
  console.log(form.input_name[i].value);
}

```