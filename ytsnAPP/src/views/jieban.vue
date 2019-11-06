<template>
  <div class="container">
    <mt-header style="background:#FFF; color:#ff9d00;border-bottom:1px solid #999; margin:1px 5px" title="结伴">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="head">
      <div class="head_1">
        <span>目的地</span>
        <img style="width:1rem;height:1rem" src="../assets/下标.png" alt />
      </div>
      <div class="head_2">
        <span>全部出发时间</span>
        <img style="width:1rem;height:1rem" src="../assets/下标.png" alt />
      </div>
    </div>
    <div class="bg">
      <img style="width:100%" src="../assets/bg.jpg" alt />
      <ul class="bg_2">
        <li>
          <span>
            <em>411661</em>
            <br />个旅行计划
          </span>
          <span>
            <em>650764</em>
            <br />人参与
          </span>
          <span>
            <em>11822</em>
            <br />个目的地
          </span>
        </li>
      </ul>
    </div>
    <div class="wenzhang">
      <div class="wenzhang_1" v-for="(item,i) of list" :key="i">
        <router-link :to="{path:'/friend',query:{fid:item.fid}}">
          <div class="jingde">
            <img src="../assets/jingde.png" />
            <div class="title_1">
              <h3>{{item.loca}}</h3>
              <span>{{item.day}}天</span>
            </div>
            <span class="time">{{item.time}}</span>
          </div>
          <div class="users">
            <span class="usersimg">
              <img :src="url+item.icon" />
            </span>
            <span class="usersuname">{{item.uname}}</span>
            <span class="usersrank">lv 20</span>
            <!-- <span class="usersloca">浙江</span> -->
            <p class="userstext">{{item.text}}</p>
          </div>
        </router-link>
      </div>
      <!-- <div class="wenzhang_1">
        <div class="jingde">
          <img src="../assets/jingde.png">
          <div class="title_1">
            <h3>姚力|景德镇|石城|水城</h3>
            <span>1-3天</span>
          </div>
        <span class="time">11月14日出发</span>
        </div>
        <div class="users">
          <span class="usersimg"><img src="../assets/touxiang.jpeg"></span>
          <span class="usersuname">勇敢的心</span>
          <span class="usersrank">lv 20</span>
          <span class="usersloca">浙江</span>
          <p class="userstext">今年清明前夕结伴去了一次婺源，看了美丽的油菜花。平时比较...</p>
        </div>
      </div>-->
    </div>

    <div class="fixed-btm">
      <div class="btn-short">
        <img src="../assets/paixu.png" />

        <a href="javascript:;"></a>
        <span>排序</span>
      </div>

      <button class="btn" href="javascript:;">
        <router-link to="/faqi">发 起 结 伴</router-link>
      </button>
    </div>
    <div style="height:40px"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      url:""
    };
  },
  created() {
    this.url=this.host
    this.axios.get("user/seachfriend").then(res => {
      this.list = res.data.result;
      console.log(this.list);
      console.log(res);
    });
  }
};
</script>


