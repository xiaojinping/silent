/*
 *  二级导航的数据 用对象的形式保存，这里不从配置中直接导出
 *  title 当前二级导航父级导航的文案。可以从 navData 里面取
 *  header 当前二级导航的头部，非必须，
 *  data 二级导航的数据。
 *  @author: xjp
 *  @date: 2018/08/22
 */

import NAV_DATA from './navData.js'
let data = {
    '/mod-es6': {
        title: '',
        data: [{
            path: '/mod-es6',
            name: 'es6',
            text: '前言 '
        }, {
            path: '/es6-basics',
            name: 'es6-basics',
            text: '基础内容 '
        }, {
            path: '/es6-promise',
            name: 'es6-promise',
            text: 'promise '
        }, {
            path: '/es6_async',
            name: 'es6_async',
            text: 'async/await '
        }, {
            path: '/custom_promise',
            name: 'custom_promise',
            text: '自定义promise的实现 '
        }]
    },
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
    },
    '/vue_router': {
        title: '',
        data: [{
            path: '/vue_router',
            name: 'vue_router',
            text: 'Issues '
        }, {
            path: '/vue_router_install',
            name: 'vue_router_install',
            text: '路由的安装与介绍 '
        }, {
            path: '/getting_started',
            name: 'getting_started',
            text: '入门 '
        }, {
            path: '/route_matching',
            name: 'route_matching',
            text: 'router.params '
        }, {
            path: '/nested_routes',
            name: 'nested_routes',
            text: 'children router '
        }, {
            path: '/programmatic_navigation',
            name: 'nested_routes',
            text: 'router navigation '
        }, {
            path: '/named_routes',
            name: 'named_routes',
            text: 'named routers '
        }, {
            path: '/named_views',
            name: 'named_views',
            text: 'named views '
        }, {
            path: '/redirect_alias',
            name: 'redirect_alias',
            text: 'redirect and alias '
        }, {
            path: '/route_props',
            name: 'route_props',
            text: 'router props'
        }, {
            path: '/router_other',
            name: 'router_other',
            text: '路由的其他功能'
        }, {
            path: '/router_sourse_code',
            name: 'router_sourse_code',
            text: '路由源码阅读'
        }]
    },
    '/mod_vuex': {
        title: '',
        data: [{
            path: '/mod_vuex',
            name: 'mod_vuex',
            text: '前言 '
        }, {
            path: '/vuex_state',
            name: 'vuex_state',
            text: 'vuex-state '
        }, {
            path: '/vuex_mutations',
            name: 'vuex_mutations',
            text: 'vuex-mutations '
        }, {
            path: '/vuex_getters',
            name: 'vuex_getters',
            text: 'vuex-getters '
        }, {
            path: '/vuex_actions',
            name: 'vuex_actions',
            text: 'vuex-actions '
        }, {
            path: '/vuex_modules',
            name: 'vuex_modules',
            text: 'vuex-modules '
        }]
    }

};

data['/mod_koa2'] = {
    title: '',
    path: '',
    data: [
        {
            path: '/mod_koa2',
            name: 'mod_koa2',
            text: 'koa2前后贯通，九阳大成'
        }, {
            path: '/mod_koa2_request',
            name: 'mod_koa2_request',
            text: 'koa2如何获取请求'
        }, {
            path: '/mod_koa2_response',
            name: 'mod_koa2_response',
            text: 'koa2如何响应请求'
        }, {
            path: '/mod_koa2_context',
            name: 'mod_koa2_context',
            text: 'koa2中的上下文'
        }, {
            path: '/mod_koa2_router',
            name: 'mod_koa2_router',
            text: 'koa2的路由'
        }, {
            path: '/mod_koa2_cookies',
            name: 'mod_koa2_cookies',
            text: 'koa2设置/获取cookies'
        }
    ]
};

data['/mod-mongodb'] = {
    title: '',
    path: '',
    data: [
        {
            path: '/mongodb-install',
            name: 'mongodb-install',
            text: 'mongodb安装'
        },
        {
            path: '/mongodb-create',
            name: 'mongodb-create',
            text: 'mongodb 创建'
        },
        {
            path: '/mongodb-insert',
            name: 'mongodb-insert',
            text: 'mongodb 插入与更新'
        },
        {
            path: '/mongodb-drop',
            name: 'mongodb-drop',
            text: 'mongodb 删除'
        },
        {
            path: '/mongodb-connect',
            name: 'mongodb-connect',
            text: 'mongodb connect 连接 '
        },
        {
            path: '/mongodb-update',
            name: 'mongodb-update',
            text: 'mongodb 修改'
        },
        {
            path: '/mongodb-find-and-modify',
            name: 'mongodb-find-and-modify',
            text: 'mongodb findAndModify'
        },
        {
            path: '/mongodb-find',
            name: 'mongodb-find',
            text: 'mongodb 查找'
        },
        {
            path: '/mongodb-sort-limit-skip',
            name: 'mongodb-sort-limit-skip',
            text: 'mongodb 排序，分页'
        },
        {
            path: '/mongodb-indexing',
            name: 'mongodb-indexing',
            text: 'mongodb 索引'
        }

    ]
};

data['/mod_node'] = {
    title: '',
    path: '',
    data: [
        {
            path: '/mod_node/service_deploy',
            name: 'mod_node/service_deploy',
            text: 'node服务部署1'
        }

    ]
};

data['/mod_webpack'] = {
    title: '',
    path: '',
    data: [
        {
            path: '/entry_output',
            name: 'entry_output',
            text: '入口和出口'
        }, {
            path: '/webpack_entry',
            name: 'webpack_entry',
            text: '入口'
        }, {
            path: '/webpack_output',
            name: 'webpack_output',
            text: '出口'
        }, {
            path: '/webpack_loader',
            name: 'webpack_loader',
            text: 'loader'
        }
    ]
};

data['/mod_jq'] = {
    data: [
        {
            path: '/jq_extend',
            name: 'jq_extend',
            text: 'extend'
        }, {
            path: '/jq_selector',
            name: 'jq_selector',
            text: 'selector'
        }, {
            path: '/jq_dom',
            name: 'jq_dom',
            text: 'dom'
        }
    ]
};

data['/mod_nginx'] = {
    path: '/mod_nginx',
    title: 'nginx',
    data: [
        {
            path: '/nginx_read',
            name: 'nginx_read',
            text: '前置准备'
        },
        {
            path: '/nginx_install',
            name: 'nginx_install',
            text: 'nginx安装'
        },
        {
            path: '/nginx_explain',
            name: 'nginx_explain',
            text: 'nginx文件解读'
        },
        {
            path: '/nginx_start_stop',
            name: 'nginx_start_stop',
            text: 'nginx服务启停'
        }
    ]
};

Object.keys(data).forEach((key) => {
    let rs = NAV_DATA.find(item => key === (item.name || item.path));
    if (!rs) {
        return;
    }
    data[key].title = rs.text;
    data[key].path = rs.path;
});
export default data;
