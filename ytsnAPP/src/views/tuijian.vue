<template>
  <div class="head">
    <mt-header style="background:#FFF; color:#ff9d00" title="游记">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div>
      <img class="titleimg" :src="url+youji.himg" />
    </div>
    <div class="titletext">
      <span>{{youji.title}}</span>
    </div>
    <div class="texttime">
      <span>{{date}}</span>
    </div>
    <div class="user">
      <div class="userimg">
        <img :src="url+youji.icon" />
        <span class="people">{{youji.uname}}</span>
      </div>
      <div class="loca">
        <h2>{{youji.site}}</h2>
      </div>
    </div>
    <div class="news">
      <span>我的出行信息</span>
      <ul class="allnews">
        <li class="time">出发时间:2019-09-30</li>
        <li class="peo">人物:家庭出游</li>
        <li class="money">人均费用:3540</li>
        <li class="day">出行天数:7</li>
      </ul>
    </div>
    <div class="detail">
      <div>
        <h2>{{youji.subhead}}</h2>
        <div class="rend ycontent">
          <p class="text"></p>
          <div v-html="html"></div>
        </div>
      </div>
    </div>
    <div class="discuss">
      <div class="up">
        <img src="../assets/ding.png" />
        <span>2019</span>
      </div>
      <div class="contents">
        <img src="../assets/mulu.png" />
        <span>目录</span>
      </div>
      <router-link :to="{path:'/tcomment',query:{tid:youji.tid}}">
        <div class="report">
          <img src="../assets/xiaoxi.png" />
        </div>
      </router-link>
    </div>
    <div class="put">
      <h3>精华评论</h3>
    </div>
    <div class="allquestion" v-for="(item,i) of questions" :key="i">
      <div class="question">
        <img :src="url+item.icon" />
        <span>{{item.uname}}</span>
      </div>
      <div class="questiontext">
        <p>{{item.comment}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      youji: "",
      date: "",
      questions: [],
      url: "",
      html: ""
      //   vi:0
    };
  },
  //   methods:{
  //       ding(){
  //         this.vi++;
  //       }
  //   },
  created() {
    this.url = this.host;
    var id = this.$route.query.tid;
    this.axios.get("user/tidtra", { params: { tid: id } }).then(res => {
      if(res.data.code==1){
      this.youji = res.data.result[0];
      console.log(this.youji);
      
      var str = res.data.result[0].content;
      var reg = /<img/g;
      var insertStr = "<img style='width:100%'";
      this.html = str.replace(reg, insertStr);
      this.date = this.youji.date.slice(0, 10);
      }else{
        return;
      }

    });
    this.axios.get("user/comment/tid", { params: { tid: id } }).then(res => {

      
      if (res.data.code == 1) {
        this.show = true;
        this.questions = res.data.result;
      }else{
        return;
      }

      console.log(res);
    });
  }
};
</script>
<style scoped>
li {
  list-style: none;
}
.head {
  width: 100%;
  box-sizing: border-box;
}
.titleimg {
  width: 100%;
}
.titletext {
  margin-top: 1.4rem;
  padding: 0 0.7rem;
}
.titletext > span {
  font-size: 2.5rem;
}
.texttime {
  padding-left: 0.65rem;
  margin-top: 1.4rem;
}
.user {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 1.4rem;
  padding: 0 0.7rem;
  align-items: center;
}
.userimg {
  display: flex;
  align-items: center;
}
.userimg > img {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin-right: 10px;
}
.people {
  font-size: 1.4rem;
  color: #999;
}
.loca > h2 {
  font-size: 2.2rem;
  line-height: 6.1rem;
  color: #111;
}
.news {
  position: relative;
  border: 1px solid #767676;
  margin: 0 1.4rem;
  margin-top: 1.4rem;
}
.news > span {
  color: #767676;
  position: absolute;
  top: -0.7rem;
  left: 1rem;
  background: #fff;
}
.allnews {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 1.4rem;
}
.time,
.peo,
.money,
.day {
  font-size: 0.99rem;
  float: left;
  padding: 1rem 0.5rem;
}
.text {
  text-indent: 1.56rem;
  font-size: 1rem;
}
.rend {
  margin-top: 2rem;
}
.detail {
  margin-top: 5rem;
  padding: 0 2.4rem;
}
.put {
  margin: 5rem 0 0.5rem 0.8rem;
}
.ltext {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
}
.way {
  position: relative;
  width: 45%;
  margin-left: 0.5rem;
}
.photo {
  width: 45%;
  margin-right: 0.5rem;
}
.photo > img {
  width: 100%;
}
.topic {
  font-size: 1.09rem;
  font-weight: bolder;
}
.content {
  font-size: 0.8rem;
  color: #999;
  overflow: hidden;
  height: 2.6rem;
  /* overflow: hidden; */
}
.avatar {
  position: absolute;
  bottom: 0rem;
  left: 0rem;
}
.avatar > img {
  width: 1.56rem;
  border-radius: 50%;
}
.avatar > span {
  font-size: 0.8rem;
}
.discuss {
  width: 15rem;
  height: 4.5rem;
  border: 1px solid #999;
  border-radius: 0 2.73rem 2.73rem 0;
  position: fixed;
  bottom: 3%;
  left: 0%;
  background: #fff;
}
.up > img {
  width: 2rem;
  margin-top: 1.2rem;
  margin-left: 0.5rem;
  float: left;
}
.up > span {
  float: left;
  margin-top: 1.9rem;
  margin-left: 0.3rem;
}
.contents > img {
  width: 2rem;
  float: left;
  margin-top: 1.2rem;
  margin-left: 0.5rem;
}
.contents > span {
  float: left;
  margin-top: 1.8rem;
  margin-left: 0.3rem;
}
.report > img {
  width: 2rem;
  float: left;
  margin-top: 1.5rem;
  margin-left: 0.5rem;
}
.put {
  margin: 5rem 0 0.5rem 0.8rem;
}
.ltext {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
}
.way {
  position: relative;
  width: 45%;
  margin-left: 0.5rem;
}
.photo {
  width: 45%;
  margin-right: 0.5rem;
}
.photo > img {
  width: 100%;
}
.topic {
  font-size: 1.09rem;
  font-weight: bolder;
}
.content {
  font-size: 0.8rem;
  color: #999;
}
.avatar {
  position: absolute;
  bottom: 0rem;
  left: 0rem;
}
.avatar > img {
  width: 1.56rem;
  border-radius: 50%;
}
.avatar > span {
  font-size: 0.8rem;
}
.discuss {
  width: 15rem;
  height: 4.5rem;
  border: 1px solid #999;
  border-radius: 0 2.73rem 2.73rem 0;
  position: fixed;
  bottom: 3%;
  left: 0%;
  background: #fff;
}
.up > img {
  width: 2rem;
  margin-top: 1.2rem;
  margin-left: 0.5rem;
  float: left;
}
.up > span {
  float: left;
  margin-top: 1.9rem;
  margin-left: 0.3rem;
}
.contents > img {
  width: 2rem;
  float: left;
  margin-top: 1.2rem;
  margin-left: 0.5rem;
}
.contents > span {
  float: left;
  margin-top: 1.8rem;
  margin-left: 0.3rem;
}
.report > img {
  width: 2rem;
  float: left;
  margin-top: 1.5rem;
  margin-left: 0.5rem;
}
.allquestion {
  border-top: 1px solid #999;
  margin: 1.5rem 0.5rem 6rem 0.5rem;
}
.question {
  margin: 1rem 0.5rem;
  display: flex;
  align-items: center;
}
.question > img {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-right: 10px;
}
.questiontext > h5 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}
.questiontext > p {
  font-size: 14px;
}
</style>
