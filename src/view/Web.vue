<template>
  <div class="Web">
    <el-container>      
      <el-container width="67vw">
        <el-header height="100px">          
        </el-header>
        <el-main>
        <!-- 路由 -->
          <Home/>
        </el-main>
      </el-container>
      <!-- 右边侧栏 -->
      <el-aside width="400px">
        <right-side/>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import Home from '@/pages/Home';
import RightSide from '@/components/RightSide';
export default {
  // 网页布局容器，包含路由组件 
name:"Web",
components:{
  RightSide,Home
}
}
</script>

<style scoped>
/* 主界面 
 对el-aside,el-mian  进行修改 设置大小宽度*/
.el-aside{
  background-color: aliceblue;
  overflow: auto  !important;
  height: 800px;
}
.el-main{
  width: 68vw;
  padding: 0% !important
}
.el-main::-webkit-scrollbar , .el-aside::-webkit-scrollbar {
  width: 0px;
  height: 0px;
    }
.web{
  width: 100vw;
  height: 100vh;
}

</style>