/*
 *  二级导航的数据 用对象的形式保存
 *  title 当前二级导航父级导航的文案。可以从 navData 里面取
 *  header 当前二级导航的头部，非必须，
 *  data 二级导航的数据。
 *  @author: xjp
 *  @date: 2018/08/22
 */

import NAV_DATA from './navData.js'
let data = {
    '/echarts': {
        title: '',
        header: '',
        path: '',
        data: [{
            path: '/line',
            name: 'line',
            text: 'line',
            des: '线型 图表'
        }, {
            path: '/pie',
            name: 'pie',
            text: 'pie',
            des: '饼状 图表'
        }]
    }
}
Object.keys(data).forEach((key) => {
    let rs = NAV_DATA.find(item => key === (item.name || item.path));
    data[key].title = rs.text;
    data[key].path = rs.path;
});
export default data;
