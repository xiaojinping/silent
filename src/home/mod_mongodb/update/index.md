### update() 方法

update() 方法用于更新已存在的文档。语法格式如下：

```mongodb
db.collection.update(
   <query>,
   <update>,
   {
     upsert: <boolean>,
     multi: <boolean>,
     writeConcern: <document>
   }
)
```
<br />

#### 参数说明：

| 参数名称       | 描述 |
| :------------  | :---- |
| query :        | update的查询条件，类似sql update查询内where后面的。|
| update :       | update的对象和一些更新的操作符（如$,$inc...）等，也可以理解为sql update查询内set后面的|
| upsert :       | 可选，这个参数的意思是，如果不存在update的记录，是否插入objNew,true为插入，默认是false，不插入。|
| multi :        | 可选，mongodb 默认是false,只更新找到的第一条记录，如果这个参数为true,就把按条件查出来多条记录全部更新。|
| writeConcern : | 可选，抛出异常的级别。|

<br />

#### 实例1: $set 的用法。

```mongodb
var params = [{
        name: "xjp",
        job: "html",
        age: 13,
        date: Date.parse(new Date())
    }, {
        name: "xjp",
        job: "css",
        age: 23,
        date: Date.parse(new Date())
    }, {
        name: "js",
        job: "web",
        age: 33,
        date: Date.parse(new Date()),
    }, {
       name: "silent",
       job: "java",
       age: 3,
       date: Date.parse(new Date())
    }, {
       name: "xiaowang",
       job: "php",
       age: 3,
       date: Date.parse(new Date())
    }, {
       name: "dream",
       job: "java",
       age: 3,
       date: Date.parse(new Date())
    }];
use autho_info; // 如果想写在 js 文件里， 可以通过 connect 连接 var db = connect("autho_info"）
db.test.insert(params); // 插入
db.test.update({"name": "dream"},{$set: {"name": "hope"}}); // 修改
db.test.find().pretty();
```

<br />

#### 案例2：$unset的用法


在上面的代码里，我们上面有一个数据写错了， 所有的日期都是多余的，要把他删除。

```mongodb
> db.test.update({}, {$unset: {"date": ''}}); // 注意，这里的期望值是将所有的 日期全部删掉。
WriteResult({"nMatched": 1, "nUpserted": 0, "nModified": 1}); # 输出信息 可以看出只修改了一个
> db.test.find().pretty(); // 从执行结果，可以看到，第一个文档的date已经成功删除, 但是，后面的文档却是没有删除掉。
```

根据上面的实例，得出结论 , update() 修改的时候，或者删除的时候，只对第一条数据做了操作。很明显，和我们的需求不相符合。


#### 案例3：multi 的用法

需求还是删除所有的 date

```mongodb
> db.test.update({}, {$unset: {"date": ''}}, {multi: true}); // 注意，这里的 multi 是写在一个对象里的，建议以对象的形式来写。
WriteResult({"nMatched": 6, "nUpserted": 0, "nModified": 5}); # 输出信息
> db.test.find().pretty(); 。
```

<br />

#### 案例4 upsert 是在找不到值的情况下，直接插入这条数据

需求，有新的项目成员加入，要求将他的基本信息设置为 {name: "xiaoxiao", age: 18, sex: "man"}

新的成员加入，应该是插入 insert() ,但是，我不确定这个人是不是之前在家公司做过，如果员工资料已经存在他的资料，再次插入信息，明显会多出一份资料。

那么，就只能是通过 update 来实现了。

```mongodb
> db.test.update({"name": "xiaoxiao"}, {$set: {name: "xiaoxiao", age: 18, sex: "man"}}, {multi: true}); // 未找到，所以不会成功。
WriteResult({"nMatched": 0, "nUpserted": 0, "nModified": 0}) #输出信息， 很明显，没有成功
```

upsert 就是为了应对这种情况 ，如果找不着，就直接插入。

```mongodb
> db.test.update({"name": "xiaoxiao"}, {$set: {name: "xiaoxiao", age: 18, sex: "man"}}, {multi: true, upsert: true}); // 未找到，直接插入。
```

<br />

#### 案例5 $inc 如果value是number类型，可以对 value 做操作。

```mongodb
> db.test.update({}, {$inc: {age: +10}}, {multi: true});
```

如果 如果value 不是 number 类型 , inc 会不会报错。 会不会像 js  一样，转换成 字符串。 ？ 自己去验证。

```mongodb
> db.test.update({}, {$inc: {name: +10}}, {multi: true});
```

