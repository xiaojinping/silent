/**
 * @file: mod_vue_config
 * @description: vue模块页面 路由配置文件
 * */
export default [
    {
        path: '/mod_vue',
        name: 'mod_vue',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_vue/index.vue')), 'mod_vue');
        }
    }
];
