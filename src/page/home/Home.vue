<template>
  <div class="home_bg">
    <sm/>
    <div class="shop shop_bg">
      <el-carousel height="553px" autoplay="true" interval="5000">
        <el-carousel-item v-for="(list,index) in home_carousel" :key="index">
          <img class="carousel-img" :src=list.image[0]>
        </el-carousel-item>
      </el-carousel>
    </div>


    <div class="activities shop_bg">
      <div class="advertise">
        <img class="advertise_img"
             src="https://resource.smartisan.com/resource/fbefae00ef98859f342e9f56889899a0.jpg?x-oss-process=image/resize,w_600/format,webp">
      </div>
      <div class="advertise">
        <img class="advertise_img"
             src="https://resource.smartisan.com/resource/1023fe9691eaf03abbfd261b36df4985.png?x-oss-process=image/resize,w_600/format,webp">
      </div>
      <div class="advertise">
        <img class="advertise_img"
             src="https://resource.smartisan.com/resource/33ea4bfa05068e0741b7278fec9da8a6.jpg?x-oss-process=image/resize,w_600/format,webp">
      </div>
      <div class="advertise">
        <img class="advertise_img"
             src="https://resource.smartisan.com/resource/fdc4370d1ce14a67fadc35d74209ac0f.jpg?x-oss-process=image/resize,w_600/format,webp">
      </div>
    </div>
    <div class="common-normal-box shop_bg">
      <div class="common-normal-header">
        <h5 class="header_font">热门商品</h5>
        <div class="right-operation">
          <button class="btn_left"/>
          <button class="btn_right"/>
        </div>
      </div>
      <div class="common-normal-body">
        <div class="spu-item-normal-box" v-for="(item,index) in home_hot" :key="index">
          <div class="spu-item-normal-title">买赠</div>
          <img class="spu-item-normal-img" :src="item.spu.sku_info[0].ali_image">
          <div class="spu-item-normal-name">{{item.spu.name}}</div>
          <div class="spu-item-normal-desc" >{{item.spu.shop_info.spu_mobile_sub_title}}</div>
          <div class="spu-item-normal-price" >￥{{item.spu.price}}</div>
        </div>
      </div>
    </div>
    <div class="common-normal1-box shop_bg">
      <div class="common-normal-header">
        <h5 class="header_font">坚果 R2 及配件</h5>
      </div>
    </div>

    <div class="common-normal1-box shop_bg">
      <div class="common-normal-header">
        <h5 class="header_font">Smartisan TNT</h5>
      </div>
    </div>

    <div class="common-normal1-box shop_bg">
      <div class="common-normal-header">
        <h5 class="header_font">官方精选配件</h5>
      </div>
    </div>


    <div class="common-normal1-box shop_bg">
      <div class="common-normal-header">
        <h5 class="header_font">服饰专场</h5>
      </div>
    </div>

    <div class="common-normal1-box shop_bg">
      <div class="common-normal-header">
        <h5 class="header_font">抖音文创</h5>
      </div>
    </div>

    <div class="common-normal1-box shop_bg">
      <div class="common-normal-header">
        <h5 class="header_font">箱包</h5>
      </div>
    </div>

    <div class="common-normal1-box shop_bg">
      <div class="common-normal-header">
        <h5 class="header_font">足迹系列保护套</h5>
      </div>
    </div>

    <div class="common-normal1-box shop_bg">
      <div class="common-normal-header">
        <h5 class="header_font">畅呼吸系列产品</h5>
      </div>
    </div>
    <div class="common-normal2-box shop_bg">
      <div class="common-normal-header">
        <h5 class="header_font">论坛精选</h5>
      </div>
    </div>
    <div class="footer">

    </div>
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
      home_activities: [],
      home_carousel: [],
      home_dynamic: [],
      home_floors: [],
      home_forum: [],
      home_hot: [],
    }
  },
  created() {
    this.getHome()
  },
  methods:{
   async getHome(){
      this.axios.get("product/home").then(res => {
        if ( res.data.code === 0) {
          this.$message.success('获取数据成功')
          this.home_activities = res.data.data.home_activities
          this.home_carousel = res.data.data.home_carousel
          this.home_dynamic = res.data.data.home_dynamic
          this.home_floors = res.data.data.home_floors
          this.home_forum = res.data.data.home_forum
          this.home_hot = res.data.data.home_hot
          console.log(res.data.data.home_hot[0])
        } else {
            this.$message.error('获取数据失败')
        }
      })
    }
  }
}
</script>

<style scoped>
@import "home.css";
</style>
