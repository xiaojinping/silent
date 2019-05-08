/**
 * @file: mod_vuex_config
 * @description: vuex模块页面 路由配置文件
 * */
export default [
    {
        path: '/mod_koa2',
        name: 'mod_koa2',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_koa2/starting/index.vue')), 'mod_koa2_starting');
        }
    },
    {
        path: '/mod_koa2_request',
        name: 'mod_koa2_request',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_koa2/request/index.vue')), 'mod_koa2_request');
        }
    },
    {
        path: '/mod_koa2_response',
        name: 'mod_koa2_response',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_koa2/response/index.vue')), 'mod_koa2_response');
        }
    },
    {
        path: '/mod_koa2_context',
        name: 'mod_koa2_context',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_koa2/starting/index.vue')), 'mod_koa2_context');
        }
    },
    {
        path: '/mod_koa2_router',
        name: 'mod_koa2_router',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_koa2/router/index.vue')), 'mod_koa2_router');
        }
    },
    {
        path: '/mod_koa2_cookies',
        name: 'mod_koa2_cookies',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_koa2/cookies/index.vue')), 'mod_koa2_cookies');
        }
    }
];
