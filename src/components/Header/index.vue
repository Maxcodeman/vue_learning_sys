<template>
  <div>
    <!-- 面包屑根据当前路由的名称选择性地展示 -->
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-if="$route.name=='question'||$route.name=='category'||$route.name=='type'">内容管理</el-breadcrumb-item>
        <el-breadcrumb-item to="/questionPage" v-if="$route.name=='question'">题目管理</el-breadcrumb-item>
        <el-breadcrumb-item to="/categoryPage" v-else-if="$route.name=='category'">分类管理</el-breadcrumb-item>
        <el-breadcrumb-item to="/typePage" v-else-if="$route.name=='type'">题型管理</el-breadcrumb-item>
        <el-breadcrumb-item to="/userPage" v-else-if="$route.name=='user'">用户管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  },

  methods:{
    
  },

  /* 页面挂载时执行的方法列表 */
  mounted(){
    
  }
};
</script>

<style>
.header {
  width: 600px;
  height: 2vh;
  margin-left: 200px;
}
.breadcrumb{
  padding: 20px 20px 20px 0px;
}
</style>