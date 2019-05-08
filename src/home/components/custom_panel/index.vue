<template>
    <div>
       <div class="panel" v-panel.add="'is-active'">
           <div class="panel-title">
               this is panel-title
           </div>
           <div class="panel-body">
               this is panel-body
           </div>
       </div>
    </div>
</template>

<script>
export default {
    name: 'echarts_line'
}
</script>

<style scoped>
    .panel-title{
        width:100%;
        height: 40px;
        background: red;
    }
</style>
