<template>
  <div class="flex-center WeatherForcast">
    <div class="weather boxshadow flex-center fdc" v-for="(i,index) in WeatherObj" :key="index">
      <h2>sunny</h2>
      <h2 >
        {{i.high}}°C
      </h2>
      <img :src="i.typeSrc" alt="" style="width:70px;height:70px">
    </div>
  </div>
</template>

<script>
export default {
name:"WeatherForcast",
data() {
  return {
    kk:null,
    WeatherObj: [{high:'',type:'',typeSrc:'',}],//模拟初始数据 防止ajax异步请求数据的时候 报错
  };
},
mounted() {
  this.WeatherObj=this.$store.state.WeatherObj
  console.log(this.WeatherObj);
},
}
</script>

<style scoped>
.weather{
    width: 180px;
    height: 220px;
    background-color:white;
    border-radius: 7%;
    font-size:20px ;
    margin: 10px;
}
.WeatherForcast{
  width: 66vw;
  overflow: auto;
}
.WeatherForcast::-webkit-scrollbar{
        width: 3px;
        height: 1px;
    } 
</style>