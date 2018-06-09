1. Object()
Object.keys(), Object.getOwnPropertyNames()
Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
```
const object1 = {
  a: {b: {a: 1}},
  b: 2,
  c: 3
};

const object2 = Object.assign({c: 4, d: 5}, object1);

console.log(object2.c, object2.d);
object1.a.b.a = 2222
```
2. Array()

```
const info = []

<!-- push, pop -->
info.push({name: 'AA'})
info.push({name: 'JJ'})
info.push({name: 'GG'})

info.pop()
info.pop()

<!-- unshift, shift -->
info.unshift({name: 'AA', score: 99})
info.unshift({name: 'JJ', score: 91})
info.unshift({name: 'GG', score: 90})

info.shift()
info.shift()

<!-- join -->
const names = ['Annie', 'Andy', 'Jean', 'Mary', 'Zoe', 'Mark', 'Sure']
names.join(',')
names.join('-')
<!-- concat -->
names.concat(info)

<!-- reverse -->
name.reverse()

<!-- slice slice方法用于提取目标数组的一部分，返回一个新数组，原数组不变。-->
<!-- 它的第一个参数为起始位置（从0开始），第二个参数为终止位置（但该位置的元素本身不包括在内）。如果省略第二个参数，则一直返回到原数组的最后一个成员 -->
names.slice(1)
names.slice(1,3)

<!-- splice splice方法用于删除原数组的一部分成员，并可以在删除的位置添加新的数组成员，返回值是被删除的元素。注意，该方法会改变原数组。-->
<!-- [].splice(start, count, addElement1, addElement2, ...); -->
names.splice(1, 1)
names.splice(1, 2, 'Jax', 'Ray')

<!-- sort -->
names.sort()
info.sort(function(item) {return item.score})

<!-- map 有返回值-->
info.map(function(item) {
    console.log(item.name)
})

<!-- forEach forEach方法不返回值-->
info.forEach(function(item) {
    console.log(item.name)
})

<!-- filter -->
info.filter(item => item.score >95)

<!-- some, every -->
info.some(item => item.score >95) //true
info.every(item => item.score >95) // false

<!-- redeuce -->
info.reduce((total, item) => total += item.score, 0)

<!-- indexOf lastIndexOf 返回-1即没有-->
names.indexOf('Zoe')
names.indexOf('Curry')
```

3. Math
```
<!-- abs 绝对值-->
<!-- max min 最大最小值-->
const scores = [32,45,67,74,13,34,75,23,87,97,100,100,12,45,31,67,12,34,34,76,32,21,78,88,77,89,78,99,97,97,96]
Math.max.apply(Math, scores)

<!-- floor 方法小于参数值的最大整数（地板值） ceil 方法返回大于参数值的最小整数（天花板值）-->
Math.floor(3.2) // 3
Math.floor(-3.2) // -4
Math.ceil(3.2) // 4
Math.ceil(-3.2) // -3

<!-- round 四舍五入-->
注意，它对负数的处理（主要是对0.5的处理）
Math.round(0.6) // 1
Math.round(-1.1) // -1
Math.round(-1.6) // -2

<!-- pow -->
<!-- pow(n, m) n 的 m 次幂-->
Math.pow(2, 3) // 8

<!-- sqrt 方法返回参数值的平方根-->
Math.sqrt(4) // 2

<!-- random 返回0到1之间的一个伪随机数，可能等于0，但是一定小于1。-->
//意范围的随机整数生成函数如下。 
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInt(1, 6)

//返回随机字符的例子如下
function random_str(length) {
  var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  ALPHABET += 'abcdefghijklmnopqrstuvwxyz';
  ALPHABET += '0123456789-_';
  var str = '';
  for (var i=0; i < length; ++i) {
    var rand = Math.floor(Math.random() * ALPHABET.length);
    str += ALPHABET.substring(rand, rand + 1);
  }
  return str;
}

random_str(6) 
```

4. 字符串
```
toLocaleLowerCase()	把字符串转换为小写。
toLocaleUpperCase()	把字符串转换为大写。
toLowerCase()	把字符串转换为小写。
toUpperCase()

<!-- split() -->
const str = 'name,sex,hegiht,weight,age,id,blood'
str.split(',')

<!-- slice() slice() 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分 substring区别不接受负数-->
str.slice(0, 10)
```

