<template>
    <div>
        <vue-markdown v-highlight :source="source"></vue-markdown>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
    name: 'base-highlight',
    components: {
        VueMarkdown
    },
    props: {
        source: {
            defalut: ''
        }
    },
    mounted () {
    },
    methods: {

    },
    destroyed () {
    }
}
</script>

<style >

</style>
