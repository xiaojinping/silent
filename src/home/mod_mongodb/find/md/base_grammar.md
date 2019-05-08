
### 语法
MongoDB 查询数据的语法格式如下：

```mongodb
db.collection.find(query, projection)
```
<br />

* query ：可选，使用查询操作符指定查询条件, query 如果为空或者空对象，则是查询全部，
* projection ：可选，使用投影操作符指定返回的键。查询时返回文档中所有键值， 只需省略该参数即可（默认省略）。 

注意： projection 如果传了参数， _id 是默认返回的。 
--

--- 

如果你需要以易读的方式来读取数据，可以使用 pretty() 方法，pretty() 方法以格式化的方式来显示所有文档。

语法格式如下：

```mongodb
db.collection.find().pretty()
```


<br />

### 实例

```mongodb
db.test.find({}, {name: true).pretty() // _id 默认返回，
```

```mongodb
db.test.find({}, {_id: false,  name: true).pretty() // 设置 _id 不返回，
```
