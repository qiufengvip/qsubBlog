<template>
    <el-container>
      <el-header>
<!--        顶部导航  -->
        <Header></Header>
      </el-header>
      <el-main>
<!--        顶部轮播 -->
        <Carousel></Carousel>
<!--        主体-->
        <Home></Home>

<!--        底部 版权数据 -->
<!--        bottom-->


      </el-main>




    </el-container>
</template>

<script>


import Header from "@/components/Header";
import Home from "@/views/Home";
import Carousel from "@/components/Carousel";
export default {
    name:"Index",
    components:{
      Carousel,
      Home,
      Header
    },
    data(){
      return {
      };
    },
};

</script>


<style scoped>
body{
  overflow-x: hidden;
  overflow-y: hidden;
}
.el-header {
  padding: 0 !important;
}
.el-main{
  padding: 0 !important;
  padding-top: 1px !important;
}
</style>