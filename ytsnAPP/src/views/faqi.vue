<template>
  <div class="container">
    <mt-header style="background:#FFF; color:#ff9d00" title="发起结伴">
      <mt-button slot="left" icon="back" @click="goh"></mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!-- <div class="mod-danger">
      <span class="label">性别</span>
      <span class="item_gander"><i class="man"></i>男生</span>
      <span class="item_gander"><i class="nv"></i>女生</span>
    </div>-->
    <div class="xian"></div>
    <div class="mod-contact">
      <h2>
        请输入个人信息
        <!-- <span>以下方式请至少添一项（仅对报名的人可见）</span> -->
      </h2>
      <ul class="db">
        <li>
          <input type="text" placeholder="标题" v-model="title" />
        </li>
        <li>
          <input type="text" placeholder="目的地" v-model="loca" />
        </li>
        <li>
          <input type="text" placeholder="出行日期" v-model="time" />
        </li>
        <li>
          <input type="text" placeholder="出行天数" v-model="day" />
        </li>
        <li>
          <input type="text" placeholder="请输入号码" v-model="phone" />
        </li>
      </ul>
    </div>
    <div class="xian"></div>
    <div class="mod-body">
      <h2>备注</h2>
      <div class="bd">
        <textarea placeholder="两人相遇就是缘分" v-model="text"></textarea>
      </div>
    </div>
    <div class="btn-group">
      <button @click="go" href="javascript:;">发起结伴</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      title: "",
      loca: "",
      time: "",
      day: "",
      phone: "",
      text: ""
    };
  },
  methods: {
    goh(){
      this.$router.go(-1)
    },
    go() {
      this.axios.get("user/user").then(res => {
        var uid = res.data.result[0].uid;
        var loca = this.loca;
        var time = this.time;
        var text = this.text;
        var day = this.day;
        var phone = this.phone;
        var title = this.title;
        var obj = { loca, time, text, day, phone, title, uid };
        console.log(obj);
        this.axios
          .post("user/withfriend", obj)
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.error(err);
          });
        this.$router.push("/jieban");
      });
    }
  }
};
</script>

<style scoped>
.bt {
  width: 100%;
  height: 2rem;
  line-height: 2rem;
}
.btn-group {
  position: fixed;
  bottom: 0;
  z-index: 6;
  width: 100%;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.95);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding: 10px 15px;
  text-align: center;
  display: flex;
}
a {
  text-decoration: none;
}
.btn-group > button {
  width: 100%;
  box-sizing: border-box;
  height: 30px;
  background-color: #f39c11;
  border-radius: 30px;
  line-height: 30px;
  color: #fff;
  font-size: 14px;
  outline: none;
  border: 0;
}

.mod-body {
  padding: 1rem 1rem 0.1rem 1.5rem;
}
.mod-body h2 {
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: normal;
}
.mod-body textarea {
  padding: 0;
  width: 95%;
  box-sizing: border-box;
  font-size: 1.1rem;
  height: 10rem;
}
input,
textarea {
  outline: none;
  color: #696969;
}
.mod-contact {
  padding: 1rem 1rem 0.1rem 1.5rem;
  background-color: #fff;
}
.mod-contact h2 {
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: normal;
  display: flex;
}
.mod-contact span {
  color: #ccc;
  font-size: 0.8rem;
}
.mod-contact input {
  width: 100%;
  height: 3.3rem;
  border: none;
  padding: 0;
  border-bottom: 1px solid #e5e5e5;
  box-sizing: border-box;
  line-height: 48px;
  font-size: 13px;
  color: #333;
}
ul li {
  list-style: none;
}
.mod-contact .bd {
  margin-right: -1rem;
}

.mod-danger {
  font-size: 1rem;
  overflow: hidden;
  line-height: 2.5rem;
}

/* .mod-danger .label{
  float: left;
    width: 75px;
}
.item_gander{
      float: left;
    margin-right: 30px;
    color: #a4a4a4;
    cursor: pointer;
    
}
.item_gander .man{
  float: left;
    margin-right: 15px;
    width: 32px;
    height: 32px;
        background: url(../assets/sprites4.png) no-repeat 0 -160px;
    background-size: 100px;
}
.item_gander .nv{
  float: left;
    margin-right: 15px;
    width: 2rem;
    height: 2rem;
    background: url(../assets/sprites4.png) no-repeat 0 -160px;
    background-size: 100px;
} */
.xian {
  height: 0.3rem;
  background-color: #dbdbdb;
}
</style>
