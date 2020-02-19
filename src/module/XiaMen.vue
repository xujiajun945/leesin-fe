<template>
  <div>
    <div id="head-second">
      <div id="head-photo">
        <div id="head-img">
          <img src="../assets/xiamen-font.png" >
        </div>
      </div>
    </div>
    <div id="container-info">
      <el-tabs type="border-card">
        <el-tab-pane label="景点">
          <span slot="label"><i class="el-icon-add-location"></i> 景点</span>
          景点
        </el-tab-pane>
        <el-tab-pane label="美食">
          <span slot="label"><i class="el-icon-food"></i> 美食</span>
          美食
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="el-icon-s-promotion"></i> 我的行程</span>
          我的行程
        </el-tab-pane>
        <el-tab-pane label="备忘录">
          <span slot="label"><i class="el-icon-edit"></i> 备忘录</span>
          备忘录
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'xiamen',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
#head-photo {
  width: 100%;
  height: 506px;
  margin: 0 auto;
  background-image: url(../assets/xiamen.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

#head-img {
  width: 87px;
  height: 87px;
  float: left;
  margin-left: -450px;
  margin-top: 30px;
}

#container-info {
  width: 85%;
  height: 300px;
  margin: 0 auto;
}
</style>
