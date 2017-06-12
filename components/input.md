## Input

> checkbox
```html
<div class="custom_input_style">
    <input type="radio" id="demo-1" name="demo">
    <label for="demo-1">demo-1</label>
    <div class="check"></div>
  </div>
  
  <div class="custom_input_style">
    <input type="radio" id="demo-2" name="demo">
    <label for="demo-2">demo-2</label>
    <div class="check"></div>
  </div>
  
  <div class="custom_input_style">
    <input type="radio" id="demo-3" name="demo">
    <label for="demo-3">demo-3</label>
    <div class="check"></div>
  </div>
```

```scss

.custom_input_style {
  position: relative;
  transition: all, .3s;
}

.custom_input_style input[type=radio],
.custom_input_style input[type=checkbox] {
  visibility: hidden;
  position: absolute;
}


.custom_input_style label {
  display: block;
  position: relative;
  padding: 15px;
  padding-left: 35px;
  font-weight: 300;
  color: #2F3942;
  z-index: 1;
  transition: all 0.25s linear;
  cursor: pointer;
}


.custom_input_style .check {
  position: absolute;
  top: 50%;
  left: 10px;
  width: 16px;
  height: 16px;
  transition: border .25s linear;
  transform: translate(0, -50%);
  border-radius: 100%;
  box-shadow: 0 0 0 1px #979797;
}

input[type=radio]:checked ~ .check{
  background: #979797;
}


.custom_input_style:hover {
  background-color: #eee;
}

```
