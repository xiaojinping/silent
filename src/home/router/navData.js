/**
 * 顶部导航栏的数据,
 * @author: xjp
 * @date: 2018/08/21
 */

/**
 * name: 如果该导航有二级导航，请配置此属性, 与tree里面的key相同, 如果有children.应指向任意子项的name
 * path: 实际点击跳转的路由，如果有children.，应指向children中的任意子项的path, children应该指向subNavData对应的任意path
 * text: 文字
 */
export default [
    {
        path: '/index',
        text: '首页'
    },
    {
        name: '/mod-js',
        path: '/mod-js',
        text: 'javascript',
        children: [
            {
                name: '/mod-js',
                path: '/mod-js',
                text: 'ES5'
            },
            {
                name: '/mod-jq',
                path: '/jq_extend',
                text: 'jQ源码解读'
            }
        ]
    },
    {
        name: '/mod-es6',
        path: '/es6-promise',
        text: 'es6'
    },
    {
        name: '/mod_vue',
        path: '/mod_vue',
        text: 'vue系列',
        children: [
            {
                name: '/mod_vue',
                path: '/mod_vue',
                text: 'vue'
            }, {
                path: '/vue_router',
                name: '/vue_router',
                text: 'vue-router'
            }, {
                path: '/mod_vuex',
                name: '/mod_vuex',
                text: 'Vuex'
            }
        ]
    },
    {
        name: '/echarts',
        path: '/pie',
        text: '图表js',
        children: [
            {
                name: '/echarts',
                path: '/pie',
                text: 'echarts'
            }, {
                name: '/qunee',
                path: '/qunee',
                text: 'qunee'
            }, {
                path: '/canvas',
                name: '/canvas',
                text: 'canvas'
            }
        ]
    },
    {
        path: '/mod_koa2',
        name: '/mod_koa2',
        text: 'node系列',
        children: [
            {
                path: '/mod_koa2',
                name: '/mod_koa2',
                text: 'koa2'
            },
            {
                path: '/mod-mongodb',
                name: '/mod-mongodb',
                text: 'mongoDB'
            },
            {
                path: '/mod_node',
                name: '/mod_node',
                text: 'node实战案例'
            }
        ]
    },
    {
        path: '/mod_webpack',
        name: '/mod_webpack',
        text: 'webpack4.0'
    },
    {
        path: '/mod_nginx',
        name: '/mod_nginx',
        text: 'other',
        children: [
            {
                path: '/mod_nginx',
                name: '/mod_nginx',
                text: 'nginx服务'
            }
        ]
    }
]
