<template>
  <div class="profile_form">
    <uiform :formdata="formdata" :formcfg="formcfg"></uiform>
  </div>
</template>
<script>
import uiform from "@/components/basic/uiform.vue"
export default {
  name:"companyAbout",
  data() {
    return {
      // 表单配置要显示哪些字段
      formcfg:{
        basecfg:{
          formlayout:'',
          labelcol:{ span: 6 },
          wrappercol:{ span: 18 },
          formbtn:[
              {key:'query',label:'点击保存',type:'primary', icon: 'check',ghost:true,handle:()=>this.formQuery(),style:{"margin-left":'33%'}},
          ]
        },
        data:[
          {type:'Input',label:'企业名称',field:'companyName',icon:'align-left',style:{},placeholder:''},
          {type:'Input',label:'办公地址',field:'address',icon:'environment',style:{},placeholder:''},
          {type:'Select',label:'员工人数',field:'lineAttr',icon:'control',options:[{id:1,label:'10人--20人'},{id:2,label:'21人--30人'},{id:2,label:'31人--40人'}]},

        ]
      },
      // 表单配置绑定值
      formdata:{
        companyName:'',
        address:'',
      },
    };
  },
  components:{
    uiform
  },
  methods:{

  },
  mounted(){

  }
};
</script>
<style lang="scss">
.profile_form{ width: 800px; padding-top: 50px;}
</style>
<style scoped lang="scss" rel="stylesheet/scss">

</style>
