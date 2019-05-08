# actions

mutations 应该是同步的方法。这是一个约定，就像我们的 构造函数 首字母大写一样。


actions 是一个异步的方法，他不直接改变state,而是通过 异步调用 mutation 来达到改变state的需求。


actions 的使用 基本和 mutations 差不多，不同的是，他接收的第一个参数和我们的 mutations 不一样，



mutations接收一个state做为 参数。


actions 接收一个上下文做为参数。他可以包含 getters,state,commit, dispath ……


```javascript
actions: {
    /**
     * 注意事项 ：
     * 1：参数，第一个参数是一个vuex的对象，第二个参数才是我们需要传递的参数。这点与其他mutation state,getters 相同
     * 2：不同的是：actions的第一个参数可以是一个上下文，写法有两种，，
     * 2.1： {}内部的值可以有  state, getters, commit, 见名思义，不解释。
     * 2.2：当第一个参数 不是一个对象存在时，例如： （context,name）{}，content指的是一个包含 state.getters…… 的对象 。
     * @param commit mutations的分发器，可以调用 mutations的方法。
     * @param name 要改变的名字。
     */
    [CHANGE_AUTHOR_NAME] ({commit}, name) {
        commit(CHANGE_AUTHOR_NAME, `${name} - actions(dispatch)`);
    },
```

```javascript
    /**
     * @param {array, string} capacity 技能，
     */
    [ADD_AUTHOR_CAPACITY] (context,capacity) {
        setTimeout(() => {
            console.log('异步增加个人能力')
            context.commit(ADD_AUTHOR_CAPACITY, capacity)
        });
        console.log(context); // 自行去控制台查看 content都有些什么。
    }
}
```

