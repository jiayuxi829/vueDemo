<template>
  <el-container class="outContainer">
    <!-- 侧边栏 -->
    <el-aside width="15.7%">
      <!-- <el-col :span="12"> -->
      <!-- <h5>自定义颜色</h5> -->
      <el-menu
        default-active="currentMenu"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <el-menu-item index="1">
          <i class="el-icon-location"></i>
          <span slot="title">主页</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>员工资料</span>
          </template>
          <el-menu-item-group>
            <template slot="title" style="center">用户信息概览</template>
            <el-menu-item index="/table" >用户目录</el-menu-item>
            <el-menu-item index="/pie">用户管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <!-- <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">员工资料</span>
        </el-menu-item> -->
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">工资管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">人事管理</span>
        </el-menu-item>
      </el-menu>
      <!-- </el-col> -->
    </el-aside>
    <!-- 右侧分栏 -->
    <el-container>
      <!-- 头部区域 -->
      <el-header>
          <div class=head-button>
          <el-button type="text" icon="el-icon-setting">设置</el-button>
              <!-- <el-page-header @back="goBack" content="详情页面"></el-page-header> -->
          </div>
      </el-header>
      <!-- 主视图 -->
      <el-main>
        <div class="table">
          <router-view></router-view>
        </div>
        <!-- <el-row :gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
        <table />
      </el-col>
      </el-row> -->
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: #3d3d47;
  color: #ffffff;
  position: fixed;
  /* top: 0;
  right: 0;
  z-index: 9; */
  width: auto;
  width: calc(100% - 16.5%);
  transition: width 0.28s;
  font-size: 25px;
  text-align: center;
  line-height: 50px;
  border-radius: 5px;
}

.head-button{
    position: fixed;
    padding: 0 20px;
    justify-content: space-between;
    //  top: 0;
     right: 0;
     z-index: 9;
}

.el-aside {
  background-color: #545c64;
  color: #333;
  text-align: center;
  line-height: 100%;
  border-radius: 5px;
  .el-menu {
    border-right: none;
  }
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  // line-height: 100;
  border-radius: 5px;
  padding-top: 80px;
  // position: absolute;
}

.outContainer {
  height: 100%
}
.table {
  // position: fixed;
}
</style>
