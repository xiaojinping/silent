<template>
    <div>
        <vue-markdown v-highlight :source="source"></vue-markdown>
    </div>
</template>

<script>
/*eslint-disable*/
import VueMarkdown from 'vue-markdown'
import MarkDownSource from './index.md'
export default {
    name: 'reuter-sourse-code',
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
    .example-groups {
        margin-top: 10px;
    }
</style>
