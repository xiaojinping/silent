import Vue from 'vue';
import Router from 'vue-router';
import ModEs6 from './mod_es6_config'
import ModVue from './mod_vue_config.js';
import ModVueRouters from './mod_vue_routers_config.js';
import ModVuex from './mod_vuex_config.js';
import ModKoa2 from './mod_koa2_config.js';
import ModMongoDb from './mod_mongodb_config.js';
import ModNode from './mod_node_config.js';
import ModWebpack from './mod_webpack_config.js';
import ModJQ from './mod_jq_config.js';
import ModOther from './mod_other.js';
Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/index',
            name: 'index',
            component (resolve) {
                require.ensure([], (require) => resolve(require('../mod_index/index.vue')), 'index');
            }
        }, {
            path: '*',
            name: 'error',
            component (resolve) {
                require.ensure([], (require) => resolve(require('../mod_error/index.vue')), 'error');
            }
        }, {
            path: '/mod-js',
            name: 'mod-js',
            component (resolve) {
                require.ensure([], (require) => resolve(require('../mod_js/index.vue')), 'mod-vue');
            }
        }, {
            path: '/canvas',
            name: 'canvas',
            component (resolve) {
                require.ensure([], (require) => resolve(require('../mod_canvas/index.vue')), 'canvas');
            }
        }, {
            path: '/echarts',
            name: 'echarts',
            component (resolve) {
                require.ensure([], (require) => resolve(require('../mod_echarts/index.vue')), 'echarts');
            }
        }, {
            path: '/qunee',
            name: 'qunee',
            component (resolve) {
                require.ensure([], (require) => resolve(require('../mod_qunee/index.vue')), 'qunee');
            }
        }, {
            path: '/line',
            name: 'line',
            component (resolve) {
                require.ensure([], (require) => resolve(require('../mod_echarts/echarts_line/index.vue')), 'line');
            }
        }, {
            path: '/pie',
            name: 'pie',
            component (resolve) {
                require.ensure([], (require) => resolve(require('../mod_echarts/echarts_line/index.vue')), 'pie');
            }
        },
        ...ModEs6,
        ...ModVue,
        ...ModVueRouters,
        ...ModVuex,
        ...ModKoa2,
        ...ModMongoDb,
        ...ModNode,
        ...ModWebpack,
        ...ModJQ,
        ...ModOther
    ]

})
