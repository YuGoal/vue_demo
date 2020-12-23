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
  </div>
</template>

<script>
export default {
  name: "SmartisanToolbar",
  data() {
    return {}
  }
}
</script>

<style scoped>
@import "SmartisanToolbar.css";
</style>
