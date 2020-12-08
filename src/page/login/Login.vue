<template>

  <div class="login_bg">
    <div class="dialog_box">
      <div class="title">
        <img class="title_img" src="static/images/login_title1.png">
        <h4 class="title_text">使用 Smartisan ID 登录官网</h4>
        <input class="input" placeholder="请输入账号">
        <input class="input" type="password" placeholder="请输入密码">
        <div class="msg_box">
          <p class="chek_box">
            <input class="btn_chekbox" type="checkbox" id="chek">
            <label class="btn_chekbox_label" for="chek">自动登录</label>
          </p>
          <div class="msg_box2">
            <label class="btn_text">短信验证码登录</label>
            <label class="line_vertical" />
            <label class="btn_text" >忘记密码?</label>
          </div>


        </div>
        <button class="btn_submit">登录</button>

        <label class="line_h" />
        <div class="bottom_box">
          <label class="btn_chekbox_label">登录代表你已同意</label>
          <label class="btn_text" >&#8194用户协议&#8194</label>
          <label class="btn_chekbox_label" >和&#8194</label>
          <label class="btn_text" >隐私政策</label>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped type="text/css">
@import "login.css";
</style>
