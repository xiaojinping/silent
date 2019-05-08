# 命名路由


所谓的命名路由就是给路由起一个名字（name），此时，不管是router-link还是router.push可以通过name访问路由



```javascript
{
    path: '/nested_routes', 
    name: 'nested_routes', // 给路由起一个名称。
    component (resolve) {
        require.ensure([], (require) => resolve(require('../mod_vue_router/nested_routes/index.vue')), 'nested_routes');
    }
｝
```

 通过router-link标签访问命名路由的方式

```html
   <router-link :to="{name: 'nested_routes', query: { author: 'xjp'}}" >
      <el-button type="primary">
        通过router-link标签访问命名路由的方式
      </el-button>
  </router-link>
```


通过编程式（js）导航 的方式 来访问 

```javascript
    this.$router.push({
        name: 'nested_routes',
        query: {
            author: 'xjp'
        }
    });
```






