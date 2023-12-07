<template>
<div>
    <div>
        <div class="sidebar-title">
            <img src="../../assets/logo.png" width="30px" height="30px">
            面试达人后台管理
        </div>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#304156"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">
          <i class="el-icon-s-home"></i>首页
        </el-menu-item>

        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i><span>内容管理</span></template>
          <el-menu-item-group>
              <el-menu-item index="2-1">题目管理</el-menu-item>
              <el-menu-item index="2-2">分类管理</el-menu-item>
              <el-menu-item index="2-3">题型管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="3">
          <template slot="title"
            ><i class="el-icon-user"></i>用户管理</template
          >
        </el-menu-item>
      </el-menu>
</div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.el-menu {
  text-align: left;
  height:90vh;
}
.sidebar-title{
    height: 50px;
    width: 100%;
    background-color: #2b2f3a;
    color:white;
    text-align: center;
}
</style>
