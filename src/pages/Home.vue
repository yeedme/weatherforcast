<template>
  <div class="home ">
    <!-- 预报近15天的天气状况 -->
    <WeatherForcast/>
    <div class="flex-center">
    <AirQuailty/>
    <SunSetRaise/>
    </div>
  </div>
</template>

<script>
//引入组件 
import SunSetRaise from '@/components/SunSetRaise';
import AirQuailty from '@/components/AirQuailty';
import WeatherForcast from '@/components/WeatherForcast';
export default {
name:"Home",
components:{
  WeatherForcast,
  AirQuailty,
  SunSetRaise,
}
}
</script>

<style>
.home{
  background-color: aquamarine;
  width: 66vw;
  height: 900px;
  overflow: auto;
}

</style>