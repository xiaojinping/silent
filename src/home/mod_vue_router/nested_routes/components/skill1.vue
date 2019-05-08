<template>
    <div>
        <jp-com-mode>
            <vue-markdown v-highlight :source="source"></vue-markdown>
        </jp-com-mode>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import MarkdownMd from './skill1.md'
export default {
    name: 'skills_vue',
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
