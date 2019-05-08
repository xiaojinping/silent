### MongoDB 创建集合

在 MongoDB 中，可以不需要创建集合。当你插入一些文档时，MongoDB 会自动创建集合。 insert() 插入文档，我们先用，后面再来介绍他。


* 一： 简便方式
```
> use silent // 进入 silent 数据库
switched to db silent // 执行结果
> db // 查看当前所在数据库名称，这个操作，只是为了确认，没有太多其他意义
silent
> db.shopList.insert({"name": "手机"})  // 创建一个showList的集合(表)，并插入一条数据
WriteResult({ "nInserted" : 1 })
> show collections // 查看集合
shopList
```

* 二： createCollection() 方法来创建集合。


语法格式：

```javascript
db.createCollection(name, options)
```



<br />

#### 参数说明：

* name: 要创建的集合名称
* options: 可选参数, 指定有关内存大小及索引的选项


---

##### options 可以是如下参数：

| 字段           |     类型   |    描述 |
| :---           |     :---   |    :--- |
| capped         |     布尔   |   （可选）如果为 true，则创建固定集合。固定集合是指有着固定大小的集合，当达到最大值时，它会自动覆盖最早的文档。当该值为 true 时，必须指定 size 参数。|
| autoIndexId    |     布尔   |   （可选）如为 true，自动在 _id 字段创建索引。默认为 false。|
| size           |     数值   |   （可选）为固定集合指定一个最大值（以字节计）。如果 capped 为 true，也需要指定该字段。|
| max	         |     数值   |   （可选）指定固定集合中包含文档的最大数量。|

在插入文档时，MongoDB 首先检查固定集合的 size 字段，然后检查 max 字段。

实例
在 user 数据库中创建 silent 集合：

```
> use user
switched to db user
> db.createCollection("silent")
{ "ok" : 1 }
>
```

如果要查看已有集合，可以使用 show collections 命令：

```
> show collections
silent
```

下面是带有几个关键参数的 createCollection() 的用法：

创建固定集合 mycol，整个集合空间大小 6142800 KB, 文档最大个数为 10000 个。

```
> db.createCollection("mycol", { capped : true,  size :  6142800, max : 10000 })
{ "ok" : 1 }
>
```
