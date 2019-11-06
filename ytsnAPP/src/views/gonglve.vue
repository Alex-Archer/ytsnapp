<template>
  <div>
      <mt-header style="background:#FFF; color:#ff9d00" title="找攻略">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
      <mt-search v-model="value" class="search"></mt-search>
      <div class="title">
         <a href=""><img class="tu" src="../assets/xiaocheng.jpg">
         <p class="t1">跟随达人慢游日本精致小城佐贺</p>
         </a>
     </div>
     <div class="hd">
        <div class="item-hb">
         <a href="">
            <h2>热门目的地</h2>
            <p class="dec">最受大家喜爱的目的地推荐</p>
        </a>
        </div>
     </div>
     <hr>
    <mt-navbar v-model="selected">
    <mt-tab-item id="1">国内</mt-tab-item>
    <mt-tab-item id="2">日韩</mt-tab-item>
    <mt-tab-item id="3">欧洲 美洲</mt-tab-item>
    <mt-tab-item id="4">东南亚</mt-tab-item>
    <mt-tab-item id="5">澳洲 非洲</mt-tab-item>
</mt-navbar>
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1" >
    <div class="where">
        <a class="tu1" href=""><img src="../assets/guojia1.jpeg"><p>北京</p></a>
        <a href=""><img src="../assets/guojia2.jpeg"><p>上海</p></a>
        <a class="tu3" href=""><img src="../assets/guojia3.jpeg"><p>三亚</p></a>
        <a class="tu4" href=""><img src="../assets/guojia4.jpeg"><p>厦门</p></a>
        <a href=""><img src="../assets/guojia5.jpeg"><p>成都</p></a>
        <a class="tu6" href=""><img src="../assets/guojia6.jpeg"><p>西安</p></a>
    </div>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
   <div class="where">
        <a class="tu1" href=""><img src="../assets/rihan1.jpeg"><p>东京</p></a>
        <a href=""><img src="../assets/rihan2.jpeg"><p>大版</p></a>
        <a class="tu3" href=""><img src="../assets/rihan3.jpeg"><p>首尔</p></a>
        <a class="tu4" href=""><img src="../assets/rihan4.jpeg"><p>京都</p></a>
        <a href=""><img src="../assets/rihan5.jpeg"><p>济州岛</p></a>
        <a class="tu6" href=""><img src="../assets/rihan6.jpeg"><p>札幌</p></a>
    </div>
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <div class="where">
        <a class="tu1" href=""><img src="../assets/oumei1.jpeg"><p>塞班岛</p></a>
        <a href=""><img src="../assets/oumei2.png"><p>巴黎</p></a>
        <a class="tu3" href=""><img src="../assets/oumei3.jpeg"><p>伦敦</p></a>
        <a class="tu4" href=""><img src="../assets/oumei4.jpeg"><p>洛杉矶</p></a>
        <a href=""><img src="../assets/oumei5.jpeg"><p>罗马</p></a>
        <a class="tu6" href=""><img src="../assets/oumei6.jpeg"><p>纽约</p></a>
    </div>
  </mt-tab-container-item>
  <mt-tab-container-item id="4">
    <div class="where">
        <a class="tu1" href=""><img src="../assets/dongnan1.jpeg"><p>曼谷</p></a>
        <a href=""><img src="../assets/dongnan2.png"><p>普吉岛</p></a>
        <a class="tu3" href=""><img src="../assets/dongnan3.jpeg"><p>清迈</p></a>
        <a class="tu4" href=""><img src="../assets/dongnan4.jpeg"><p>巴厘岛</p></a>
        <a href=""><img src="../assets/dongnan5.jpeg"><p>新加坡</p></a>
        <a class="tu6" href=""><img src="../assets/dongnan6.png"><p>吉隆坡</p></a>
    </div>
  </mt-tab-container-item>
  <mt-tab-container-item id="5">
    <div class="where">
        <a class="tu1" href=""><img src="../assets/aofei1.jpeg"><p>悉尼</p></a>
        <a href=""><img src="../assets/aofei2.jpeg"><p>墨尔本</p></a>
        <a class="tu3" href=""><img src="../assets/aofei3.jpeg"><p>奥克兰</p></a>
        <a class="tu4" href=""><img src="../assets/aofei4.jpeg"><p>黄金海岸</p></a>
        <a href=""><img src="../assets/aofei5.jpeg"><p>皇后镇</p></a>
        <a class="tu6" href=""><img src="../assets/aofei6.jpeg"><p>凯恩斯</p></a>
    </div>
  </mt-tab-container-item>
