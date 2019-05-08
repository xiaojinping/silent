
var db = connect('author_info');
var result = db.test.find({}, { name: true });

// find 查到得到的是一个数组，所以，我们可以直接采用 forEach 的方式来实现遍历打印
result.forEach(function (item) {
    printjson(item)
});
printjson("---华丽的分割线---");
result = db.test.find({ age: 26 }, { age: true, name: true, _id: false }); // 这里应该有两条数据。

// 除了用forEach打印之外，我们还有另外一种方式
while (result.hasNext()) {
    printjson(result.next())  //用json格式打印结果
};
