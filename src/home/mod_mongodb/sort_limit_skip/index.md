### sort 排序

在 MongoDB 中使用 sort() 方法对数据进行排序，

sort() 方法可以通过参数指定排序的字段，并使用 1 和 -1 来指定排序的方式，

* 1 为升序排列，
* -1 是用于降序排列。

<br />

【注意】：  sort, limit, skip 一起使用时，sort 优先执行。
===

<br />

```mongoDB
db.collection.find().sort({age: 1}) 
```

### limit 读取的记录条数

limit()方法接受一个数字参数，该参数指定从MongoDB中读取的记录条数。


```mongoDB
db.collection.find().limit(2)
```

### skip 跳过指定数量的数据

skip()方法来跳过指定数量的数据，skip方法同样接受一个数字参数作为跳过的记录条数。

注意，其下标是从 0 开始的。而不是从 1 开始


```mongoDB
db.collection.find().skip(2)
```

<br />

### 实例 具体数据参考 mongodb-find 里的数据
---
<br />



```mongoDB
> db.test.find({},{name:true,age: true}).limit(1).skip(1); 
{"id": 002, "name": "tyy", "age": 24} 

```
实例中，因为我们的数据量不够，所以，每次显示一条，跳过一条数据显示，第一条应该是001,所以这里显示的是 _id:002, tyy, 

现在，我们要对年龄做个排序，

```mongodb
> db.test.find({},{name:true,age: true}).sort({age:1})
{"id": 005, "name": "dream", "age": 22} 
{"id": 002, "name": "tyy", "age": 24} 
{"id": 001, "name": "hwc", "age": 26} 
{"id": 004, "name": "east", "age": 26} 
{"id": 003, "name": "silent", "age": 33} 
```


需求再次更改： 需要做分页，每页显示 1 条， 

现在查询第 3 页，下标为 2. 

疑问： 当 limit, skip, sort 一起使用的时候，是先分页，再在分页里面排序，还是先排序，再分页？

```mongoDB
> db.test.find({},{name:true,age: true}).limit(1).skip(2).sort({age:1})
{"id": 001, "name": "hwc", "age": 26}  // 返回的结果 
```

实验结果表明，虽然 sort 写在最后，但是他却先执行。所以，是先排序再分页。



