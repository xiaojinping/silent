# mutations

mutations 应该是同步的方法。这是一个约定，就像我们的 构造函数 首字母大写一样。


mutations  里的所有方法都是唯一的，(包括后面我们需要学习的 模块分组里的mutations)


因为 每一个 mutations 方法都是唯一的， 所以，我们经常会这样做，用一个单独的文件来保存 mutations 的方法名，


在使用的时候，可以用es6语法  [ 函数名 ] () {}，

```javascript
// 简单示意
const  CHANGE_AUTHOR_NAME = 'changeAuthorName';
[CHANGE_AUTHOR_NAME] (state, name) { // 请注意这里，这里的我们使用了es6的函数命名语法，允许使用一个常量
 state.AUTHOR.name = name;
}
```

≖ ‿ ≖


## Mutation 需遵守 Vue 的响应规则

既然 Vuex 的 store 中的状态是响应式的，那么当我们变更状态时，监视状态的 Vue 组件也会自动更新。这也意味着 Vuex 中的 mutation 也需要与使用 Vue 一样遵守一些注意事项：

最好提前在你的 store 中初始化好所有所需属性。

当需要在对象上添加新属性时，你应该

1： 使用 Vue.set(obj, 'newProp', 123), 或者

2： 以新对象替换老对象。例如，利用 stage-3 的对象展开运算符我们可以这样写：
state.obj = { ...state.obj, newProp: 123 }


≖ ‿ ≖



## mutations 如何定义
---

如果把mutations看成一个vuex的methods， 是不是就很好理解 了。

```javascript
const [ADD_AUTHOR_CAPACITY, CHANGE_AUTHOR_NAME] = ['addAuthorCapacity', 'changeAuthorName'];
export default new Vuex.Store({
    modules: {
        // 后面会有讲解，如果没有模块分组，可以不要。
    },
    state: {
        AUTHOR // 前文已有讲解。
    },
    mutations: {



        /**
         *  state是指上下文，即 $store.state,
         *  如果通过mapMutations来执行，只需要传递 capacity 参数。
         *  如果通过 $store.commit() 来执行，第一参数是函数名称，例如：addAuthorCapacity，第二参数，才是 capacity
         *  @description: 增加个人能力
         *  @params {array || string} capacity
         */
        [ADD_AUTHOR_CAPACITY] (state, capacity) {
           let arr = state.AUTHOR.capacity;
           if (capacity.constructor === Array) {
               arr.push(...capacity);
           } else if (capacity.constructor === String) {
               arr.push(capacity);
           }
        },



        /*
        * 请注意这里，这里的我们使用了es6的函数命名语法，允许使用一个常量
        * @description: 改变作者的名字，有可能是笔名，也有可能是真实姓名
        * @param {string} name -作者名字
        */
        [CHANGE_AUTHOR_NAME] (state, name) {
           state.AUTHOR.name = name;
        },



        /**
        * 使用的对象提交风格 不推荐使用 我如果期望参数是一个对象，大可以传一个对象进来，而不是使用这种方式 。
        * 对象的提交方式是这样的： store.commit({type:'函数名称',name, age,……})
        * @description: 改变作者的名字，有可能是笔名，也有可能是真实姓名
        * @param {string} obj -一个包含type字段的对象
        */
        changeAuthorNameObj (state, obj) { //
           state.AUTHOR.name = obj.name;
        }
    }
});
```


≖ ‿ ≖


## mutations 如何在vue组件中使用
---


使用 ...mapMutations() 与 【[...mapState()](#/vuex_state)】 一样， 可


```javascript
import store from '@/vuex/store/index.js'
import VueMarkdown from 'vue-markdown'
import MarkDownSource from './index.md'
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'vuex-state',
    components: {
        VueMarkdown
    },
    store,
    data () {
        return {
            source: MarkDownSource
        }
    },
    computed: {
        ...mapState(['AUTHOR'])
    },
    mounted () {
    },
    methods: {
        commitAuthorName (str) {
            this.$store.commit('changeAuthorName',str);
        },
        // 对象风格的提交方式 ，不推荐使用
       commitAuthorNameObj (str) {
           this.$store.commit({
               type: 'changeAuthorNameObj',
               name: str,
               age: 30
           });
       },
       ...mapMutations(['changeAuthorName', 'addAuthorCapacity', 'changeAuthorNameObj'])
    }
}
```


HTML



```html
<div class="example-groups">
    <el-button type="primary" plain @click="changeAuthorName('xjp - mapMutations')">改名 ...mapMutations()</el-button>
    <el-button type="primary" plain @click="commitAuthorName('xjp - commit-string')">改名 $store.commit('','')</el-button>
    <el-button type="primary" plain @click="commitAuthorNameObj('xjp - commit-object')">commit的对象提交风格</el-button>
    <el-button type="primary" plain @click="changeAuthorNameObj({type:'changeAuthorNameObj',name:'小小小'})">mapMutation的对象提交风格，修改名称</el-button>
</div>
<div class="example-groups">
    <el-button type="primary" plain @click="addAuthorCapacity(['js', 'css'])">我get了一些新的技能</el-button>
    <el-button type="primary" plain @click="addAuthorCapacity('vuex-mutations')">我学会了 vuex-mutations</el-button>
</div>
```