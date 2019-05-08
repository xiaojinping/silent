### 前言

我本想创建千万条文档，来验证建立索引与未建立索引的性能区别。
但是无柰的发现，电脑性能太好，也是一种错，所以，不太好验证索引对性能的提升。
在此略过。

### 查询索引 getIndexex()


```mongodb
db.collection.getIndexex(); 
```

mongodb 已经默认建立了一个索引 _id


### 建立索引 createIndex()

建立索引是以对象的方式存在的，所以如果需要建立多个索引（复合索引），不过是对象中多了一个键值对。

值得注意的是，建索引过程会阻塞其它数据库操作，可通过 background 参数设置在后台创建。


```mongodb
db.collection.createIndex({name: 1}); // 1 为升序， -1为降序, 'text' 全文索引
db.collection.createIndex({name: 1, title: 1}, {background: true}) // 让索引在后台创建。
```

在3.x版本中，创建索引是用的 db.collection.ensureIndex()

我有看一些资料，上面说创建索引的时候，用是布尔值，个人认为并不准确，他应该是一个 1 或者 -1


### 指定索引优先级 hint()

创建多个索引，在关系型数据库中，也叫做复合索引。

如果存在多个索引，那么以那个索引优先级更高呢？

在多个索引中，是以创建的顺序做为优先级的。

如果在查询的时候，需要指定优先级，我们可以用 hint() 

```mongodb
db.collection.find({name:"xxx"},{title: "xxx"}).hint({title: 1}) // 以title做为优先查询
```


### 删除指定索引

在删除指定索引的时候，只需要指定索引名称就行，是一个字符串。

```mongodb
db.collection.dropIndex('索引名称);
```

### 删除集合内所有索引

```mongodb
db.collection.dropIndexes();
```


