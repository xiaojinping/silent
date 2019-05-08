/**
 * @file: mod_node_config
 * @description: node模块页面 路由配置文件
 * */
export default [
    {
        path: '/mod_node',
        name: 'mod_node',
        redirect: '/mod_node/service_deploy',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_node/service_deploy/index.vue')), 'service_deploy');
        },
        children: [
            {
                path: 'service_deploy',
                name: 'service_deploy',
                component (resolve) {
                    require.ensure([], (require) => resolve(require('../mod_node/service_deploy/index.vue')), 'service_deploy');
                }
            }

        ]

    },
    {
        path: '/node_service_deploy',
        name: 'node_service_deploy',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_node/service_deploy/index.vue')), 'node_service_deploy');
        }
    }
];
