import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        userinfo:[],
        permission:[],
        userRole:{}
    },
    mutations:{
        setUserInfo(state,val){
            state.userinfo = val;
        },
        setPermission(state,val){
            state.permission = val;
        },
        setUserRole(state,val){
            state.userRole = val;
        }
    },
    actions:{

    }
})
export default store