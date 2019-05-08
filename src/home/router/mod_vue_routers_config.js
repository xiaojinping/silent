/**
 * @file: mod_vue_routers
 * @description: vue路由模块页面 路由配置文件
 * */
import NamedRoute from '../mod_vue_router/named_routes/index.vue'
export default [
    {
        path: '/vue_router',
        name: 'vue-router',
        alias: '/vue_router_alias',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_vue_router/index.vue')), 'vue_router');
        }
    }, {
        path: '/vue-router-list',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_vue_router/list.vue')), 'vue_router_list');
        }
    }, {
        path: '/vue_router_install', // 路由的安装
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_vue_router/install/index.vue')), 'vue_router_install');
        }
    }, {
        path: '/getting_started', // 入门
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_vue_router/getting_started/index.vue')), 'getting_started');
        }
    }, {
        path: '/route_matching', // 动态路由
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_vue_router/route_matching/index.vue')), 'route_matching');
        },
        children: [
            {
                path: '', // 动态路由(params)这里主要是为了默认打开此页面。

                component (resolve) {
                    require.ensure([], (require) => resolve(require('../mod_vue_router/route_matching/params/route_params.vue')), 'route_params');
                }
            },
            {
                path: 'params/:id', // 动态路由(params)
                props: true,
                component (resolve) {
                    require.ensure([], (require) => resolve(require('../mod_vue_router/route_matching/params/route_params.vue')), 'route_params');
                }
            }
        ]
    }, {
        path: '/nested_routes', // 嵌套路由
        name: 'nested_routes',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_vue_router/nested_routes/index.vue')), 'nested_routes');
        },
        children: [
            {
                path: '', // 如何设置默认路由 提供一个空的子路径
                component (resolve) {
                    require.ensure([], (require) => resolve(require('../mod_vue_router/nested_routes/components/default_route.vue')), 'default_route');
                }
            },
            {
                path: 'reason', // 为什么要设置子路由
                component (resolve) {
                    require.ensure([], (require) => resolve(require('../mod_vue_router/nested_routes/components/reason.vue')), 'reason');
                }
            },
            {
                path: 'skills', // 子路由的写法
                component (resolve) {
                    require.ensure([], (require) => resolve(require('../mod_vue_router/nested_routes/components/skills.vue')), 'skills');
                },
                children: [
                    {
                        path: ':id', // 为什么要设置子路由
                        component (resolve) {
                            require.ensure([], (require) => resolve(require('../mod_vue_router/nested_routes/components/skill1.vue')), 'skills1');
                        }
                    },
                    {
                        path: '/skills/:id', // 为什么要设置子路由
                        component (resolve) {
                            require.ensure([], (require) => resolve(require('../mod_vue_router/nested_routes/components/skill2.vue')), 'skills2');
                        }
                    }
                ]
            }
        ]
    }, {
        path: '/programmatic_navigation', // 程序化导航
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_vue_router/programmatic_navigation/index.vue')), 'programmatic_navigation');
        }
    }, {
        path: '/named_routes', // 命名路由
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_vue_router/named_routes/index.vue')), 'named_routes');
        }
    }, {
        path: '/named_views', // 命名视图
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_vue_router/named_views/index.vue')), 'named_views');
        },
        children: [
            {
                path: 'skills',
                components: {
                    default: { template: '<div> <br />请仔细观察 <br /> </div>' },
                    namedRouter: NamedRoute, // 命名视图可以是这样的一个对象，import 一个 vue文件
                    vueRouter (resolve) {
                        //  注意，命名路由如果采用这种写法，需要return， 纯为演示
                        return require.ensure([], (require) => resolve(require('../mod_vue_router/index.vue')), 'named_routes');
                    }
                }
            }
        ]
    }, {
        path: '/redirect_alias', // 重定向和别名

        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_vue_router/redirect_alias/index.vue')), 'redirect_alias');
        },
        children: [
            {
                path: '/redirect', // 重定向
                redirect: '/vue_router'
            }
        ]
    }, {
        path: '/route_props', // 路由组件
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_vue_router/route_props/index.vue')), 'route_props');
        }
    }, {
        path: '/router_other', // 其他
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_vue_router/router_other/index.vue')), 'history_mod');
        }
    },
    {
        path: '/router_guards', // 生命周期
        name: 'router_guards',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_vue_router/router_guards/index.vue')), 'router_guards');
        }
    },
    {
        path: '/router_sourse_code', // 源码
        name: 'router_sourse_code',
        component (resolve) {
            require.ensure([], (require) => resolve(require('../mod_vue_router/router_sourse_code/index.vue')), 'router_sourse_code');
        }
    }
];
