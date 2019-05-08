

```tpl
// name 属性自定义值，  mode的
<transition name="fade" mode="out-in">
    <router-view class="view"></router-view>
</transition>
<transition name="abc也可以" mode="out-in">
    <router-view class="view"></router-view>
</transition>
```

###  在transition 标签上， 设置 name 属性后，  其class 如下 

fade-enter : 进入过渡的开始状态，元素被插入时生效，只应用一帧后，立马失效。


fade-enter-active 进入过渡的结束状态，元素被插入时生效，过渡完成后失效


fade-leave 离开过渡的开始状态，元素被删除时生效，只应用一帧后，立马失效。


fade-leave-active 离开过渡的结束状态，元素被插入时生效，过渡完成后失效

仔细观察这四种状态， fade-enter-active fade-leave-active 在整个状态变化过程当中，都有效，直至动画画成，才失效。


### 过渡模式 mode 

in-out  先入后出


out-in  先出后入


