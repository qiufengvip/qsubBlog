<template>
  <el-container>
    <el-header>
      <!--        顶部导航  -->
      <Header></Header>
    </el-header>
    <el-main>
      <!--        主体-->
      <ArticleHome></ArticleHome>
      <!--        底部 版权数据 -->
      <!--        bottom-->
      <bottom @closeMain="closeMain"></bottom>
    </el-main>
  </el-container>
</template>

<script>


import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import Bottom from "@/components/Bottom";
import ArticleHome from "@/views/ArticleHome";
export default {
  name:"Article",
  components:{
    ArticleHome,
    Bottom,
    Carousel,
    Header
  },
  data(){
    return {
    };
  },
  methods:{
    closeMain:function (){
      alert("aa")
      console.log("父组件")
    }
  }
};

</script>


<style  scoped>
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