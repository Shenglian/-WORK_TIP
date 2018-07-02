通过上面的学习，知道如何通过JavaScript来修改CSS样式。我们平常中会使用到的方法会有：

- 通过DOM Element对象的`getAttribute()`、`setAttribute()`和`removeAttribute()`等方法修改元素的`style`属性
- 通过对元素节点的`style`来读写行内CSS样式
- 通过`style`对象的`cssText`属性来修改全部的`style`属性
- 通过`style`对象的`setProperty()`、`getPropertyValue()`、`removeProperty()`等方法来读写行内CSS样式
- 通过`window.getComputedStyle()`方法获得浏览器最终计算的样式规则
- 通过`className`或`classList`给元素添加或删除类名，配合样式文件来修改元素样式

其实除了上述介绍的方法之外，咱们还可以直接添加样式。常见的方式是通过创建`style`标签来添加内置的CSS样式表或者通过`link`标签来引用外部样式表。另外还可以使用`addRule`和`insertRule`来添加样式规则。不过在这篇文章我们没有介绍这些内容，我们将在后续的内容中再来学习这方面的知识。如果你对这方面的知识感兴趣，欢迎持续观注后续的更新。

