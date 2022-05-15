
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 处理 数据 
const actions={
  
    MainWeather(context,value){// 对cardone传过来的参数进行 过滤
        let low=[];
        let high=[];
        let t=null;
        let src=null;
        let type=[];
        let obj={
            high:'',type:'',typeSrc:'',sunset:'',sunrise:''
        };
        let objarry=[];
        value.forEach(element => {//分别对 low ,high进行判断 截取字符串对应的数据（ low:'高温 66°'）截取数字部分
            element.low.length==6?t=element.low[3]+element.low[4]:t=t=element.low[3];
            low.push(t);
            element.high.length==6?t=element.high[3]+element.high[4]:t=t=element.high[3];
            high.push(t);
            obj.high=t;
            
            switch (element.type) {
                case '晴':src=require('@/assets/sunny.svg') ;
                  break;
                case '多云':src=require('@/assets/cloudy.svg') ;
                  break; 
                case '阴天':src=require('@/assets/cloudy.svg') ;
                  break;      
                default: src=require('@/assets/rainy.svg') ;
                  break;
              }
            //   obj是一个对象用来存储 高温 天气类型 天气图片路径 用于15天预报的组件

              type.push(src);
              objarry.push({high:t,type:element.type,typeSrc:src,sunset:element.sunset,sunrise:element.sunrise});
              
        });
        
        context.commit('numberLow',low)
        context.commit('numberHigh',high)
        context.commit('typeSrc',type)
        context.commit('weatherobj',objarry)
    }
   
}
const mutations={
    numberLow(state,value)//修改 state里面的low数据
    {    
        state.low=value
    },
    numberHigh(state,value){//修改 state里面的high数据
        state.high=value
    },
    typeSrc(state,value){
        state.typeSrc=value

    },
    weatherobj(state,value){

        state.WeatherObj=value
    },
    weatherData(state,value){// 保存空气分析语句
        state.ganmao=value.data.ganmao
        state.pm10=value.data.pm10
        state.pm25=value.data.pm25
        state.cityname=value.cityInfo.city
    },


}
const state={
    MainWeatherLows:[],
    low:null,
    high:null,
    typeSrc:null,
    ganmao:null,
    pm10:'',
    pm25:'',
    cityname:null,
    WeatherObj:[{ high:'',type:'',typeSrc:'',sunset:'',sunrise:''}],//用于15天预报的组件，


}
const getters = {
}
export default new Vuex.Store({
    actions,mutations,state,getters
})