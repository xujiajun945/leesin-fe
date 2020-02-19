<template>
  <div>
    <el-row :gutter=20>
      <el-col :span="6" v-for="(imageData, index) in imageDataList" :key="index" :offset=0 style="margin: 10px 0">
        <el-card :body-style="{ padding: '0px', margin: '10px' }" shadow="hover" class="card">
          <div class="image-container">
            <img :src=imageData.imageSrc class="image">
          </div>
          <div style="padding: 10px;">
            <span>{{ imageData.foodName }}</span>
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
import kezaijian from '../../assets/food-kezaijian.jpg'
import tudundong from '../../assets/food-tusundong.jpg'

export default {
  name: 'Food',
  data () {
    return {
      currentDate: new Date(),
      imageDataList: [
        {
          imageSrc: kezaijian,
          foodName: '蚵仔煎'
        },
        {
          imageSrc: tudundong,
          foodName: '土笋冻'
        },
        {
          imageSrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          foodName: '汉堡3'
        },
        {
          imageSrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          foodName: '汉堡4'
        },
        {
          imageSrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          foodName: '汉堡5'
        },
        {
          imageSrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          foodName: '汉堡6'
        }
      ]
    }
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

.image-container {
  width: 100%;
  height: 224px;
}

.image {
  width: 100%;
  height: 100%;
  display: block;
}

.clearfix:before, .clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.card:hover {
  border-radius: 12px;
  border: darkcyan solid 1px;
}
</style>
