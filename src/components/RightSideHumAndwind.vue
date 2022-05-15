<template>
  <div class="RightSideHumAndwind">
      <table>
        <tr>
          <!-- 给td 宽度 -->
          <td><div class="box"><img src="@/assets/logo/wind-logo-white.svg" alt="" style="width:30px;height:30px"></div></td>
          <td><div class="box"><h3> wind</h3></div> </td>
          <td><div class="boxone"><h3>|</h3></div> </td>
          <td><div class="box"><h3> {{fl}}</h3></div> </td>
        </tr>
        <tr>
          <td><div class="box"><img src="@/assets/logo/wind-logo-white.svg" alt="" style="width:30px;height:30px"></div></td>
          <td><div class="box"><h3>Hum</h3></div> </td>
          <td><div class="boxone"><h3>|</h3></div></td>
          <td><div class="box"><h3>{{Hum}}</h3></div> </td>         
        </tr>

      </table>
  </div>
</template>

<script>
export default {
name:'RightSideHumAndwind',
props:{
  fl:{
    type:String,
    require:false
  },
  Hum:{
    type:String,
    require:false
  }
}
}
</script>

<style scoped>
.RightSideHumAndwind{
  width: 180px;
  height: 100px;
  color: white;
    margin-top:20px ;
}
.box{
  width: 45px;
}
.boxone{
   width: 20px;
  text-align: center;
}
</style>