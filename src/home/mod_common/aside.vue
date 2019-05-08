<template>
    <div class="silent-aside">
        <ul class="silent-aside-nav">
            <li  v-for="nav in navs" :key="nav.path" class="silent-aside-nav-item" :class="{'active': nav.actived}">
                <router-link :to="nav.path"
                             v-text="nav.text"
                             class="silent-aside-nav-item-link"
                ></router-link>
            </li>
        </ul>

    </div>
</template>

<script>
import SUB_NAV_DATA from '../router/subNavData.js'

export default {
    name: 'silent-aside',
    props: {
        activeTab: {
            type: String,
            default: '/index'
        }
    },
    data () {
        return {
            navs: []
        }
    },
    watch: {
        activeTab () {
            this.setJsonValue();
        }
    },

    mounted () {
        this.setJsonValue();
    },
    methods: {
        setJsonValue () {
            let rs = SUB_NAV_DATA[this.activeTab];
            this.navs = rs && rs.data;
        }
    }

}
</script>

<style scoped >
    .silent-aside {
        font-size: 14px;
        /*width:200px;*/
        /*height: 200px;*/
    }
    .silent-aside-nav-item {

    }

    .silent-aside-nav-item:hover,
    .silent-aside-nav-item.active {
    }

    .silent-aside-nav-item-link {
        box-sizing: border-box;
        display: block;
        width: 100%;
        height: 40px;
        line-height: 40px;
        padding: 0 15px;

    }

    .silent-aside-nav-item:hover{
        background: rgba(0, 0, 0, .8);
    }
    .silent-aside-nav-item:hover .silent-aside-nav-item-link {
        color: #fff;
    }

    /*.silent-aside-nav-item:hover .silent-aside-nav-item-link,*/
    .router-link-active{
        background:#000;
        color: #fff;
    }

</style>
