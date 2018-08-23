/**
 * 顶部导航栏的数据
 * @author: xjp
 * @date: 2018/08/21
 */

/**
 * name: 如果该导航有二级导航，请配置此属性, 与tree里面的key相同
 * path: 实际点击跳转的路由
 * text: 文字
 */
export default [{
    path: '/index',
    text: '首页',
    children: []
}, {
    name: '/echarts',
    path: '/echarts',
    text: 'echarts',
    children: [{
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
}, {
    name: '/qunee',
    path: '/qunee',
    text: 'qunee',
    children: []
}, {

    path: '/canvas',
    text: 'canvas'
}]
