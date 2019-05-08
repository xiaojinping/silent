// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */

import Vue from 'vue'
import Lodash from 'lodash';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import hljs from 'highlight.js'
import './home/mod_common/style/highlight/sublime2015.css'
import './home/mod_common/style/common.css'
import App from './App'
import router from './home/router'
import  NAV_DATA from './home/router/navData.js'
import  SUB_NAV_DATA from './home/router/subNavData.js'
import './home/components/index.js'
window.lodash = Lodash.noConflict();
window.silent = null;
import {BASE_URL} from './servers_api_config'
window.BASE = {
    URL: BASE_URL
};
Vue.config.productionTip = false
let activeTab = '/index'
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
Vue.directive('highlight', (el) => {
    let blocks = el.querySelectorAll('pre');
    el.classList.add('hljs-wrap');
    setTimeout( () => {
        blocks.forEach((block) => {
            hljs.highlightBlock(block);
        })
    });
    blocks.forEach((block) => {
        hljs.highlightBlock(block);
    })
});

/**
 * 遍历路由 只提取根路径，高亮导航条
 * 1：需要设置一个 顶部导航 的 active
 * 2: 需要根据 顶部顶部 的active，设置二级导航。
 */

router.beforeEach((to, from, next) => {
    activeTab = getActiveTab(to);
    let match = activeTab.match(/^(\/[^\/]+).*/);// 以'/'开头的,(不能包含1个或者多个/,)任意字符，可以有可以没有，
    if (!to.matched || !to.matched.length || !match) {
        next('/index');
    }
    // 1、路由匹配不上
    // 2、子路由只提取根路径，高亮导航条
    // let match = activeTab.match(/^(\/[^\/]+).*/);
    if (window.silent) {
        let refsApp = window.silent.$refs.app;
        if (refsApp) {
            window.silent.$data.activeTab = activeTab;
            refsApp.setJsonValue(activeTab);
        }
    }
    next();
});

/**
 * 根据路由路径获取一级导航的路径,activeTab；
 * @param {object} to  路由去到哪，可能是一级导航的路径，也有可能是二级导航，甚至三级导航的路径 。
 * @returns {object}  activeTab 一级导航的路径。
 * */
function getActiveTab (to) {
    let activeTab = (to.matched && to.matched[0].path) || to.path;
    let moduleName = to.path;
    function find (data) {
        let isfind = false;
        isfind =  window.lodash.find(data, function (item) {
            return moduleName === item.path || moduleName === item.id;
        });
        if (!isfind) {
            isfind =  window.lodash.find(data.children, function (item) {
                return moduleName === item.path || moduleName === item.id;
            });
        }
        return isfind;
    }

    Object.keys(SUB_NAV_DATA).forEach(key => {
        if (key === moduleName) {
            activeTab = key;
        } else if (find(SUB_NAV_DATA[key].data)) {
            activeTab = key;
        }else if (to.matched && to.matched.length) {
            activeTab = getActiveTab( to.matched[0]);
        }
    });
    return activeTab;
}

// eslint-disable-next-line
var app = new Vue({
    el: '#app',
    data () {
        return {
            activeTab: activeTab
        }
    },
    router,
    mounted () {
        window.silent = this;
    },
    components: {App},
    template: '<app ref="app" />'
});
