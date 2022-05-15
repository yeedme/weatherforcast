<template>
  <div class="RightSideCardone flex-center fdc boxshadow">    <!--对一个大卡片添加 布局 阴影   -->
 
      <div class="selectarea">
        <select-area @cityNumber="cityNumber" :number="number" ></select-area>
      </div><!-- 传参数，监听cityNumber，然后调用cityNumber 请求数据 -->
      <div>
        <img :src="typeimg" alt="" style="width:150px;height:150px">
      </div>
      <div>
        <h2>today,April 14</h2>
      </div>
      <div class="temperature">
        <h2>{{hightemp}}°C</h2>
      </div>
      <div>
        <h2>sunny</h2>
      </div>
      <div>
        <right-side-hum-andwind :fl="fl" :Hum="Hum"/>
      </div>

    
  </div>
</template>

<script>
// 右侧面第一个卡片

import selectArea from '@/components/selectArea';
import RightSideHumAndwind from './RightSideHumAndwind.vue';
export default {
name:"RightSideCardone",
data() {
  return {
    high:'37',
    fl:'3级',
    Hum:'99',
    number:"101010100",
    type:"",

  };
},
components:{
    selectArea,
RightSideHumAndwind,
},
methods:{
  cityNumber(number){   
    let host='http://localhost:8080/'+number+'.json'
  this.$axios.get(host).then(res => {  //此时相当于访问 http://localhost:8080/100000.json
 // axois接受cityNumber传进来的参数发生请求，更新数据
  let weatherData=res.data//将获取到值赋予给 weatherData
  console.log(weatherData,'card-one');
  this.high=weatherData.data.forecast[0].high;// high 接收到类型是 ‘高温7°C 或者 高温11°C 要用计算属性处理成数字 ’
  this.fl=weatherData.data.forecast[0].fl;// hl 接受类型是 ‘3级 4级’
  this.Hum=weatherData.data.shidu;//shidu 类型是’99  77‘
  this.type=weatherData.data.forecast[0].type;
  this.$store.commit('weatherData',weatherData)
  this.$store.dispatch('MainWeather',weatherData.data.forecast)//数据提交到 vuex 便于全局管理 
    })
  }
},
computed:{
  hightemp(){
    let high=this.high;//判断一下长度，个位数温度和两位数温度 不一样
    high.length==6?high=high[3]+high[4]:high=high[3];
    return high
  },
  typeimg(){
    let src;
    switch (this.type) {
      case '晴':src=require('@/assets/sunny.svg') ;
        break;
      case '多云':src=require('@/assets/cloudy.svg') ;
        break; 
      case '阴天':src=require('@/assets/cloudy.svg') ;
        break;      
      default: src=require('@/assets/rainy.svg') ;
        break;
    }
    console.log(this.type.length,src);
    return src
  }
},
mounted(){
  // 初始化 select数据
}
}
</script>

<style scoped>
.RightSideCardone{
  width: 320px;
  height: 460px;
  background-image: linear-gradient(#5561e9, #b3b9fa);
  border-radius: 2%;


}
.selectarea{
  width: 300px;

}
.temperature{
  font-size: 30px;
}
</style>