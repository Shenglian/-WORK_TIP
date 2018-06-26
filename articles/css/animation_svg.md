# Animation svg

### SVG SCROLL- [來源](https://stackoverflow.com/questions/40608999/moving-image-on-scroll-through-svg-path)

```html
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- Draw the outline of the motion path in grey, along with 2 small circles at key points -->
  <path d="M10,110 A120,120 -45 0,1 110 10 A120,120 -45 0,1 10,110" stroke="green" stroke-width="2" fill="none" id="theMotionPath"/>
  <circle cx="10" cy="110" r="3" fill="#000"/>
  <circle cx="110" cy="10" r="3" fill="#000"/>

  <!-- Red circle which will be moved along the motion path. -->
  <circle cx="0" cy="0" r="5" fill="red" id="dot"/>
</svg>

<div class="verylong"></div>
```
```css
.veryLong {
  height: 2000px;
}

svg {
  position: fixed;
  width: 200px;
  height: 200px; 
}
```
```js
function positionTheDot() {

  // What percentage down the page are we? 
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  // Get path length
  var path = document.getElementById("theMotionPath");
  var pathLen = path.getTotalLength();
  
  // Get the position of a point at <scrollPercentage> along the path.
  var pt = path.getPointAtLength(scrollPercentage * pathLen);

  // Position the red dot at this point
  var dot = document.getElementById("dot");
  dot.setAttribute("transform", "translate("+ pt.x + "," + pt.y + ")");
};

// Update dot position when we get a scroll event.
window.addEventListener("scroll", positionTheDot);

// Set the initial position of the dot.
positionTheDot();
```

### SVG CSS 
```html
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="500px" height="500px" viewBox="0 0 500 500" enable-background="new 0 0 500 500" xml:space="preserve">
  <path class="svg1" style="fill: none; stroke: #3498db; stroke-width: 7; stroke-linecap: round; stroke-linejoin:  miter; stroke-miterlimit: 4;" d="M247 103 A130 130 0 1 1 247 363 A130 130 0 1 1 247 103" />
</svg>
```
```css
.svg1 {
  stroke-dasharray: 822;
  stroke-dashoffset: 822;
  animation: dash 5s linear alternate infinite;
}
@keyframes dash {
  from {
    stroke-dashoffset: 822;
  }
  to {
    stroke-dashoffset: 0;
  }
}
```