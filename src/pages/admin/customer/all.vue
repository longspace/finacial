<template>
  <div>
    <mydialog :configs="mydialogcfg" @dialogSubmit="dialogSubmit">
      <uiform :formdata="dialogformdata" :formcfg="dialogformcfg"></uiform>
    </mydialog>
    <uiform :formdata="formdata" :formcfg="formcfg"></uiform>
    <div class="listbtns">
      <div class="listbtnsleft">
        <a-button><a-icon type="highlight" style="color: #22af85;"/> 打标签</a-button>
        <a-button><a-icon type="flag"  style="color: #1890ff; " />下发任务</a-button>
        <a-button><a-icon type="delete" style="color: rgb(251, 97, 107);" />删除客户</a-button>
        <a-button><a-icon type="export" style="color: #22af85;" />导出客户</a-button>
      </div>

      <!-- <a-button icon="highlight">打标签</a-button>
      <a-button icon="flag">下发任务</a-button>
      <a-button icon="export">导出客户</a-button>
      <a-button icon="delete">删除客户</a-button> -->

      <div class="listbtnsright">
        <a-button type="primary" @click="dialogShow"><a-icon type="file-add" style="color: #ffffff;" />新增客户</a-button>
        <a-button type="default"><a-icon type="file-excel" style="color: #1890ff;" />导入客户</a-button>
        <a-button type="default"><a-icon type="setting" style="color: #1890ff;" />查重工具</a-button>
      </div>
    </div>
    <uitable class="mytable" :datasource="tabledata" :tablecfg="tablecfg" @customRow="tableRowClick" @onSelectChange="onTableSelectChange"></uitable>
    <uidrawer :drawer="drawer" @closeDrawer="closeDrawer">
    <div class="basicinfo"><div style="font-size: 16px; color: #333;"><a-icon type="appstore" style="color: rgb(230, 162, 60); font-size: 16px; margin-right: 6px;" /> <span style="">上海页溪网络有限公司</span></div><div> 互动指数：10%</div></div>
    <div class="actionbtns">
      <!-- <a-button icon="phone">打电话</a-button> -->
      <a-button icon="history">添加跟进记录</a-button>
      <a-button icon="flag">新建待办</a-button>
      <a-button icon="dollar">创建订单</a-button>
      <a-button icon="reload">放回公海</a-button>
    </div>
    <div class="drawerbox">
      <div class="innerbox drawerboxleft" style="width: 46%;margin-right: 4%;">
        <div class="boxtitle"><a-icon type="share-alt" style="color: rgb(230, 162, 60); margin-right: 6px; font-size: 16px;" /> 跟进信息</div>
        <div class="followinfo">
          <div><span>线索属性</span>跟进中</div>
          <div><span>跟进人</span>唐帅</div>
          <div><span>分配时间</span>2020-11-09 15:05:17</div>
          <div><span>创建时间</span>2020-11-09 15:01:26</div>
        </div>
        <div class="boxtitle" style="margin-top: 15px; display: flex;">
          <div style="width: 100%; margin-right: 0;"><a-icon type="contacts" style="color:  #fb616b; font-size: 16px; margin-right: 6px;" /> 客户资料</div>
          <div style="width: 20px; flex-shrink: 0;"><a-icon type="form" style="margin-right: 6px; cursor: pointer;" @click="editDialogShow" /></div>
        </div>
        <div class="followinfo">
          <div><span>客户姓名</span>唐帅</div>
          <div><span>联系电话</span>18726356128</div>
          <div><span>公司名称</span>上海页溪网络有限公司</div>
          <div><span>公司地址</span>上海市宝山区杨行镇友谊路2689号520室</div>
          <div><span>业务机会</span>代注册</div>
          <div><span>客户标签</span>意向客户</div>
          <div><span>线索属性</span>公海中</div>
        </div>
      </div>
      <div class="innerbox drawerboxright" style="width: 48%;margin-left: 2%;">
        <a-tabs default-active-key="1" @change="tabCallback" icon>
          <a-tab-pane key="1" tab="时间树">
            <a-steps size="small" direction="vertical">
              <a-step  status="finish">
                <a-icon slot="icon" type="link" style="font-size: 16px; " />
                <template slot="description">
                  <div class="steptitlebox">
                   <div class="steptitle" style="font-size: 14px;">改跟进阶段</div>
                   <div class="steptime">11-04 17:28</div>
                   <div style="clear: both;"></div>
                  </div>
                  <div class="editto">改为 已成交 </div>
                  <div class="edituser">操作人 唐帅 </div>
                  </template>
              </a-step>
              <a-step  status="finish">
                <a-icon slot="icon" type="link" style="font-size: 16px;" />
                <template slot="description">
                  <div class="steptitlebox">
                   <div class="steptitle" style="font-size: 14px;">改跟进阶段</div>
                   <div class="steptime">11-04 17:28</div>
                   <div style="clear: both;"></div>
                  </div>
                  <div class="editto">改为 已成交 </div>
                  <div class="edituser">操作人 唐帅 </div>
                  </template>
              </a-step>
              <a-step  status="finish">
                <a-icon slot="icon" type="link" style="font-size: 16px;" />
                <template slot="description">
                  <div class="steptitlebox">
                   <div class="steptitle" style="font-size: 14px;">改跟进阶段</div>
                   <div class="steptime">11-04 17:28</div>
                   <div style="clear: both;"></div>
                  </div>
                  <div class="editto">改为 已成交 </div>
                  <div class="edituser">操作人 唐帅 </div>
                  </template>
              </a-step>
              <a-step  status="finish">
                <a-icon slot="icon" type="link" style="font-size: 16px;" />
                <template slot="description">
                  <div class="steptitlebox">
                   <div class="steptitle" style="font-size: 14px;">改跟进阶段</div>
                   <div class="steptime">11-04 17:28</div>
                   <div style="clear: both;"></div>
                  </div>
                  <div class="editto">改为 已成交 </div>
                  <div class="edituser">操作人 唐帅 </div>
                  </template>
              </a-step>
              <a-step  status="finish">
                <a-icon slot="icon" type="link" style="font-size: 16px;" />
                <template slot="description">
                  <div class="steptitlebox">
                   <div class="steptitle" style="font-size: 14px;">改跟进阶段</div>
                   <div class="steptime">11-04 17:28</div>
                   <div style="clear: both;"></div>
                  </div>
                  <div class="editto">改为 已成交 </div>
                  <div class="edituser">操作人 唐帅 </div>
                  </template>
              </a-step>
            </a-steps>
          </a-tab-pane>
          <a-tab-pane key="2" tab="任务" force-render>
            Content of Tab Pane 2
          </a-tab-pane>
          <a-tab-pane key="3" tab="订单">
            Content of Tab Pane 3
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
    </uidrawer>
  </div>
