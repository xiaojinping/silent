/**
 * @file: mod_vuex_config
 * @description: vuex模块页面 路由配置文件
 * */
export default [
    {
        path: '/mod-mongodb',
        name: 'mod-mongodb',
        redirect: '/mongodb-install'
    },
    {
        path: '/mongodb-install',
        name: 'mongodb-install',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_mongodb/install/index.vue')), 'mongodb-install');
        }
    },
    {
        path: '/mongodb-create',
        name: 'mongodb-create',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_mongodb/create/index.vue')), 'mongodb-create');
        }
    },
    {
        path: '/mongodb-drop',
        name: 'mongodb-drop',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_mongodb/drop/index.vue')), 'mongodb-drop');
        }
    },
    {
        path: '/mongodb-find',
        name: 'mongodb-find',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_mongodb/find/index.vue')), 'mongodb-find');
        }
    },
    {
        path: '/mongodb-update',
        name: 'mongodb-update',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_mongodb/update/index.vue')), 'mongodb-update');
        }
    },
    {
        path: '/mongodb-insert',
        name: 'mongodb-insert',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_mongodb/insert/index.vue')), 'mongodb-insert');
        }
    },
    {
        path: '/mongodb-connect',
        name: 'mongodb-connect',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_mongodb/connect/index.vue')), 'mongodb-connect');
        }
    },
    {
        path: '/mongodb-find-and-modify',
        name: 'mongodb-find-and-modify',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_mongodb/find_and_modify/index.vue')), 'mongodb-find-and-modify');
        }
    },
    {
        path: '/mongodb-sort-limit-skip',
        name: 'mongodb-sort-limit-skip',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_mongodb/sort_limit_skip/index.vue')), 'mongodb-sort-limit-skip');
        }
    },
    {
        path: '/mongodb-indexing',
        name: 'mongodb-indexing',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_mongodb/indexing/index.vue')), 'mongodb-indexing');
        }
    }
];
