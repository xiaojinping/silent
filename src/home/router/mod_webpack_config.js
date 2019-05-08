/**
 * @file: mod_vuex_config
 * @description: vuex模块页面 路由配置文件
 * */
export default [
    {
        path: '/mod_webpack',
        name: 'mod_webpack',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_webpack4.0/index.vue')), 'webpack');
        }
    },
    {
        path: '/entry_output',
        name: 'entry_output',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_webpack4.0/entry_output/index.vue')), 'entry_output');
        }
    },
    {
        path: '/webpack_entry',
        name: 'webpack_entry',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_webpack4.0/entry/index.vue')), 'webpack_entry');
        }
    },
    {
        path: '/webpack_output',
        name: 'webpack_output',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_webpack4.0/output/index.vue')), 'webpack_output');
        }
    },
    {
        path: '/webpack_loader',
        name: 'webpack_loader',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_webpack4.0/loader/index.vue')), 'webpack_loader');
        }
    }
];
