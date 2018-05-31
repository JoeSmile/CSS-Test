### Object

1. 定义： 对象就是一组“键值对”（key-value）的集合，是一种无序的复合数据集合。（key自动转成了字符串。）
```
var obj = {
  foo: 'Hello',
  bar: 'World',
  func: function (x) {
    return 2 * x;
  }
};
```
2. 对象的引用
如果不同的变量名指向同一个对象，那么它们都是这个对象的引用，也就是说指向同一个内存地址。修改其中一个变量，会影响到其他所有变量。

```
var o1 = {}
var o2 = o1
o1.a = 1
o2 // {a: 1}
```
上面代码中，o1和o2指向同一个对象，因此为其中任何一个变量添加属性，另一个变量都可以读写该属性。

```
o1 = 1;
o2 // {}
```
上面代码中，o1和o2指向同一个对象，然后o1的值变为1，这时不会对o2产生影响，o2还是指向原来的那个对象。
但是，这种引用只局限于对象，如果两个变量指向同一个原始类型的值。那么，变量这时都是值的拷贝。(字符串/数值 都不需要重新开辟空间)
```
var x = 1;
var y = x;

x = 2;
y // 1
```

3. Object 读取(访问)
```
var obj = {
  p: 'Hello World'
};
obj.p // "Hello World"
obj['p'] // "Hello World"
```
PS: 请注意，如果使用方括号运算符，键名必须放在引号里面，否则会被当作变量处理。
```
var foo = 'bar';
var obj = {
  foo: 1,
  bar: 2
};
obj.foo  // 1
obj[foo]  // 2
```

4. Object赋值
```
var obj = {};
obj.foo = 'Hello';
obj['bar'] = 'World';
```

5. 查看所有属性
```
var obj = {
  key1: 1,
  key2: 2
};

Object.keys(obj);
// ['key1', 'key2']
```

6. delete 命令
delete命令用于删除对象的属性，删除成功后返回true。
PS: 注意，删除一个不存在的属性，delete不报错，而且返回true。并且delete命令只能删除对象本身的属性，无法删除继承的属性。

7. for...in循环用来遍历一个对象的全部属性。
```
var obj = {a: 1, b: 2, c: 3};

for (var i in obj) {
  console.log(obj[i]);
}
// 1
// 2
// 3
```

> 它遍历的是对象所有可遍历（enumerable）的属性，会跳过不可遍历的属性。
它不仅遍历对象自身的属性，还遍历继承的属性。


如果继承的属性是可遍历的，那么就会被for...in循环遍历到。但是，一般情况下，都是只想遍历对象自身的属性，所以使用for...in的时候，应该结合使用hasOwnProperty方法，在循环内部判断一下，某个属性是否为对象自身的属性。
```
var person = { name: '老张' };

for (var key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key);
  }
}
// name
```








