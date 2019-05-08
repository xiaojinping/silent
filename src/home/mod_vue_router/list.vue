<template>
    <div>

        <jp-com-mode :title="'目录1'">
            <ul>
                <li>
                    vue-router的安装与介绍 不做介绍
                </li>
                <li>Essentials/要素</li>
                <li>getting started/入门 不做介绍</li>
                <li>dynamic route matching/动态路径匹配</li>
                    <p>这里实际上就是路由的生命周期</p>
                    <ul>
                        <li>reacting to params changes/对参数变化的反应</li>
                        <li>advanced matching patterns/高级匹配模式</li>
                        <li>matching priority/匹配优先级</li>
                    </ul>

                <li>nested routes/嵌套路由</li>
                <li>programmatic navigation/程序导航</li>
                <li>named routes/命名路由</li>
                <li>named views/命名视图</li>
                <li>redirect and alias/重定向和别名</li>
                <li>passing props to Route components/路由组件</li>
                <li>html5 history mode/HTML5历史模式</li>
                <li>-----advanced/先进的</li>
                <li>navigation guards/编程式导航</li>
                <li>route meta fields/路由元字段</li>
                <li>transitions/转变</li>
                <li>data fetching/数据提取</li>
                <li>scroll behavior/滚动行为</li>
                <li>lazy loading routes/延迟加载</li>
            </ul>
        </jp-com-mode>

        <!--<jp-com-mode :title="'目录'">-->
            <!--<ul>-->
                <!--&lt;!&ndash;<router-link to="/getting_started">入门</router-link>&ndash;&gt;-->
                <!--<li>-->
                    <!--入门: 文件解读与引用-->
                    <!--<div>-->
                        <!--介绍了router文件的结构组件及如何使用。-->
                    <!--</div>-->
                <!--</li>-->
                <!--&lt;!&ndash;<router-link to="/vue-router-list/dynamic_route_matching">配置子路由</router-link>&ndash;&gt;-->
                <!--<li>-->
                    <!--配置子路由-->
                    <!--<div>-->
                        <!--配置子路由的目的是什么，是为了复用相同的功能的模块，这种实现方式与通过组件实现有什么区别1-->
                    <!--</div>-->
                    <!--<div>-->
                        <!--缺点：耦合太强。-->
                    <!--</div>-->
                    <!--<div>-->
                        <!--优点：减少了代码量。-->
                        <!--<p>如果我们用组件来达到这个效果，我们需要在所有的子路由页面内都使用相同的组件。</p>-->
                        <!--<p>如果采用子路由的方式来实现，对于多个页面使用了相同组件，并且组件内的内容也是相同的情况下，这个相同的组件可以写在父页面，从而使子页面少写几个组件 。</p>-->
                    <!--</div>-->
                    <!--<div>-->
                        <!--注意：-->
                        <!--子路由的写法上有几种，这里介绍两种写法。-->
                        <!--<p></p>-->
                        <!--1：在路由配置的时候，path不要带'/'：例如：'dynamic_route_matching'，而不是'/dynamic_route_matching',在router-view标签中，to的参数应该是to="/父页面path/子页面路径path"-->
                        <!--<div>-->
                            <!--<jp-output-code>-->
                                <!--{-->
                                    <!--path: 'dynamic_route_matching', // 注意，这里没有 '/'-->
                                    <!--component (resolve) {-->
                                        <!--require.ensure([], (require) => resolve(require('../mod_vue_router/dynamic_route_matching/index.vue')), 'dynamic_route_matching');-->
                                    <!--}-->
                                <!--}-->
                                <!--在router-link中这样使用-->
                                    <!--&lt;router-link to="/vue_router/dynamic_route_matching" &gt;配置子路由 &lt;/router-link&gt;-->
                                <!--另外，还需要在父页面中有一个容器来放置子页面。-->
                                    <!--&lt;router-view clss="router-children" &gt;……-->
                            <!--</jp-output-code>-->

                        <!--</div>-->
                        <!--<p></p>-->
                        <!--2: 在路由配置的时候，和其他路由一样的配置，to的参数也和其他路由一样，-->
                        <!--<p></p>-->
                        <!--采用第一种写法，url会把父路由的地址给出来，第二种写法，灵活度更高。所以，具体采用哪种写法，可以根据项目规范、需求和喜爱习惯来决定。-->
                    <!--</div>-->
                <!--</li>-->
                <!--<li>-->
                    <!--传递参数-->
                <!--</li>-->
                <!--<li>-->
                    <!--单页面多路由区域操作-->
                <!--</li>-->
                <!--<li>-->
                    <!--利用url传参-->
                <!--</li>-->
                <!--<li>-->
                    <!--重定向-->
                <!--</li>-->
                <!--<li>-->
                    <!--别名-->

                <!--</li>-->
                <!--<li>-->
                    <!--过渡动画-->
                <!--</li>-->
                <!--<li>-->
                    <!--mode的设置和404页面的处理-->
                <!--</li>-->
                <!--<li>-->
                    <!--路由的钩子-->
                <!--</li>-->
                <!--<li>-->
                    <!--编程式导航-->
                <!--</li>-->
                <!--<li>-->
                    <!--如何在一个新窗口打开路由-->
                <!--</li>-->
            <!--</ul>-->
        <!--</jp-com-mode>-->
        <!--<router-view clss="router-children"></router-view>-->
    </div>
</template>

<script>
export default {
    name: 'vur-router-list'
}
</script>

<style scoped>

</style>
