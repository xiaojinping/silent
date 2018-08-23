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
            // let me = this;
            // let navDatas = SUB_NAV_DATA.filter((nav) => {
            //     let activeTab = me.activeTab;
            //     let actived = activeTab === nav.path || activeTab === nav.name;
            //     return actived;
            // });
            // let subNavs = navDatas.map((item) => {
            //     return item.children || [];
            // });
            // this.navs = subNavs[0] || [];
            let rs = SUB_NAV_DATA[this.activeTab];
            this.navs = rs && rs.data;
        }
    }

}
</script>

<style scoped >
    .silent-aside {
        /*width:200px;*/
        /*height: 200px;*/
    }
    .silent-aside-nav-item {
    }
    .silent-aside-nav-item:hover,
    .silent-aside-nav-item.active {
    }

    .silent-aside-nav-item:hover .silent-aside-nav-item-link,
    .router-link-active{
    }

</style>
