<template>
    <div class="silent-header">
        <ul class="silent-header-nav">
            <li  v-for="nav in navs" :key="nav.path" class="silent-header-nav-item" :class="{'active': nav.actived}">
                <router-link :to="nav.path"
                             v-text="nav.text"
                             class="silent-header-nav-item-link"
                ></router-link>
            </li>
        </ul>

    </div>
</template>

<script>
import NavData from '../router/navData.js'

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
            let me = this;
            this.navs = NavData.map((nav) => {
                let activeTab = me.activeTab;
                nav.actived = activeTab === nav.path || activeTab === nav.name;
                return nav;
            });
        }
    }

}
</script>

<style scoped >
    .silent-header {
        width:100%;
        height:35px;
        background: #E8E7E3;
    }
    .silent-header-nav-item {
        display:inline-block;
        height:35px;
        line-height:35px;
        padding:0 15px;
    }
    .silent-header-nav-item:hover,
    .silent-header-nav-item.active {
        background: #000;
    }

    .silent-header-nav-item:hover .silent-header-nav-item-link,
    .silent-header-nav-item.active  .silent-header-nav-item-link,
    .router-link-active{
        color: #fff;
    }

</style>
