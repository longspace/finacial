<template>
  <div>
    <uiform :formdata="formdata" :formcfg="formcfg"></uiform><br/>
    <uitable :datasource="tabledata" :tablecfg="tablecfg" @handleUiTableBtn="handleUiTableBtn"></uitable>
  </div>
</template>
<script>
  import uiform from "@/components/basic/uiform.vue"
  import uitable from "@/components/basic/uitable.vue"
  export default {
      name:'worker',
      data() {
        return {
          // 表单配置要显示哪些字段
          formcfg:{
            basecfg:{
              formlayout:'inline',
              labelcol:{ span: 6 },
              wrappercol:{ span: 7 },
              formbtn:[
                  {key:'query',label:'查询',type:'primary', icon: 'search',ghost:true,handle:()=>this.formQuery(),style:{}},
                  {key:'add',label:'导出',type:'', icon: 'plus',ghost:true,handle:()=>this.dialogAdd(),style:{'margin-left':'15px','border-color':'#e6a23c','color':'#e6a23c'}},
              ]
            },
            data:[
              {type:'Input',label:'',field:'keywords',icon:'align-left',style:{width:'210px'},placeholder:'用户账号、电话'},
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
                  { title: '员工姓名', field: 'workerName', width:'150px'},
                  { title: '跟进中客户数', field: 'followingCount'},
                  { title: '自拓客户数', field: 'selfCustomerCount'},
                  { title: '初分配客户数', field: 'giveCustomerCount'},
                  { title: '成交客户数', field: 'dealCustomerCount'},
                  { title: '成交订单数', field: 'dealOrderCount'},
                  { title: '成交金额', field: 'dealOrderMoney'},
              ],
              // algin:'center',
              // operateLabel:'操作管理',
              // operateWidth:'75px',
              // operateOptions: [
              //     { title: '修改', type: 'primary', icon: 'edit', methods: 'edithandle' },
              //     { title: '删除', type: 'danger', icon: 'delete', methods: 'deletehandle' },
              // ]
          },
          tabledata:[],
        };
      },
      components:{
        uiform,uitable
      },
      methods:{
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
                // this.edithandle(row)
                this.mydialogcfg.visible = true
                this.mydialogcfg.title = "修改数据"
                break;
          }

        },
      },
      mounted(){
        this.tabledata = [
            {id:100,workerName:'天真标',followingCount:20,selfCustomerCount:6,giveCustomerCount:8,dealCustomerCount:1,dealOrderCount:7,dealOrderMoney:'2689.68'},
            {id:101,workerName:'天真标',followingCount:21,selfCustomerCount:8,giveCustomerCount:8,dealCustomerCount:1,dealOrderCount:7,dealOrderMoney:'2689.68'},
            {id:102,workerName:'天真标',followingCount:23,selfCustomerCount:9,giveCustomerCount:8,dealCustomerCount:1,dealOrderCount:7,dealOrderMoney:'2689.68'},
            {id:103,workerName:'天真标',followingCount:25,selfCustomerCount:6,giveCustomerCount:8,dealCustomerCount:1,dealOrderCount:7,dealOrderMoney:'2689.68'},
          ]
      }
  };
</script>
<style lang="scss">

</style>
<style scoped lang="scss" rel="stylesheet/scss">

</style>
