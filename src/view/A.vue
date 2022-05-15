<template>
  <div class="Home">
    <el-container>
      <el-container>
<!-- 头部标签 -->
        <el-header>
          <h2>
            {{hi}}{{hour}}:{{time}}
          </h2>
        </el-header>
<!-- 路由标签 -->
        <el-main>
        <div>
          <button @click="showHome">
            tiaozhuang
          </button>
         <router-view></router-view>
        </div>
      </el-main>
      </el-container>
<!-- 个人页面 -->
      <el-aside width="27vw">
       <RightSide/>
      </el-aside>
    
    </el-container>

  </div>
</template>

<script>
import RightSide from '@/components/RightSide';
export default {
name:"A",
components:{
RightSide
},
data() {
  return {
    time: 'value',
    week:1,
    date:2,
    month:2,
    hour:2,
  };
},
methods:{
   showHome(){
    this.$router.replace({
      name:"Home"
    })
  }
},
mounted(){
  let myTime=new Date();
  this.hour=myTime.getHours();
  this.time=myTime.getMinutes();
  this.showHome()
},
computed:{
  hi(){
    let a=''
    this.hour<12?a="上午好":a='下午好';
    return  a;
  }
  
},

}
</script>

<style scoped>
.Home{
  width: 100vw;
  height: 100vh;

}

 /*滚动条整体样式*/
    .el-main::-webkit-scrollbar , .el-aside::-webkit-scrollbar {
        width: 3px;
        height: 1px;
    }
    /*滚动条滑块*/
    .el-main::-webkit-scrollbar-thumb , .el-aside::-webkit-scrollbar-thumb {
        border-radius: 3px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: #535353;
    }
    /*滚动条轨道*/
    .el-main::-webkit-scrollbar-track , .el-aside::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 1px rgba(0,0,0,0);
        border-radius: 3px;
        background: #ccc;
    }
   .el-main,.el-header {
    background-color: #e2f0ff;
    color: #333;

  }
.el-container{
  height: 100vh!important;
  }
</style>