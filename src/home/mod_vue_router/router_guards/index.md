# 路由的生命周期 

vue有生命周期，vue-router也有生命周期，在官方文档里称之为 navigation guards (守卫) 

写了生命周期之后，一定要调用 next()，切记，切记，具体文档，见官方说明文档

## 生命周期 类型

生命周期的使用方式不同，其生命周期的名称也不一样，但是大致可以分为： 进入之前，更新，离开



### 生命周期的用法

1:在路由配置文件中使用，只能使用 beforeEnter 
```javascript
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // 直接在路由配置文件中写生命周期，只能有这一个，非特殊情况，不建议在这里写
      }
    }
  ]
})
```



2: 在模板中使用
```javascript
const Foo = {
    template: `...`,
    beforeRouteEnter (to, from, next) {
        // router.params 发生变化时，这里不会触发，只会触发 beforeRouteUpdate
        // beforeRouteEnter 不能获取组件实例 this，因为当守卫执行前，组件实例被没有被创建出来，剩下两个钩子则可以正常获取组件实例 this
    },
    beforeRouteUpdate (to, from, next) {
        // 简而言之，相当于 更新， 可以监测到 router.params 的变化。
    },
    beforeRouteLeave (to, from, next) {
        // router.params 发生变化时，这里不会触发，只会触发 beforeRouteUpdate
        // 离开路由之前
    }
}

```

3： 全局导航钩子

```javascript
// 注册一个全局前置守卫： 
router.beforeEach((to, from, next) => {
    // 我们这个项目就是使用的这个。
});
// 注册一个全局后置守卫： 
router.afterEach((to, from) => {
    // do someting
});
```

### 如何验证

打开 /route_matching/params/1 这个页面，按 f12 ,打开控制台，


