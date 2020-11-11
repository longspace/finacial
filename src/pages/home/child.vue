<template>
<div>
    <slot></slot>
  {{goodsid}}
</div>
</template>
<script>
export default {
  data() {
    return {
      message:''
    };
  },
  props:{
    goodsid:{
      type:Number,
      default:0
    }
  },
  methods:{

  },
  watch:{
    goodsid(newName, oldName){
      console.log(this.goodsid)
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
