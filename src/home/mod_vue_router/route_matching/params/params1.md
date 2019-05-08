## 对Params更改做出反应

### 可能的应用场景
>我们经常需要将具有给定模式的路线映射到同一个组件。例如，我们可能有一个User应该为所有用户呈现但具有不同用户ID的组件。在vue-router我们可以在路径中使用动态段以实现：

比如说，一个用户组件模块，需要显示用户的信息，这些信息包括姓名，年龄，职业、……，这些东西，可以通过一个路由来搞定，而不是有多少用户，建多少路由。

在数据库里，每一个用户都有一个对应的id，我们只需要根据这个id来请求对应的信息就行。这和我们vue的组件是一个思想。vue-componets在使用时，也是这样的

既然这样，为什么不用vue组件实现，而要用路由的params呢。 vue的组件的参数是用户在页面上进行操作时获取到。vue-route,操作的是url,

例如：博客，xxx.xxx/blog/张三，xxx.xxx/blog/李四， 每个人的博客，前面的都一样，只是后面的地址不同。

比如说一个站点，有很多个新闻页，这些新闻页都有相同的特点，标题，简要，时间日期，作者等信息，所不同的只是内容。那么，我们可不可以，用一个页面将他实现，通过一个识别符id，去请求页面的内容 。
例如：news/:id;


### 注意事项
使用带有params的路由时要注意的一点是，当用户从导航/params/1 到导航/params/2，将重用相同的组件实例。由于两个路由都呈现相同的组件，因此这比销毁旧实例然后创建新实例更有效。但是，这也意味着不会调用组件的生命周期钩子。

###### 注意：是不会调用 组件 的生命周期，所以，这里我用的markdown这个组件里的生命周期不会触发 ，导致我的代码语法高亮失效，（先这么认为，还没做进一步验证）
我频繁的切换params/:id页面，发现mounted生命只有第一次加载的时候才会进入。params页面都不会触发生命周期，params里的markdown就更加 不会触发了。

要对同一组件中的params更改做出反应，您只需观察$route对象即可 或者，使用2.2中介绍的beforeRouteUpdate 导航防护：：

```html
需求如下：
    用户点击 任意知识点， 显示对应模块的说明文档
    我在这里用的是通过一个子路由来实现 params，当然，也可以直接在根路由上实现params,
    但是因为这里的总的架构原因，如果我在根路由上实现的话，我会找不到对应的二级菜单 。（这个内容点放到首页展示）
    为什么要采用这种架构，因为二级菜单可能并不是当前大菜单里的一个子路由。（这个内容点放到首页展示）
```


### 示例：



#### 父页面的html文档如下

```html
<router-link to="/dynamic_route_matching/params/1">
    <jp-com-mode :title="'对Params更改做出反应'"></jp-com-mode>
</router-link>
<router-link to="/dynamic_route_matching/params/2">
    <jp-com-mode :title="'高级匹配模式'"></jp-com-mode>
</router-link>
<router-link to="/dynamic_route_matching/params/3">
    <jp-com-mode :title="'匹配优先级'"></jp-com-mode>
</router-link>

<router-view></router-view> // 这是 dynamic_route_matching 页面上的内容 ，

以下为 params 页面的内容 ，很明显，调用 了一个插件，这个插件的内容 就是根据 params 的值来显示的。
<vue-markdown v-highlight :source="markdownSourceArr[paramsID]"></vue-markdown>

// TODO 这里有个bug，vue-markdown在动态使用时，语法没有高亮，具体原因没时间来查。
```

#### 路由定义
```script
{
    path: 'params/:id', // 动态路由(params)
    component (resolve) {
        ……
    }
}
````

#### 子页面的js如下：
```script

    mounted () {
        // 首先，页面在加载的时候，获取到所传过来的id 多个params/:id页面，只有第一次加载params/:id才会进入
        this.paramsID = parseInt(this.$route.params.id, 10);
    },
    computed: {
        /**
         * 初次加载这个页面的时候，可以在 挂载的时候获取 params， 也可以在 计算属性里 获取id;
         * 因为在计算过程当中，有用到 $route.params.id，所以，不管他怎么变化，paramsID都会实时更新。
         * 这里，我想说明下watch中如何监测 $route, 所以，就不用 computed 了。
         */
        // paramsID () {
        //     return parseInt(this.$route.params.id, 10) - 1;
        // }
    },
   watch: {
       /**
        * '$route' 可以监测到 params的变化，他只有两个参数，to, from , 没有 next
        * */
       '$route' (to) {
           this.paramsID = parseInt(to.params.id) - 1;
       }
   }
```


