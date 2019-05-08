### MongoDB 创建数据库
语法

MongoDB 创建数据库的语法格式如下：
```javascript
use DATABASE_NAME
```
如果数据库不存在，则创建数据库，否则切换到指定数据库。

实例

以下实例我们创建了数据库 silent:
```javascript
> use silent
switched to db silent
> db
runoob
> 
```

如果你想查看所有数据库，可以使用 show dbs 命令：
```javascript
> show dbs
admin   0.000GB
local   0.000GB
> 
```

可以看到，我们刚创建的数据库 silent 并不在数据库的列表中， 要显示它，我们需要向 silent 数据库插入一些数据。

```javascript
> db.silent.insert({"name":"silent"})
WriteResult({ "nInserted" : 1 })
> show dbs
admin   0.000GB
local   0.000GB
silent  0.078GB
> 
```



在对数据库做操作的时候，担心写划数据库，可以用 db 命令查看当前位置

```javascript
> db
silent
```


MongoDB 中默认的数据库为 test，如果你没有创建新的数据库，集合将存放在 test 数据库中。

```javascript
> mongo 
…… 连接服务，此处省略一万字。
> show dbs
admin   0.000GB
local   0.000GB
config  0.000GB
silent  0.078GB
> db // 查当当前位置，发现会是test, 但是实际上，  我们并没有创建这个库。这是 MongoDB 的一个默认库
test
```

<br />

 ≖ ‿ ≖
   
 注意： 在 MongoDB 中，集合只有在内容插入后才会创建! 就是说，创建集合(数据表)后要再插入一个文档(记录)，集合才会真正创建。
 
 

