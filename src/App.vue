<template>
  <div id="app">
      <A/>
  </div>
</template>

<script>
import A from '@/view/A'
export default {
  name: 'App',
  components: {
    A
  },
  methods:{
  showWeatherDate(){
  this.$axios.get('http://localhost:8080/101010100.json').then(res => {  //此时相当于访问 http://localhost:8080/100000.json
  console.log(res, '中国数据 vue app')
  })
  console.log('showWeatherDate');
  },
   },
  mounted() {
    //this.showWeatherDate()
  },

}
</script>

<style>
*{
  margin: 0;
  padding: 0%;
}
#app{
  width: 100vw;
  height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}

</style>
