<template>
    <div>
        <div class="jp-output-code">
            <div class="'jp-output-code__header">
                <slot name="title">{{title}}</slot>
            </div>

            <div class="jp-output-code__body">
                <div class="jp-output-code__body-hide">
                    <slot ></slot>
                </div>
                <ul>
                    <li v-for = '(item, index) in res' :key="index">
                        <code>{{item}}</code>
                    </li>
                </ul>
            </div>
            <div clsss="jp-output-code__footer">
                <slot name="footer" v-if="$slots.footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'outputcode',
    props: {
        title: {
            type: String,
            defalut: ''
        }
    },
    data () {
        return {
            res: []
        }
    },
    mounted () {
        this.outputCode();
    },
    methods: {
        /**
         * 将slots.body里的代码以数组的形式保存下来，然后输出到页面
         * 根据换行和回车将字符串分割成数组，
         * 获取到第一个非空白字符的位置，以此来去掉多余的空格。然后输出到页面。
         */
        outputCode () {
            let vm = this;
            let text = vm.$slots.default[0].text;
            let reg = /(\r|\n)+/g;
            if (!window.lodash.isString(text)) {
                return;
            }
            // 根据正则分割字符串，然后去掉正则所匹配的项目。
            let textArr = text.split(reg).filter((item) => {
                return !reg.test(item) && item;
            });
            // 查找第一个数据中的非空字符的位置。
            let index = textArr[0].search(/\S/);
            // 去掉数组中每一项数据前面一定数量的空格。
            vm.res = textArr.map((item) => {
                return item.slice(index);
            });
        }
    }
}
</script>

<style scoped>
    .jp-output-code {
        padding: 20px;
        margin: 10px;
        border:2px dashed #2c3ccc;
    }
    .jp-output-code__body-hide{
        display: none;
    }
    .jp-output-code__body code {
        white-space:pre-wrap;
    }

</style>
