import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
      permission:[]
    },
    mutations:{
      setPermission(state,val){
        console.log("vuex")
        state.permission.push(val);
      }
    }
})
export default store
