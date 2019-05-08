<template>
    <div>
        <vue-markdown v-highlight :source="md"></vue-markdown>
    </div>
</template>

<script>

import VueMarkdown from 'vue-markdown';
import Reamde from './index.md';

export default {
    name: 'nginx',
    components: {
        VueMarkdown
    },
    data () {
        return {
            isMode: false,
            md: Reamde
        }
    }
}
</script>

<style>

</style>
