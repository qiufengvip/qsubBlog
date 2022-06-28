<template>
    <el-container>
      <el-header>
<!--        顶部导航  -->
        <Header></Header>
      </el-header>
      <el-main>
<!--        顶部轮播 -->
       <div class="qsub-main">

       </div>
<!--        主体-->
        <Home></Home>

<!--        底部 版权数据 -->
<!--        bottom-->
        <bottom></bottom>
      </el-main>
    </el-container>
</template>

<script>


import Header from "@/components/Header";
import Home from "@/views/Home";
import Carousel from "@/components/Carousel";
import Bottom from "@/components/Bottom";
export default {
    name:"Index",
    components:{
      Bottom,
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
.qsub-main{
    width: 100vm;
    height: 100vh;
    background: url("http://file.qsub.cn/blog/2022/6/2fe041e9295d4753baa8d5977eb6313c.png")  center center / cover no-repeat;
    background-size: 100%  auto;
}

</style>