</template>
<script>
  import mydialog from "@/components/basic/uidialog.vue"
  import uiform from "@/components/basic/uiform.vue"
  import uitable from "@/components/basic/uitable.vue"
  import uidrawer from "@/components/basic/uidrawer.vue"
  export default {
      name:'customerAll',
      data() {
        return {
          // 表单配置要显示哪些字段
          formcfg:{
            basecfg:{
              formlayout:'inline',
              labelcol:{ span: 6 },
              wrappercol:{ span: 7 },
              formbtn:[
                  {key:'query',label:'立即检索',type:'primary', icon: 'search',ghost:true,handle:()=>this.formQuery(),style:{}},
              ]
            },
            data:[
              {type:'Input',label:'',field:'keywords',icon:'align-left',style:{width:'250px'},placeholder:'客户姓名、电话、公司名称'},
              {type:'Select',label:'',field:'tags',icon:'control',itemstyle:{},style:{width:'110px'},placeholder:'客户标签',options:[{id:1,label:'意向客户'},{id:0,label:'无效客户'}]},
              {type:'Select',label:'',field:'period',icon:'control',itemstyle:{},style:{width:'110px'},placeholder:'跟进阶段',options:[{id:1,label:'新客户'},{id:2,label:'电话沟通'},{id:3,label:'合同报价'},{id:4,label:'已成交'}]},
              {type:'Select',label:'',field:'opportunity',icon:'control',itemstyle:{},style:{width:'110px'},placeholder:'业务机会',options:[{id:1,label:'注册公司'},{id:2,label:'行政变更'},{id:3,label:'税务筹划'},]},
              {type:'DateRange',label:'',field:'daterange',icon:'smile',style:{width:'230px'}},
            ]
          },
          // 表单配置绑定值
          formdata:{
            keywords:'',
            DateRange:[]
          },

          tablecfg: {
              headerOptions:[
                  { title: '编号', field: 'id', width:'60px'},
                  { title: '客户姓名', field: 'contacter', width:'80px'},
                  { title: '联系电话', field: 'tel', width:'110px'},
                  { title: '业务机会', field: 'businessType', width:'85px'},
                  { title: '客户标签', field: 'tags',width:'130px',fieldType:'status',showText:["意向客户","无效客户"]},
                  { title: '跟进阶段', field: 'period',width:'120px'},
                  { title: '线索属性', field: 'attr',width:'90px'},
                  { title: '跟进人', field: 'followUser',width:'80px'},
                  { title: '时间树', field: 'timeTree',width:'130px'},
                  { title: '待处理任务', field: 'willDoTask'},
                  { title: '创建时间', field: 'createTime',width:'105px'},
              ],
              algin:'center',
              rowSelection:true, // 复选框
              scorllx:1000
              // operateLabel:'操作管理',
              // operateWidth:'75px',
              // operateOptions: [
              //     { title: '修改', type: 'primary', icon: 'edit', methods: 'edithandle' },
              //     { title: '删除', type: 'danger', icon: 'delete', methods: 'deletehandle' },
              // ]
          },
          tabledata:[],
          drawer:{
            cfg:{
              title:'资料详情',
              visible:false,
              closable:true,
              maskClosable:true,
              width:950
            },
            data:[]
          },

          mydialogcfg:{
            visible:false,
            title:'标题',
            width:530
          },
          // 弹出框表单配置要显示哪些字段
          dialogformcfg:{
            basecfg:{
              formlayout:'horizontal',
              labelcol:{ span: 6},
              wrappercol:{ span:16  },
              formbtn:[
                  {key:'query',label:'保存',type:'primary', icon: 'check',ghost:true,handle:()=>this.formQuery(),style:{'margin-left':'37.5%'}},
                  {key:'add',label:'关闭',type:'danger', icon: 'close',ghost:true,handle:()=>this.dialogClose(),style:{'margin-left':'70px'}},
              ]
            },
            data:[
              {type:'Input',label:'客户姓名',field:'customer',icon:'user'},
              {type:'Input',label:'联系电话',field:'tel',icon:'phone'},
              {type:'Input',label:'公司名称',field:'company',icon:'safety-certificate'},
              {type:'Input',label:'联系地址',field:'environment',icon:'environment'},
              {type:'Select',label:'业务机会',field:'opportunity',icon:'control',mode:"multiple",options:[{id:1,label:'注册公司'},{id:2,label:'行政变更'},{id:3,label:'税务筹划'},]},
              {type:'Select',label:'客户标签',field:'tags',icon:'control',mode:"multiple",options:[{id:1,label:'意向客户'},{id:2,label:'无效客户'}]},
              {type:'Select',label:'线索属性',field:'lineAttr',icon:'control',options:[{id:1,label:'公海中'},{id:2,label:'跟进中'}]},
              {type:'Textarea',label:'备注说明',field:'remarks',icon:'align-left'},
            ]
          },
          // 表单配置绑定值
          dialogformdata:{
            userName:'',
            account:'',
            passwd:'',
            tel:'',
            email:'',
            status:1,
            roleAuth:[],
            remarks:'',
          },
        };
      },
      components:{
        mydialog,uiform,uitable,uidrawer
      },
      methods:{
        dialogShow(){
          this.mydialogcfg.visible = true;
          this.mydialogcfg.title = '新增客户';
        },
        editDialogShow(){
          this.mydialogcfg.visible = true;
          this.mydialogcfg.title = '修改客户';
        },
        dialogClose(){
          this.mydialogcfg.visible = false;
        },
        dialogSubmit(obj){
          console.log("来自子组件的消息",obj)
          this.mydialogcfg.visible = false;
        },
        formQuery(){
          console.log("formQuery",this.formdata)
        },
        handleUiTableBtn(methods,row){
          console.log("父组件：",methods,row)
          switch (methods){
            case 'deletehandle':
                this.$confirm({
                  title: '温馨提示',
                  content: '您确定要删除吗',
                  okText: '确认',
                  okType: 'danger',
                  cancelText: '取消',
                  onOk() {
                    console.log('OK');
                  },
                  onCancel() {
                    console.log('Cancel');
                  },
                });
                break;
            case 'edithandle':
                this.$router.push("/admin/article/form")
                break;
          }

        },
        onTableSelectChange(obj){
          console.log("onTableSelectChange",obj)
        },
        // tableRowClick(record, index){
        //   return {
        //       on: {
        //          click: () => {
        //               console.log(record,index)
        //          }
        //       }
        //   }
        // }

        tableRowClick(obj){
          console.log("tableRowClick",obj)
          this.drawer.cfg.visible = true;
        },
        closeDrawer(obj){
          console.log("closeDrawer",obj)
          this.drawer.cfg.visible = false;
        },
        tabCallback(key) {
          console.log(key);
        }
      },
      mounted(){
        this.tabledata = [
          {id:1,companyName:'上海页溪网络有限公司',tags:1,period:'录入线索',attr:'公海',followUser:'唐帅',timeTree:'更新客户资料',willDoTask:'打电话',businessType:'注册公司',contacter:'唐帅',tel:'15866666666',address:'上海市宝山区杨行镇友谊路2689号520室',createTime:'2020-11-02 11:35:08'},
          {id:2,companyName:'上海页溪网络有限公司',tags:0,period:'电话沟通',attr:'跟进中',followUser:'唐帅',timeTree:'更新客户资料',willDoTask:'打电话',businessType:'行政变更',contacter:'唐帅',tel:'15866666666',address:'上海市宝山区杨行镇友谊路2689号520室',createTime:'2020-11-02 11:35:08'},

        ]
      }
  };
