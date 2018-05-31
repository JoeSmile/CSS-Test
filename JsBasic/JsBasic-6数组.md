###  数组Array

1.  数组（array）是按次序排列的一组值。每个值的位置都有编号（从0开始），整个数组用方括号表示。

```
var arr = [1,2,3]
```
任何类型的数据，都可以放入数组。

```
var arr = [
  {a: 1},
  [1, 2, 3],
  function() {return true;}
];
```

二维数组
```
var a = [[1, 2], [3, 4]];
```

2. 数组的本质
本质上，数组属于一种特殊的对象。typeof运算符会返回数组的类型是object。
也有 Object.key()等方法，不过平时也不这么用

3. length
```
[].length // 返回数组的长度

//清空数组
[].length = 0

// 设置负值
[].length = -1
// RangeError: Invalid array length

// 数组元素个数大于等于2的32次方
[].length = Math.pow(2, 32)
// RangeError: Invalid array length

// 设置字符串
[].length = 'abc'
// RangeError: Invalid array length
```

4. for ... in
在数组有类似Object的for...in运算，但不常使用
```
var a = [1, 2, 3];
for (var i in a) {
  console.log(a[i]);
}
```

5. delete
注意： 使用delete命令删除一个数组成员，会形成空位，并且不会影响length属性。
```
var a = [1, 2, 3];
delete a[1];

a[1] // undefined
a.length // 3
```
