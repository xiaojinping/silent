<template>
    <div>

        <jp-com-mode :title="'动态路由匹配'">
            <div>请先学嵌套路由，可能会好一些。</div>
            <router-link to="/route_matching/params/1">
                <jp-com-mode :title="'对Params更改做出反应'">
                    要点：
                    <ol>
                        <li>应用场景 请自行脑补……，点击查看更多</li>
                        <li>params发生变化时，不会调用组件的 生命周期</li>
                        <li>要对同一组件中的params更改做出反应，您只需观察$route对象即可,或者，使用2.2中介绍的beforeRouteUpdate 导航防护：</li>
                        <li>API: $route.params 该$route对象还公开了其他有用的信息 $route.query, $route.hash ……</li>
                    </ol>
                </jp-com-mode>
            </router-link>
            <router-link to="/route_matching/params/2">
                <jp-com-mode :title="'高级匹配模式 path-to-regexp'">
                    <p>阅读了文档，发现他的主要作用是 ，将路径字符串/user/:name转换为正则表达式。</p>
                    <p>我在想，使用他，得到的结果是一个正则，我要拿这个正则来做什么，不知道他的应用场景，感觉没多大用处，此处可以忽略</p>
                </jp-com-mode>
            </router-link>
            <router-link to="/route_matching/params/3">
                <jp-com-mode :title="'匹配优先级'">
                    <div>
                        官网的原文是这样描述他的
                        <p>有时，多个路由可能会匹配相同的URL。在这种情况下，匹配优先级由路由定义的顺序确定：路由定义越早，它获得的优先级越高</p>
                        <p>感觉没头没尾的。细细品读，是不是说如果有多个路由匹配相同的url，例如：页面A，页面B，页面C，其path值都是 #/abc,此时，谁先定义 ，#/abc指向谁</p>
                        <p>如果猜想成立，我想，没人会这样去定义路由，所以可以忽略 。有尝试，控制台直接报错了，也有可能是方向不对，意义不大，先不管他了</p>
                        <p>如果猜想不成立，实在不知道他想表达什么意思 ，忽略</p>
                    </div>
                </jp-com-mode>
            </router-link>
        </jp-com-mode>

        <jp-com-mode :title="'问题：这里我使用了嵌套路由和params结合，我需要默认页面指向某个子页面，这样操作后，左侧的列表无法读取'">
            <div>
                <span>详细描述</span>
                <p>
                    左侧菜单的数据是通过一个subData的数据渲染出来的，如果我要默认页面指向某个子页面，我只需要在subData中，将导航那的指向改到这个子页面，例如/dynamic_route_matching/params/1；
                    如此一来，带来了一个新的问题.当前的路由是 /dynamic_route_matching/params/1, 其matched可以获取到 /dynamic_route_matching, 通过/dynamic_route_matching去subData中遍历，发现并无此值，因此，他找到的左菜单是个空的。
                </p>
                <p>
                    结合这个实际问题，是不是表示，我只通过命名视图来达到需求。或者通过重定向来解决。
                </p>
            </div>
            <div>
                 这里的解决方案：通过在children中指定一个默认值 ，path:'',component(){指向……}; 因为这里有params值，所以，页面中需要一个默认的值。
            </div>

        </jp-com-mode>
        <router-view></router-view>
    </div>

</template>

<script>
export default {
    name: 'getting-started',
    watch: {

    }
}
</script>

<style>

</style>
