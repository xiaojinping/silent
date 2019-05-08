<template>
    <div class="silent-header">
        <div class="logo">
            <img :src="logoPath" alt="我是傻瓜" >
        </div>
        <ul class="silent-header-nav">
            <li  v-for="nav in navs" :key="nav.path" class="silent-header-nav-item" :class="{'active': nav.actived}" >
                <router-link :to="nav.path"
                             class="silent-header-nav-item-link">
                    <span  v-text="nav.text"></span>
                    <i v-if="nav.children && nav.children.length" class="el-icon-arrow-down"></i>
                </router-link>

                <div  class="silent-header-subnav" >
                    <router-link v-for="subnav in nav.children"
                                 :key="subnav.path"
                                 :to="subnav.path"
                                 v-text="subnav.text"
                                 :class="{'silent-header-subnav-item-active': getSubNavActiveTab(nav) === subnav.path}"
                                 class="silent-header-subnav-item silent-header-subnav-item-link">
                    </router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import NavData from '../router/navData.js'
import logo from '@/public/logo.png'

export default {
    name: 'silent-header',
    props: {
        activeTab: {
            type: String,
            default: '/index'
        }
    },
    data () {
        return {
            navs: [],
            logoPath: logo,
            isChildrenActive: false
        }
    },

    watch: {
        activeTab () {
            this.setJsonValue();
        }
    },
    computed: {
        subNavActiveTab () {
            return 'index';
        }
    },
    mounted () {
        this.setJsonValue();
    },
    methods: {
        setJsonValue () {
            this.navs = NavData.map((nav) => {
                let activeTab = this.activeTab;
                let isChildActiveTab = this.getSubNavActiveTab(nav);
                nav.actived = activeTab === nav.path || activeTab === nav.name || isChildActiveTab;
                return nav;
            });
        },
        getSubNavActiveTab (nav) {
            let subnavTab = nav.children && nav.children.find((item) => {
                return this.activeTab === item.path || this.activeTab === item.name;
            });
            return (subnavTab && subnavTab.path) || '';
        }
    }
}
</script>

<style scoped  lang="less">
    .silent-header {
        width:100%;
        height:50px;
        background: #E8E7E3;
        text-align: center;
        .logo {
            float: left;
            width: 300px;
            height: 50px;
            img {
                display: block;
                width: 100%;
                height: 100%;
            }
        }
        .router-link-active{
            color: #fff;
        }

    }
    .silent-header-nav {
        width: 100%;
        height: 100%;
        &-item {
            position: relative;
            display:inline-block;
            min-width: 60px;
            height:50px;
            line-height:50px;
            padding:0 15px;
            font-size: 16px;
            &:hover,
            &.active {
                background: #000;
            }
            &:hover &-link,
            &.active &-link {
                color: #fff;
            }
            &-link {
                display: block;
                width: 100%;
                height: 100%;
            }
        }
    }
    .silent-header-subnav{
        position: absolute;
        left: 0;
        top: 100%;
        display: none;
        width: 150%;
        background: #545c64;
        z-index: 5;
        text-align: left;
        text-indent: 15px;
        border-right: 5px solid #ddd;
        &-item {
            display: block;
            height: 40px;
            width: 100%;
            color: #fff;
            transform-origin: left;
            transform: scale(.9);
            &:hover,
            &-active,
            &.router-link-active {
                color: #55ff00d4;
                transform: scale(1);
                transition: all 0.3s;
                border-right: 5px solid #55ff00d4;
            }
        }
    }
    .silent-header-nav-item:hover .silent-header-subnav{
        display: block;
    }

</style>
