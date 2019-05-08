<template>
    <div>
        <jp-com-mode :title="'router.push'">
            <el-collapse v-model="activeNames">
                <el-collapse-item title="router-push阐述" name="1">
                    <div>
                        <p> router.push(location, onComplete?, onAbort?) 此方法将新条目推送到历史堆栈中，因此当用户单击浏览器后退按钮时，它们将被带到先前的URL。
                            因此，可以使用go（）方法</p>
                        <p> onComplete导航成功完成时的回调函数。</p>
                        <p>onAbort 导航中止的回调函数。</p>
                        <p>这两个回调函数没有参数。只有2.2及以上版本才支持</p>
                    </div>
                    <div>实际上，使用  router-link  创建的锚标签，用户在点击的时候，就是执行的router.push方法 </div>
                </el-collapse-item>
                <el-collapse-item title="router-push实例1" name="2">
                    <div class="router-push">
                        <el-button @click="routerPush('/index')">首页</el-button>
                        <p>点击完按钮的，尝试点击浏览器的后退按钮</p>
                        <el-button @click="routerGo('1')">router.go方法</el-button>
                        此方法采用单个整数作为参数，指示在历史堆栈中前进或后退的步数，类似于window.history.go(n)
                    </div>
                    <div class="router-push">
                        <el-button v-for="(item, index) in res" :key="index" @click="routerPush(item.path, onComplete,onAbort)">{{item.text}}</el-button>
                    </div>
                </el-collapse-item>
                <el-collapse-item title="router-push错误的实例" name="3">
                    <div class="router-push router-push--danger">

                        <p class="">
                            <el-tag type="danger">问题1</el-tag>
                            这些按钮的参数是一个只包含path，name的对象，点击之后，发现结果与预期不一样，链接到首页了。查了下，在钩子函数中发现，to.matched为空，原因在下面有解答
                            <el-tag type="success">已解决</el-tag>
                        </p>
                        <p>
                            <el-tag type="warning">问题2</el-tag>
                            另外一个问题是，在这一排的按钮当中，点击【程序化导航】报错了，提示Duplicate keys detected: '/nested_routes'. This may cause an update error.
                            <el-tag type="warning">未解决</el-tag>
                        </p>
                        <el-button v-for="(item, index) in res"
                                   :key="index"
                                   :class="{'el-button--danger':dangerBtn(item)}"
                                   @click="routerPush(item),onComplete,onAbort">{{item.text}}</el-button>
                    </div>
                </el-collapse-item>

            </el-collapse>
            <div>
                <jp-com-mode :title="'遇到的问题'">
                    <ol>
                        <li>
                            <el-tag type="info">问题1答案</el-tag>
                            <p>原因很简单, 路由中并没有定义name属性，如果在router.push里的参数里有name, router.matched就是一个空的数组</p>
                        </li>
                        <li>
                            <el-tag type="warning">问题2答案</el-tag>
                            <p>未找到原因</p>
                        </li>
                    </ol>
                </jp-com-mode>

            </div>

        </jp-com-mode>
    </div>
</template>

<script>
import SUB_NAV_DATA from '@/home/router/subNavData.js'
export default {
    name: 'router-push',
    data () {
        return {
            activeNames: ['1', '3'],
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
        window.routerPush = this.routerPush;
        let activeTab = this.$root.activeTab;
        this.res = SUB_NAV_DATA[activeTab].data;
    },
    methods: {
        routerPush (path, onComplete, onAbort) {
            if (typeof path === 'object') {
                path.query = { plan: 'private' };
            }
            this.$router.push(path);
            if (onComplete) {
                onComplete();
            }
            if (onAbort) {
                onAbort();
            }
        },
        routerGo (n) {
            this.$router.go(n);
        },
        dangerBtn (item) {
            return item.path === '/programmatic_navigation';
        },
        onComplete (...values) {
            console.log('导航成功');
            console.log(values)
        },
        onAbort (...values) {
            console.log('导航中止');
            console.log(values)
        }

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
