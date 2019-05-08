# State

Vuex 的状态存储是响应式的，

state 是什么？
state 如何创建？
state 如何引用

## 如何创建 store 【】
---

我这里复制了当前项目@/vuex/store/index中的部分代码；

// 第一步，引入依赖文件
```javascript
import Vue from 'vue'
import Vuex from 'vuex'
```

// 第二步：Vue.use 这一步不起眼，但是必不可少，不要忽略了这句话
这一步的作用是将vuex注入到vue的每一个组件里

```javascript
Vue.use(Vuex)
```

// 定义了一个对象，

```javascript
const AUTHOR = {
    name: 'xiaojinping',
    education: '小学',
    email: '290762142@qq.com',
    description: '这家伙很懒，什么也没留下',
    capacity: ['es6', 'vue', 'vuex', 'vue-router', 'qunee', 'echarts']
};

```

// 第三步：创建一个Store实例，这样一个简易的 Store的创建成功了。

```javascript
export default new Vuex.Store({
    modules: {
         // 后面会有讲解，如果没有模块分组，可以不要。
    },
    state: {
        AUTHOR
    }
});
```

=/\=

## 如何在页面中引入Store
---

引入的时候，store名字尽量小写，

```javascript
import store from '@/vuex/store/index.js'
export default {
    name: 'vuex-state',
    store, // ES6 写法，ES5是这样：store: store, 在store/index.js中注入过vuex，才可以用。
    mounted () {
        console.log(this.$store);
        // this.$store可以访问到我们的 Store 实例。this.$store.state 就可以访问到state了。

    },
}
```

## 在 Vue 组件中获得 Vuex 状态

由于 Vuex 的状态存储是响应式的，从 store 实例中读取状态最简单的方法就是在计算属性中返回某个状态：

### 1：直接使用store或者 this.$store

this.$store, 只有store文件注入了vuex才可以使用

```javascript
computed: {
    authorName ()  {
        return this.$store.state.AUTHOR.name;
    }
},

```
### 2 mapState 辅助函数 ...mapState(); 对于 ...运算符不熟悉的可以去看 【[es6](#/es6-basics)】

如果要使用 mapState 辅助函数，必须引入 mapState, 相同的还有mapMutations …… 【废话】

当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组 ...mapState([]),数组里的每值必须是字符串，


也可以根据需要，传入一个对象做为参数。...mapState({}); 在这个对象里，获取state的值，有两种方式，字符串直接赋值，函数表达式，使用函数表达式，最好使用常规函数。箭头函数的this指向vuex.



javascript


```javascript
import { mapState } from 'vuex'
 computed: {
    authorName ()  {
         return this.$store.state.AUTHOR.name;
    },
    ...mapState({ // 使用对象的方式有个好处，可以自定义名称。
        AUTHOR: 'AUTHOR',
        authorDes: state => {
            return state.AUTHOR.description + `【箭头函数的this指向了vuex】`;
        } ,
        authorDescription (state) {
            return state.AUTHOR.description + `【只有使用常规函数才可以获取预期的this对象】`;
        }
    }),
     ...mapState(['AUTHOR']) // 当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组

},

```


mapState对象，是传入一个字符串数组，还是传入一个对象，具体看实际情况，


HTML

```html
<div class="example-groups">
    <div class="example-groups-item">
        <span class="label">【姓 名】</span>  {{$store.state.AUTHOR.name}} - {{authorName}}
        <el-tag type="info">这里采用的 $store 获取的数据</el-tag>
    </div>
    <div class="example-groups-item">
        <span class="label">【自我介绍】</span>  {{author.description}}
        <el-tag type="info">...mapState({author: 'AUTHOR'}})  </el-tag>
    </div>
    <div class="example-groups-item">
        <span class="label">【自我介绍】</span>  {{authorDes}}
        <el-tag type="info">...mapState({箭头函数}})  </el-tag>
    </div>
    <div class="example-groups-item">
        <span class="label">【自我介绍】</span>  {{authorDescription}}
        <el-tag type="info">...mapState({常规函数}})  </el-tag>
    </div>
    <div class="example-groups-item">
        <span class="label">【能 力】</span>  {{AUTHOR.capacity}}
        <el-tag type="info">...mapState([] </el-tag>
    </div>
</div>
```

### state 是什么

state 就是数据的一种存储方式。

但是，请不要将所有的数据都以这种方式存储，这会显得很多余，不好维护。

通常，我们只存储一些用途比较广泛的数据，例如：会员等级，用户信息，登陆状态，……

【这个知识点我就不引入官网文档了。】



