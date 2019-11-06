<template>
  <div>
    <mt-header class="head" title="个人中心">
      <div slot="left" class="head-left">
        <router-link to="/">
          <a href="javascript:;"></a>
        </router-link>
      </div>
      <div slot="right" class="head-right">
        <a href="javascript:;" @click="isShow"></a>
        <div v-show="show">
          <a href="javascript:;"></a>
          <p @click="out">退出登录</p>
          <p>切换账号</p>
        </div>
      </div>
    </mt-header>
    <div class="user-bg">
      <div v-if="set">
        <img src="../assets/user_head.png" alt />
        <p>
          <span class="name">用户名</span>
          <span class="lv">等级</span>
        </p>
        <p>
          <span class="user-focus">关注</span>&nbsp;&nbsp; | &nbsp;&nbsp;
          <span class="fans">粉丝</span>
        </p>
      </div>
      <div v-else>
        <img :src="url+user.icon" alt />
        <p>
          <span class="name">{{user.uname}}</span>
          <span class="lv">等级</span>
        </p>
        <p>
          <span class="user-focus">关注</span>&nbsp;&nbsp; | &nbsp;&nbsp;
          <span class="fans">粉丝</span>
        </p>
      </div>
      <div class="filehimg">
        上传头像
        <input style="opacity:0;" type="file" @change="fimg" />
      </div>
    </div>
    <div class="signature">签名:一天不打代码浑身都难受</div>
    <div class="fun-list">
      <div class="list-mb">
        <div class="list">
          <div>
            <a href="javascript:;" class="img-left"></a>
            <span class="list-title">我的蜂蜜</span>
            <span>0</span>
          </div>
          <div>
            <a href class="img-right"></a>
          </div>
        </div>
        <div class="list">
          <div>
            <a href="javascript:;" class="img-left"></a>
            <span class="list-title">修改个人信息</span>
            <span></span>
          </div>
          <div>
            <a href class="img-right"></a>
          </div>
        </div>
      </div>
      <div class="list-mb">
        <router-link to="/ditor">
          <div class="list">
            <div>
              <a href="javascript:;" class="img-left"></a>
              <span class="list-title">写游记</span>
              <span></span>
            </div>
            <div>
              <a href class="img-right"></a>
            </div>
          </div>
        </router-link>
        <div class="list">
          <div>
            <a href="javascript:;" class="img-left"></a>
            <span class="list-title">我的游记</span>
            <span>0</span>
          </div>
          <div>
            <a href class="img-right"></a>
          </div>
        </div>
        <router-link to="/psp">
          <div class="list">
            <div>
              <a href="javascript:;" class="img-left"></a>
              <span class="list-title">写攻略</span>
              <span>0</span>
            </div>
            <div>
              <a href class="img-right"></a>
            </div>
          </div>
        </router-link>
        <div class="list">
          <div>
            <a href="javascript:;" class="img-left"></a>
            <span class="list-title">我的攻略</span>
            <span>0</span>
          </div>
          <div>
            <a href class="img-right"></a>
          </div>
        </div>
      </div>
      <div class="list-mb">
        <div class="list">
          <div>
            <a href="javascript:;" class="img-left"></a>
            <span class="list-title">我的收藏</span>
            <span>0</span>
          </div>
          <div>
            <a href class="img-right"></a>
          </div>
        </div>
        <div class="list">
          <div>
            <a href="javascript:;" class="img-left"></a>
            <span class="list-title">我的蜂蜜</span>
            <span>0</span>
          </div>
          <div>
            <a href class="img-right"></a>
          </div>
        </div>
        <div class="list">
          <div>
            <a href="javascript:;" class="img-left"></a>
            <span class="list-title">我的蜂蜜</span>
            <span>0</span>
          </div>
          <div>
            <a href class="img-right"></a>
          </div>
        </div>
        <div class="list">
          <div>
            <a href="javascript:;" class="img-left"></a>
            <span class="list-title">我的蜂蜜</span>
            <span>0</span>
          </div>
          <div>
            <a href class="img-right"></a>
          </div>
        </div>
        <div class="list">
          <div>
            <a href="javascript:;" class="img-left"></a>
            <span class="list-title">我的蜂蜜</span>
            <span>0</span>
          </div>
          <div>
            <a href class="img-right"></a>
          </div>
        </div>
      </div>
      <div class="list">
        <div>
          <a href="javascript:;" class="img-left"></a>
          <span class="list-title">我的蜂蜜</span>
          <span>0</span>
        </div>
        <div>
          <a href class="img-right"></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  inject:['reload'],
  data(){
    return{
      user:"",
      set:true,
      show:false,
      uimg:"",
      uid:"",
      url:""
    }
  },
  methods: {
    isShow(){
      this.show=!this.show
    },
    out(){
      this.axios.get("user/out").then(res=>{
        if(res.data.code==1){
          this.$router.push("/login")
        }
      })
    },
    fimg(e){
        let _this = this;
        var file=e.currentTarget.files[0]
        var reader=new FileReader();
        reader.readAsDataURL(file)
        reader.onload=function(e){
         _this.uimg=e.target.result
        }
        console.log(file)

         var params = new FormData() ;
        console.log(params)
          params.append("file",file);
          var config = {
             headers:{'Content-Type': 'multipart/form-data'}
          };
          
          this.axios.post("fied/upload/timg",params,config).then(res=>{
              if(res.data.err == 0){
               console.log("上传失败")
                
              }else{ 
                this.uimg=res.data.img
                            var icon=this.uimg
                console.log(icon)
                var uid=this.uid
                var obj={icon,uid}
              this.axios.post("user/userImg",obj).then(res=>{
                if(res.data.code==1){
                  this.$messagebox("消息","头像上传成功")
                  this.reload()
                }
              })
              }
          })
    },
  },
  created() {
    this.url=this.host
    this.axios.get("user/user").then(res=>{
      if(res.data.code==1){
        this.set=false;
        this.uid=res.data.result[0].uid
      }
      this.user=res.data.result[0]
    })
  },
}
</script>
<style scoped>
/* 头部样式 */
.head {
  height: 50px;
  color: #000;
  background-color: #fff;
  padding: 0 !important;
}
.head-left > a,
.head-right > a {
  display: block;
  width: 50px;
  height: 50px;
  background: url("../assets/i_head5.png") no-repeat;
  background-size: 100px 300px;
}
.head-right > a {
  background-position: -50px -50px;
  float: right;
}
.head-right > div {
  width: 80px;
  height: 80px;
  background-color: #9f9f9f;
  position: absolute;
  bottom: -81px;
  right: 0px;
  text-align: center;
  padding: 0 2px;
  z-index: 999;
}
.head-right > div > p {
  height: 40px;
  line-height: 40px;
  color: #fff;
}
.head-right > div > p:nth-child(2) {
  border-bottom: 1px solid #adadad;
}
.head-right > div > a {
  display: block;

  border: 6px solid #9f9f9f;
  position: absolute;
  top: -4px;
  right: 28px;
  transform: rotate(40deg);
}
/* 用户 背景图 */
.user-bg {
  width: 100%;
  height: 135px;
  padding-top: 20px;
  background: url("../assets/userbg.jpg") no-repeat;
  background-size: cover;
  text-align: center;
  font-size: 12px;
  position: relative;
}
.user-bg img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px #fff;
}
.user-bg p {
  margin-top: 12px;
}
.user-bg p > .name {
  color: #fff;
}
.user-bg p > .lv {
  margin-left: 5px;
  color: #7c9bc0;
  background-color: #d6d6d6;
}
.user-bg p {
  color: #babfc9;
}
/* 签名 */
.signature {
  height: 45px;
  padding: 0 10px;
  border-bottom: 1px solid #e5e5e5;
  text-align: center;
  line-height: 45px;
  color: #696969;
  font-size: 12px;
}
.fun-list {
  background-color: #f4f4f4;
}
/*功能 设置 信息*/
.list {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 56px;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
  background-color: #fff;
  font-size: 12px;
}
.list .img-left {
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url("../assets/sprite3.png") no-repeat;
  background-size: 30px 525px;
  vertical-align: middle;
  margin-right: 7px;
}
.list .img-right {
  display: inline-block;
  width: 8px;
  height: 13px;
  background: url("../assets/sprite3.png") no-repeat;
  background-size: 30px 525px;
  background-position: 0 -353px;
}
.list .list-title {
  color: #666666;
}
.list-mb {
  margin-bottom: 10px;
}
/* 上传头像 */
.filehimg {
  width: 5rem;
  height: 5rem;
  background: rgba(230, 230, 250, 0.2);
  position: absolute;
  top: 40px;
  right: 30px;
  color: #fff;
  line-height: 5rem;
}
.filehimg > input {
  width: 5rem;
  height: 5rem;
  position: absolute;
  top: 0;
  left: 0;
}
</style>