# Overview

* [list-basic](#list-basic)
* [list-Advance](#list-advance)

# Source Code - Basic
<a target="_blank" href="https://hugogiraudel.com/2013/07/15/understanding-sass-lists/" name="list-basic" id="list-basic">list-basic</a>
# Source Code - Advance （主要是自創 more function by list）
<a target="_blank" href="https://hugogiraudel.com/2013/08/08/advanced-sass-list-functions/" name="list-advance" id="list-advance">list-advance</a>

```css

length($list) =>                        return $list
nth($list, $index) =>                   return the value at $index position in $list (throw an error if index is greater than the list length)
index($list, $value) =>                 return the first index of $value in $list (or null)
append($list, $value[, $separaror]) =>  appends $value to the end of $list using $separator as a separator (using the one from the first list if not specified)
join($list-1, $list-2[, $separator]) => appends $list-2 to $list-1 using $separator as a separator (using the one from the first list if not specified)
zip(*$lists) =>                         combines

```
