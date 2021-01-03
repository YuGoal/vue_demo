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
      <div class="advertise" v-for="(item,index) in home_activities">
        <img class="advertise_img"
             :src="item.image">
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
      <aside class="common-normal-body" >
        <div class="spu-item-normal-box" v-for="(item,index) in home_hot" :key="index">
          <div class="spu-item-normal-title">买赠</div>
          <img class="spu-item-normal-img" :src="item.spu.sku_info[0].ali_image">
          <div class="spu-item-normal-name">{{item.spu.name}}</div>
          <div class="spu-item-normal-desc" >{{item.spu.shop_info.spu_mobile_sub_title}}</div>
          <div class="spu-item-normal-price" >￥{{item.spu.price}}</div>
        </div>
      </aside>
    </div>


    <div class="common-normal1-box shop_bg" v-for="(item,index) in home_floors">
      <div class="common-normal-header">
        <h5 class="header_font">{{item.title}}</h5>
      </div>
      <div class="floors-tabs" >

          <img class="advertise-img"   :src=home_floors[index].tabs[0].tab_items[0].image >

        <div class="spu-item-normal-box" v-for="(tab_items,page) in home_floors[index].tabs[0].tab_items" v-if="page>=1" :key="page">
          <div class="spu-item-normal-title">买赠</div>
          <img class="spu-item-normal-img" :src="tab_items.spu.sku_info[0].ali_image">
          <div class="spu-item-normal-name">{{tab_items.spu.name}}</div>
          <div class="spu-item-normal-desc" >{{tab_items.spu.sku_info[0].sub_title}}</div>
          <div class="spu-item-normal-price" >￥{{tab_items.spu.price}}</div>
        </div>
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
