### 逻辑运算

### and 查询 并且的意思，具体可以参考js的逻辑
---

注意： $and是一个数组，与js的数组不同的是，该数组内的所有并列查询条件，只能是对象。

```mongodb
db.test.find({
    $and: [
        {条件1},
        {条件2},
        ……
    ]
});
```
<br />

### or 或者查询
---

语法 与 and 大同小异。


```mongodb
db.test.find({
    $or: [
        {条件1},
        {条件2},
        ……
    ]
});
```
<br />

### in 一键多值查询 满足其中一个即为 true
---

$in 就是在里面的意思 ，主要应用在一键多值的查询条件，如：会php,会java，就可以用 $in

$in 是应用在数组里面的，所以，我们也可以把他看成是数组的 $or 查询，

所以，$in 与 $or 的不同点是， $in 是对某一个键的多条件查询，顾名： 一键多值查询

也可以把他看成 js 的 indexOf 

```mongodb
db.test.find({skill: {$in: ['php', 'java']}})
```

<br />

### $all 一键多值查询 满足所有的条件即为true
---

$all 也是用于数组的，如果说 $in 是 $or 的意思 ，那么，$all 就相当于 $and 了。

同样的，$all 也是指一个值为 数组的 键，同时满足多项条件

也可以把他看成 js 的 indexOf 

```mongodb
db.test.find({skill: {$all: ['php', 'java']}})
```

### not 查询条件之外的值 。
---

需要注意的是 $not 修饰符不能应用在条件语句中，只能在外边进行查询使用。

什么意思， 意思就是他不能像写 $lt, $lte, $ne, $eq  …… ,一样，

例如： $not: 30，这是错误的。 

另外，极度不推荐这种用法，太伤脑，绕了好大一个圈 例如：不等于26，也不等于30， 没有必要用not, 

正确的写法如下：

```mongodb
db.test.find({
    key: {$not: {
        条件1,
        条件2，
        ……
    }}
})

```

<br />

---
 
---

### 实例

<br />

### 实例1.1 and ： 年龄不等于 26， 并且不等于33， 结果应该是 tyy dream

该需求 用了 $and 来实验

```mongodb
db.test.find(
    {$and: [
        {age: {$ne: 26}},
        {age: {$ne: 33}},
    ]},
    {name: true, age: true}
);
```
<br />


### 实例2 $and $in：年龄不等于 30，会 php || java || js 的

该需求 用了 $and  与 $in 共同实现

```mongodb
db.test.find(
    {$and: [
        {age: {$ne: 26}},
        {skill: {$in: ['php', 'java', 'js']}}
    ]},
    {name: true, age: true, _id: false}
)
```



<br />

### 实例3.1： 年龄小于30，会 js, 并且会 java 或者 php 的

该需求，同样也是用了 $and、 $in ,  所不同的是，其中有两个并列条件使用了 $in
与需求2不同的是，这两个 $in 相同于 &&  会js 并且会java或者php

```mongodb
db.test.find(
    {$and: [
        {age: {$ne: 30}},
        {skill: {$in: ['js']}},
        {skill: {$in: ['php', 'java']}}
    ]},
    {name: true, age: true, _id: false}
)
```
<br />

### 实例3.2： 年龄小于30，会 js, 并且会 java 或者 php 的

这个案例用了or的写法， 

age != 30 && 会js ( 会java || 会 php)

```mongodb
db.test.find(
    {$and: [
        {age: {$ne: 30}},
        {skill: {$in: ['js']}},
        {$or: [
            {skill: {$in: ['php']}},
            {skill: {$in: ['java']}},
        ]}
    ]},
    {name: true, age: true, _id: false}
)
```

<br />

### 实例4.1： 年龄小于30，会 js, ，会 php  && java && js 就是三样都会的。

该需求, 用 $and , $all 来实现，这种实现方式比较直观， 当然，也可以用  $in 来实现 。



```mongodb
db.test.find(
    {$and: [
        {age: {$ne: 30}},
        {skill: {$all: ['php', 'java', 'js']}}
    ]},
    {name: true, age: true, _id: false}
)
```


<br />

### 实例4.2： 年龄小于30，会 js, ，会 php  && java && js 就是三样都会的。

该需求， 用了$and、 $in , 相比实例4.1, 逻辑不是那么直观

与需求2，需求3不同的是

这三个 $in 都有并列的意思， 会 php 并且会 java,并且会js 


```mongodb
db.test.find(
    {$and: [
        {age: {$ne: 30}},
        {skill: {$in: ['php']}},
        {skill: {$in: ['java']}},
        {skill: {$in: ['js']}}
    ]},
    {name: true, age: true, _id: false}
)
```


