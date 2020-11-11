<template>
  <div>
    
    <a-button type="primary" ghost @click="showModal">Modal组件封装</a-button>
    <!-- <mydialog :configs="mydialogcfg" @dialogSubmit="dialogSubmit">slot区域内容</mydialog> -->
    <mydialog :configs="mydialogcfg" @dialogSubmit="dialogSubmit"><uiform :formdata="formdata" :formcfg="formcfg" layout="inline"></uiform></mydialog>
    <br/>
    <div style="width: 500px;">
      <a-button type="danger" ghost>form组件封装</a-button><br/><br/>
    <uiform :formdata="formdata" :formcfg="formcfg" layout="inline"></uiform>
    </div>

    <a-button type="danger" ghost>表格组件封装</a-button><br/><br/>
    <uitable :datasource="tabledata" :tablecfg="tablecfg" @handleUiTableBtn="handleUiTableBtn"></uitable>
    
    <child>dddddddddddd</child>
  </div>
</template>
<script>
  import mydialog from "../../components/basic/uidialog.vue"
  import uiform from "../../components/basic/uiform.vue"
  import uitable from "../../components/basic/uitable.vue"
  import child from "./child.vue"
  export default {
      name:'',
      data() {
        return {
          //弹出框
          mydialogcfg:{
            visible:false,
            title:'对话框标题',
            width:370
          },

          // 表单配置要显示哪些字段
          formcfg:{
            basecfg:{
              formlayout:'horizontal',
              labelcol:{ span: 7 },
              wrappercol:{ span: 12 },
              formbtn:[
                  {key:'query',label:'查询',type:'primary', icon: 'search',ghost:true,handle:()=>this.formQuery(),style:{'margin-left':'95px'}},
              ]
            },
            data:[
              {type:'Select',label:'请选择地区',field:'region',icon:'smile',style:{width:'210px'},placeholder:'请选择地区',options:[{id:1,label:'上海'},{id:2,label:'北京'},]},
              {type:'Input',label:'关键词',field:'keywords',icon:'search',style:{width:'210px'},placeholder:'关键词'},
              {type:'DateRange',label:'日期范围',field:'daterange',icon:'smile',style:{width:'210px'}},
              {type:'Upload',label:'上传文件',field:'avatar',icon:'smile',style:{width: '200px', height: '200px'}},
            ]
          },
          // 表单配置绑定值
          formdata:{
            region:'',
            keywords:'',
            daterange:[],
            avatar:''
          },

          tablecfg: {
              headerOptions:[
                  { title: '物料编号', field: 'id', width:'100px'},
                  { title: '样图', field: 'avatar',width:'150px',align:"center", class:'avatar'},
                  { title: '状态', field: 'status',width:'250px'},
                  { title: '多列', field: 'multicol'},
              ],
              algin:'center',
              operateLabel:'操作管理',
              operateWidth:'75px',
              operateOptions: [
                  { title: '修改', type: 'primary', icon: 'edit', methods: 'edithandle' },
                  { title: '删除', type: 'danger', icon: 'delete', methods: 'deletehandle' },
              ]
          },
          tabledata:[
            {id:100,avatar:'100',status:1,multicol:'',},
            {id:101,avatar:'101',status:0,multicol:'',},
            {id:102,avatar:'102',status:1,multicol:'',},
          ],
        };
      },
      components:{
        mydialog,uiform,uitable,child
      },
      methods:{
        showModal() {
          this.mydialogcfg.visible = true;
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
          // switch (methods){
          //   case 'deletehandle':
          //       this.deletehandle(row)
          //       break;
          //   case 'edithandle':
          //       this.edithandle(row)
          //       break;
          // }

        },
      },
      mounted(){

      }
  };
</script>
<style lang="scss">

</style>
<style scoped lang="scss" rel="stylesheet/scss">

</style>
