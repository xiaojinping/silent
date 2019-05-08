<template>
    <div>
       <div class="jp-com-mode" >
           <div class="jp-com-mode__header">
               <slot name="title" v-if="title">
                   <span class="jp-com-mode__header-before-icon"></span>
                   <span class="jp-com-mode__header-title">
                       {{title}}
                   </span>
               </slot>
           </div>
           <div class="jp-com-mode__body">
               <slot></slot>
           </div>
           <div class="jp-com-mode__footer">
               <slot name="footer" v-if="$slots.footer"></slot>
           </div>
       </div>
    </div>
</template>

<script>
/*
 * @description: 普通模块结构。有标题，有内容，标题前一条竖线做区分。内容区相比标题栏有更大的左内距
 * @author: xjp
 * @date: 2018/09/26
 */
export default {
    name: 'ordinary_mode',
    props: {
        title: {
            type: String,
            defalut: ''
        }
    }
}
</script>

<style scoped>
    .jp-com-mode {
        margin-top:10px;
        margin-bottom: 20px;
    }
    .jp-com-mode:before {
        content: ' ';
        display: block;
        width: 100%;
        height: 0;
    }
    .jp-com-mode__header {
        margin-bottom: 10px;
        font-size: 14px;
    }
    .jp-com-mode__header-before-icon {
        display: inline-block;
        width: 4px;
        height: 14px;
        margin-right: 6px;
        color: #333;
        background: #0000ff;
        vertical-align: middle;
    }
    .jp-com-mode__header-title {
        vertical-align: middle;
    }
    .jp-com-mode__body{
        padding-left:14px;
    }
    .jp-com-mode__body li {
        margin-top: 5px;
        margin-bottom: 5px;
    }
</style>
