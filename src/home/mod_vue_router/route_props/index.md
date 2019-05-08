# 路由的 props


路由组件 可以通过props传参；简单的理解，使用他之后，可以在vue文件中像用props一样来使用他，就相当于是父模板给他传了一个props

我记得我们这个项目在介绍动态路由的时候，有使用到params,可以去看下。

vue 文件里接收方式同vue一样都是props
```javascript
export default {
    name: 'route_params',
    components: {
        VueMarkdown
    },
    props:{ // props不单是指vue的绑定参数，还有可能是vue-router参数。
        id: {
            type: [Number, String],
            default: 0
        }
    },
    methods:{
    }
}
```


路由里 设置props

```javascript
// 方式1 布尔模式 props: true,
{
    path: 'params/:id', // 动态路由(params)
    props: true,
    component (resolve) {
        require.ensure([], (require) => resolve(require('../mod_vue_router/route_matching/params/route_params.vue')), 'route_params');
    }
}

```


```javascript
// 方式2  对象模式，
/* 
 * 比如说，当前路由的id值，我希望是一个固定值的候
 * 再比如：在一个网站里面，后台的文章数只有500篇文章，如果url绑定的id大于这个值的时候，我要如何处理
 * 我传了一个500,当:this.router.params.id 大于 this.id 的时候。…… 当然，在实际当中，一般没人会这么去处理，直接让他去404页面
 */
{
    path: 'params/:id', // 动态路由(params)
    props: {id: 500}, // 
    component (resolve) {
        require.ensure([], (require) => resolve(require('../mod_vue_router/route_matching/params/route_params.vue')), 'route_params');
    }
}
```


```javascript
// 方式3 功能模式，函数式
{
    path: 'params/:id', // 动态路由(params)
    props (route) {
        // 此route是route对象，而不是 router 实例对象。在这里，可以处理代码，不过，最好不要这样做，这样会让我们的路由文件不好维护
    }, 
    component (resolve) {
        require.ensure([], (require) => resolve(require('../mod_vue_router/route_matching/params/route_params.vue')), 'route_params');
    }
}
```
