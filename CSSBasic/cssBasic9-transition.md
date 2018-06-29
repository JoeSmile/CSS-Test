### Transition

#### Transition过渡，指从一个状态到另一个状态过程中的表现

#### 要点：
- 1.必须有开始状态和结束状态（起始css属性）
- 2.不是所有属性懂都可以用来过渡，比如display就不可以（ 可以过渡和动画的CSS属性 https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties）
- 3.建议不要在动画属性值中写auto，因为auto是一个复杂的情况，应该避免。

语法：
```
div {
    transition: <property> <duration> <timing-function> <delay>;
}
```

代码：
```
<style>
  .square {
    height: 100px;
    width: 100px;
    background: coral;
  }
  .square:hover {
    height: 150px;
    width: 150px;
    background: fuchsia;
  }
</style>
<body>
    <div class='square'></div>
</body>
```
当鼠标放在div上的时候，它的宽高和背景色都变了，但变化太突然，很生硬，不平滑。下面我门加上transition属性看看它的效果。
```
.square {
  height: 100px;
  width: 100px;
  background: coral;
  transition: all 1s ease .5s;
}
```
div的高度从100px到150px是逐步变化的，有种长大的感觉。这就是过渡的作用。
下面我们来看下过渡属性值。过渡是一个复合属性包含了
- transition-property：指定了过渡的CSS属性名称，可以是height，width等在列表中的值。可以用all来表示所有的值的变化都需要过渡。
- transition-duration：指定过渡的时间，单位‘s’（秒），上例中设置为1s表示，从height：100px 到height：150px要1s中。
- transition-timing-function：从开始状态，到结束状态，各个属性值计算的计算方式。有些默认值我们可以使用：linear，ease，ease-in，ease-in-out，ease-out，step-start，step-end. 也可以使用贝塞尔曲线函数cubic-bezier(x1,y1,x2,y2)，和阶梯函数step(n)来控制过度渡效果
- transition-delay：过渡延迟时间。单位s（秒）