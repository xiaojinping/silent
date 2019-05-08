<template>
    <div>

        <router-link to="/nested_routes/reason">
            <jp-com-mode :title="'为什么要配置子路由，即他的使用场景'">
                使用场景 我在 动态路由的时候也有阐述
            </jp-com-mode>
        </router-link>

        <router-link to="/nested_routes/skills">
            <jp-com-mode :title="'子路由的两种写法'">
                <div>
                    在官网的介绍当中，有这么一句很容易让人忽略的话
                    <p> 请注意，以...开头的嵌套路径/将被视为根路径。这允许您利用组件嵌套而无需使用嵌套URL。</p>
                    我仔细研读了这句话,由此，我想到了两种子路由的写法。
                </div>

            </jp-com-mode>
        </router-link>

        <router-link to="/nested_routes">
            <jp-com-mode :title="'如何设置默认子路由'">
            </jp-com-mode>
        </router-link>

        <router-view />
    </div>
</template>

<script>
export default {
    name: 'nested-routes'
}
</script>

<style>
</style>
