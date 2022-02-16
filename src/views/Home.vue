<template>
<div class="body">
  <div class="main">
    <div class="left">
      <div class="left-main">
        <Nav></Nav>
        <home-list></home-list>
      </div>
    </div>
    <div class="right">
      <div class="right-main">
        <hot-post></hot-post>
        <hot-comments></hot-comments>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Nav from "@/components/Nav";
import HomeList from "@/components/HomeList";
import HotPost from "@/components/HotPost";
import HotComments from "@/components/HotComments";
export default {
name: "Home",
  components: {HotComments, HotPost, HomeList, Nav},
}
</script>

<style scoped>
.body{
  width: 100%;
  display: flex;
  justify-content: center;
  background: rgb(246,246,246);
}
.main{
  width: 1300px;
  display: flex;
}
.left{
  width: 900px;
}
.right{
  width: 400px;
}
.right-main{
  padding: 10px;
}
.left-main{
  padding: 10px;
}



@media screen and (max-width: 1400px){
  .right{
    width: 100%;
  }
  .left{
    width: 100%;
  }
  .main{
    flex-direction:column;
  }

}




</style>