</mt-tab-container>
<div class="hd">
        <div class="item-hb">
         <a href="">
            <h2>更多目的地</h2>
        </a>
        </div>
     </div>
     <hr>
     <div class="hd">
        <div class="item-hb">
         <a href="">
            <h2>当季推荐</h2>
            <p class="dec">每月最适合前往目的地推荐</p>
        </a>
        </div>
     </div>
     <hr>
    <mt-navbar v-model="selected1">
    <mt-tab-item id="6">6月</mt-tab-item>
    <mt-tab-item id="7">7月</mt-tab-item>
    <mt-tab-item id="8">8月</mt-tab-item>
    <mt-tab-item id="9">9月</mt-tab-item>
    <mt-tab-item id="10">10月</mt-tab-item>
</mt-navbar>
<mt-tab-container v-model="selected1">
  <mt-tab-container-item id="6" >
    <div class="where">
        <a class="tu1" href=""><img src="../assets/guojia1.jpeg"><p>香港</p></a>
        <a href=""><img src="../assets/guojia3.jpeg"><p>三亚</p></a>
        <a class="tu3" href=""><img src="../assets/dongnan3.jpeg"><p>清迈</p></a>
        <a class="tu4" href=""><img src="../assets/gz.jpeg"><p>广州</p></a>
        <a href=""><img src="../assets/dongnan4.jpeg"><p>新加坡</p></a>
        <a class="tu6" href=""><img src="../assets/lj.jpeg"><p>丽江</p></a>
    </div>
  </mt-tab-container-item>
  <mt-tab-container-item id="7">
   <div class="where">
        <a class="tu1" href=""><img src="../assets/guojia1.jpeg"><p>北京</p></a>
        <a href=""><img src="../assets/dongnan1.jpeg"><p>曼谷</p></a>
        <a class="tu3" href=""><img src="../assets/guojia3.jpeg"><p>三亚</p></a>
        <a class="tu4" href=""><img src="../assets/guojia4.jpeg"><p>厦门</p></a>
        <a href=""><img src="../assets/guojia5.jpeg"><p>成都</p></a>
        <a class="tu6" href=""><img src="../assets/guojia6.jpeg"><p>西安</p></a>
    </div>
  </mt-tab-container-item>
  <mt-tab-container-item id="8">
    <div class="where">
        <a class="tu1" href=""><img src="../assets/dongnan1.jpeg"><p>曼谷</p></a>
        <a href=""><img src="../assets/oumei3.jpeg"><p>莫斯科</p></a>
        <a class="tu3" href=""><img src="../assets/rihan2.jpeg"><p>东京</p></a>
        <a class="tu4" href=""><img src="../assets/rihan5.jpeg"><p>济州岛</p></a>
        <a href=""><img src="../assets/guojia5.jpeg"><p>成都</p></a>
        <a class="tu6" href=""><img src="../assets/guojia1.jpeg"><p>北京</p></a>
    </div>
  </mt-tab-container-item>
  <mt-tab-container-item id="9">
    <div class="where">
        <a class="tu1" href=""><img src="../assets/guojia4.jpeg"><p>郑州</p></a>
        <a href=""><img src="../assets/oumei3.jpeg"><p>汉堡</p></a>
        <a class="tu3" href=""><img src="../assets/dongnan3.jpeg"><p>曼谷</p></a>
        <a class="tu4" href=""><img src="../assets/guojia4.jpeg"><p>厦门</p></a>
        <a href=""><img src="../assets/guojia5.jpeg"><p>成都</p></a>
        <a class="tu6" href=""><img src="../assets/guojia1.jpeg"><p>北京</p></a>
    </div>
  </mt-tab-container-item>
  <mt-tab-container-item id="10">
    <div class="where">
        <a class="tu1" href=""><img src="../assets/guojia6.jpeg"><p>西安</p></a>
        <a href=""><img src="../assets/oumei3.jpeg"><p>华盛顿</p></a>
        <a class="tu3" href=""><img src="../assets/oumei4.jpeg"><p>罗马</p></a>
        <a class="tu4" href=""><img src="../assets/guojia4.jpeg"><p>厦门</p></a>
        <a href=""><img src="../assets/guojia5.jpeg"><p>成都</p></a>
        <a class="tu6" href=""><img src="../assets/guojia3.jpeg"><p>郑州</p></a>
    </div>
  </mt-tab-container-item>
</mt-tab-container>
<div class="hd">
        <div class="item-hb">
         <a href="">
            <h2>更多目的地</h2>
        </a>
        </div>
     </div>
     <hr>
<div class="hd">
        <div class="item-hb">
         <a href="">
            <h2>主题精选</h2>
            <p>大量主题出行，个性化你的旅行</p>
        </a>
        </div>
     </div>
     <hr>
    <mt-navbar v-model="selected2">
    <mt-tab-item id="11">全年适宜</mt-tab-item>
    <mt-tab-item id="12">季节</mt-tab-item>
    <mt-tab-item id="13">出行方式</mt-tab-item>
    <mt-tab-item id="14">节假日</mt-tab-item>
    <mt-tab-item id="15">用户搜索</mt-tab-item>
