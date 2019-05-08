<template>
    <div>
        <jp-com-mode >
            <vue-markdown v-highlight :source="source"></vue-markdown>
        </jp-com-mode>

    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import MarkDownSource from './index.md'
export default {
    name: 'router-props',
    components: {
        VueMarkdown
    },
    data () {
        return {
            source: MarkDownSource
        }
    }
}
</script>

<style>
</style>
