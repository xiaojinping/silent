/**
 * @file: mod_es6_config
 * @description: es6模块页面 路由配置文件
 * */
export default [
    {
        path: '/mod_nginx',
        name: 'mod_nginx',
        redirect: '/nginx_read'
    },
    {
        path: '/nginx_read',
        name: 'nginx_read',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_other/nginx/read/index.vue')), 'nginx_read');
        }
    },
    {
        path: '/nginx_install',
        name: 'nginx_install',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_other/nginx/install/index.vue')), 'nginx_install');
        }
    },
    {
        path: '/nginx_explain',
        name: 'nginx_explain',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_other/nginx/explain/index.vue')), 'nginx_explain');
        }
    },
    {
        path: '/nginx_start_stop',
        name: 'nginx_start_stop',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_other/nginx/start_stop/index.vue')), 'nginx_start_stop');
        }
    }
];
