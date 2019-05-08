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
    getters: {
        // 做为一个属性存在
        authorCapacityCount: state => state.AUTHOR.capacity.length,
        /**
         * getters 做为一个方法，
         * 如果是$store的方式调用，在页面中是这样调用的，$store.getters.方法名(参数)
         * 或者 ...mapGetters(['方法名']), 然后在页面中相当于调用methods一样去调用
         * 前一个state是指当前的state对象，后面的str才是我们在执行的时候，要传入的参数 。
         * @description: 查看是否有某项能力
         * @param {string} str -某项能力
         * */
        hasAuthorCapacityVue: state => (str) => {
             let text = window.lodash.find(state.AUTHOR.capacity, key => key === str);
             return !!text;
        }
    },
    state: {
        AUTHOR // 前文已有讲解。
    },
    mutations: {
       // ……
    }
});
```


≖ ‿ ≖


## mapGetters 如何在vue组件中使用
---

```html
<div class="example-groups-item">
   <span class="label">【技能数量】</span>  {{$store.getters.authorCapacityCount}}
</div>
<div class="example-groups-item">
    <span class="label">【会Vue】</span> {{hasAuthorCapacityVue('vue')}}
</div>
<div class="example-groups-item">
    <span class="label">【会js】</span> {{hasAuthorCapacityVue('js')}}
</div>
```

```javascript
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
    ……
    computed: {
        ...mapState(['AUTHOR']),
        ...mapGetters(['authorCapacityCount', 'hasAuthorCapacityVue'])
    }
}
```
