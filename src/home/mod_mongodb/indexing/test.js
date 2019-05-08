
/**
 * 主要是为了测试建立索引和未建立索引的区别
 * 1：未建立索引前，查询{name_id:5000000}，
 * 2：以name_id建立索引，再次查询 {name_id:6000000}
 * 
 *  */
var startTime = new Date().getTime();
var db = connect('consume_info');
var result = db.monthly.find(
    {name_id: 24}, 
    {name: true, clothing: true, _id: false, name_id: true}
).aggregate([{$group: {_id: "$name",clothing: {$sum: 1}}}]);
result.forEach(function (item) {
    printjson(item)
});


/**

var arr = [{
  
   title: 'MongoDB Overview', 
   description: 'MongoDB is no sql database',
   by_user: 'runoob.com',
   url: 'http://www.runoob.com',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 100,
   likes2: 0
},
{
  
   title: 'NoSQL Overview', 
   description: 'No sql database is very fast',
   by_user: 'runoob.com',
   url: 'http://www.runoob.com',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 10,
   likes2: 0
},
{
 
   title: 'Neo4j Overview', 
   description: 'Neo4j is no sql database',
   by_user: 'Neo4j',
   url: 'http://www.neo4j.com',
   tags: ['neo4j', 'database', 'NoSQL'],
   likes: 750,
   likes2: 50
}]


 *  */
