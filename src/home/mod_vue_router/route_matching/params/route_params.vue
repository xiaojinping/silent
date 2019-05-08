<template>
    <div>
        <vue-markdown v-highlight :source="markdownSourceArr[paramsID]"></vue-markdown>
        <!--<vue-markdown :source="markdownSourceArr[paramsID]"></vue-markdown>-->
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
// import BaseMarkdown from '../../../mod_common/base_markdown.vue'
import Params1 from './params1.md'
import Params2 from './params2.md'
import Params3 from './params3.md'
const pathToRegexp = require('path-to-regexp')

export default {
    name: 'route_params',
    components: {
        VueMarkdown
    },
    props: { // props不单是指vue的绑定参数，还有可能是vue-router参数。
        id: {
            type: [Number, String, Boolean],
            default: 0
        }
    },
    data () {
        return {
            paramsID: null,
            markdownSourceArr: [Params1, Params2, Params3],
            routeReg: pathToRegexp
        }
    },
    beforeRouteEnter (to, from, next) {
        console.log(this, 'beforeRouteEnter');
        next();
    },
    beforeRouteUpdate (to, from, next) {
        console.log(this, 'beforeRouteUpdate');
        next();
    },
    beforeRouteLeave (to, from, next) {
        console.log(this, 'beforeRouteLeave');
        next();
    },
    mounted () {
        console.log(this.id);
        // 首先，页面在加载的时候，获取到所传过来的id， 多个params:id页面，只有第一次加载params/:id才会进入
        this.paramsID = (parseInt(this.$route.params.id, 10) - 1) || 0;
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
            console.log(this.id);
            this.paramsID = (parseInt(to.params.id) - 1) || 0;
        }
    }
}
</script>

<style >

</style>
