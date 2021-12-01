<template>
  <div class="qsub-header">
    <div class="qsub-header-body">
      <div class="qsub-logo">秋枫博客</div>
      <el-scrollbar class="qsub-menu">
        <el-menu
            :default-active="activeIndex"
            class="qsub-menu-main"
            mode="horizontal"
            @select="handleSelect"
        >
          <el-menu-item index="1">前端</el-menu-item>
          <el-sub-menu index="2">
            <template #title>后端</template>
            <el-menu-item index="2-1">go</el-menu-item>
            <el-menu-item index="2-2">php</el-menu-item>
            <el-menu-item index="2-3">java</el-menu-item>
            <el-sub-menu index="2-4">
              <template #title>spring</template>
              <el-menu-item index="2-4-1">spring boot</el-menu-item>
              <el-menu-item index="2-4-2">spring cloud</el-menu-item>
              <el-menu-item index="2-4-3">mybatis</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="3" disabled>c++</el-menu-item>
          <el-menu-item index="4">留言</el-menu-item>
        </el-menu>
      </el-scrollbar>

      <div class="qsub-actions">
        <div v-show="search"  >
          <el-input
              placeholder="发现世界的美好！"
              class="input-with-select"
          >
            <template #append>
              <el-button circle><el-icon class="el-icon" @click="searchData"><Search /></el-icon></el-button>
            </template>
          </el-input>
        </div>
        <el-button circle v-show="!search" @click="searchData"><el-icon class="el-icon" ><Search /></el-icon></el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {  Search } from '@element-plus/icons'
export default {
  name: "Header",
  components: {
     Search,
  },
  data(){
    return {
      activeIndex:'',
      search:false,
    };
  },
  setup() {
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath);
    };
    return {
      handleSelect,
    };
  },
  methods: {
    searchData: function searchData(){
      this.search=true;
    }
  }
}
</script>

<style scoped>
.qsub-header {
  display: flex;
  justify-content: center;
  border-bottom: solid 1px #e6e6e6;
  position: fixed;
  width: 100%;
  z-index: 800;
  background: #ffffff;
}
.qsub-header-body {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.qsub-logo {
  width: 100px;
  font-size: 20px;
  font-weight: bold;
  color: rgb(52,73,94);
}
.qsub-menu {
  width: 1000px;
}

.qsub-actions {
  align-items: center;
  width: 200px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  transition: display 1000ms linear;
}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
}




</style>