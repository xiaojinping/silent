<template>
    <div>
        <jp-com-mode :title="'工作当中遇到的问题1'">
            <ul>
                <li>1: router.beforeEach 钩子函数中的 to.matched表示什么？在什么情况下他为空。</li>
                <li>2: router里面，  path: '/index',与   path: '/',有何区别</li>
            </ul>
        </jp-com-mode>
        <router-view clss="router-children"></router-view>

    </div>
</template>

<script>
export default {
    name: 'index'
}
</script>

<style scoped>

</style>
