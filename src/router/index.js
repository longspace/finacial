import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const originalPush = Router.prototype.push
   Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  mode: 'history', // 去掉 #
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/pages/home/index')
    },
    {
      path: '/yxadmin',
      name: 'yxadmin',
      component: () => import('@/pages/home/user/yxadmin')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/pages/admin/layout/index'),
      children:[
        {
          path: 'dashboard',
          name:'dashboard',
          component: () => import('@/pages/admin/dashboard/index'),
          meta:{title:'首页',requireAuth:false}
        },
        {
          path: 'profile',
          name:'profile',
          component: () => import('@/pages/admin/dashboard/profile'),
          meta:{title:'个人资料',requireAuth:false}
        },
        {
          path: 'customer/all',
          name:'customerAll',
          component: () => import('@/pages/admin/customer/all'),
          meta:{title:'全部客户',requireAuth:false},
        },
        {
          path: 'report/company',
          name:'companyReport',
          component: () => import('@/pages/admin/report/company'),
          meta:{title:'企业概览',requireAuth:false}
        },
        {
          path: 'task/sendWorker',
          name:'sendWorker',
          component: () => import('@/pages/admin/task/sendWorker'),
          meta:{title:'下发任务',requireAuth:false}
        },
        {
          path: 'task/needDo',
          name:'needDo',
          component: () => import('@/pages/admin/task/needDo'),
          meta:{title:'待办任务',requireAuth:false}
        },
        {
          path: 'report/worker',
          name:'workerReport',
          component: () => import('@/pages/admin/report/worker'),
          meta:{title:'员工报表',requireAuth:false}
        },
        {
          path: 'report/my',
          name:'myReport',
          component: () => import('@/pages/admin/report/my'),
          meta:{title:'我的报表',requireAuth:false}
        },
        {
          path: 'order/list',
          name:'orderlist',
          component: () => import('@/pages/admin/order/list'),
          meta:{title:'订单列表',requireAuth:false}
        },
        {
          path: 'company/staffList',
          name:'staffList',
          component: () => import('@/pages/admin/company/staffList'),
          meta:{title:'员工管理',requireAuth:false}
        },
        {
          path: 'company/about',
          name:'companyAbout',
          component: () => import('@/pages/admin/company/about'),
          meta:{title:'企业资料',requireAuth:false}
        },
        {
          path: 'system/userList',
          name:'userList',
          component: () => import('@/pages/admin/system/userlist'),
          meta:{title:'用户列表',requireAuth:false}
        },
        {
          path: 'system/roleAuth',
          name:'roleauth',
          component: () => import('@/pages/admin/system/roleauth'),
          meta:{title:'角色权限',requireAuth:false}
        },
      ],

    },
    // {
    //   path: '/page404',
    //   component: () => import('@/pages/error/404'),
    //   meta:{title:'页面走丢了',requireAuth:false}
    // },
    // {
    //   path: '/*',
    //   redirect: "/page404",
    //   component: () => import('@/pages/error/404'),
    // },

  ]
})
