<template>
    <div>
        <plan :title="'wq'">
                我是一只小小的鸟。
            <div slot=""></div>
        </plan>
        <jp-com-mode :title="'我需要哪些组件'">
            <div>

                <ol>
                    <li>各种标题组件 完成了一半</li>
                    <li>引用类型组件，例如：我需要引用router官网的一段话</li>
                    <li>router-link组件，横向，竖向，树状等结构应该都具有。</li>
                    <li>我需要引入less,sass,方便统一他的样式 </li>
                    <li>
                        我需要一个组件，用来在页面当中输出源代码。用来说明
                        <div>要求</div>
                        <p>
                            1: 我需要根据代码的类型来做处理。预定义类型包含：css,js,html,vue.
                        </p>
                        <p>如果 是js代码，里面是没有标签的</p>
                    </li>
                    <li>
                        备忘： const 不能改变的是内在地址，而 不是不能改变。例如：一个引用类型的const.Object || Array.是可以改变他内部的值的。
                    </li>
                </ol>
            </div>
        </jp-com-mode>

    </div>
</template>

<script>

import Plan from '../components/project_plan/index.vue';
/*eslint-disable*/
export default {
    name: 'firstindex',
    components: {
        Plan
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
    data () {
        return {
            isMode: false
        }
    },
    mounted () {
        console.log(this.$router.resolve);
        this.reouterResolveTest(100);
        this.types();
    },
    methods: {
        reouterResolveTest (id) {
            return;
            let routeData = this.$router.resolve({
                name: 'canvas',
                params: {
                    templetID: id
                }
            });
            console.log(routeData);
            window.open(routeData.href, '_blank');
        },
        types() {
            let json = {};
            json.fn =  this.reouterResolveTest;// function
                 json.obj2 = {}; // 空对象  // object
               // json.obj3 = null; // null  // object
                json.obj4 = [];// 空数组 // object
                json.obj5 = [1]; // 数组 // object
                json.num1 = 1; // 数字  // number
                json.str = ''; //  字符串 // string
                json.bool = true; // boolean // boolean
                json.reg = /[0-9]/; // 正则 // object
                json.date = new Date(); // date // object
            /*
            *  得出一个结论 除了基本类型(number,string,boolean)，function 以外，所有的引用类型，采用typeof查看数据类型的时候，都为object;
            *  除了 null以外，constructor 都可以读取其自身的类型，
            *  另外有个意外的收获，json.stringify 在转换函数时，竟然是undifned;
            */
            console.group();
            for (let item in json) {
                if (json.hasOwnProperty(item)) {

                    console.log(json[item]);
                    console.log(typeof json[item], typeof json[item] === 'object', typeof json[item] == 'object');
                    console.log(json[item].constructor, json[item].constructor === Object, json[item].constructor == Object );
                }
            }
            console.groupEnd();
        }

    }

}
</script>

<style>

</style>
