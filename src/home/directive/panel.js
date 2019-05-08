/*eslint-disable*/
import Vue from 'vue'
// 注册
Vue.directive('panel', {
    bind: function (el,binding) {


        let titleDom =  el.getElementsByClassName('panel-title');
        let className = binding.value ? binding.value : 'is-active';
        let actions = binding.modifiers;

        for (var key in actions){
            if(actions[key] && el.classList[key]){
                el.classList[key](className)
            }
        }
        titleDom[0].addEventListener('click',function () {
            el.classList.toggle(className);
        });

    },
    inserted: function (el) {


    },
    update: function (el) {


    },
    componentUpdated: function (el) {

    },
    unbind: function (el) {}
})

// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {
        // 聚焦元素
        el.focus()
    }
})