<template>
    <div>
        <jp-com-mode>
            <vue-markdown v-highlight :source="source"></vue-markdown>
        </jp-com-mode>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import MarkdownMd from './reason.md'
export default {
    name: 'reason_vue',
    components: {
        VueMarkdown
    },
    data () {
        return {
            source: MarkdownMd
        }
    }
}
</script>

<style scoped>

</style>
