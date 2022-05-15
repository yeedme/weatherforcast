<template>
    <div class="sunCard  ">
      
        <div style="width:300px;height:10px"></div><!-- 调间距 -->
  <!-- 显示地区 -->
        <div class="title flex-center">
            <div>
                <i class="el-icon-location" style="font-size:30px;color:rgb(135, 191, 240);"></i>
            </div>
            <div>
                <select-areaOther @cityNumber="cityNumber"  :number="number" style="color:aquamarine"/> 
            </div>
        </div> 
        
        <div class="maincontent ">
            <div class="flex-center">
                <img src="@/assets/logo/Sun.svg" alt="" style="width:80px;height:80px">
                <div>
                    <h4 style=" color:rgb(177, 177, 177)">日出时间</h4>
                    <h2 style=" color:rgb(144, 166, 254);"> {{sunrise}}</h2>
                </div>
            </div>
             <div class="flex-center">
                <img src="@/assets/logo/Moon.svg" alt="" style="width:80px;height:80px">
                <div>
                    <h4 style=" color:rgb(177, 177, 177)">日落时间</h4>
                    <h2 style=" color:rgb(144, 166, 254);">{{sunset}}</h2>
                </div>
            </div>
             
        </div>
    </div>
</template>

<script>
import selectAreaOther from '@/components/selectAreaOther';
export default {
name:"sunCard",
components:{
    selectAreaOther
},
data() {
    return {
        sunset:'',
        sunrise:'',
    };
},
methods:{
    cityNumber(number){   
    let host='http://localhost:8080/'+number+'.json'
    this.$axios.get(host).then(res => {  //此时相当于访问 http://localhost:8080/100000.json
 // axois接受cityNumber传进来的参数发生请求，更新数据
    this.sunset=res.data.data.forecast[0].sunset;
    this.sunrise=res.data.data.forecast[0].sunrise;
    })
  }
},
props:{
    number:{
        type:String ,
        require:false,
        default:'101010100'
    }
}

}
</script>

<style>
.sunCard{
    width: 380px;
    height: 190px;
    background-color: rgb(255, 248, 239);
    border-radius: 2%;
 
    
}
.title{
    line-height: 50px;
    width: 130px;
    height: 50px;
    margin-top:10px ; 
}
.maincontent{
    width: 380px;
    height: 140px;
      display: flex;
    justify-content:space-around;
    align-items: center;
    flex-shrink: 0;


}
</style>