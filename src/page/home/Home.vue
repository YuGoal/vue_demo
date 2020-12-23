<template>
  <div class="home_bg">
    <sm/>
    <div class="shop shop_bg">
      <el-carousel height="553px" autoplay="true" interval="5000">
        <el-carousel-item v-for="(list,index) in bannerlist" :key="index">
          <img :src=list.image>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="shop shop_bg">
      <el-carousel height="553px" autoplay="true" interval="5000">
        <el-carousel-item v-for="(list,index) in bannerlist" :key="index">
          <img :src=list.image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="shop shop_bg">
      <el-carousel height="553px" autoplay="true" interval="5000">
        <el-carousel-item v-for="(list,index) in bannerlist" :key="index">
          <img :src=list.image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="shop shop_bg"/>
    <div class="shop shop_bg"/>
    <div class="shop shop_bg"/>
    <div class="shop shop_bg"/>
    <div class="shop shop_bg"/>


  </div>


</template>

<script>
import sm from '../toolbar/SmartisanToolbar.vue'

export default {
  components: {
    sm
  },
  name: "Home",
  data() {
    return {
      bannerlist: [
        {image: "https://resource.smartisan.com/resource/3a6ac6d9102ffa499fd10b9f0ceeed77.png?x-oss-process=image/resize,w_1220/format,webp/quality,Q_95"},
        {image: "https://resource.smartisan.com/resource/919344c17d614ac64e497859e062e988.png?x-oss-process=image/resize,w_1220/format,webp/quality,Q_95"},
        {image: "https://resource.smartisan.com/resource/bedcb8b9cc461421de8bf1f186d2f150.jpg?x-oss-process=image/resize,w_1220/format,webp/quality,Q_95"},
        {image: "https://resource.smartisan.com/resource/60c1fea58f4116837a644e101fdb7116.png?x-oss-process=image/resize,w_1220/format,webp/quality,Q_95"},
        {image: "https://resource.smartisan.com/resource/d5f455111845c9542f399fa398c451f9.png?x-oss-process=image/resize,w_1220/format,webp/quality,Q_95"}
      ]
    }
  }
}
</script>

<style scoped>
@import "home.css";
</style>
