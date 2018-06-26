# Selector 

```css
A[attr^=value] 

A[attr|=value] /*x` Attribute begins with value OR is first in a dash separated list */ 

A[attr$=value] 

A[attr=value] 

A[attr~=value] /* in space separated list */ 

 

:checked 

:disabled 

:enabled 

:default /* optione -> selected; radio,checkbox -> checked */ 

:valid 

:invalid 

:required /* you can chain pseudo classes -> :required:invalid */ 

:optional 

:in-range 

:out-of-range 

:read-only 

:read-write 

:placeholder-shown 

:nth-child 

:nth-last-child 

:nth-of-type 

:nth-last-of-type 

:only-child 

:first-of-type 

:last-of-type 

 

::first-line 

::first-letter 

::selection 

 

::inactive-selection /* Selected content inside an inactive window */ 

::spelling-error /* Check spelling and grammar for editable elements */ 

::grammar-error /* Matches grammatical errors */ 

::maeker /* Matches list item markers */ 

::placeholder /* Matches placeholder text of form elements */ 

 

/* experimental Selector */ 

:target /* selector target an element with an id that matches part of the current URL */ 

:matches /* :matches (.one, .two, .three) */ 

div:has() 

:any-link /* anylink===link and visited */ 

:dir /* ltr, rtl 文檔方向 */ 

:lang

```
