<template>
  <div class="qsub-main">

    <el-carousel class="qsub-carousel "  height="100%">
        <el-carousel-item   v-for="item in data" class="qsub-item">
          <div  class="qsub-el-carousel">
            <img  :src="item.img">
            <div class="qsub-el-carousel-title">
              <div  class="qsub-el-carousel-title-main">
                <div class="qsub-el-carousel-title-title">{{ item.title }}</div>
                <div class="qsub-el-carousel-title-subhead">{{ item.subhead }}</div>
              </div>
            </div>
          </div>
        </el-carousel-item>
    </el-carousel>
  </div>

</template>

<script>
export default {
  name: "Carousel",
  data(){
    return {
      carouselHeight:'',

    };
  },
}
</script>

<style scoped>
.qsub-main{
    width: 100%;
    height: 100%;
    background: url("http://file.qsub.cn/blog/2022/6/2fe041e9295d4753baa8d5977eb6313c.png");
}

</style>