</script>
<style lang="scss">
.mytable .ant-table-row{ cursor:pointer}
.innerbox .ant-tabs-nav .ant-tabs-tab{padding: 12px 8px;margin: 0 6px 0 0;}
.ant-table-row.row-selection {
	background-color: #4ec4fa;
}
.innerbox .ant-steps-dot .ant-steps-item-content, .ant-steps-dot.ant-steps-small .ant-steps-item-content{ width: auto;}
.steptitlebox{ width: 415px; font-size: 14px;}
.steptitle{ float:left; width: 330px; font-size: 14px; color:#000; }
.steptiime{ float:right; width: 90px; font-size: 14px;color:#000;}
.editto{ color:#666;}
.editto,.edituser{ line-height: 200%;}
</style>
<style scoped lang="scss" rel="stylesheet/scss">
.listbtns{ display: flex; align-items: center; padding: 10px; margin: 10px 0; font-size: 14px;
    background: #edf4fb; justify-content: space-around;
    border: 1px solid #bedbf5;
    border-radius: 4px;}
.listbtns .ant-btn{ margin-right: 10px;}
.listbtns>div:first-child{ margin-right: auto;}
.listbtns>div:last-child .ant-btn{ margin-right: 0;}

.basicinfo{ display: flex; align-items: baseline; margin-bottom: 10px;}
.basicinfo div{ margin-right: 30px; font-size: 14px;}
.actionbtns{ display: flex; align-items: center; padding: 12px 0;}
.actionbtns .ant-btn{ margin-right: 10px;}
.drawerbox{display: flex; }
// .innerbox{ width:50%;}
.boxtitle{ height: 40px; line-height: 40px; margin:0 0 10px 0; color:#222; border-bottom: #e4dfdf solid 1px; font-size: 16px;font-family: Helvetica Neue For Number,-apple-system,PingFang SC,Microsoft YaHei,微软雅黑,BlinkMacSystemFont,Hiragino Sans GB,SimSun,宋体,sans-serif;}
.followinfo span{width: 115px; display: inline-block; height: 30px; line-height: 30px; color:#333;}


</style>
<style scoped lang="scss" rel="stylesheet/scss">
.anticon-close{ color:#1890ff;}
</style>
