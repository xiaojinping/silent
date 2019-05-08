<template>
    <div>
        <jp-com-mode title="css-loader踩过的坑">
            <vue-markdown v-highlight :source="mkSource" />
        </jp-com-mode>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import Reamde from './index.md'
export default {
    name: 'entry-output',
    components: {
        VueMarkdown
    },
    data () {
        return {
            mkSource: Reamde
        }
    },
    mounted () {
    },
    methods: {
    }

}
</script>

<style scoped>

</style>
