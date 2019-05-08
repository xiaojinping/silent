### 数组的查找

### in 一键多值查询 满足其一即为 true
```mongodb
db.test.find({skill: {$in: ['php', 'java']}})
```
如果只需要判断数组是否包含某个值，可以这样写

```mongodb
db.test.find({skill: 'php'}})
```

另外这样写是不行的。

```mongodb
db.test.find( { skill: ['php', 'java']} ) // 他找的是完全匹配，包括下标是否一致。
```

<br />

### all 一键多值查询 满足所有即为 true

```mongodb
db.test.find({skill: {$in: ['php', 'java']}})
```

$in 与 $all 我们在学习 逻辑查找的时候，已经了解过了。

这里不再做实例验证。


### size 数组的长度

实例： 

```mongodb
db.test.find({
    skill: {$size: 4} //  skill 数量 === 4; 如果想要查询长度大于4的，可以用where ，
}, {
    name: true,
    skill: true,
    _id: false
});

```



### slice 从某个已有的数组返回选定的元素

比如说一个数组太长，只需要返回前面2个，那么就是 $slice: 2, 如果是后面2个，那就是-2

```mongodb
db.test.find({
    skill: {$size: 4} //  skill 数量 === 4;
}, {
    name: true,
    skill: {$slice: 2},
    _id: false
});
```


<br />

### where 查询

使用 where ，从性能方面来看，可能会稍微差了那么一点，但是在程序中还是很常见的。

where 里的 this 指向的是 集合，或者说是集合里每一个文档，

例如： 一个数组的长度大于4，

```mongodb
db.test.find({
   $where: "this.skill.length > 4" // this 指的是 test 这个集合的所有文档
},{
   name: true,
   skill: {$slice: 2},
   _id: false
});
```
