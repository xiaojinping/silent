/**
 * @file: mod_vuex_config
 * @description: vuex模块页面 路由配置文件
 * */
export default [
    {
        path: '/mod_vuex',
        name: 'mod_vuex',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_vuex/index.vue')), 'mod_vuex');
        }
    },
    {
        path: '/vuex_state',
        name: 'vuex_state',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_vuex/state/index.vue')), 'vuex_state');
        }
    },
    {
        path: '/vuex_mutations',
        name: 'vuex_mutations',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_vuex/mutations/index.vue')), 'vuex_mutations');
        }
    },
    {
        path: '/vuex_getters',
        name: 'vuex_getters',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_vuex/getters/index.vue')), 'vuex_getters');
        }
    },
    {
        path: '/vuex_actions',
        name: 'vuex_actions',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_vuex/actions/index.vue')), 'vuex_actions');
        }
    },
    {
        path: '/vuex_modules',
        name: 'vuex_modules',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_vuex/modules/index.vue')), 'vuex_modules');
        }
    }
];
