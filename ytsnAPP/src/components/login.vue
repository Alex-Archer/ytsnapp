<template>
  <div class="div_1" :style="[canWidth,cnaHeight]">
    <!-- <div></div> -->
    <div class="div-2">
      <div>
        <input v-model="uname" type="text" class="div-2-0" placeholder="请输入用户名" />
      </div>
      <div>
        <input v-model="upwd" class="div-2-1" placeholder="请输入密码" type="password" />
        <div class="div-3">
          <span class="div-3-0">找回密码</span>
          <span class="div-3-1">忘记密码</span>
        </div>
        <div class="btn">
          <button class="btn-0" @click="btnlogin">登 录</button>
           <router-link to="/reg" class="my-btn">
          <button class="btn-1">立 即 注 册</button>
           </router-link>
        </div>
      </div>
      <div class="div-4">—————请登录—————</div>
      <div class="div-5">
        <img src="../assets/emali.png" class="div-5-0" />
        <img src="../assets/qq.png" class="div-5-1" />
        <img src="../assets/wx.png" class="div-5-2" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uname: "",
      upwd: "",
      canWidth: { width: screen.width + "px" },
      cnaHeight: { height: screen.height + "px" }
    };
  },
   methods: {
     btnlogin(){
      //  发送请求
        var url="user/userlogin";
      var uname=this.uname;
      var upwd=this.upwd;
      var obj={uname,upwd};
      this.axios.post(
        url,obj
      ).then(res=>{
        if(res.data.code==0){
          this.$messagebox("消息","用户名或密码有误")
        }else{
          this.$toast("登录成功")
          this.$router.push("/");
        }
      })
     }
   }

};
</script>
<style scoped>
.div_1 {
  background-image: url("../assets/44.png");
  background-size: 100% 100%;
  text-align: center;
  position: relative;
}
.div-2 {
  /* padding-top:80%; */
  position: absolute;
  top: 35%;
  left: 50%;
  margin-left: -8rem;
  margin-top: -3.25rem;
}
.div-2-0 {
  height: 2.5rem;
  width: 15rem;
  outline: none;
  background-image: url("../assets/haha.png");
  /* background-size: */
  background-repeat: no-repeat;
  background-size: 1.6rem;
  background-position: -0.1rem;
  box-sizing: border-box;
  padding-left: 1.5rem;
  border: 0;
  background-color: transparent;
  border-bottom: 1px solid #999;
}
.div-2-1 {
  height: 2rem;
  width: 15rem;
  outline: none;
  background-image: url("../assets/mima.png");
  /* background-size: */
  background-repeat: no-repeat;
  background-size: 1.6rem;
  background-position: -0.1rem;
  box-sizing: border-box;
  /* background-position: 0 0; */
  padding-left: 1.5rem;
  border: 0;
  background-color: transparent;
  border-bottom: 1px solid #999;
  margin-top: 0.5rem;
}
.div-3 {
  margin-top: 0.7rem;
  font-size: 0.8rem;
  color: #666;
}
.div-3-1 {
  margin-left: 5rem;
}
.div-4 {
  margin-top: 13%;
  color: #999;
}
.div-5 {
  margin-top: 20%;
  display: flex;
  justify-content: space-between;
}
.div-5-0,
.div-5-1,
.div-5-2 {
  width: 2rem;
  height: 2rem;
}
.btn-0,.btn-1 {
  display: block;
  justify-content: center;
  width: 15rem;
  height: 2rem;
  background-color:#99ff66;
  border-radius: 0.5rem;
  border: 0;
  margin: 0.5rem; 
  color: #666;
}
.btn-1{
   background-color:#66ff99;
}
.my-btn{
 text-decoration: none;
}
</style>