<template>
    <div>
        <jp-com-mode>
            请注意 URL的变化
            <router-link to="/nested_routes/skills/1">
                <jp-com-mode :title="'子路由的写法1：'">
                    第一种写法，在写路由配置文件的时候，路径不以 ‘/’开头，在router-link中的引用则是 父路径 + 子路径。
                </jp-com-mode>
            </router-link>

            <router-link to="/skills/2">
                <jp-com-mode :title="'子路由的写法2：'">
                    第二种写法，在写路由配置文件的时候，路径以 ‘/’开头，例如：/skills ，在router-link中的引用直接引用此路径。
                </jp-com-mode>
            </router-link>

            <router-view />
        </jp-com-mode>
    </div>
</template>

<script>
export default {
    name: 'skills_vue'
}
</script>

<style scoped>

</style>
