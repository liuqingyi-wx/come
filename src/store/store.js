//引入vue和Vuex
import Vue from 'vue'
import Vuex from 'vuex'

//引入之后，对vuex进行引用
Vue.use(Vuex)

//创建且声明一个对象
export const store = new Vuex.Store({
    state:{
        cks: localStorage.getItem("changeLang") || "false", //先去localStorage中获取数据
    },
    mutations:{
        //定义一个函数动态修改state的状态值
        numTurn_copy(state,value){ //这里的state代表上面的State
            localStorage.setItem('changeLang', value);
        }
    }
})