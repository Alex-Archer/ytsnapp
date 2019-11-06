<template>
  <div class="head">
    <mt-header style="background:#FFF; color:#ff9d00" title="攻略">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div>
      <img class="titleimg" :src="url+list.himg" />
    </div>
    <div class="titletext">
      <span>{{list.title}}</span>
    </div>
    <div class="texttime">
      <span>{{list.date}}</span>
    </div>
    <div class="user">
      <div class="userimg">
        <img :src="url+list.icon" />
        <span class="people">{{list.uname}}</span>
      </div>
      <div class="loca">
        <h2>{{list.site}}</h2>
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
        <h2>{{list.title}}</h2>
        <div class="rend">
          <p class="text" v-html="html"></p>
        </div>
      </div>
    </div>
    <div class="put">
      <h3>推荐游记</h3>
    </div>
    <div v-for="(item,o) of test" :key="o">
      <router-link :to="{path:'/tuijian',query:{tid:item.tid}}">
        <div class="ltext">
          <div class="way">
            <div class="topic">{{item.title}}</div>
            <div class="content">{{item.subhead}}</div>
            <div class="avatar">
              <img :src="url+item.icon" />
              <span>{{item.uname}}</span>
            </div>
          </div>
          <div class="photo">
            <img :src="url+item.himg" />
          </div>
        </div>
      </router-link>
    </div>
    <div class="discuss">
      <div class="up">
        <img src="../assets/ding.png" />
        <span>2000</span>
      </div>
      <div class="contents">
        <img src="../assets/mulu.png" />
        <span>目录</span>
      </div>
      <router-link :to="{path:'/msg',query:{pid:list.pid}}">
        <div class="report">
          <img src="../assets/xiaoxi.png" />
        </div>
      </router-link>
    </div>
    <div class="put">
      <h3>精华评论</h3>
    </div>
    <div class="allquestion" v-for="(item,index) in questions" :key="index+ '-label'">
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
      list: [],
      test: [],
      questions: [],
      url:"",
      html:""
    };
  },
  created() {
    this.url=this.host
    var id = this.$route.query.pid;
    this.axios.get("user/psp/ptext", { params: { pid: id } }).then(res => {
      console.log(res)
      if(res.data.code==1){

        this.list = res.data.result[0];
        var str = res.data.result[0].content;
        var reg = /<img/g;
        var insertStr = "<img style='width:100%'";
        this.html = str.replace(reg, insertStr);
      }else if(res.data.code==0){
        this.url=""
      }
    });
    this.axios.get("user/seek/travels").then(res => {
      this.test = res.data;
    });
    this.axios.get("user/comment/pid", { params: { pid: id } }).then(res => {
      console.log(res);
      this.questions = res.data.result;
    });
   
  },
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
}
.userimg {
  position: relative;
}
.userimg > img {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
}
.userimg > span {
  position: absolute;
  top: 1rem;
  left: 4rem;
}
.people {
  font-size: 1.4rem;
  color: #999;
}
.loca {
  position: relative;
}
.loca > h2 {
  position: absolute;
  top: -1rem;
  left: -9rem;
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
  padding:1rem 0;
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
  height:1.56rem;
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
  bottom: 0%;
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
}
.question > img {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
}
.questiontext > h5 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}
.questiontext > p {
  font-size: 14px;
}
</style>
