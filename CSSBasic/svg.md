### svg预定义了一些形状，今天我们就来介绍下这些形状及相关属性
```
 矩形 <rect>
 圆形 <circle>
 椭圆 <ellipse>
 线 <line>
 折线 <polyline>
 多边形 <polygon>
 路径 <path>
 ```

1. <rect> 标签可用来创建矩形
```
<svg>
    <rect x="50" y="20" width="100px" rx="20" ry="20" height="100px" style="fill:rgb(0,0,255);stroke-width:1" stroke=rgb(0,0,0) fill-opacity="0.1"
    stroke-opacity="0.9" />
</svg>
```
> 有些教程中说version是必须的属性，其实它在svg2版本中就不推荐使用了，用version="1.1"是为了明确版本，可供选择的值只有"1.1" & "1.0".
解析：
- rect 元素的 width 和 height 属性可定义矩形的高度和宽度
- style 属性用来定义 CSS 属性
- fill 属性定义矩形的填充颜色（rgb 值、颜色名或者十六进制值）
- stroke-width 属性定义矩形边框的宽度
- stroke 属性定义矩形边框的颜色
- x 属性定义矩形的左侧位置（例如，x="0" 定义矩形到浏览器窗口左侧的距离是 0px）
- y 属性定义矩形的顶端位置（例如，y="0" 定义矩形到浏览器窗口顶端的距离是 0px）
- fill-opacity 属性定义填充颜色透明度（合法的范围是：0 - 1）
- stroke-opacity 属性定义笔触颜色的透明度（合法的范围是：0 - 1）
- rx 和 ry 属性可使矩形产生圆角

2. <circle> 标签可用来创建一个圆
```
 <svg>
                <circle cx="100" cy="50" r="40" stroke="black" stroke-width="1" fill="chartreuse"/>
              </svg>
```
- cx和cy属性定义圆点的x和y坐标。如果省略cx和cy，圆的中心会被设置为(0, 0)
- r属性定义圆的半径

3. <ellipse> 元素是用来创建一个椭圆
```
<svg>
    <ellipse cx="100" cy="80" rx="100" ry="50" style="fill:yellow;stroke:purple;stroke-width:2"/>
</svg>
```
- cx属性定义的椭圆中心的x坐标
- cy属性定义的椭圆中心的y坐标
- rx属性定义的水平半径
- ry属性定义的垂直半径

4. <line> 元素是用来创建一个直线
```
<svg>
    <line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2"/>
</svg>
```
- x1 属性在 x 轴定义线条的开始
- y1 属性在 y 轴定义线条的开始
- x2 属性在 x 轴定义线条的结束
- y2 属性在 y 轴定义线条的结束

5. <polygon> 标签用来创建含有不少于三个边的图形
```
<svg style="height: 400px; width: 400px;">
    <polygon points="100,100 100,200 300,300 400,100" style="fill:lime;stroke:purple;stroke-width:1"/>
</svg>
```
- points 属性定义多边形每个角的 x 和 y 坐标

6. <polyline> 元素是用于创建任何只有直线的形状
```
<svg>
  <polyline points="20,20 40,25 60,40 80,120 120,140 200,180"
  style="fill:none;stroke:black;stroke-width:3" />
</svg>
```

7. <path> 元素用于定义一个路径
M = moveto
L = lineto
H = horizontal lineto
V = vertical lineto
C = curveto
S = smooth curveto
Q = quadratic Bézier curve
T = smooth quadratic Bézier curveto
A = elliptical Arc
Z = closepath
注意：以上所有命令均允许小写字母。大写表示绝对定位，小写表示相对定位。

```
<svg>
    <path d="M150 0 L75 200 L225 200 Z" fill="red"/>
</svg>
```

8. <text> 元素用于定义文本
```
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <text x="0" y="15" fill="red">I love SVG</text>
</svg>
```
文字沿着曲线排列
```
<svg>
    <path id="text-path" d="M75,100 a50,25 0 1,0 50,25" fill="none" />
    <text x="50" y="50" font-size="14" fill="red">
        <textPath xlink:href="#text-path">
                This is svg text!!
        </textPath>
    </text>
</svg>
```

9. stroke-linecap 线帽属性

```
<svg>
  <g fill="none" stroke="black" stroke-width="20">
    <path stroke-linecap="butt" d="M5 20 l215 0" />
    <path stroke-linecap="round" d="M5 60 l215 0" />
    <path stroke-linecap="square" d="M5 100 l215 0" />
  </g>
</svg>
```

10. stroke-dasharray 
画虚线的方法
```
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <g fill="none" stroke="black" stroke-width="4">
    <path stroke-dasharray="5,5" d="M5 20 l215 0" />
    <path stroke-dasharray="10,10" d="M5 40 l215 0" />
    <path stroke-dasharray="20,10,5,5,5,10" d="M5 60 l215 0" />
  </g>
</svg>
```

以上基础图形和属性做基本了解，目前有很多绘图库方便我们绘制SVG和Canvas图形，例如D3.js,ECharts.js等

参考：http://www.runoob.com/svg/svg-tutorial.html
http://www.w3school.com.cn/svg/svg_path.asp