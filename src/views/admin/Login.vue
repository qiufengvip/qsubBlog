<template>
  <div class="body">
    <div class="login">
      <div class="title">登录</div>
      <div class="form">
        <div class="form-item">
          <span>账号:</span>
          <el-input width="50px" v-model="user.userName" placeholder="请输入账号"></el-input>
        </div>
        <div  class="form-item">
          <span>密码:</span>
          <el-input width="50px" v-model="user.password" show-password placeholder="请输入密码"></el-input>
        </div>
      </div>
      <div class="operation">
        <el-button  type="primary" @click="loginSubmit">登录</el-button>
        <el-button  type="warning" @click="signUp">注册</el-button>
      </div>
    </div>
  </div>

</template>

<script>
import { request_login,request_se } from '@/http/api'
import { ElMessage } from 'element-plus'
export default {
  name: "Login",
  components: {},
  data() {
    return {
      user:{
        userName:'',
        password:"",
      }
    };
  },
  methods: {
    //登录
    loginSubmit(){
      let _this = this;
      request_login(_this.user).then(res => {
        if (res.code===0){
          ElMessage.success(res.msg);
          localStorage.setItem("token",{name:res.data.tokenName,value:res.data.tokenValue});
          window.location.href = '/admin/index';
        }else{
          ElMessage.error(res.msg);
        }
      })
    },
    signUp(){
      request_se({}).then(res=>{
        if (res.code===0){

        }else {
          ElMessage.error(res.msg);
        }

      })

    }
  }
};

</script>


<style scoped lang="less">
body {
  overflow-x: hidden;
  overflow-y: hidden;
}

.el-header {
  padding: 0 !important;
}

.el-main {
  padding: 0 !important;
}
.body{
  width: 100vm;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: @background;
  color: @font-color;
}

.login{
  background-color: @background-main;
  width: 400px;
  height: 300px;
  border-radius: 5px;
}
.login input{
  //width: 200px;
  //height: 100px;
}

.title{
  //width: 100%;
  text-align: center;
  padding: 20px;
  font-size: 23px;
  font-weight: bold;
  border-bottom: 1px solid @background-up;
}

.form{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction:column;
  padding: 20px;
}

.form-item{
  display: flex;
  //justify-content: center;
  align-items: center;
  padding: 10px;
}
.form-item span{
  width: 40px;

}

.el-input{
  width: 200px;
}

.operation{
  display: flex;
  //width: 100%;
  align-items:center;
  justify-content:space-around;
  padding: 0 40px 0 40px;
}




</style>