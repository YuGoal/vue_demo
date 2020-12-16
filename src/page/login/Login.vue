<template>

  <div class="login_bg">
    <div class="dialog_box shadow_bg">
      <div class="title">
        <img class="title_img" src="static/images/login_title1.png">
        <h4 class="title_text">使用 Smartisan ID 登录官网</h4>
        <input
          class="input" maxlength="11" type="text" @input="inputAccout" v-model="accout" placeholder="请输入账号">

        <div class="input">
          <input maxlength="20" class="pwd_input" :type="pwdType?'password':'text'" @input="inputAccout"
                 v-model="password"
                 placeholder="请输入密码">
          <img class="pwd_icon" :src="pwdType?unseenImg :seenImg " @click="changePwdType">
        </div>


        <div class="msg_box">
          <p class="chek_box">
            <input class="btn_chekbox" type="checkbox" id="chek">
            <label class="btn_chekbox_label" for="chek">自动登录</label>
          </p>
          <div class="msg_box2">
            <label class="btn_text">短信验证码登录</label>
            <label class="line_vertical"/>
            <label class="btn_text">忘记密码?</label>
          </div>
        </div>
        <button class="btn_submit" @click="login" :disabled='login_btn'>登录</button>

        <label class="line_h"/>
        <div class="bottom_box">
          <label class="btn_chekbox_label">登录代表你已同意</label>
          <a class="btn_text" target="_blank"
             href="https://resource.smartisan.com/docs/smartisan_os_legal_statement_cn.html">&#8194用户协议&#8194</a>
          <label class="btn_chekbox_label">和&#8194</label>
          <a class="btn_text" target="_blank"
             href="https://resource.smartisan.com/docs/smartisan_os_privacy_policy_cn.html">隐私政策</a>
        </div>
      </div>


    </div>
    <div class="loading" v-show="showLoading"/>
  </div>

</template>

<script>

export default {
  data() {
    return {
      accout: '',//账号
      password: '',//密码
      login_btn: true,//登录按钮点击状态
      showLoading: false,//登录加载框
      pwdType: true,//密码显示
      seenImg: ("/static/images/visibility.png"),//密码显示图片
      unseenImg: ("/static/images/un-visibility.png"), //密码隐藏图片
      loginBean: null
    }
  },
  mounted() {
    if (localStorage.accout) {
      this.accout = localStorage.accout;
    }
    if (localStorage.password) {
      this.password = localStorage.password;
    }
  },
  watch: {
    accout(newAc) {
      localStorage.accout = newAc;
    },
    password(newPwd) {
      localStorage.password = newPwd;
    }
  },
  methods: {
    login() {
      if (this.accout === '') {
        this.$notify.error({title: '登录', message: '账号不能为空'})
      } else if (this.password === '') {
        this.$notify.error({title: '登录', message: '密码不能为空'})
      } else {
        this.showLoading = true
        this.axios.post('user/login', {
          'account': this.accout,
          'password': this.password
        }).then(res => {
          this.loginBean = res.data
          if (this.loginBean.code == 200) {
            localStorage.userData = this.loginBean.data
            this.$router.replace({
              path: '/home'
            })
          } else {
            this.$notify.error({title: '登录', message: this.loginBean.msg})
          }
          this.showLoading = false
        }).catch(res => {
          this.$notify.error({title: '登录', message: res.data()})
          this.showLoading = false
        })
      }
    },
    inputAccout() {
      if (this.accout === '' || this.password === '') {
        this.login_btn = true;
      } else {
        this.login_btn = false;
      }
    },
    changePwdType() {//改变密码显示
      if (this.pwdType) {
        this.pwdType = false
      } else {
        this.pwdType = true
      }
    }
  },
  updated() {
    this.inputAccout()
  }
}


</script>

<style scoped type="text/css">
@import "login.css";
</style>
