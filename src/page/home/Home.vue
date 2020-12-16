<template>
  <div>
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
        <div class="topbar_user" v-on:mouseenter="show_user = true" v-on:mouseleave="show_user = false">
          <div class="topbar_user_img"/>
        </div>
        <div class="topbar_cart" v-on:mouseenter="show_cart = true" v-on:mouseleave="show_cart = false">
          <div class="topbar_cart_img"/>
        </div>
      </div>

    </div>
    <div class="cart shadow_bg" v-show="show_cart" v-on:mouseenter="show_cart = true"
         v-on:mouseleave="show_cart = false">
      <div class="cart_img"/>
      <div class="cart_tips1">购物车为空</div>
      <div class="cart_tips2">您还没有选购任何商品，现在前往商城选购吧！</div>
    </div>
    <div class="user shadow_bg" v-show="show_user" v-on:mouseenter="show_user = true"
         v-on:mouseleave="show_user = false"/>
  </div>


</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      show_cart: false,//购物车
      show_user: false//用户
    }
  }
}
</script>

<style scoped>
@import "home.css";
</style>
