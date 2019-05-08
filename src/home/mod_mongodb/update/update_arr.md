
####  案例6： 对数组的修改。$push, $pop, $addToSet, $ne, $each， 很多情况下，用不到，前端会把结果处理好，后端可以直接设置。
---------

如果一个人的爱好是一个数组，如果采用$set，修改的是整个爱好，在修改整个作者信息的时候，我们通常会这样做。
比如说，一个页面，进入页面的时候，加载作者信息，显示在一个表格上面，工具栏上可以新增作者。选择某一行后，可以对当前行做修改。

但是，很多时候的需求，可能会对某一个列做精细化的操作，比如说添加爱好，删除爱好，很明显，不能用 $set ,那么，我们能不能像js一样使用数组一样？
例如：
```html
<el-table …… >
   <el-table-column prop="love" label="爱好">
        <template slot-scope="scope">
            <div v-for="item in scope.row.love" @click="" > {{item}} <i  @click="removeLove(item)" > 删除这个爱好</i>  </div>
            <div>在实际开发应用当中，鼠标移动到 column 时，可能会有个操作，允许用户对当前 column 的数据进行添加，修改，删除等操作。</div>
            <div>通常的作法，是通过js删除某个值，向后台提交的时候，是js删除后的数组。原来是：[1,2,3],删除之后是[1,2]</div>
            <div>当然，后台的操作也有可能并不这么玩，比如说，数组里的东西太多。</div>
        </template>
   </el-table-column>
   <el-table-column>
        <template slot-scope="scope">
            <el-button @click="editor(scope.row)" type="text" size="small">编辑 db.test.updata() | db.test.save()</el-button>
            <el-button @click="remove(scope.row)" type="text" size="small">删除 db.test.remove({query})</el-button>
            <div>在实际开发应用当中，这里一般都是可以对当前行 做出操作，例如：删除这个文档，更新文档。</div>
        </template>
   </el-table-column>
```

<br />

#####  案例6.1： 对数组的修改。 $push

<br />
```mongodb
> db.test.update({}, {$set: {love:  ["web"]}, {multi: true}); // 改写所有成员的 love, 是一个数组
> db.test.update({}, {$set: {love: []}}, {multi: true}); // 改写所有成员的 love, 不管之前的 love 是什么，全变成空数组了
> db.test.update({name: "silent"},{$push: {love: "woman"}}); //
> db.test.update({},{$push: {love: "js"}}, {multi: true}); // 执行到这一步之后，会发现， silent 有爱好有两个，['woman', 'js']
```
<br />

#####  案例6.2： 对数组的修改。 $pop，

<br />

pop 在js里是删除并返回最后一个元素, 在 mongodb 里面，$pop 而且它有两个选项，一个是1和-1。
* 1：从数组末端进行删除
* -1：从数组开端进行删除

```mongodb
> db.test.update({name: "silent"},{$set: {love: [1,2,3,4,5,6]}});
> db.test.update({name: "silent"},{$pop: {love: 1}});
> db.test.find().pretty(); // [1,2,3,4,5]
> db.test.update({name: "silent"},{$pop: {love: -1}});
> db.test.find().pretty() // [2,3,4,5]
```

<br />

##### 案例6.3 对数组做批量操作，$each

他的运行效率应该是和批量插入一样。 insertMany(), insert();
<br />

```mongodb
> arr = [7, 8 , 9]
> db.test.update({name: "silent"},{$push: {love: {$each: arr}}});
> db.test.find().pretty()
```

<br />

##### 案例6.4  对数组的下标进行操作。

<br />
```mongodb
arr = [1, 2, 3, 4, 5, 6];
db.test.update({name: "silent"},{$set: {love: arr }});
db.test.update({name: "silent"},{$set: {"love.2": 12}}); // 下标是从0开始。
db.test.update({name: "silent"},{$set: {"love.2": 3}});
db.test.update({name: "silent"},{$inc: {"love.1": -5 }});
```

<br />

##### 案例6.5 对数组的操作。 $ne 查找是否存在, 注意，他是查找是否存在，所以，他要写在查询参数里面。

在前面，我们有了解过。upsert 的用法，是不是 感觉 $upsert 有点类似，

* upsert 如果找不着，就直接插入。找着了，就修改。
* $ne  如果不存在，直接操作， 存在，不执行操作。

```mongodb
db.test.update({name: "silent", "love": {$ne: 'woman'}},{$push: {"love": "woman" }}); // 可以避免重复插入。
db.test.update({name: "silent", "sex": {$ne: 'woman'}},{$set: {"sex": "woman" }}); // 可以避免重复插入。
db.test.update({name: {$ne: 'sfx'}},{$set: {"name": "sfx" }}); // 可以避免重复插入。
```

<br />

#####  案例6.6 对数组做批量操作  $addToSet 升级版的$ne

注意：     $addToSet 看上去，像是添加或者设置的意思 ，实际上也确实是这样，但是，他是对数组做操作的。而不是 $set

```mongodb
db.test.update({name: 'silent'},{$addToSet: {"love": "study" }}); // 可以避免重复插入。
db.test.update({name: 'silent'},{$addToSet: {"love": "study" }}); // 发现只添加了一个 study, 而不是重复的添加
db.test.update({name: 'silent'},{$addToSet: {"sex": "man" }}); // 可以避免重复插入。
```

