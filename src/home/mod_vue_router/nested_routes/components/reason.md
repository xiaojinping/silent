# 为什么要设置子路由

 父路由的内容 需要共享给所有的子路由。



### 为了复用相同的功能的模块，这种实现方式与通过组件实现有什么区别


这是两个不同的东西，没有可比性。路由是根据url来请求页面，组件是对用户行为的一种观察或者是一个ui显示。

以user为例， 路由处理的是不同用户浏览的页面，例如用户小王看到的是小王的信息，用户小刘看到是小刘的信息。

而vue-component是观察同一个用户的操作，比如用户小王在父页面对个人信息做了修改或者补充，需要通知其子页面。

在参数的传递上，
    如果使用vue组件实现，参数是通过$emit传递，当父页面或者 公共组件模块user的值发生变化时，父页面需要有一个$emit传递出去。子页面需要通过$on来接收
    如果使用路由来实现 ，当父页面的值发生变化的时候，获取其url，及params, hash, query  ……, 获取这些值只是为了请求页面。


```script
 /user/foo/profile                     /user/foo/posts
+------------------+                  +-----------------+
| User             |                  | User            |
| +--------------+ |                  | +-------------+ |
| | Profile      | |  +------------>  | | Posts       | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------
```

### 使用路由来实现

* 我只需要定义一个父页面，然后定义多个子页面。通过一个router-view加载不同的子页面。


*　优点
        1 减少了代码量
            如果我们用组件来达到这个效果，我们需要在所有的子路由页面内都使用相同的组件
            如果采用子路由的方式来实现，对于多个页面使用了相同组件，并且组件内的内容也是相同的情况下，这个相同的组件可以写在父页面，从而使子页面少写几个组件 。
        2:



---

```script
{
    path: '/nested_routes', // 嵌套路由
    component (resolve) {
        require.ensure([], (require) => resolve(require('../mod_vue_router/nested_routes/index.vue')), 'nested_routes');
    }, // 这里有一个子路由，所以，这个页面需要 加上 router-view
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
            },// 这里也有一个子路由，所以，这个页面需要 加上 router-view
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
},
```


### 使用vue组件来实现

≖ ‿ ≖

……省略一万字