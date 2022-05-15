<template>
<!-- 显示日落日出组件 -->
  <div class="SunSetRaise flex-center boxshadow">
      <div class="SunSetRaiseContent">
          <!-- 显示标题-->
            <div class="textTitle ">
            <h2>日落日出时间</h2>
            <sun-card></sun-card>
            <sun-card></sun-card>

            </div> 

      </div>
  </div>
</template>

<script>
import sunCard from '@/components/sunCard';
export default {
name:"SunSetRaise",
components:{
    sunCard
},
mounted(){

}
}
</script>

<style>
.SunSetRaise{
    width: 420px;
    height: 600px;
    background-color: rgb(255, 255, 255);
    border-radius: 3%;
}
.SunSetRaiseContent{
    width: 380px;
    height: 560px;

}
</style>