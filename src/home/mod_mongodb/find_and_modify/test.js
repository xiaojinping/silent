
/*
 * 模拟新增一个创作者信息的这样一个数据库
 * 在该数据库下创立一个 mongodb 的集合
 */

var params = {
    _id: '001',
    name: "xjp",
    job: "web",
    age: 30
};
var db = connect('author_info'); // 注意这里不再是通过 use author_info 命令建立数据库 而是通过 connect

var myModify = {
    findAndModify:"test", // 操作的集合， 这里也可以采用 db.test.findAndModify({query, update, upsert, new,……})
    query:{name:'xjp'}, // 查找的内容
    update:{$set:params}, // 设置的值
    upsert: true, // 如果不存在，直接插入，如果存在，不做操作。
    new:true    // 更新完成，需要查看结果，如果为false不进行查看结果
};


var ResultMessage = db.runCommand(myModify); // 使用 runCommand 来运行命令 他会返回他的处理结果。
printjson(ResultMessage);

printjson("------------------------------------------")

params = {
    name: "silent",
    job: "web",
    age: 30
};

db.test.insert([params, params, params,params]); // 插入了4个相同的文档。

myModify = { // 对所有的 silent  替换 成 xjp ，发现，他只是操作成功了第一个数据。
    findAndModify:"test",
    query:{name:'silent'},
    update:{$set:{name: 'xjp'}},
    multi: true, // 即使 multi 是 true,  也只会对查找到的第一个文档做操作。
    new:true
};

ResultMessage = db.runCommand(myModify);
printjson(ResultMessage);