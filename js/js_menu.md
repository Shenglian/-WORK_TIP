[TOC]

# Basic	

## 註解

## 宣告

#### 變數

[by reference or by value](https://github.com/Shenglian/-WORK_TIP/blob/master/js/by_value_vs_by_reference.md)

#### 定義變數

```js
var, let, const 
```



####  變數取值

```js
// 沒有給變數預設值，初始化，值都是 undefined
var a; // a === undefined

// 被賦予 undefined 的變數，在和數值進行運算之後，會被轉成非數值（NaN）
var a;
a + 2; // NaN

// 當你對 null 進行運算，null 會自動轉換成數值 0，如果當做布林值運算，會被當成 false
var n = null
n * 32; // 0
```

#### 變數範圍

[講解 Javascript Scope](https://github.com/Shenglian/work-tip/blob/master/js/scope.md)

#### 變數提升

[Declare var let const and fn](https://github.com/Shenglian/-WORK_TIP/blob/master/js/declare_var_let_const_fn.md)



#### 函式提升

```js
foo()

function foo() {
    return 'foo'
}
```



#### 全域變數

```js
window.variable = 'variable'
```



#### 常數

```js
const PI = 3.14
```



# Statements

#### Block

```js
{
    statement1;
    statement2;
    statement3;
    ...
}
```

### conditional statement

###### if...else

###### if...elseif...else

###### switch...case

######  throw

######  try...catch

######  try...catch...finally

######  promise...then...catch



# Loop and iteration	

###### for

###### do...while

###### while 

```js
var n = 0;
var x = 0;
while (n < 3) {
  n++;
  x += n;
}

while (true) {
  console.log('Hello, world!');
}
```

###### labeled

```js
let str = '';
loop: 
for (let a = 0; 5 > a; a++) {
    if (a === 1) {
        continue loop;
    }
    str += a
}
```

###### break

###### continue

###### for...in

```js
for (variable in object) {
  statements
}
```

###### for...of

```js
// The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on)
for (var variable of array) {
    statement
}
```



# Function

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions



# Expressions and operators

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment



# Number and detail

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates



# Text formatting

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting



# Regular expressions

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions



# Indexed collections

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections



# Keyed collections

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections



# Working with objects

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects



# Details of the object model

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model



# Using promises

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises



# Iterators and generators

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators



# Meta programming

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming



# WebAPI

Resource

| Event Name     | Fired When                                                   |
| -------------- | ------------------------------------------------------------ |
| `cached`       | The resources listed in the manifest have been downloaded, and the application is now cached. |
| `error`        | A resource failed to load.                                   |
| `abort`        | The loading of a resource has been aborted.                  |
| `load`         | A resource and its dependent resources have finished loading. |
| `beforeunload` | The window, the document and its resources are about to be unloaded. |
| `unload`       | The document or a dependent resource is being unloaded.      |

Network

| Event Name | Fired When                                    |
| ---------- | --------------------------------------------- |
| `online`   | The browser has gained access to the network. |
| `offline`  | The browser has lost access to the network.   |

Focus Events

| Event Name | Fired When                                       |
| ---------- | ------------------------------------------------ |
| `focus`    | An element has received focus (does not bubble). |
| `blur`     | An element has lost focus (does not bubble).     |

Websocket Events

| Event Name | Fired When                                                   |
| ---------- | ------------------------------------------------------------ |
| `open`     | A WebSocket connection has been established.                 |
| `message`  | A message is received through a WebSocket.                   |
| `error`    | A WebSocket connection has been closed with prejudice (some data couldn't be sent for example). |
| `close`    | A WebSocket connection has been closed.                      |

Sessions Events

| Event Name | Fired When                                                   |
| ---------- | ------------------------------------------------------------ |
| `pagehide` | A session history entry is being traversed from.             |
| `pageshow` | A session history entry is being traversed to.               |
| `popstate` | A session history entry is being navigated to (in certain cases). |

CSS Animation Events

| Event Name           | Fired When                                                   |
| -------------------- | ------------------------------------------------------------ |
| `animationstart`     | A [CSS animation](https://developer.mozilla.org/en-US/docs/CSS/CSS_animations) has started. |
| `animationend`       | A [CSS animation](https://developer.mozilla.org/en-US/docs/CSS/CSS_animations) has completed. |
| `animationiteration` | A [CSS animation](https://developer.mozilla.org/en-US/docs/CSS/CSS_animations) is repeated. |

CSS Transition Events

| Event Name         | Fired When                                                   |
| ------------------ | ------------------------------------------------------------ |
| `transitionstart`  | A [CSS transition](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions) has actually started (fired after any delay). |
| `transitioncancel` | A [CSS transition](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions) has been cancelled. |
| `transitionend`    | A [CSS transition](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions) has completed. |
| `transitionrun`    | A [CSS transition](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions) has begun running (fired before any delay starts). |

Form Events

| Event Name | Fired When                   |
| ---------- | ---------------------------- |
| `reset`    | The reset button is pressed  |
| `submit`   | The submit button is pressed |

Printing Events

| Event Name    | Fired When                 |
| ------------- | -------------------------- |
| `beforeprint` | The print dialog is opened |
| `afterprint`  | The print dialog is closed |

Text Composition Events

| Event Name          | Fired When                                                   |
| ------------------- | ------------------------------------------------------------ |
| `compositionstart`  | The composition of a passage of text is prepared (similar to keydown for a keyboard input, but works with other inputs such as speech recognition). |
| `compositionupdate` | A character is added to a passage of text being composed.    |
| `compositionend`    | The composition of a passage of text has been completed or canceled. |

View Events

| Event Name         | Fired When                                                   |
| ------------------ | ------------------------------------------------------------ |
| `fullscreenchange` | An element was turned to fullscreen mode or back to normal mode. |
| `fullscreenerror`  | It was impossible to switch to fullscreen mode for technical reasons or because the permission was denied. |
| `resize`           | The document view has been resized.                          |
| `scroll`           | The document view or an element has been scrolled.           |

Clipboard Events

| Event Name | Fired When                                             |
| ---------- | ------------------------------------------------------ |
| `cut`      | The selection has been cut and copied to the clipboard |
| `copy`     | The selection has been copied to the clipboard         |
| `paste`    | The item from the clipboard has been pasted            |

Keyboard Events

| Event Name | Fired When                                                   |
| ---------- | ------------------------------------------------------------ |
| `keydown`  | ANY key is pressed                                           |
| `keypress` | ANY key except Shift, Fn, CapsLock is in pressed position. (Fired continously.) |
| `keyup`    | ANY key is released                                          |

Mouse Events

| Event Name          | Fired When                                                   |
| ------------------- | ------------------------------------------------------------ |
| `mouseenter`        | A pointing device is moved onto the element that has the listener attached. |
| `mouseover`         | A pointing device is moved onto the element that has the listener attached or onto one of its children. |
| `mousemove`         | A pointing device is moved over an element. (Fired continously as the mouse moves.) |
| `mousedown`         | A pointing device button is pressed on an element.           |
| `mouseup`           | A pointing device button is released over an element.        |
| `auxclick`          | A pointing device button (ANY non-primary button) has been pressed and released on an element. |
| `click`             | A pointing device button (ANY button; soon to be primary button only) has been pressed and released on an element. |
| `dblclick`          | A pointing device button is clicked twice on an element.     |
| `contextmenu`       | The right button of the mouse is clicked (before the context menu is displayed). |
| `wheel`             | A wheel button of a pointing device is rotated in any direction. |
| `mouseleave`        | A pointing device is moved off the element that has the listener attached. |
| `mouseout`          | A pointing device is moved off the element that has the listener attached or off one of its children. |
| `select`            | Some text is being selected.                                 |
| `pointerlockchange` | The pointer was locked or released.                          |
| `pointerlockerror`  | It was impossible to lock the pointer for technical reasons or because the permission was denied. |

Dorg and drop Events

| Event Name  | Fired When                                                   |
| ----------- | ------------------------------------------------------------ |
| `dragstart` | The user starts dragging an element or text selection.       |
| `drag`      | An element or text selection is being dragged (Fired continuously every 350ms). |
| `dragend`   | A drag operation is being ended (by releasing a mouse button or hitting the escape key). |
| `dragenter` | A dragged element or text selection enters a valid drop target. |
| `dragover`  | An element or text selection is being dragged over a valid drop target. (Fired continuously every 350ms.) |
| `dragleave` | A dragged element or text selection leaves a valid drop target. |
| `drop`      | An element is dropped on a valid drop target.                |

Media Events

| Event Name       | Fired When                                                   |
| ---------------- | ------------------------------------------------------------ |
| `durationchange` | The `duration` attribute has been updated.                   |
| `loadedmetadata` | The metadata has been loaded.                                |
| `loadeddata`     | The first frame of the media has finished loading.           |
| `canplay`        | The browser can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content. |
| `canplaythrough` | The browser estimates it can play the media up to its end without stopping for content buffering. |
| `ended`          | Playback has stopped because the end of the media was reached. |
| `emptied`        | The media has become empty; for example, this event is sent if the media has already been loaded (or partially loaded), and the [`load()`](https://developer.mozilla.org/en-US/docs/XPCOM_Interface_Reference/NsIDOMHTMLMediaElement) method is called to reload it. |
| `stalled`        | The user agent is trying to fetch media data, but data is unexpectedly not forthcoming. |
| `suspend`        | Media data loading has been suspended.                       |
| `play`           | Playback has begun.                                          |
| `playing`        | Playback is ready to start after having been paused or delayed due to lack of data. |
| `pause`          | Playback has been paused.                                    |
| `waiting`        | Playback has stopped because of a temporary lack of data.    |
| `seeking`        | A *seek* operation began.                                    |
| `seeked`         | A *seek* operation completed.                                |
| `ratechange`     | The playback rate has changed.                               |
| `timeupdate`     | The time indicated by the `currentTime` attribute has been updated. |
| `volumechange`   | The volume has changed.                                      |
| `complete`       | The rendering of an [`OfflineAudioContext`](https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext) is terminated. |
| `audioprocess`   | The input buffer of a [`ScriptProcessorNode`](https://developer.mozilla.org/en-US/docs/Web/API/ScriptProcessorNode) is ready to be processed. |

Progress Events

| Event Name  | Fired When                                                   |
| ----------- | ------------------------------------------------------------ |
| `loadstart` | Progress has begun.                                          |
| `progress`  | In progress.                                                 |
| `error`     | Progression has failed.                                      |
| `timeout`   | Progression is terminated due to preset time expiring.       |
| `abort`     | Progression has been terminated (not due to an error).       |
| `load`      | Progression has been successful.                             |
| `loadend`   | Progress has stopped (after "error", "abort" or "load" have been dispatched). |



# Dom



# Tip

[tip](https://github.com/Shenglian/work-tip/blob/master/js/tip.md)









