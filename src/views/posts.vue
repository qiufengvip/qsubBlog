<template>
    <el-container class="body">
        <el-header class="header">
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
import Bottom from "@/components/Bottom";
import ArticleHome from "@/views/ArticleHome";

export default {
    name: "posts",
    components: {
        ArticleHome,
        Bottom,
        Header
    },
    data() {
        return {};
    },
    methods: {
        closeMain: function () {
            alert("aa")
            console.log("父组件")
        }
    }
};

</script>


<style scoped lang="less">
.header{
    background-color: @background;
}
body {
    overflow-x: hidden;
    overflow-y: hidden;
}
.body{
    background-color: @background;
}
.main{
    margin-top: 20px;
}

.el-header {
    padding: 0 !important;
}

.el-main {
    padding: 0 !important;
}
</style>