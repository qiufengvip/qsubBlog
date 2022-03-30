<template>
<div class="qsub-nav-main">
  <div class="qsub-nav-item" v-for="item in nav">{{ item }}</div>
</div>
</template>

<script>
export default {
  name: "Nav",
  data(){
    return {
      nav:["最新","前端","后端","小程序","面试"]
    };
  },
}
</script>

<style lang="less" scoped>
.qsub-nav-main{
  display: flex;
  justify-content: center;
  width: 100%;
  background: @background-color3;
  margin: 10px 0;
}
.qsub-nav-item{
  width: 80px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  border-radius: 5px;
  margin: 10px;
  font-size: 17px;
  font-weight: bolder;
  color: @font-color;
}
.qsub-nav-item:hover{
  background: @background-color4;
}

</style>