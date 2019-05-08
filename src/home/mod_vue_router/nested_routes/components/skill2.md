### 写法2


```javascript
{
    path: '/nested_routes', // 嵌套路由
    component (resolve) {
        require.ensure([], (require) => resolve(require('../mod_vue_router/nested_routes/index.vue')), 'nested_routes');
    },
    children: [
        {
            path: 'skills', 
            component (resolve) {
                require.ensure([], (require) => resolve(require('../mod_vue_router/nested_routes/components/skills.vue')), 'skills');
            },
            children: [
                {
                    path: ':id', 
                    component (resolve) {
                        require.ensure([], (require) => resolve(require('../mod_vue_router/nested_routes/components/skill1.vue')), 'skills1');
                    }
                },
                {
                    path: '/skills/:id', // 这就是写法2了，直接以根路径开头，他在router-link中直接引用，而不必要管他的父亲是谁
                    component (resolve) {
                        require.ensure([], (require) => resolve(require('../mod_vue_router/nested_routes/components/skill2.vue')), 'skills2');
                    }
                }
            ]
        }
    ]
}
```
