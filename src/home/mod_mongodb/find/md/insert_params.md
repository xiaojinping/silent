```mongodb
/**
 * 主要是为了方便实验，有一个统一的数据。之所以写在项目里，也是为了偷懒。
 * */
var params = [
    {
        _id: '001',
        name: 'hwc',
        age: 26,
        job: 'web',
        sex: 'man',
        skill: ['js', 'html', 'css', 'ext', 'vue', 'jq', 'echarts', 'qunee', 'webpack', 'git', 'svn', 'php', 'java']
    },
    {
        _id: '002',
        name: 'tyy',
        age: 24,
        job: 'web',
        sex: 'man',
        skill: ['js', 'html', 'css', 'ext', 'vue', 'jq', 'echarts', 'qunee', 'webpack', 'git', 'svn']
    },
    {
        _id: '003',
        name: 'silent',
        age: 33,
        job: 'web',
        sex: 'man',
        skill: ['js', 'html', 'css', 'ext', 'vue', 'jq', 'echarts', 'qunee', 'webpack', 'git', 'svn']
    },
    {
        _id: '004',
        name: 'east',
        age: 26,
        job: 'java',
        sex: 'man',
        skill: ['java', 'css', 'js', 'html']
    },
    {
        _id: '005',
        name: 'dream',
        age: 22,
        job: 'php',
        sex: 'man',
        skill: ['php', 'css', 'js', 'html']
    }
];
var db = connect('author_info');
db.test.drop();
db.test.insert(params);
var resultMessage = db.runCommand({getLastError:1});
printjson(resultMessage);

```
