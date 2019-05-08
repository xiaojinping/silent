<template>
    <div>
        <jp-com-mode :title="'程序化导航'">
            <div>除了使用 router-link 为声明性导航创建锚标签之外，我们可以使用路由器的实例方法以编程方式执行此操作</div>
            <jp-com-mode title="应用场景">
                <p>
                     在部分产品型项目中，用户在成功登录前，必须进入到登录页面。此时就可以使用他来替换或者重新链接到登录页面，登录成功后，又需要跳转到用户需要的页面。
                </p>
                <p>
                    在部分站点上面，需要有一个后退，返回，回到某某首页的按钮。比如说，在右侧有个小悬浮，支持返回等功能，该功能与浏览器的后退，前进功能类似。
                </p>
                <p>
                    history.back()   history.forward，在路由里面，他同样也有这些 router.back === router.go(-1),  router.forward() ===  router.go(1);
                </p>
            </jp-com-mode>
            <router-push></router-push>
            <jp-com-mode title="router-replace">
                router.replace(location, onComplete?, onAbort?)
                <p>它的作用就像router.push，唯一的区别是它导航而不推送新的历史条目，顾名思义 - 它取代了当前的条目。</p>

            </jp-com-mode>

        </jp-com-mode>
    </div>
</template>

<script>
import RouterPush from './router_push.vue'

export default {
    name: 'getting-started',
    components: {
        RouterPush
    },
    data () {
        return {
            res: [],
            nestedRoutes: {
                path: '/nested_routes' // 嵌套路由
            },
            nestedRoutesHasName: {
                path: '/nested_routes', // 嵌套路由
                name: 'nested_routes'
            }
        }
    },
    watch: {

    },
    mounted () {

    },
    methods: {

    }
}
</script>

<style>
    .router-push {
        margin: 10px 0 20px;
    }
    .router-push--danger{

    }
</style>
