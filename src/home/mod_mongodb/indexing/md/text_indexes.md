### 文本索引

如果需要在大篇幅的文章中搜索关键词，例如做敏感查询，一般文章字数都比较多，想搜索关键字是非常不容易的，

MongoDB为我们提供了全文索引。

其实全文索引的建立和普通的索引没有什么区别， 都是通过createIndex创建。

不同的是，全文索引的值不再是 1 或者 -1 而是 'text'

基本语法

```mongodb
db.collection.createIndex({name: 'text'}) // 注意这里的value值是 'text' 表示的是全文索引，
```

### 全文索引的查询

我们普通查询是 find({});

全文索引有点小区别

```mongodb
db.collection.find({$text: {$search: 'content' } });
```

* $text:表示要在全文索引中查东西。
* $search:后边跟查找的内容。


### 实例

<!-- 插入文档，方便测试 -->
* 插入文档，方便测试

```mongodb
db.test.insert({name: 'silent', des: 'html css js vue echart -hello'});
db.test.insert({name: 'xxx', des: 'html css js php, java'});
```

<!-- 建立索引 -->
* 建立索引

```mongodb
db.test.createIndex({des: 'text'})
```

<!-- 查询 文档中 html -->
* 查询 文档中 html

```mongodb
db.test.find({$text: {$search: 'html php'}})
```

查询的结果显示了两条，很明显， 他相当于我们逻辑操作符里的 $or, 这也符合我们关键词搜索的业务需求

但是我们有时的业务需求却不完全是这样，比如说，虽然一篇文章里有 "html" 但是我们并不需要php，

其实我们只需要 在关键字的前面加不念旧恶 减号即可。

<br />
<!-- 查询 html 但是不能有 php -->
查询 html 但是不能有 php

```mongodb
db.test.find({$text: {$search: 'html -php'}})
```

上面列举了两种需求，但是，如果这个 “-” 减号就是我们需要的关键字怎么处理。

js 里有转义字符的概念，mongodb 也有这样的操作。

通过一个 '\  来转义要查找的内容 

<!-- 转义 -->

```mongodb
db.test.find({$t<!--  -->ext: {$search: "\"-hello"}}) // 通过 
```

```mongodb
db.test.find({$text: {$search: "\"-hello\" php"}}) // 这里有个坑，转义了两个词，实际上这里只会查询到第一个转义

```