<template>
    <div>
        <div v-highlight  v-html="highlightHtml"></div>
    </div>
</template>

<script>
import showdown from 'showdown'
export default {
    name: 'base-highlight',
    props: {
        tpl: {
            defalut: ''
        }
    },
    data () {
        return {
            highlightHtml: ''
        }
    },
    mounted () {
        this.init();
    },
    methods: {
        init () {
            let converter = new showdown.Converter();
            let text = this.tpl.toString();
            this.highlightHtml = converter.makeHtml(text);
        }
    },
    destroyed () {
    }
}
</script>

<style >

</style>
