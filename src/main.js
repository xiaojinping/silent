// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */

import Vue from 'vue'
import Lodash from 'lodash';
import App from './App'
import router from './home/router'
import './home/mod_common/common.css'
import  NAV_DATA from './home/router/navData.js'
import  SUB_NAV_DATA from './home/router/subNavData.js'
window.lodash = Lodash.noConflict();
window.silent = null;
Vue.config.productionTip = false

let activeTab = '/index'

/**
 * 遍历路由
 * 1：需要设置一个 顶部导航 的 active
 * 2: 需要根据 顶部顶部 的active，设置二级导航。
 */

router.beforeEach((to, from, next) => {
    activeTab = getActiveTab(to.path);
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
 * @param {string} moduleName  路由路径名称，可能是一级导航的路径，也有可能是二级导航，甚至三级导航的路径 。
 * @returns {object}  activeTab 一级导航的路径。
 * */
function getActiveTab (moduleName) {
    let activeTab = moduleName;
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
            return;
        } else if (find(SUB_NAV_DATA[key].data)) {
            activeTab = key;
            return false;
        }
        return true;
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
