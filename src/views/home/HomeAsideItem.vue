<template>
  <div id="HomeAsideItem">
    <el-menu router>
      <el-menu-item index="0" :route="{path:'/home/info'}">
        <template slot="title">
          <i class="el-icon-s-home"></i>
          <span slot="title">大楼概况</span>
        </template>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-video-camera-solid"></i>
          <span slot="title">电器监控</span>
        </template>
          <el-menu-item index="1-1" :route="{path:'/home/equipmentInfo'}">所有电器</el-menu-item>
          <el-menu-item index="1-2" :route="{path:'/home/equipmentStatistics'}">电器统计</el-menu-item>
      </el-submenu>
      <el-menu-item index="2" :route="{path:'/home/alarm'}">
        <template slot="title">
          <i class="el-icon-message-solid"></i>
          <span slot="title" >警报系统</span>
        </template>
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span slot="title">人员管理</span>
        </template>
        <el-menu-item index="3-1">所有人员</el-menu-item>
        <el-menu-item index="3-2">人员统计</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">
        <template slot="title">
          <i class="el-icon-s-tools"></i>
          <span slot="title">设置</span>
        </template> 
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name:"HomeAsideItem"
}
</script>

<style scoped>
#HomeAsideItem{
  height: 100%;
}

</style>