<style scoped>
li {
  list-style: none;
}
.head{
  text-align: center;
}
.wenzhang {
  display: flex;
  width: 100%;
}
a {
  text-decoration: none;
  color: black;
}
.fixed-btm {
  position: fixed;
  bottom: 0rem;
  padding: 0.5rem 0rem;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  width: 100%;
  box-shadow: 0px 0px 6px #999;
}
.btn-short {
  font-size: 12px;
  color: #a4a4a4;
  box-sizing: border-box;
  height: 30px;
  padding: 0.6rem;
  line-height: 22px;
  text-align: center;
  display: flex;
  flex-wrap: nowrap;
}
.btn-short img {
  width: 1rem;
  height: 1rem;
}
.btn-short span {
  margin-top: -0.15rem;
  margin-left: 0.3rem;
  box-sizing: border-box;
}
.btn {
  box-sizing: border-box;
  background-color: #f39c11;
  border-radius: 2rem;
  line-height: 2rem;

  width: 70%;

  outline: none;
}
.btn > a {
  color: #fff;
  font-size: 1rem;
  text-align: center;
}
* {
  padding: 0;
  margin: 0;
}
.clear {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.shang {
  padding: 0.35rem;
}
.wenzhang {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.wenzhang_1 {
  border: 1px solid #999;
  width: 46%;
  margin: 0.5rem;
  height: 18rem;
}
.wenzhang_2 {
  width: 46%;
  margin: 0.5rem;
}
.jingde {
  position: relative;
}
.jingde > img {
  width: 100%;
}
.title_1 {
  position: relative;
}
.title_1 > h3 {
  color: #fff;
  position: absolute;
  top: -8rem;
  left: 0.5rem;
}
.title_1 > span {
  color: #fff;
  font-size: 1.5rem;
  position: absolute;
  top: -6rem;
  left: 0.5rem;
}
.time {
  color: #fff;
  position: absolute;
  right: 0;
  bottom: 1rem;
  line-height: 1.8rem;
  background-color: #41c6ad;
}
.users {
  position: relative;
}
.usersimg {
  position: absolute;
  bottom: -1.2rem;
  left: 1rem;
}
.usersimg > img {
  border-radius: 50%;
  width: 2.5rem;
  height:2.5rem;
  border: 1px solid #fff;
}
.usersuname {
  position: absolute;
  top: 1.5rem;
  left: 1rem;
}
.usersrank {
  position: absolute;
  top: 2.8rem;
  left: 1rem;
  color: #fa9f00;
}
/* .usersloca{
     position: absolute;
     top: 2.6rem;left: 3.5rem;
   } */
.userstext {
  position: absolute;
  top: 4rem;
  left: 1rem;
  color: #696969;
}
.shang {
  position: relative;
  box-sizing: border-box;
  min-height: 30px;
  display: flex;
}
.title {
  position: absolute;
  box-sizing: border-box;
  left: 0;
  top: 0;
  font-size: 17px;
  padding: 1rem 0.1rem;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  line-height: 1.3rem;
}
.title > span {
  margin-left: -7rem;
}
.title h3 {
  margin-bottom: 10px;
  font-weight: normal;
  font-size: 1rem;
  margin-left: 0.3rem;
}
.data {
  position: absolute;
  right: 0;
  bottom: 10px;
  background-color: #41c6ad;
  height: 24px;
  line-height: 24px;
  color: #fff;
  font-size: 13px;
  padding: 0 9px 0 10px;
  border-radius: 24px 0 0 24px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  margin-right: 0.5rem;
}

.gender {
  position: absolute;
  left: 2.7rem;
  top: -0.8rem;
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background-size: 100px;
  overflow: hidden;
  vertical-align: -2px;
}
.info {
  padding: 0.5rem 0.7rem 0.7rem 0rem;
  box-sizing: border-box;
  position: relative;
  margin-left: 1rem;
}
.avatar img {
  position: absolute;
  left: 0.5rem;
  top: -1.3rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.7);
}
.name {
  display: block;
  height: 14px;
  margin-bottom: 5px;
  font-size: 14px;
  line-height: 14px;
  color: #696969;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-left: -6rem;
  margin-top: 1rem;
}
.level {
  font-size: 12px;
  color: #fa9f00;
  margin-left: -6rem;
}
.location {
  padding-left: 6px;
  font-size: 11px;
  color: #696969;
}
.txt {
  margin-top: 5px;
  font-size: 10px;
  color: #a4a4a4;
  line-height: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.head {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.head .head_1 {
  width: 49%;
  float: left;
  line-height: 3rem;
}
.head_2 {
  width: 50%;
  border-left: 1px solid#ccc;
  float: left;
  line-height: 3rem;
}
.bg {
  position: relative;
  color: #fff;
  font-size: 12px;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  display: flex;
}
.bg img {
  width: 100%;
  height: 8rem;
}

.bg_2 {
  position: absolute;
  left: 0;
  top: 1rem;
}
.bg_2 li {
  vertical-align: middle;
  margin-left: 1rem;
  margin-top: 1rem;
}
.bg_2 li span {
  float: left;
  padding-left: 1rem;
}
.bg_2 li em {
  margin-bottom: 0.3rem;
  line-height: 2rem;
  font-style: normal;
  font-size: 2rem;
  font-family: Georgia;
  vertical-align: top;
  display: flex;
  justify-content: space-between;
}
</style>