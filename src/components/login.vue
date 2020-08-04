<template>
<div id="login">
  <div style="position: absolute;margin-top: 0%;">
  <img src="../assets/bg1.png" style="width: 100vw;">
  </div>
  <div class="loginPage" shadow="hover">
    <div style="flex: 1;display: flex;justify-content: center;align-items: center;">
      <div class="loginBox" style="padding: 20 px">
        <span style="height:50px;font-size:25px;font-weight:bold;color:#c0cfe3;line-height:50px;letter-spacing:1px;">
          人事测试系统
        </span>
        <div class="field">
          <img src="../assets/username.png"/>
          <el-input class="loginInput" v-model="username" placeholder="请输入账号"></el-input>
          </div>
          <div class="field">
            <img src="../assets/psrd.png"/>
            <el-input class="loginInput" placeholder="请输入密码" v-model="password" show-password></el-input>
          </div>
          <el-button type="info" plain icon="el-icon-switch-button">登录</el-button>
          <el-button type="info" plain icon="el-icon-refresh-right">重置</el-button>
          <!-- <el-button type="primary" icon="el-icon-search">搜索</el-button> -->
        </div>
    </div>
  </div>
</div>
</template>>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>

<style scoped>
  .loginPage {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3d3d47;
    background-repeat: no-repeat;
    background-position: 0px 8vh;
    background-size: 100%;
  }

  .field {
    width: 100%;
    height: 40px;
    margin: 35px 0px;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .loginBox{
    padding: 20px;
    background: rgba(51,51,59,0.5);
    /* background: #33333b; */
    border-radius: 5px;
    position:fixed;
    }

  .loginInput{
    border-left: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

</style>
