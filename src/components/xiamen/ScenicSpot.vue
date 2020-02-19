<template>
  <div>
    <el-row :gutter=20>
      <el-col :span="6" v-for="(o) in 8" :key="o" :offset=0 style="margin: 10px 0">
        <el-card :body-style="{ padding: '0px', margin: '10px' }" shadow="hover" class="card">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div style="padding: 10px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <p></p>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ScenicSpot',
  props: ['id'],
  data () {
    return {
      currentDate: new Date()
    }
  },
  mounted () {
    let test = this.id
    console.log(test)
  }
}
</script>

<style scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.card:hover {
  border: darkgray solid 0;
}
</style>
