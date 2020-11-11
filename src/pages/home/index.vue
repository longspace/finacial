<template>
  <div>
    
    <child :goodsid="pargoodsid">子组件中展示父组件的内容</child>
  </div>
</template>
<script>
  import child from "./child.vue"
  export default {
      name:'',
      data() {
        return {
          pargoodsid:10
        };
      },
      components:{
        child
      },
      methods:{
        init(){
          this.pargoodsid = 20
        }
      },
      mounted(){
        this.init();
      }
  };
</script>
<style lang="scss">

</style>
<style scoped lang="scss" rel="stylesheet/scss">

</style>