</mt-navbar>
<mt-tab-container v-model="selected2">
  <mt-tab-container-item id="11" >
    <div class="where">
        <a class="tu1" href=""><img src="../assets/guojia4.jpeg"><p>厦门</p></a>
        <a href=""><img src="../assets/oumei3.jpeg"><p>洛杉矶</p></a>
        <a class="tu3" href=""><img src="../assets/guojia3.jpeg"><p>三亚</p></a>
        <a class="tu4" href=""><img src="../assets/oumei6.jpeg"><p>纽约</p></a>
        <a href=""><img src="../assets/guojia5.jpeg"><p>成都</p></a>
        <a class="tu6" href=""><img src="../assets/rihan5.jpeg"><p>新加坡</p></a>
    </div>
  </mt-tab-container-item>
  <mt-tab-container-item id="12">
   <div class="where">
        <a class="tu1" href=""><img src="../assets/guojia4.jpeg"><p>广州</p></a>
        <a href=""><img src="../assets/aofei5.jpeg"><p>悉尼</p></a>
        <a class="tu3" href=""><img src="../assets/guojia3.jpeg"><p>三亚</p></a>
        <a class="tu4" href=""><img src="../assets/rihan2.jpeg"><p>大版</p></a>
        <a href=""><img src="../assets/aofei6.jpeg"><p>好望角</p></a>
        <a class="tu6" href=""><img src="../assets/lj.jpeg"><p>丽江</p></a>
    </div>
  </mt-tab-container-item>
  <mt-tab-container-item id="13">
    <div class="where">
        <a class="tu1" href=""><img src="../assets/guojia1.jpeg"><p>北京</p></a>
        <a href=""><img src="../assets/lj.jpeg"><p>丽江</p></a>
        <a class="tu3" href=""><img src="../assets/dongnan3.jpeg"><p>巴黎</p></a>
        <a class="tu4" href=""><img src="../assets/oumei4.jpeg"><p>墨尔本</p></a>
        <a href=""><img src="../assets/aofei5.jpeg"><p>纽约</p></a>
        <a class="tu6" href=""><img src="../assets/guojia6.jpeg"><p>西安</p></a>
    </div>
  </mt-tab-container-item>
  <mt-tab-container-item id="14">
    <div class="where">
        <a class="tu1" href=""><img src="../assets/guojia2.jpeg"><p>上海</p></a>
        <a href=""><img src="../assets/aofei2.jpeg"><p>皇后镇</p></a>
        <a class="tu3" href=""><img src="../assets/rihan4.jpeg"><p>济州岛</p></a>
        <a class="tu4" href=""><img src="../assets/dongnan4.jpeg"><p>清迈</p></a>
        <a href=""><img src="../assets/oumei5.jpeg"><p>成都</p></a>
        <a class="tu6" href=""><img src="../assets/guojia6.jpeg"><p>西安</p></a>
    </div>
  </mt-tab-container-item>
  <mt-tab-container-item id="15">
    <div class="where">
        <a class="tu1" href=""><img src="../assets/guojia1.jpeg"><p>北京</p></a>
        <a href=""><img src="../assets/guojia2.jpeg"><p>上海</p></a>
        <a class="tu3" href=""><img src="../assets/guojia3.jpeg"><p>三亚</p></a>
        <a class="tu4" href=""><img src="../assets/guojia4.jpeg"><p>厦门</p></a>
        <a href=""><img src="../assets/guojia5.jpeg"><p>成都</p></a>
        <a class="tu6" href=""><img src="../assets/guojia6.jpeg"><p>西安</p></a>
    </div>
  </mt-tab-container-item>
</mt-tab-container>
<div class="hd">
        <div class="item-hb">
         <a href="">
            <h2>更多主题</h2>
        </a>
        </div>
     </div>
  </div>    
</template>
<script>
export default {
    data(){
        return{
            value:"",
            selected:"1",
            selected1:"6",
            selected2:"11"
        }
    }
}
</script>
<style scoped>
a{
    text-decoration: none;
}
.search{
    height: 52px;
}
.title{
    position: relative;
    width: 100%;
    height:166px;
}
.tu{
    width: 100%;
    height: 100%;
}
.t1{
    position: absolute;
    left: 16px;top:121px;
    color: #fff;
    font-size:20px;
}
.item-hb{
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
}
.item-hb>a>h2{
    color: #000;
}
.item-hb>a>p{
    color:#999; 
    font-size: 15px;
    margin: 10px;
}
.where{
     flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
    margin-top:25px; 
    padding-left:10px;
    padding-right: 10px; 
}
.where>a>img{
    width: 113px;
    height: 93px;
}
.where>a>p{
    text-align: center;
}
</style>



