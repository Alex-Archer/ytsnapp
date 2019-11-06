<template>
  <div>
    <mt-header
      style="background:#FFF; color:#ff9d00;border-bottom:1px solid #999; margin:1px 5px"
      title="结伴详情"
    >
      <router-link to="/jieban" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="titlebg">
      <h2>{{list.title}}</h2>
      <div class="flex">
        <div class="titletext">
          <span class="avatar">
            <img :src="url+list.icon" />
          </span>
          <span class="name">{{list.uname}}</span>
          <span class="level">lv.25</span>
          <br />
          <span class="time">{{list.time}}</span>
        </div>
        <div class="show">
          <li>关注15</li>
          <li>报名8</li>
          <li>回复5</li>
        </div>
      </div>
    </div>
    <div class="info">
      <ul>
        <li class="gotime">出行时间：{{list.time}}</li>
        <li class="goday">出行天数：{{list.day}}天</li>
        <li class="gophone">联系方式：{{list.phone}}</li>
      </ul>
    </div>
    <div class="text">
      <p>{{list.text}}</p>
    </div>
    <div class="btn">
      <router-link :to="{path:'/baoming',query:{fid:list.fid}}">
        <mt-button type="danger" size="large">马上报名</mt-button>
      </router-link>
    </div>
    <div class="enter">
      <dt>已报名({{bshu}}人)</dt>
      <dd>
        <ul class="enterimg" v-if="show">
          <li v-for="(item,i) of bao" :key="i">
            <img style="width:4rem;height:4rem;border-radius:50%" :src="url+item.icon" />
          </li>
        </ul>
        <p v-else>无</p>
      </dd>
    </div>
    <div class="wool">
      <div class="enter">
        <dt>已关注(10人)</dt>
        <dd>
          <ul class="enterimg">
            <li>
              <img src="../assets/tuzi.jpeg" />
            </li>
            <li>
              <img src="../assets/tuzi.jpeg" />
            </li>
          </ul>
        </dd>
      </div>
    </div>
    <div class="parent">
      <div class="mag">
        <p>{{"留言("+liuy+")条"}}</p>
      </div>
      <div class="magbox">
        <textarea cols="30" rows="10" v-model="huoqu">请发表留言</textarea>
      </div>
      <div class="magbtn">
        <mt-button size="large" @click="liuyan">发表留言</mt-button>
      </div>
      <div class="titletext mag" v-for="(item,i) of txt" :key="i">
        <span class="avatar">
          <img :src="url+item.icon" />
        </span>
        <span class="name">{{item.uname}}</span>
        <span class="level">lv.25</span>
        <br />
        <span class="time">"2019-05-30 17:34:41"</span>
        <span class="recover">回复</span>
        <div class="magcon">{{item.text}}</div>
      </div>
      <div class="side">
        <div class="sidee">
          <button type="default" size="normal">关注此行</button>
          <router-link to="/baoming">
            <button class="me" type="danger" size="normal">我要报名</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  inject: ["reload"],
  data() {
    return {
      show: false,
      bshu: "",
      list: "",
      huoqu: "",
      txt: [],
      url: "",
      liuy: "",
      bao: []
    };
  },
  methods: {
    liuyan() {
      this.axios.get("user/user").then(res => {
        var uid = res.data.result[0].uid;
        var fid = this.$route.query.fid;
        var text = this.huoqu;
        var obj = { uid, fid, text };
        console.log(obj);
        this.axios.post("user/liu", obj).then(res => {
          var uid = res.data.result;
          if (res.data.code == 1) {
            this.$toast("评论成功");
            this.reload();
          }
          console.log(res);
        });
      });
    }
  },
  created() {
    this.url = this.host;
    var id = this.$route.query.fid;
    this.axios.post("user/friend", { fid: id }).then(res => {
      this.list = res.data[0];
    });
    this.axios.get("user/sel", { params: { fid: id } }).then(res => {
      this.txt = res.data.result;
      if (this.txt == "") {
        this.liuy = "无";
        return;
      } else {
        this.liuy = this.txt.length;
      }
    });
    // 查询报名过的用户
    this.axios.get("user/chauser", { params: { fid: id } }).then(res => {
      this.bao = res.data;
      if (res.data.length > 0) {
        this.show = true;
        this.bshu = res.data.length;
      }
    });
  }
};
</script>

