<template>
    <div id="app">
        <header-nav ref="header-nav" :active-tab="activeTab" id="header_nav"/>

        <aside-nav ref="aside-nav"
                   :active-tab="activeTab"
                   id="aside_nav"
                   :class="{'has-node':activeTabHasChildren}" />

            <div id="silent_container" :class="{'has-node':activeTabHasChildren}">
                <el-scrollbar class="page-component__scroll" ref="componentScrollBar">
                    <router-view ref="silent-container" class="silent-container-view"/>
                </el-scrollbar>
            </div>

        <div class="app-footer">
            <a href="http://www.miitbeian.gov.cn"> 备案号【 湘ICP备17024143号 】</a>
        </div>

    </div>
</template>

<script>
import SUB_NAV_DATA from './home/router/subNavData.js'
import HeaderNav from './home/mod_common/header.vue';
import AsideNav from './home/mod_common/aside.vue';
import bus from './home/components/bus.js';

export default {
    name: 'App',
    components: {
        HeaderNav,
        AsideNav
    },
    data () {
        return {
            activeTab: '/index',
            activeTabHasChildren: false,
            showHeader: true,
            componentScrollBar: null
        }
    },
    watch: {
        '$route.path' () {
            // 触发伪滚动条更新
            this.componentScrollBox.scrollTop = 0;
            this.$nextTick(() => {
                this.componentScrollBar.update();
            });
        }
    },
    created () {
        bus.$on('navFade', val => {
            this.navFaded = val;
        });
        window.addEventListener('hashchange', () => {
            if (location.href.match(/#/g).length < 2) {
                document.documentElement.scrollTop = document.body.scrollTop = 0;
                this.renderAnchorHref();
            } else {
                this.goAnchor();
            }
        });
    },
    mounted () {
        this.setJsonValue();
        this.componentScrollBar = this.$refs.componentScrollBar;
        this.componentScrollBox = this.componentScrollBar.$el.querySelector('.el-scrollbar__wrap');
        this.throttledScrollHandler = window.lodash.throttle(this.handleScroll, 300);
        this.componentScrollBox.addEventListener('scroll', this.throttledScrollHandler);
        this.renderAnchorHref();
        this.goAnchor();
        document.body.classList.add('is-component');
    },
    destroyed () {
        document.body.classList.remove('is-component');
    },
    beforeDestroy () {
        this.componentScrollBox.removeEventListener('scroll', this.throttledScrollHandler);
    },
    methods: {
        /**
         * 1 设置顶部导航的的active
         * @description AsideNav HeaderNav都依赖他。一级导航的初始化页面，可能并非首页，可能是二级导航页中的某个页面。
         * 2 设置二级子导航
         */
        setJsonValue (val) {
            this.activeTab = val || this.$root.activeTab;
            this.activeTabHasChildren = SUB_NAV_DATA[this.activeTab];
        },
        renderAnchorHref () {
            if (/changelog/g.test(location.href)) return;
            const anchors = document.querySelectorAll('h2 a,h3 a,h4 a,h5 a');
            const basePath = location.href.split('#').splice(0, 2).join('#');

            [].slice.call(anchors).forEach(a => {
                const href = a.getAttribute('href');
                a.href = basePath + href;
            });
        },
        goAnchor () {
            if (location.href.match(/#/g).length > 1) {
                const anchor = location.href.match(/#[^#]+$/g);
                if (!anchor) return;
                const elm = document.querySelector(anchor[0]);
                if (!elm) return;

                this.$nextTick(() => {
                    this.componentScrollBox.scrollTop = elm.offsetTop;
                }, 50);
            }
        },
        toTop () {
            this.hover = false;
            this.showBackToTop = false;
            this.componentScrollBox.scrollTop = 0;
        },
        handleScroll () {
            const scrollTop = this.componentScrollBox.scrollTop;
            this.showBackToTop = scrollTop >= 0.5 * document.body.clientHeight;
            if (this.showHeader !== (this.scrollTop > scrollTop)) {
                this.showHeader = this.scrollTop > scrollTop;
            }
            if (scrollTop === 0) {
                this.showHeader = true;
            }
            if (!this.navFaded) {
                bus.$emit('fadeNav');
            }
            this.scrollTop = scrollTop;
        }
    }
}
</script>

<style lang="less">
    @footerHeight:25px;
    @headerHeight: 50px;
    @asideNavWidth: 200px;

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        font-size: 12px;
        text-space: normal;
    }

    #header_nav {
        height: @headerHeight;
        min-width: 800px;
    }

    #aside_nav {
        float: left;
        height: calc(~"100vh" - @headerHeight);
        background: #fdfcf8;
    }

    #aside_nav.has-node {
        width: @asideNavWidth;
    }
    #silent_container {
        display: inline-block;
        width: 100%;
        height: calc(~"100vh - 20px" - @headerHeight - @footerHeight );
        padding: 10px 0;
        background: #e8ebee;
        vertical-align: top;
    }
    .page-component__scroll {
        box-sizing: border-box;
        height: calc(100% - 0px);
        .el-scrollbar__wrap {
            overflow-x: auto;
        }
    }
    .silent-container-view {
        box-sizing: border-box;
        width: calc(100% - 20px);
        min-height: calc(~"100vh - 20px" - @headerHeight - @footerHeight );
        padding: 20px;
        margin: 0 10px;
        background: #fff;
        border: 1px solid transparent;
    }

    #silent_container.has-node {
        width: calc(~"100%" - @asideNavWidth);
    }
    .app-footer {
        height: @footerHeight;
        text-align: center;
        a {
            display: inline-block;
            height: @footerHeight;
            line-height: @footerHeight;
        }
    }

</style>
