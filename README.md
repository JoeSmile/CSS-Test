# CSS-Test


了解什么是 B.E.MBlock!误区:这个block并非inline-block里的block,而是将所有东西都划分为一个独立的模块,一个header是block,header里嵌套的搜索框是block,甚至一个icon一个logo也是blockblock可以相互嵌套Element!误区:如果一个Element-son是另一个Element-father的子元素,那么写法是 Block__Element-father__Element-son_Modifer,嵌套多了会很长么?不是的!!!一个Block下的所有Element无论相互层级如何,都要摊开扁平的属于Block所以 BEM 最多只有 B+E+M 三级,不可能出现 B+E+E+..+E+M 超长class名,也要求E不能同名Modifier之前我们经常写的 .current .active 等表达状态

__双下划线代表B和E连接例如 menu__item
_单下划线代表B和M或E和M的连接 例如 menu_active 或 menu__item_active
-中划线同英语里做连字符例如 mod-menu 或 mod-menu__item 这里 B或E或M需要多个单词来描述,就使用中划线



vue 行为规范和命名规则

https://juejin.im/post/5ada9b586fb9a07aaf34c746?utm_source=gold_browser_extension

vue 生命周期详解
https://juejin.im/post/5ad56d86518825556534ff4b?utm_source=gold_browser_extension