<template>
  <div class="i">
    <el-dropdown  @command="handleCommand">
    <span class="Select-text flex-center ">
    <p style="color:rgb(144, 166, 254)">{{cityname}}</p>
    <i class="el-icon-arrow-down"></i>     <!-- 下拉logo -->

    </span>
    <!-- el-dropdown-item 遍历城市选项 ，command 返回城市编号 -->
    <el-dropdown-menu slot="dropdown">
         <el-dropdown-item v-for="i in areas" :key="i.CityNumber"  :command="i.CityNumber"> {{i.City}}</el-dropdown-item>
    </el-dropdown-menu >
    </el-dropdown>
  </div>
</template>

<script>
export default {
name:"selectAreaOther",
data() {
    return {
        areas:[
            {City:'北京',CityNumber:'101010100'},
            {City:'成都',CityNumber:'101270101'},
            {City:'上海',CityNumber:'101020100'},
            {City:'广州',CityNumber:'101280101'},
            {City:'乐山',CityNumber:'101271401'},
            {City:'厦门',CityNumber:'101230201'},
            {City:'石家庄',CityNumber:'101090101'},
        ],
        cityname:"北京"
    };
},
props:{
    number:{
        type:String,
        require:false,
        default: ""
    }
    //number ，用mounted.this.handleCommand(this.number)来初始化下拉框选择的数据，同时保证，引用该组件可以通过这number来实现，初始化值的不同
},
methods:{
    // handleCommand 返回城市编号
    handleCommand(command) {
        this.areas.forEach(a => {
            a.CityNumber==command?this.cityname=a.City:'';    //找到选择的下拉框选项，并显示当前选项         
        });
       this.$emit("cityNumber",command)//子组件向父组件传值
    }
},
mounted(){
 this.handleCommand(this.number)//初始下拉框 
}
}
</script>

<style scoped>
.Select-text{
    font-size:20px;color:white;text-align: center;
    line-height: 30px;
    flex:0;
}
.i{
 
}
</style>