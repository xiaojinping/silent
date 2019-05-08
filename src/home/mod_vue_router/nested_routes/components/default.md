# 如何设置默认路由

≖ ‿ ≖


### 方法1 您可以提供一个空的子路径路径：例如： path:'',components () {……} <br />
---
≖ ‿ ≖


```script
{
    path: '', // 如何设置默认路由 提供一个空的子路径 特别说明，我记得有个版本的vue-router当中，默认值设置好像是 '/'
    component (resolve) {
        require.ensure([], (require) => resolve(require('../mod_vue_router/nested_routes/components/default_route.vue')), 'default_route');
    }
}
```




### 方法2 重定向
---
≖ ‿ ≖

```script
/**
 * 重定向
 * 重定向的时候，路径应该是一个完整的路径，例如指向一个绑定的params的子路径，这里同样需要/parentPath/childrenPath/:params1/:params2
 * 重定向home2: /home/home2/1234
 * 如果重定向的url不是当前路由中的子路由，可以不需要写 component
 *
 */ 
{
    path: '/home',
    redirect: '/home/home1', // 注意重定向的路径写法
    component:Home,
    children: [
        {path: home1, ……},
        {path: home2/:id, ……},
        {path: home2, ……}
    ]
}
```

