
# Form 

> GET input value && checked

設定 Form ID 然後，可以直接

```html

<form id="form">
  <input type="radio" name="input_name" value="007" />
  <input type="radio" name="input_name" value="007" />
  <input type="radio" name="input_name" value="007" />
</form>
```

```js
const form = document.querySelectorAll('form');

for (let o = 0; o < form.input_name.length; o++) {
  console.log(form.input_name[i].checked);
  console.log(form.input_name[i].value);
}

```