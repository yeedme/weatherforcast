<template>
  <div class="right flex-spacebetween fdc">
    <div class="search">top</div>
    <right-side-cardone />
    <right-side-card-two :number="citytwo"/>
    <right-side-card-two :number="citytwo"/>
  </div>
</template>
//右边栏主页
<script>
//引入组件

import RightSideCardone from './RightSideCardone.vue'
import RightSideCardTwo from './RightSideCardTwo.vue'
export default {
name:"RightSide",
  components: { RightSideCardone, RightSideCardTwo },
  data() {
    return {
      cityone:'101010100',
      citytwo: '101270101',
      citythree:''
    };
  },
}
</script>

<style scoped>
.right{
  width: 340;
  height: 900px;

}
/* 将滚轮改为 大小为0 */
.search{
  width: 300px;
  height: 100px;
  background-color: rebeccapurple;
}

</style>