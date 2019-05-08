/**
 * @description: 状态管理入口文件
 * @author: xjp
 * @date: 2018/10/15
 */

import Vue from 'vue'
import Vuex from 'vuex'
import USER from './modules/user/index'
Vue.use(Vuex);

const AUTHOR = {
    name: 'xiaojinping',
    education: '小学',
    email: '290762142@qq.com',
    description: '这家伙很懒，什么也没留下',
    capacity: ['es6', 'vue', 'vuex', 'vue-router', 'qunee', 'echarts']
};

const [ADD_AUTHOR_CAPACITY, CHANGE_AUTHOR_NAME] = ['addAuthorCapacity', 'changeAuthorName'];

export default new Vuex.Store({
    modules: {
        USER
    },
    state: {
        AUTHOR
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

        /**
         * @description: 改变作者的名字，有可能是笔名，也有可能是真实姓名
         * @param {string} name -作者名字
         */
        [CHANGE_AUTHOR_NAME] (state, name) {
            state.AUTHOR.name = name;
        },
        /**
         * 使用的对象提交风格 不推荐使用 我如果期望参数是一个对象，大可以传一个对象进来，而不是使用这种方式 。
         * @description: 改变作者的名字，有可能是笔名，也有可能是真实姓名
         * @param {string} name -作者名字
         */
        changeAuthorNameObj (state, obj) {
            state.AUTHOR.name = obj.name;
        }
    },
    actions: {
        /**
         * 注意事项 ：
         * 1：参数，第一个参数是一个上下文，第二个参数才是我们需要传递的参数。这点与其他mutation state,getters 相同
         * 2：不同的是：actions的第一个参数可以是一个上下文，写法有两种，，
         * 2.1： {}内部的值可以有  state, getters, commit, 见名思义，不解释。
         * 2.2：当第一个参数 不是一个对象存在时，例如： （context,name）{}，context 指的是一个包含 state.getters…… 的对象 。
         * @param commit mutations的分发器，可以调用 mutations的方法。
         * @param name 要改变的名字。
         */
        [CHANGE_AUTHOR_NAME] ({commit}, name) {
            commit(CHANGE_AUTHOR_NAME, `${name} - actions(dispatch)`);
        },

        /**
         * @param {array, string} capacity 技能，
         */
        [ADD_AUTHOR_CAPACITY] (context, capacity) {
            setTimeout(() => {
                console.log('异步增加个人能力')
                context.commit(ADD_AUTHOR_CAPACITY, capacity)
            });
            console.log(context); // 自行去控制台查看 content都有些什么。
        }
    }
});
