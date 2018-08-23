<template>
    <div id="app">
        <header-nav ref="header-nav" :active-tab="activeTab" id="header_nav" />
        <aside-nav ref="aside-nav" :active-tab="activeTab" id="aside_nav" :class="{'has-node':activeTabHasChildren}"></aside-nav>
        <router-view ref="silent-container" id="silent_container" :class="{'has-node':activeTabHasChildren}" />
    </div>
</template>

<script>
import SUB_NAV_DATA from './home/router/subNavData.js'
import HeaderNav from './home/mod_common/header.vue';
import AsideNav from './home/mod_common/aside.vue';
import lodash from 'lodash';
export default {
    name: 'App',

    components: {
        HeaderNav,
        AsideNav
    },
    data () {
        return {
            activeTab: '/index',
            activeTabHasChildren: false
        }
    },
    mounted () {
        this.setJsonValue();
    },
    methods: {
        /**
         * 设置顶部导航的的active
         * @description AsideNav HeaderNav都依赖他。
         */
        setJsonValue (val) {
            this.activeTab = val || this.$root.activeTab;
            let vm = this;
            let activeMod = lodash.find(SUB_NAV_DATA, function (mod) {
                return mod.path === vm.activeTab;
            });
            this.activeTabHasChildren = false;
            if (activeMod && activeMod.data) {
                this.activeTabHasChildren = !!activeMod.data.length;
            }
        }

    }

}
</script>

<style>

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    #aside_nav{
        float:left;
    }
    #aside_nav.has-node{
        width:200px;
    }
    #silent_container{
        display: inline-block;
        width:100%;
        background: #ccc;
    }
    #silent_container.has-node{
        width:calc(100% - 200px);
    }

</style>
