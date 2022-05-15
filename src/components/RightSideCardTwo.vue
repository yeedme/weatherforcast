<template>
  <div class="RightSideCardTwo flex-center boxshadow" :style="color" >
    <right-side-hum-andwind :fl="fl" :Hum="Hum"/>
    <!-- fl,Hum有本地数据，但是下面会监听下拉框里面的事件，然后数据更新  -->
    <div class="select-area ">
      <select-area @cityNumber="cityNumber"  :number="number"/> 
      <!--将number给number  监听cityNumber 然后触发cityNumber 产生数据变化 ，将fl hum 给right-side-hum-andwind -->
      </div>
  </div>
</template>

<script>
import RightSideHumAndwind from './RightSideHumAndwind.vue'
import SelectArea from './selectArea.vue'
export default {
name:"RightSideCardTwo",
props:['colors','number'],//接受number参数 传给 select 作为初始化值 ,
data() {
  return {
    fl: 'value', //将参数给 right-side-hum-andwind组件
    Hum:'as'
  };
},
components: { RightSideHumAndwind, SelectArea, },
computed:{
    color(){//接受props参数修改修北背景颜色 
    return 'background-color: red;'
    }
},methods:{

    cityNumber(number){   
    let host='http://localhost:8080/'+number+'.json'
    this.$axios.get(host).then(res => {  //此时相当于访问 http://localhost:8080/100000.json
 // axois接受cityNumber传进来的参数发生请求，更新数据
    let weatherData=res.data//将获取到值赋予给 weatherData
    console.log(weatherData,'card -two');
    this.high=weatherData.data.forecast[0].high;// high 接收到类型是 ‘高温7°C 或者 高温11°C 要用计算属性处理成数字 ’
    this.fl=weatherData.data.forecast[0].fl;// hl 接受类型是 ‘3级 4级’
    this.Hum=weatherData.data.shidu;//shidu 类型是’99  77‘
    })
  }
}
}
</script>

<style scoped>
.RightSideCardTwo{
    width: 320px;
    height: 110px;
    background-color: red;
    border-radius: 2%;
}
.select-area{
  width: 100px;
  height: 72px;
  display: flex;
  align-content: center;
  justify-content: right;

}
</style>