
/*
 * 模拟新增一个创作者信息的这样一个数据库
 * 在该数据库下创立一个 mongodb 的集合
 */

var params = {
    author: "xjp",
    job: "web",
    age: 3,
    date: Date.parse(new Date())
};
var db = connect('author_info'); // 注意这里不再是通过 use author_info 命令建立数据库 而是通过 connect
db.test.insert(params);

print('[test] collection is  print success '); // 这里不再是通过 console.log  来输出，而是 print打印