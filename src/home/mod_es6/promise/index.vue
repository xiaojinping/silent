<template>
    <div>
        <jp-com-mode :title="'Promise对象'">
            <ul>
                <router-link  v-for = '(item, index) in res'
                              :key="index"
                              :to="item.path"
                              tag="li"
                              v-text="item.text">

                </router-link>
            </ul>
            <div>
                <p>

                </p>
            </div>
        </jp-com-mode>
        <router-view></router-view>
    </div>
</template>

<script>

import { LIST } from './list';
export default {
    name: 'firstindex',

    data () {
        return {
            res: []
        }
    },
    mounted () {
        this.res = LIST;
    },
    methods: {

    }

}
</script>

<style>

    .result {
        padding: 12px;
        background: #000;
        color: #fff;
    }
    .result .resolved {
        color: #2eff2d;
    }
    .result .rejected {
        color: red;
    }
    .important {
        margin-top: 10px;
        margin-bottom: 10px;
        font-weight: 700;
        font-size: 14px;

    }
</style>
