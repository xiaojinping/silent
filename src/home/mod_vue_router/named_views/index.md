# 命名视图

在前面一章的内容里面说过了命名路由，就是给路由起一个  name (名字)

同样，命名视图，也是给视图（router-view）起一个 name (名字)





### 应用场景

那么，为什么要这么做。

在没有使用命名视图之前，页面是怎么渲染的。用一分钟时间回忆下，做个总结。

一个视图只渲染了一个路由的内容，如果此时我们需要有多个路由文件共同存在一个页面要如果处理？

主要的作用就是将多个视图显示在同一视图下，就比如我们vue里面的 components一样。

个人认为这个功能有点鸡肋，我完全可以用组件代替。直接定义一个路由，这个路由实际上是将多个功能模块组合在一起。

### 基本应用

这里在命名路由的时候，用了三种写法，注意观察，1：直接以对象字面量的形式 default，2：通过import引入 namedRouter， 3： require.ensure
```javascript
import NamedRoute from '../mod_vue_router/named_routes/index.vue'
{
    path: '/named_views', // 命名视图
    component (resolve) {
        require.ensure([], (require) => resolve(require('../mod_vue_router/named_views/index.vue')), 'named_views');
    },
    children: [
        {
            path:'skills', 
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
}
```

html文件

```html
    <router-view class="view one"></router-view>
    <router-view name="namedRouter"></router-view>
    <router-view name="vueRouter"></router-view>
```

页面效果点击之后可察看



效果如图所示
```javascript
/named_views/skills                 
+----------------------+              
|  仔细观察            |             
| -------------------- |      
|  命名路由的内容      |  
| -------------------- |
|  路由首页的内容      |
| -------------------- |

```