<style scoped>
li {
  list-style: none;
}
.titlebg {
  width: 100%;
  height: 8.875rem;
  background: url("../assets/topbg.jpg") no-repeat;
  overflow: hidden;
  background-size: cover;
  color: #fff;
}
.titlebg > h2 {
  margin-left: 0.8rem;
}
.titletext {
  width: 70%;
  margin-left: 14px;
  position: relative;
  color: #fff;
}
.avatar {
  position: relative;
  left: -5px;
}

.avatar > img {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-top: 1.2rem;
}
.name {
  position: absolute;
  top: 1.2rem;
  left: 2.8rem;
  font-size: 0.8rem;
}
.level {
  position: absolute;
  top: 1.4rem;
  left: 6.8rem;
  font-size: 0.8rem;
}
.time {
  position: absolute;
  top: 2.8rem;
  left: 2.7rem;
  font-size: 0.8rem;
}
.show {
  font-size: 1rem;
  color: #fff;
  margin-right: 3rem;
}
.show > li {
  margin-bottom: 0.3rem;
}
.info {
  height: 4.2rem;
  position: relative;
  margin-top: 1.5rem;
  color: #a4a4a4;
  border-bottom: 1px solid #999;
}
.gotime {
  position: absolute;
  top: 0rem;
  left: 0.8rem;
}
.goday {
  position: absolute;
  left: 20rem;
}
.gophone {
  position: absolute;
  top: 2rem;
  left: 0.8rem;
}
.text {
  margin: 0.5rem 0.8rem 1rem 0.8rem;
  text-indent: 25px;
  color: #a4a4a4;
}
.btn {
  margin: 0rem 1.5rem 3rem 1.5rem;
}
.enter {
  height: 7rem;
  margin-left: 0.8rem;
}
.enterimg > li {
  float: left;
  margin: 0.8rem 0 0 0.5rem;
}
.enterimg > li > img {
  border-radius: 50%;
}
.wool {
  border-bottom: 3px solid #996;
}
.parent {
  height: 100%;
  margin-bottom: 4rem;
}
.mag {
  margin: 0.8rem;
  color: #a4a4a4;
  font-size: 15px;
}
.magbox {
  width: 90%;
  margin: 0.8rem 0 0.8rem 1.3rem;
}
.magbox > textarea {
  width: 100%;
  height: 5.81rem;
  outline: none;
  padding: 0.3rem;
}
.magbtn {
  margin: 2rem 2rem;
}
.magbtn > button,
.btn > a > button {
  background: #f39c11;
  color: #fff;
}
.recover {
  position: absolute;
  top: 1.2rem;
  right: -6rem;
}
.magcon {
  margin: 0.8rem;
  color: #696969;
  font-size: 1rem;
}
.side {
  width: 100%;
  position: fixed;
  bottom: 0;
}
.sidee {
  padding: 0.35rem 0;
  text-align: center;
  background-color: #fff;
  box-shadow: 0px 1px 4px #999;
}
.sidee > button {
  width: 10.75rem;
  padding: 1rem 0;
  font-size: 0.9rem;
  border-radius: 0.5rem;
  border: 0.05rem solid #f39c11;
  outline: none;
}
.me {
  width: 10.75rem;
  padding: 1rem 0;
  font-size: 0.9rem;
  border-radius: 0.5rem;
  border: 0.05rem solid #f39c11;
  outline: none;
  background: #f39c11;
  color: #fff;
}
.sidee > button:first-child {
  background: #fff;
  color: #f39c11;
}
</style>
