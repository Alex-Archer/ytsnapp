<template>
  <div>
    <!-- 首页 头部 -->
    <div class="Home-top">
      <div  class="Lbtn">
        <a href="" class="logo"></a>
      </div>
      <div class="search">
        <input type="text" placeholder="搜索目的地/攻略/游记">
      </div>
      <div class="isuser">
        <router-link :to="userpath" >
          <img v-if="user" :src="url+userImg" alt="">
          <a href="javascript:;" v-else>登录</a>
        </router-link>
      </div>
    </div>
    <!-- 轮播 -->
    <div>
      <mt-swipe class="swipe" :auto="4000">
        <mt-swipe-item>
          <img src="../assets/CoUBGV2huWGABNXRABYiwUPhoZM790.png" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/CoUBGV2hvguAODnpAB9rFlISjdc594.png" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/CoUBGV2kYuqAS5FbAB8SBGtqpiw539.png" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- app 功能导航 找攻略、看游记 -->
    <div class="nav-li">
      <ul>
        <li>
          <router-link to='/gonglve'>
            <i></i>
            <p>找攻略</p>
          </router-link>
        </li>
        <li>
          <router-link to='/youji'>
            <i></i>
            <p>看游记</p>
          </router-link>
        </li>
        <li>
          <router-link to='/yemian'>
            <i></i>
            <p>问达人</p>
          </router-link>
        </li>
        <li>
          <router-link to='/jieban'>
            <i></i>
            <p>结伴</p>
          </router-link>
        </li>
        <!-- <li>
          <i></i>
          <p>酒店</p>
        </li>
        <li>
          <i></i>
          <p>去旅行</p>
        </li>
        <li>
          <i></i>
          <p>机票</p>
        </li>
        <li>
          <i></i>
          <p>当地玩乐</p>
        </li> -->
      </ul>
    </div>
    <!-- 攻略推荐 -->
    <div class="re-list">
      <div class="re-title">
        <h3>推荐攻略</h3>
      </div>
      <ul class="re-content">
        <li v-for="(item,i) of list" :key="i">
          <router-link :to="{path:'/article',query:{pid:item.pid}}">
          <h2>{{item.title}}</h2>
          <div>
            <div class="re-left">
              <img :src="url+item.himg" alt="">
            </div>
            <div class="re-right">
              <div>{{item.subhead}}</div>
              <div class="re-right-row">
                <div>
                  预览量 {{item.zan}}
                </div>
                <div class="user">
                  <img :src="url+item.icon" alt="">
                  <p>{{item.uname}}</p><!--问答-->
                </div>
              </div>
            </div>
          </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      user:false,
      userpath:"/login",
      userImg:"",
      value:"",
      list:[],
      url:""
    }
  },
  created() {
    this.url=this.host
    
        this.axios.get("user/user").then(res=>{
      if(res.data.code==1){
        this.userpath="/user"
        this.user=true;
        this.userImg=res.data.result[0].icon
      }
    })
    this.axios.get("user/psp/all").then(res=>{
      if(res.data.code==0){
        return;
      }
      console.log(res.data)
      this.list=res.data
    })
  },
}
</script>
<style scoped>
/* 首页头部 搜索和登录 */
.Home-top{
  width:100%;
  height:4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.Home-top .logo{
  display: block;
  width:7.51rem;
  height:3.9rem;
  background:url('../assets/mylogo.jpg') no-repeat;;
  background-position: 0rem 0.2rem;
  background-size: 8.51rem 3.6rem;
}
.search>input{
  border:0;
  outline: 0;
  width:14rem;
  height:2rem;
  border-radius:10px;
  padding:0 10px;
  font-size: .32rem;
  background-color:#f3f3f3;
}
.isuser a{
  text-decoration:none;
  color:#ffa800;
  font-size: 1.2rem;
  margin-right:0.3rem;
}
.isuser img{
  width:3rem;
  height:3rem;
  border-radius:50%
}
/* 轮播图 */
.swipe{
  width:100%;
  height:15rem;
}
.swipe img{
  width:100%;
}
/* 功能导航  */
.nav-li{
  padding:0.8rem 0 2rem; 
}
.nav-li>ul{
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  list-style:none;
}
.nav-li>ul>li{
  width:6.4rem;
  height:6.4rem;
  margin-top:.55rem;
  text-align: center;
}
/* 导航背景图 */
.nav-li>ul>li i{
  /* 设置为行内块 */
  display: inline-block;
  width:4.4rem;  /*每个宽高*/
  height:4.4rem;
  background:url("../assets/i_nav3.png") no-repeat;/*精灵图*/
  background-size:17.8rem 8.9rem;
}
/*为每个i 精灵图定位 */
.nav-li>ul>li:nth-child(2) i{
  background-position:0 -4.4rem;
}
.nav-li>ul>li:nth-child(3) i{
  background-position:-8.8rem -4.4rem;
}
.nav-li>ul>li:nth-child(4) i{
  background-position:-4.4rem -4.4rem;
}
.nav-li>ul>li:nth-child(5) i{
  background-position:-4.4rem 0rem;
}
.nav-li>ul>li:nth-child(6) i{
  background-position:-8.8rem 0rem;
}
.nav-li>ul>li:nth-child(7)>i{
  background-position:-13.2rem 0rem;
}
.nav-li>ul>li:nth-child(8) i{
  background-position:-13.2rem -4.4rem;
}
/* 推荐攻略 底部 */
.re-list>.re-title{
  width:100%;
  height:2.5rem;
  background-color:#f8f8f8;
  line-height:2.5rem;
  text-align: center;
  color:#999;
}
.re-list>.re-title>h3::before{
  content: "";
  display: inline-block;
  width: 1.213rem;
  height: 1.293rem;
  background: url("../assets/i_guidet.png") no-repeat;
  background-size:1rem;
  vertical-align: middle;
  margin-right:0.3rem;
}
.re-list>.re-title>h3::after{
  content: "";
  display: inline-block;
  width: 1.213rem;
  height: 1.293rem;
  background: url("../assets/i_guidet.png") no-repeat;
  background-size:1rem;
  vertical-align: middle;
  background-position: 0 -1.3rem;
  margin-left:0.5rem;
}
.re-content>li>a>h2{
  padding:1rem 1rem 0;
}
.re-content>li>a>div{
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding:1rem 1rem 1.2rem;
  border-bottom:1px solid #9999;
}
.re-content>li>a>div>.re-left{
  width:10rem;
  height:7.6rem;
  
}
.re-content>li>a>div>.re-left>img{
  width:100%;
  height:7.6rem;
}
.re-content>li>a>div>.re-right{
  width:15.5rem;
  height:7.6rem;
  display:flex;
  flex-direction:column;
  justify-content: space-between;
}
.re-right>div:nth-child(1){
  width:15.5rem;
  height:4.2rem;
  padding-top:0.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #999;
  font-size:1.1rem;
}
.re-right-row{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.user>img{
  width: 2rem;
  height:2rem;
  border-radius: 50%;
  float: right;
}
.user>p{
float: right;
margin-top: 0.3rem;
margin-right: 0.5rem;
}
</style>