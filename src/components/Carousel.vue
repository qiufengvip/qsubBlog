<template>
    <el-carousel height="500px">
      <el-carousel-item v-for="item in data">
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
</template>

<script>
export default {
  name: "Carousel",
  data(){
    return {
      data:[{
        title:"程序改变世界",
        subhead:"世界以你为荣",
        img:"https://media.mybj123.com/wp-content/uploads/2021/07/1627010920-d0c57a75e4fbb30.jpg"
      },{
        title:"秋枫",
        subhead:"让世界变得更美好！",
        img:"https://media.mybj123.com/wp-content/uploads/2021/07/1627006927-12df53fea8b3adf.jpg"
      }]

    };
  },
}
</script>

<style scoped>
.qsub-el-carousel{
  height: 100%;
}

.qsub-el-carousel>img{
  width: 100%;
  height: 100%;
}


.qsub-el-carousel-title{
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
}

.qsub-el-carousel-title-main{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.qsub-el-carousel-title-subhead{
  font-size: 13px;
  color: #ffffff;
}


.qsub-el-carousel-title-title{
  font-size: 25px;
  padding: 15px;
  font-weight: bold;
  color: #ffffff;
}
</style>