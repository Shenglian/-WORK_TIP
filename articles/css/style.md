通過JavaScript來修改CSS樣式。我們平常中會使用到的方法會有：

- 通過DOM Element對象的 `getAttribute()` 、 `setAttribute()` 和 `removeAttribute()` 等方法修改元素的 `style` 屬性
- 通過對元素節點的 `style` 來讀寫行內CSS樣式
- 通過 `style` 對象的 `cssText` 屬性來修改全部的 `style` 屬性
- 通過 `style` 對象的 `setProperty()` 、 `getPropertyValue() `、 `removeProperty()` 等方法來讀寫行內CSS樣式
- 通過 `window.getComputedStyle()` 方法獲得瀏覽器最終計算的樣式規則
- 通過 `className` 或 `classList` 給元素添加或刪除類名，配合樣式文件來修改元素樣式
- 利用 `Object.assign` 一次設定 style
```js
Object.assign(element.style, {
  width: '100px',
  height: '100px'
})
```

其實除了上述介紹的方法之外，咱們還可以直接添加樣式。常見的方式是通過創建 `style` 標籤來添加內置的CSS樣式表或者通過 `link` 標籤來引用外部樣式表。另外還可以使用 `addRule` 和 `insertRule` 來添加樣
式規則。





