<template>
  <div>
    <div class="box_needdo">
      <div class="box_needdoleft">
          <div class="taskbtnbox">
            <a-button type="primary">新建待办</a-button>
          </div>
          <div class="taskitemMenu">
            <ul>
              <li v-for="(item,index) in taskitemMenu":class="item.isActive?'isActive':''" @click="changeItem(index)">{{item.title}}（{{item.count}}）</li>
            </ul>
          </div>
      </div>
      <div class="box_needdoright"><router-view/></div>
    </div>
  </div>
</template>
<script>
  export default {
    name:'layout',
    data() {
      return {
        taskitemMenu:[
          {id:1,title:'进行中',to:'/admin/customer/all',count:2,isActive:true},
          {id:2,title:'未开始',to:'/admin/customer/all',count:0,isActive:false},
          {id:3,title:'已逾期',to:'/admin/customer/all',count:0,isActive:false},
          {id:4,title:'已完成',to:'/admin/customer/all',count:1,isActive:false},
          {id:5,title:'已结束',to:'/admin/customer/all',count:3,isActive:false},
        ]
      };
    },
    components:{

    },
    methods:{
      changeItem(index){
        this.taskitemMenu.forEach((item,key)=>{
          if(key == index){
            item.isActive = true;
          }else{
            item.isActive = false;
          }
        })
      }
    },
    mounted(){

    }
  };
</script>
<style lang="scss">

</style>
<style scoped lang="scss" rel="stylesheet/scss">
  .taskbtnbox{ width: 88px; margin-left: 12px; padding-bottom: 15px; border-bottom: #e6e7eb solid 1px;}
.box_needdo{ display: flex; height:calc(100vh - 160px);}
.box_needdoleft{ width:119px; height:calc(100vh - 160px); border-right: #e6e7eb solid 1px;flex-shrink: 0;}
.box_needdoright{ width:100%;height:calc(100vh - 160px); overflow-y: scroll;}
.taskitemMenu{ padding-top: 15px;}
.taskitemMenu ul{ list-style: none; margin: 0; padding: 0;}
.taskitemMenu li{ height:40px; line-height: 40px; list-style: no; text-align: center; display: block; color:#666; cursor:pointer;border-right: #FFFFFF solid 2px;}
.taskitemMenu li:hover{background-color: #f2f2ff; color: #1890ff;}
.taskitemMenu li.isActive{ color: #1890ff; border-right: #1890ff solid 2px; color:#1890ff; background-color: #f2f2ff; border-radius: 3px;}
</style>
