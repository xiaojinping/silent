/**
 * 要学习索引，首先要建立一个百万级的数据库，要不看不了效果。
 * */

/** 
 * 获取一个区间范围内的随机数
 * @param {number} min -最小范围值
 * @param {number} max -最大范围值
 * @returns {number} - 
 */
function getRandomNum(min, max) {
    let baseNum = max - min;  
    let random = Math.random();
    let randomNum =  parseInt(random * baseNum, 10); 
    return (min + randomNum); 
}

/** 
 * 获取一个范围内随机长度值的随机名称
 * @param {number} min -最小长度
 * @param {number} max -最大长度
 * @returns {string} - 
 */
function getRadomName(min,max) {
    let outPutText = ""; 
    let arr = [];
    const LOWER_START = 97;
    const UPPER_START = 65

    // 名称范围值 [0-9a-Z]
    for (let i = 0; i < 26; i++) {
        if (i < 10) {
            arr.push(i);
        }
        arr.push(String.fromCharCode(UPPER_START + i));
        arr.push(String.fromCharCode(LOWER_START + i));
    }
    
    // 获取范围值里的一个随机项。
    for(let i = 1; i < getRandomNum(min, max); i++){
        let roudom = getRandomNum(0, arr.length); 
        outPutText += arr[roudom];
    }

    return outPutText;
}

let paramsLen = 100; // 90W
let monthLen = 12;
let params = [];
let index = 1;
for (let i = 1; i <= paramsLen; i++) {
    let name = getRadomName(6, 16);
    for (let m = 1; m <= monthLen; m ++) {
        params.push({
            name_id: index,
            name: name, //姓名
            month: i,
            des: '',
            clothing: getRandomNum(100, 500), //服饰消费
            food_and_beverage: getRandomNum(600, 1000), // 食品酒水
            occupy_property: getRandomNum(200, 1000), // 居家物业
            road_traffic: getRandomNum(800, 1200), // 行车交通
            communications: getRandomNum(100, 200), // 交流通讯
            entertainment: getRandomNum(100, 400), // 娱乐
            study_further: getRandomNum(1000, 2000), // 学习进修
            social: getRandomNum(100, 500), // 人情往来
            other: getRandomNum(100, 10000)
        });
        index++;
    }
}
var db = connect('consume_info');
db.monthly.drop();
db.monthly.insert(params);
printjson("insert is ok");
