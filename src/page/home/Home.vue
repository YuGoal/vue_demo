<template>
  <div class="home_bg">
    <div class="header_topbar">
      <div class="topbar_logo"/>

      <div class="nav">
        <ul class="nav_ul">
          <li>在线商城</li>
          <li>坚果R2</li>
          <li>Smartisan TNT go</li>
          <li>坚果 TNT 工作站</li>
          <li>Smartisan OS</li>
          <li>欢喜云</li>
          <li>应用</li>
          <li>论坛</li>
          <li>开发者支持</li>
          <li>荣誉与奖项</li>
          <li>加入我们</li>
          <li>下载App</li>
        </ul>
      </div>
      <div class="topbar_r">
        <el-popover
          placement="top-start"
          trigger="hover">
          <div class="user shadow_bg">

            <div class="user-content">

            </div>

            <ul >

            </ul>

          </div>
          <el-button slot="reference" class="topbar_user_img"/>
        </el-popover>
        <el-popover
          placement="top-start"
          trigger="hover">
          <div class="cart shadow_bg">
            <div class="cart_img"/>
            <div class="cart_tips1">购物车为空</div>
            <div class="cart_tips2">您还没有选购任何商品，现在前往商城选购吧！</div>
          </div>
          <el-button slot="reference" class="topbar_cart_img"/>
        </el-popover>
      </div>
    </div>
    <!--吸顶-->
    <div class="sticky-container">
      <div class="main_title">
        <ul class="sticky_ul">
          <li><a href="#">首页</a></li>
          <li><a href="#">坚果手机</a></li>
          <li><a href="#">TNT</a></li>
          <li><a href="#">官方自营</a></li>
          <li><a href="#">服饰箱包</a></li>
          <li><a href="#">大力教育</a></li>
          <li><a href="#">服务</a></li>
        </ul>
        <div class="form">

          <div class="search-wrapper">

          </div>
        </div>
      </div>
    </div>
    <div class="shop shop_bg">
      <el-carousel height="553px" autoplay="true" interval="3000" arrow="never">
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
          <button class="btn_left" v-on:click="left" ref="btn_left"/>
          <button class="btn_right" v-on:click="right" ref="btn_right"/>
        </div>
      </div>
      <aside class="common-normal-body" ref="box">
        <div class="spu-item-normal-box" v-for="(item,index) in home_hot" :key="index">
          <div class="spu-item-normal-title">买赠</div>
          <img class="spu-item-normal-img" :src="item.spu.sku_info[0].ali_image">
          <div class="spu-item-normal-name">{{ item.spu.name }}</div>
          <div class="spu-item-normal-desc">{{ item.spu.shop_info.spu_mobile_sub_title }}</div>
          <div class="spu-item-normal-price">￥{{ item.spu.price }}</div>
        </div>
      </aside>
    </div>


    <div class="common-normal1-box shop_bg" v-for="(item,index) in home_floors">
      <div class="common-normal-header">
        <h5 class="header_font">{{ item.title }}</h5>
      </div>
      <div class="floors-tabs">

        <img class="advertise-img" :src=home_floors[index].tabs[0].tab_items[0].image>

        <div class="spu-item-normal-box" v-for="(tab_items,page) in home_floors[index].tabs[0].tab_items" v-if="page>=1"
             :key="page">
          <div class="spu-item-normal-title">买赠</div>
          <img class="spu-item-normal-img" :src="tab_items.spu.sku_info[0].ali_image">
          <div class="spu-item-normal-name">{{ tab_items.spu.name }}</div>
          <div class="spu-item-normal-desc">{{ tab_items.spu.sku_info[0].sub_title }}</div>
          <div class="spu-item-normal-price">￥{{ tab_items.spu.price }}</div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="footer_center">
        <ul class="item_ul">
          <li>
            <h4 class="item_h3">订单服务</h4>
            <div class="item_name">
              <a class="item_a" href="https://www.smartisan.com/support/#/instruction" target="_blank">购买指南</a>
              <a class="item_a">送货政策</a>
            </div>
          </li>
          <li>
            <h3 class="item_h3">服务支持</h3>
            <div class="item_name">
              <a class="item_a">零售门店</a>
              <a class="item_a">自助服务</a>
              <a class="item_a">维修门店</a>
            </div>
          </li>
          <li><h3 class="item_h3">媒体中心</h3>
            <div class="item_name">
              <a class="item_a">新闻动态</a>
              <a class="item_a">官方视频</a>
              <a class="item_a">图片资源</a>
            </div>
          </li>
          <li>
            <h3 class="item_h3">关注我们</h3>
            <div class="item_name">
              <a class="item_a">新浪微博</a>
              <a class="item_a">官方微信</a>
              <a class="item_a">荣誉奖项</a>
            </div>
          </li>
        </ul>
        <div class="footer_server">
          <h1 class="h1-tel">
            400 - 603 - 5000
          </h1>
          <h2 class="h2-time">
            周一到周日 9:00 - 18:00
          </h2>
          <h2 class="h2-time">
            (仅收市话费)
          </h2>

          <div class="online">
            在线帮助
          </div>
        </div>
      </div>

    </div>
  </div>


</template>

<script>
export default {
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
  methods: {
    async getHome() {
      this.axios.get("product/home").then(res => {
        if (res.data.code === 0) {
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
    },
    left() {
      this.$refs.box.style.transform = 'translateX(-' + 0 + 'px)',
        this.$refs.btn_left.style.opacity = '0.3',
        this.$refs.btn_right.style.opacity = '1'
    },
    right() {
      this.$refs.box.style.transform = 'translateX(-' + 1218 + 'px)',
        this.$refs.btn_right.style.opacity = '0.3',
        this.$refs.btn_left.style.opacity = '1'
    },
  }
}
</script>

<style scoped>
@import "home.css";
</style>
