/**
 * @description: 用户信息的状态管理,
 * @name: 用户名称，浏览者模式，用户名称默认为admin, 权限为 0，只能看，不能改，超级管理员用户名称为……，权限等级为 9
 * @password: 用户登录密码, 浏览者模式，可免密码登陆，
 * @des： 用户自我描述
 * @accessLevel：用户权限等级，
 * @author: xjp
 * @date: 2018/10/15
 */

/*eslint-disable*/
import {CHANGE_USER_NAME, CHANGE_USER_PASSWORD, CHANGE_USER_DES, CHANGE_USER_ACCESS} from '../../const.js'
const USER_INIT_DES = '这家伙很懒，什么也没留下',
    USER_INIT_NAME = 'admin',
    USER_INIT_ACCESS = 0;

let userInfo = {
    name: USER_INIT_NAME,
    password: '',
    des: '什么，你说什么',
    accessLevel: USER_INIT_ACCESS
};
let userInit = {
    name: '',
    password: '',
    des: USER_INIT_DES,
    accessLevel: USER_INIT_ACCESS
};

export default {
    state: {
        userInfo,
        userInit
    },
    getters: {},
    mutations: {
        [CHANGE_USER_NAME] (state, value) {
             state.userInfo.name = value;
        },

        /**
         * 修改用户登陆密码, 要求用户权限大于0, 不能与原密码相同 （这里应该是个promise,未完，待续）
         * @param {string} value 用户登陆密码,
         */
        [CHANGE_USER_PASSWORD] (state, value) {
            if (!value || !state.userInfo.accessLevel) {
                return;
            }
            if (typeof value === 'string') {
                state.userInfo.password = value;
            }
        },

        /**
         * 修改用户的自我描述
         * @param {string} value 用户的自我描述
         */
        [CHANGE_USER_DES] (state, value) {
            if (!value) {
                state.userInfo.des = USER_INIT_DES;
            }
            if (typeof value === 'string') {
                state.userInfo.des = value;
            }
        },

        /**
         * 修改用户的权限等级, 权限需要申请，24小时内不能重复申请（这里应该是个promise,未完，待续）
         * @param {number} value 用户权限
         */
        [CHANGE_USER_ACCESS] (state, value) {
            if (!value) {
               return;
            }
            if (typeof value === 'number') {
                state.userInfo.des = value;
            }
        }
    },
    actions: {
        /**
         * 实际上，当权限不足时，应该禁用掉，这里只是为了模拟。
         * 修改用户名称, 要求用户权限大于 0
         * @param name
         */
        [CHANGE_USER_NAME] ({state,commit}, value) {
            return new Promise(function (resolve, reject) {
                if (!value || !state.userInfo.accessLevel) {
                    reject('权限不足');
                    return;
                }
                if (typeof value === 'string') {
                    commit(CHANGE_USER_NAME.value);
                    resolve('修改成功')
                }
            });

        },

        /**
         * 修改用户的自我描述
         * @param {string} value 用户的自我描述
         */
        [CHANGE_USER_DES] ({state, commit}, value) {
            // TODO 这里可以是一个 异步 请求，后台请求成功后，根据返回值，执行后续代码
            return new Promise(function (resolve, reject) {
                if (!value) {
                    reject('描述不能为空');
                    return;
                }
                // 此处 省略 ajax 请求。……
                if (typeof value === 'string') {
                    commit(CHANGE_USER_DES, value);
                    resolve('修改成功')
                }
            });
        },

    }

};
