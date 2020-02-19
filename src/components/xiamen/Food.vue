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
              <el-button @click="introduce(imageData)" type="info" class="button" plain size="mini"><i class="el-icon-info"></i>&nbsp;&nbsp;简介</el-button>
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
import shachamian from '../../assets/food-shachamian.png'

import { MessageBox } from 'element-ui'

export default {
  name: 'Food',
  data () {
    return {
      currentDate: new Date(),
      imageDataList: [
        {
          imageSrc: kezaijian,
          foodName: '蚵仔煎',
          title: '标题',
          introduce: '简介简介简介简介简介简介简介简介简介简介简介简介'
        },
        {
          imageSrc: tudundong,
          foodName: '土笋冻',
          title: '标题',
          introduce: '简介简介简介简介简介简介简介简介简介简介简介简介'
        },
        {
          imageSrc: shachamian,
          foodName: '沙茶面',
          title: '标题',
          introduce: '简介简介简介简介简介简介简介简介简介简介简介简介'
        },
        {
          imageSrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          foodName: '汉堡4',
          title: '标题',
          introduce: '简介简介简介简介简介简介简介简介简介简介简介简介'
        },
        {
          imageSrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          foodName: '汉堡5',
          title: '标题',
          introduce: '简介简介简介简介简介简介简介简介简介简介简介简介'
        },
        {
          imageSrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          foodName: '汉堡6',
          title: '标题',
          introduce: '简介简介简介简介简介简介简介简介简介简介简介简介'
        }
      ]
    }
  },
  methods: {
    introduce (data) {
      let imgSrc = data.imageSrc
      MessageBox({
        title: data.foodName,
        dangerouslyUseHTMLString: true,
        message: `
          <style>
            .box:hover {
              background-color: aqua;
            }
            .box-img {
              width: 20%;
              height: 100%;
              margin-left: 20px;
              margin-top: 10px;
              margin-bottom: 10px;
            }
            .img {
              width: 100%;
              height: 100%;
              display: block;
            }
          </style>
          <div style="width: 100%" class="box">
            <div class="box-img">
              <img class="img" src="` + imgSrc + `">
            </div>
            <div class="box-info">

            </div>
          </div>
        `
      }).then(action => {})
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
