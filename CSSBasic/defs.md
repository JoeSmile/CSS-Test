### SVG 复用

#### SVG中g元素被用来将图形进行分组。一旦分组，你可以把它当作一个单一的形状，对整个图形组进行转换。与嵌套的svg元素相比，将元素作为整体转换是它的一个优点。你还可以将分组元素看成单个元素，对其设置样式，并重复使用。
```
<svg>
    <g transform="rotate(45 50 50)" style="stroke: #0000ff; stroke-width: 4px; fill: #ff0000">
      <line x1="10" y1="10" x2="85" y2="10" style="stroke: #006600;"/>
      <rect x="10" y="20" height="50" width="75"/>
      <text x="10" y="90">
        Text grouped with shapes</text>
    </g>
</svg>
```
g元素中的所有图形都围绕点(50,50)旋转了45度.
- g元素的样式由它的子元素继承.
- g元素没有x和y属性,如有需要可以用transform="translate(x,y)"定位元素。

#### SVG<defs>元素中嵌套了在SVG图片中可重用的定义。例如，你可以将多个SVG图形组织在一起，将其当作一个可重用的图形。

```
 <svg>
    <defs>
        <g id="shape" fill="darkmagenta">
            <circle cx="50" cy="50" r="50" />
        </g>
    </defs>
    <use xlink:href="#shape" x="50" y="50" />
    <use xlink:href="#shape" x="200" y="50" />
</svg>
```

引用<g>元素前，必须设置其id属性。
<use>元素通过xlink:href属性引用<g>元素。请注意属性值ID前面的#。
<use>元素通过x和y属性指定显示可重用图形的位置。请注意，<g>元素中的图形位于0,0处。这样做是因为它们的位置在<use>元素中指定.

#### SVG<symbol>元素用来定义可重用的标记。嵌套在<symbol>中的形状不会显示，除非其被<use>元素引用。
```
<svg width="500" height="100">
    <symbol id="shape">
        <circle cx="25" cy="25" r="25" fill="lightcoral"/>
    </symbol>

    <use xlink:href="#shape" x="50" y="25" />
</svg>
```