5. Date
```
<!-- getDate()	从 Date 对象返回一个月中的某一天 (1 ~ 31)。
getDay()	从 Date 对象返回一周中的某一天 (0 ~ 6)。
getMonth()	从 Date 对象返回月份 (0 ~ 11)。
getFullYear()	从 Date 对象以四位数字返回年份。
getHours()	返回 Date 对象的小时 (0 ~ 23)。
getMinutes()	返回 Date 对象的分钟 (0 ~ 59)。
getSeconds()	返回 Date 对象的秒数 (0 ~ 59)。
getMilliseconds()	返回 Date 对象的毫秒(0 ~ 999)。
getTime()	返回 1970 年 1 月 1 日至今的毫秒数。 -->


作为构造函数时，Date对象可以接受多种格式的参数，返回一个该参数对应的时间实例。
// 参数为时间零点开始计算的毫秒数
new Date(1378218728000)
// Tue Sep 03 2013 22:32:08 GMT+0800 (CST)

// 参数为日期字符串
new Date('January 6, 2013');
// Sun Jan 06 2013 00:00:00 GMT+0800 (CST)

// 参数为多个整数，
// 代表年、月、日、小时、分钟、秒、毫秒
new Date(2013, 0, 1, 0, 0, 0, 0)
// Tue Jan 01 2013 00:00:00 GMT+0800 (CST)
```

6. JSON
```
JSON.stringify()
JSON.parse()
```

7. this
this的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定this到底指向谁，实际上this的最终指向的是那个调用它最近的对象
```
var o = {
    a:10,
    b:{
        a:12,
        fn:function(){
            console.log(this.a); //12
        }
    }
}
o.b.fn();
```

call、apply、bind: 改变this 指针的3个大佬
> 定义：B来代替A，调用A的方法。call 一个一个打电话后面跟N个参数

apply 类似
> 语法：A.call(B, [param1,param2,...])
定义：B来代替A，调用A的方法。apply 一个数组

```
const scores = [32,45,67,74,13,34,75,23,87,97,100,100,12,45,31,67,12,34,34,76,32,21,78,88,77,89,78,99,97,97,96]

Math.min.apply('', scores)
Math.min.call('', 32,45,67,74,13,34,75,23,87,97,100,100,12,45,31,67,12,34,34,76,32,21,78,88,77,89,78,99,97,97,96)
```
bind: 
> bind()方法会创建一个新函数，称为绑定函数，当调用这个绑定函数时，绑定函数会以创建它时传入 bind()方法的第一个参数作为 this，传入 bind() 方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数。

```
var obj = {
    x: 81,
};
 
var foo = {
    getX: function() {
        return this.x;
    }
}
 
console.log(foo.getX.bind(obj)());  //81
console.log(foo.getX.call(obj));    //81
console.log(foo.getX.apply(obj));   //81
```
> - apply 、 call 、bind 三者都是用来改变函数的this对象的指向的；
  - apply 、 call 、bind 三者第一个参数都是this要指向的对象，也就是想指定的上下文；
  - apply 、 call 、bind 三者都可以利用后续参数传参；
  - bind 是返回对应函数，便于稍后调用；apply 、call 则是立即调用 。


8. 定时器
setTimeout， setInterval ／ clearTimeout()，clearInterval()
setTimeout函数用来指定某个函数或某段代码，在多少毫秒之后执行。它返回一个整数，表示定时器的编号，以后可以用来取消这个定时器。
setInterval指定某个任务每隔一段时间就执行一次，也就是无限次的定时执行。

```
var timerId = setTimeout(func|code, delay);
var timerId = setInterval(func|code, delay);
```

9. web storage
Storage.setItem() Storage.setItem()方法用于存入数据。它接受两个参数，第一个是键名，第二个是保存的数据。如果键名已经存在，该方法会更新已有的键值。该方法没有返回值。
Storage.getItem()方法用于读取数据。它只有一个参数，就是键名。如果键名不存在，该方法返回null
Storage.removeItem()

10. document
querySelector(CSS选择器) //第一个匹配的子元素 没有返回null
querySelectorAll() // NodeList []
closest 方法接受一个 CSS 选择器作为参数，返回匹配该选择器的、最接近当前节点的一个祖先节点（包括当前节点本身）。如果没有任何节点匹配 CSS 选择器，则返回null
getAttribute
getAttributeNames
setAttribute
removeAttribute
getBoundingClientRect()
createElement()
Element.remove()
Element.focus()，Element.blur()
Element.click()