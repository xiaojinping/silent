/**
 * @file: mod_es6_config
 * @description: es6模块页面 路由配置文件
 * */
export default [
    {
        path: '/mod-es6',
        name: 'mod-es6',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_es6/index.vue')), 'mod-vue');
        }
    }, {
        path: '/es6-basics',
        name: 'es6-basics',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_es6/basics/index.vue')), 'es6-basics');
        }
    }, {
        path: '/es6-promise',
        name: 'es6-promise',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_es6/promise/index.vue')), 'es6-promise');
        },
        children: [
            {
                path: '/promise_basics',
                name: 'promise_basics',
                component (resolve) {
                    require.ensure([], (require) => resolve(require('../mod_es6/promise/components/promise_basics/index.vue')), 'promise_basics');
                }
            }, {
                path: '/promise_then',
                name: 'promise_then',
                component (resolve) {
                    require.ensure([], (require) => resolve(require('../mod_es6/promise/components/promise_then/index.vue')), 'promise_then');
                }
            }, {
                path: '/promise_catch',
                name: 'promise_catch',
                component (resolve) {
                    require.ensure([], (require) => resolve(require('../mod_es6/promise/components/promise_catch/index.vue')), 'promise_catch');
                }
            }, {
                path: '/promise_finally',
                name: 'promise_finally',
                component (resolve) {
                    require.ensure([], (require) => resolve(require('../mod_es6/promise/components/promise_finally/index.vue')), 'promise_finally');
                }
            }, {
                path: '/promise_all',
                name: 'promise_all',
                component (resolve) {
                    require.ensure([], (require) => resolve(require('../mod_es6/promise/components/promise_all/index.vue')), 'promise_all');
                }
            }
        ]
    }, {
        path: '/es6_async',
        name: 'es6_async',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_es6/async_await/index.vue')), 'es6_async');
        }
    }, {
        path: '/custom_promise',
        name: 'custom_promise',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_es6/custom_promise/index.vue')), 'custom_promise');
        }
    }
];
