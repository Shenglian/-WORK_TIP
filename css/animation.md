# Animation 

### 利用貝茲曲線 - [來源](http://tobiasahlin.com/blog/curved-path-animations-in-css/)

```html
<div class="demo-dot"></div>
```
```css
.demo-dot {
  margin: 300px;
  -webkit-animation: xAxis 2.5s infinite cubic-bezier(0.02, 0.01, 0.21, 1);
  animation: xAxis 2.5s infinite cubic-bezier(0.02, 0.01, 0.21, 1);
}

.demo-dot::after {
  content: '';
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: #333;
  -webkit-animation: yAxis 2.5s infinite cubic-bezier(0.3, 0.27, 0.07, 1.64);
  animation: yAxis 2.5s infinite cubic-bezier(0.3, 0.27, 0.07, 1.64);
}

@-webkit-keyframes yAxis {
  50% {
    -webkit-animation-timing-function: cubic-bezier(0.02, 0.01, 0.21, 1);
    animation-timing-function: cubic-bezier(0.02, 0.01, 0.21, 1);
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
  }
}

@keyframes yAxis {
  50% {
    -webkit-animation-timing-function: cubic-bezier(0.02, 0.01, 0.21, 1);
    animation-timing-function: cubic-bezier(0.02, 0.01, 0.21, 1);
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
  }
}

@-webkit-keyframes xAxis {
  50% {
    -webkit-animation-timing-function: cubic-bezier(0.3, 0.27, 0.07, 1.64);
    animation-timing-function: cubic-bezier(0.3, 0.27, 0.07, 1.64);
    -webkit-transform: translateX(50px);
    transform: translateX(50px);
  }
}

@keyframes xAxis {
  50% {
    -webkit-animation-timing-function: cubic-bezier(0.3, 0.27, 0.07, 1.64);
    animation-timing-function: cubic-bezier(0.3, 0.27, 0.07, 1.64);
    -webkit-transform: translateX(50px);
    transform: translateX(50px);
  }
}
```