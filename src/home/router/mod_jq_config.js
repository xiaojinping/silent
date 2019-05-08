/**
 * @file: mod_jq_config
 * @description: jQ模块页面 路由配置文件
 * */
export default [
    {
        path: '/jq_extend',
        name: 'jq_extend',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_jq/extend/index.vue')), 'jq_extend');
        }
    },
    {
        path: '/jq_selector',
        name: 'jq_selector',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_jq/selector/index.vue')), 'jq_selector');
        }
    },
    {
        path: '/jq_dom',
        name: 'jq_dom',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_jq/dom/index.vue')), 'jq_dom');
        }
    }
];
