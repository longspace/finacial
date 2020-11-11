<template>
  <div style="padding-top: 15px;">
    <uiform :formdata="formdata" :formcfg="formcfg" style="width: 100%;"></uiform>
  </div>
</template>
<script>
  import uiform from "@/components/basic/uiform.vue"
  export default {
    name:'',
    data() {
      return {
        // 表单配置要显示哪些字段
        formcfg:{
          basecfg:{
            formlayout:'horizontal',
            labelcol:{ span: 3 },
            wrappercol:{ span: 19 },
            formbtn:[
                {key:'query',label:'保存内容',type:'primary', icon: 'check',ghost:true,handle:()=>this.formQuery(),style:{"margin-left":'16%'}},
                {key:'add',label:'返回文章列表',type:'', icon: 'arrow-left',ghost:true,handle:()=>this.backList(),style:{'margin-left':'10%','border-color':'#e6a23c','color':'#e6a23c'}},
            ]
          },
          editor:{

          },
          data:[
            {type:'TreeSelect',label:'所属分类',field:'classId',icon:'control',itemstyle:{},style:{width:'60%'},placeholder:'所属分类',options:[{value:100,key:100,title:'项目经理',children: [{title: '项目组长',value: '0-0-0',key: '0-0-0',},],},{value:101,key:101,title:'攻城师'},{value:102,key:102,title:'设计湿'}]},
            {type:'Input',label:'文章标题',field:'title',icon:'read',style:{width:'60%'},placeholder:''},
            // {type:'Input',label:'SEO标题',field:'seoTitle',icon:'align-left',style:{width:''},placeholder:'选填'},
            {type:'Input',label:'关键词',field:'keywords',icon:'interaction',style:{width:'60%'},placeholder:''},
            {type:'Textarea',label:'文章描述',field:'hotkeywords',icon:'profile',style:{width:'60%'},rows:3,placeholder:''},
            {type:'Upload',label:'封面图片',field:'thumb',icon:'align-left',style:{width:'60%'},},
            {type:'Input',label:'跳转链接',field:'jumpUrl',icon:'link',style:{width:'60%'},placeholder:'如果填写则会转向该网址，且网址必须加上http://或https://'},
            {type:'TreeSelect',label:'访问权限',field:'visitRoleIds',icon:'control',itemstyle:{},style:{width:'60%'},placeholder:'访问权限',checkable:true,options:[{value:100,key:100,title:'项目经理',children: [{title: '项目组长',value: '0-0-0',key: '0-0-0',},],},{value:101,key:101,title:'攻城师'},{value:102,key:102,title:'设计湿'}]},
            {type:'Editor',label:'文章内容',field:'content',icon:'align-left',style:{width:'60%'},},
          ]
        },
        // 表单配置绑定值
        formdata:{
          keywords:'',
          DateRange:[],
          content:''
        },

      };
    },
    components:{
      uiform
    },
    methods:{
      backList(){
        this.$router.push("/admin/article/list")
      }
    },
    mounted(){

    }
  };
</script>
<style lang="scss">

</style>
<style scoped lang="scss" rel="stylesheet/scss">

</style>
