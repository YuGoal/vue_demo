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
        <el-popover
          class="popoverBackB"
          placement="top-start"
          visible-arrow="false"
          width="80"
          trigger="hover" >
          <div class="user">

          </div>
          <el-button slot="reference" class="topbar_user"/>
        </el-popover>
        <el-popover
          placement="top-start"
          visible-arrow="false"
          width="300"
          trigger="hover">
          <div class="cart">
            <div class="cart_img"/>
            <div class="cart_tips1">购物车为空</div>
            <div class="cart_tips2">您还没有选购任何商品，现在前往商城选购吧！</div>
          </div>
          <el-button slot="reference" class="topbar_cart"/>
        </el-popover>


      </div>

    </div>

  </div>


</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
@import "home.css";
</style>
