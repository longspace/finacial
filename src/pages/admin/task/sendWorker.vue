<template>
  <div>
    <div>
      <div class="box_needdo">
        <div class="box_needdoleft">
            <div class="taskbtnbox">
              <a-button type="primary">新建任务</a-button>
            </div>
            <div class="taskitemMenu">
              <ul>
                <li v-for="(item,index) in taskitemMenu":class="item.isActive?'isActive':''" @click="changeItem(index)">{{item.title}}（{{item.count}}）</li>
              </ul>
            </div>
        </div>
        <div class="box_needdoright">

          <div class="taskNeedDo">

            <div class="taskitems" v-for="i in 10">
              <div class="itemtitlebox">
                <div class="itemtitleleft"><a-icon type="star" style="color: #1890ff; margin-right: 5px;" /> 张三{{i}}</div>
                <div class="itemtitleright">进行中(4/5)</div>
              </div>
              <div class="taskcontent">
                客户初次接触服务，请电话联系客户，询问客户基本信息，需求点； 2.主要获取客户信息：地区，所属行业，目前面临的问题，客户的他的需求1.客户初次接触服务请电话联系客户，询问客户基本信息，需求点； 2.主要获取客户信息：地区，所属行业，目前面临的问题，客户的他的需求
                <div class="tasktime"><a-icon type="history" class="tasktimeicon" /> 2020-11-04 17:28 至 2020-11-11 17:28</div>
              </div>
            </div>

          </div>



        </div>
      </div>
    </div>



  </div>
</template>
<script>
  export default {
    name:'sendWorker',
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

.taskNeedDo{ padding: 15px 15px 15px 27px; }
.taskNeedDo .taskitems{ margin-bottom: 10px;
    margin-bottom: 15px;
    cursor: pointer;
    transition: all .1s;
    border: 1px solid #e6e7eb;
    padding: 6px 8px;
    border-radius: 4px;}
.taskitems:hover {
    box-shadow: 0 8px 24px -8px rgba(0,0,0,.2);
    border:#63b1f9 solid 1px;
}
.itemtitlebox{ display: flex; justify-content: space-between; width: 100%; padding: 3px 6px; color:#222;}
.itemtitlebox>div:first-child{font-size: 18px;  }
.itemtitlebox>div:last-child{text-align: right; width: 100px;    color: rgb(230, 162, 60)}
.taskcontent{ padding: 3px 80px 3px 33px; font-size: 14px; line-height: 180%;color:#666;}
.tasktime { padding: 6px 0; color:#999}
.tasktimeicon{ margin-right: 6px;}

</style>
