<template>
  <div class="AirQuailty boxshadow  ">
      <div class="airtitle flex-spacebetween">
        <h1>今天空气指数</h1>
        <div> <i class="el-icon-location" style="font-size:30px"></i><p>{{cityname}}</p></div>
    </div>
    <div class="airtext flex-spacebetween"> 
        <div><img src="@/assets/logo/wind-logo-green.svg" alt="" srcset="" style="width:60px;height:60px"></div>
        <div style="width:300px;heigh:50px"><h2 style="color:green">优良</h2><h3 style="color:gray">{{ganmao}}</h3></div>
    </div>
    <div class="flex-spacebetween">
        <div v-for="(i,index) in air" :key="index" class="aircard ">
            <h3>{{i.name}}</h3>
            <h3>{{i.index}}</h3>
        </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
name:"AirQuailty",
data() {
    return {
        air:[
            {name:'CO2',index:'--'},
            {name:'O2',index:'--'},
            {name:'S02',index:'--'},
            {name:'PM25',index:this.$store.state.pm25},
            {name:'PM10',index:this.$store.state.pm10},
            ]
    };
},
computed:{
    ...mapState(['ganmao','cityname']),

},
mounted(){
}
}
</script>

<style>
.AirQuailty{
    width: 420px;
    height: 250px;
    background-color: rgb(255, 255, 255);
    border-radius: 2%;
}
.airtitle ,.airtext{
    height: 70px;
    width: 400px;
    }
.aircard{
    height:80px;
    width: 65px;
    background-color: rgb(192, 250, 200);
    text-align: center;
    color:rgb(16, 180, 46);
    line-height: 40px;
    }
</style>