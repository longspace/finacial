// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'ant-design-vue/dist/antd.css';
import antdesignvue from 'ant-design-vue';
Vue.use(antdesignvue)

import VueQuillEditor from 'vue-quill-editor'
Vue.use(VueQuillEditor);
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'

import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  NProgress.start() // 进度条开始
  if(to.meta.requireAuth){
      let token = localStorage.getItem('AuthToken');
      if(token !== "" && token != null){
          next()
      }else{
          next({
              path:'/login',
              query:{redirect:to.fullPath}
          })
          setTimeout(()=>{NProgress.done()},50)
      }
  }else{
      next();
  }
  next();
})
router.afterEach(() => { // 后置守卫，导航被确认
  setTimeout(()=>{NProgress.done()},50)
  // NProgress.done() // 结束Progress
})
Vue.directive("check",{
  inserted:function(el,permission){
    console.log("permission",permission)
    let btnPermission = ['add','edit']
    // permission.value
    if(permission.value){
      btnPermission.forEach(item=>{
        if(item == permission.value){
          console.log(el,permission.value,"==",item)
          el.parentNode.removeChild(el)
        }
      })
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
