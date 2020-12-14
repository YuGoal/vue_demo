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
        <div class="topbar_user"/>
        <el-popover
          placement="top-start"
          visible-arrow = false
          title="标题"
          width="200"
          trigger="hover"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
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
