### 写法1


```javascript
{
    path: '/nested_routes', // 嵌套路由
    component (resolve) {
        require.ensure([], (require) => resolve(require('../mod_vue_router/nested_routes/index.vue')), 'nested_routes');
    },
    children: [
        {
            path: 'reason', // 这里的路径 是没有 / 根路径，他的根路径就是其父路由的路径/nested_routes/reason
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
}
```
