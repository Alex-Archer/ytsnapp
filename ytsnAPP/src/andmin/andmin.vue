<template>
  <div class="bg" :style="[canWidth,cnaHeight]">
    <mt-header title="后台管理登录" class="opt">
      <router-link to="/" slot="left">
        <mt-button icon="back">跳转前台首页</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div>
      <img src alt />
    </div>
    <div class="main">
      <p style="font-size:16px;padding-bottom:2rem">管理员登录</p>
      <div class="input">
        <div>
          账号：
          <input type="text" v-model="user" />
        </div>
        <div>
          密码：
          <input type="password" v-model="upwd" />
        </div>
      </div>
      <mt-button @click="login" size="large" class="opt" style="color:#fff">登录</mt-button>
      <p>{{err}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: "",
      upwd: "",
      canWidth: { width: screen.width + "px" },
      cnaHeight: { height: screen.height + "px" },
      err:""
    };
  },
  methods: {
    login() {
      var user = this.user;
      var upwd = this.upwd;
       this.axios.post("user/andmin",{user,upwd}).then(res=>{
         if(res.data.code==1){
           this.$router.push({path:'/andminindex'})
         }else{
            this.err=res.data.msg
         }
       })
    }
  }
};
</script>
<style scoped>
.main {
  text-align: center;
  padding: 1rem;
  margin-top: 10rem;
}
.bg {
  background: url("../assets/adn.jpg") no-repeat;
  background-size: cover;
  color: #fff;
}
.opt {
  background: rgba(248, 248, 255, 0.2);
}
.input {
  background: rgba(248, 248, 255, 0.2);
  width: 100%;
  height: 10rem;
}
input {
  background: rgba(248, 248, 255, 0.2);
  width: 15rem;
  height: 2rem;
  padding: 0.4rem;
  outline: 0;
  border: 0;
  margin: 1rem 0;
}
</style>