<template>
  <div id="app">
    <div id="head">
      <div id="head-title"></div>
      <div id="head-info">
        <el-menu background-color="#F6F6F6" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">厦门</el-menu-item>
          <el-menu-item index="2">重庆</el-menu-item>
        </el-menu>
      </div>
    </div>
    <div>
      <!-- vue-router -->
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      if (key === '1') {
        this.$router.push('/')
      } else if (key === '2') {
        this.$router.push('/chongqing')
      }
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: rgb(246, 246, 246);
}

#head {
  width: 50%;
  height: 60px;
  margin: 0 auto;
}

#head-title {
  width: 100px;
  height: 100%;
  float: left;
  background-image: url(./assets/timg.jpg);
  background-repeat: no-repeat;
  background-size: auto 100%;
}

#head-info {
  float: left;
  margin-left: 50px;
}
</style>
