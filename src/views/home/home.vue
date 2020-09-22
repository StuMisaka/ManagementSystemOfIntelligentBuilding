<template>
  <div id="home">
    <el-container>
      <el-header height="120px"><home-header-item></home-header-item></el-header>
      <el-container>
        <el-aside width="200px"><home-aside-item></home-aside-item></el-aside>
        <el-main><home-main-item></home-main-item></el-main>
      </el-container>
      <el-footer height="60px">111</el-footer>
    </el-container>
  </div>
</template>

<script>
import HomeHeaderItem from './HomeHeaderItem.vue'
import HomeAsideItem from './HomeAsideItem.vue'
import HomeMainItem from './HomeMainItem.vue'
export default {
  name:'home',
  components:{
    HomeHeaderItem,
    HomeAsideItem,
    HomeMainItem
  }
}
</script>

<style scoped>
#home{
  width:  100vw;
  height: 100vh;
}

.el-header {
  background-color: #409EFF;
  color: #303133;
}

</style>