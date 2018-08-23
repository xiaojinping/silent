import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component (resolve) {
                require.ensure([], (require) => resolve(require('../mod_index/index.vue')), 'index');
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
        }
    ]

})
