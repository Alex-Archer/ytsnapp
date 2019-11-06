<template>
  <div class="divm">
    <mt-header style="background:#FFF; color:#ff9d00" title="问答">
      <router-link to="/yemian" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div>
      <h3 class="title_1">{{quetion.title}}</h3>
    </div>
    <div class="my-b">
      <span>
        <img :src="url+quetion.icon" alt class="my-b_1" />
      </span>
      <span class="span-0">{{quetion.uname}}</span>
      <span class="span-1">
        <img src="../assets/wKgEaVyqvlOAVjXdAAAE0Yq8Gqs641.png" alt class="my-b_2" />
      </span>
    </div>
    <div>
      <p class="p-0">{{quetion.ask}}</p>
    </div>
    <div class="div-2">
      <span>
        <b class="b-0">25555</b>浏览 .
        <b class="b-0">42</b>回答
      </span>
      <router-link to="/#" class="lin">
        <b class="b-0">举报</b>
      </router-link>
    </div>
    <div class="mydiv"></div>
    <div v-for="(item,i) of commen" :key="i"> 
   
    <div class="div-3">
      <div>
        <router-link to="/#">
          <img :src="url+item.icon" class="div-3-1" />
        </router-link>
      </div>
      <div>
        <span class="div-3-2">
          <b>{{item.uname}}</b>
        </span>
        <span class="div-3-2-1">
          <b>lv.24</b>
        </span>
        <span class="div-3-3">2019-10-22</span>
      </div>
    </div>
    <!-- <div class="div-4">
      <img src="../assets/wKgBs12MhfaAKsF8AAABrWEZT5g444.png" class="div-4-1" />
      <span class="div-4-2">本回答荣获</span>
      <span class="div-4-2">金牌回答</span>
    </div> -->
    <div class="div-5">
      <p>{{item.subtitle}}</p>
    </div>
    <div class="div-6">
      <span class="div-6-0">
        <img src="../assets/wp.png" class="div-6-1" />
        <b>24</b>
      </span>
      <span class="div-6-0">
        <img src="../assets/12132.png" class="div-6-1" />
        <b>51</b>
      </span>
      <span class="div-6-0">
        <img src="../assets/111115.png" class="div-6-1" />
        <b>10</b>
      </span>
    </div>
    <hr /></div>
    <!-- 循环 -->
  
    <div class="side">
      <div class="sidee">
        <button type="default" size="normal">关注此行</button>
        <router-link :to="{path:'/huida',query:{aid:quetion.aid}}">
          <button class="me" type="danger" >评论问题</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      quetion: "",
      list: [],
      commen: [],
      url:""

    };
  },

  created() {
    this.url=this.host
    var aid = this.$route.query.aid;
    this.axios.get("user/quetion", { params: { aid: aid } }).then(res => {
      this.quetion = res.data.result[0];
      console.log(this.quetion);
      console.log(res);
    });
    this.axios.get("user/huida",{params:{aid:aid}}).then(res=>{
      this.commen=res.data.result;
      // console.log(this.commen)
    })
  }
};
</script>
<style scoped>
/* .divm{
        /* padding: 0 0.5rem; 
    } */
.title_1 {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.1;
  padding: 0 0.5rem;
}
.my-b {
  font-size: 0.3rem;
  line-height: 1rem;
  /* position: relative; */
}
.my-b span {
  width: 70%;
}
.my-b_1 {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-top: 0.2rem;
  padding: 0 0.5rem;
}
.span-0 {
  font-size: 0.8rem;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  color: #242629;
  position: relative;
  top: -0.5rem;
}
.span-1 {
  margin-right: 0;
}
.my-b_2 {
  width: 2.5rem;
  height: 2rem;
  float: right;
}
.p-0 {
  margin-top: 0.7rem;
  padding: 0 0.5rem;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #130627;
  line-height: 1.5rem;
}
.div-2 {
  padding: 0 0.5rem;
}
.b-0 {
  margin-right: 0.08rem;
}
.lin {
  text-decoration: none;
}
.lin b {
  color: #130627;
  float: right;
}
.div-2 {
  margin-top: 0.4rem;
}
.mydiv {
  background: #d9d9d9;
  width: 100%;
  height: 0.5rem;
  margin: 0.5rem;
  margin-left: 0;
}
.div-3 {
  display: flex;
  padding: 0.8rem;
}
.div-3-1 {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  /* padding-right: 0.5rem; */
}
.div-3-2 {
  position: relative;
  top: -0.3rem;
  font-size: 1rem;
  padding-left: 0.5rem;
  color: #474747;
  /* font-weight: 600; */
}
.div-3-2-1 {
  position: relative;
  top: -0.3rem;
  font-size: 0.5rem;
  padding-left: 0.3rem;
  background-color: rgba(255, 219, 38, 0.5);
  border-radius: 0.3rem;
  color: #242629;
}
.div-3-3 {
  display: block;
  position: relative;
  top: -0.1rem;
  padding-left: 0.5rem;
  font-size: 0.5rem;
}
.div-4 {
  margin: 0 0.8rem;
  background-color: antiquewhite;
  height: 3rem;
  border-radius: 1rem;
}
.div-4-1 {
  margin-left: 0.8rem;
  width: 1.7rem;
  height: 1.7rem;
  display: inline-block;
  position: relative;
  top: 0.5rem;
}
.div-4-2 {
  font-family: "PingFangSC-Light", Arial, Helvetica, sans-serif,
    "Hiragino Sans GB";
  color: #b37012;
}
.div-5 {
  padding: 0.8rem;
}
.div-5 p {
  font-family: PingFangSC-Regular;
  font-family: PingFangSC-Regular;
  font-size: 0.8rem;
  /* font-weight: 300; */
  color: #130627;
  line-height: 1.5rem;
}
.div-6 {
  padding: 0 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  padding-bottom: 0.8rem;
}
.div-6-1 {
  width: 2rem;
  height: 1.8rem;
}
.div-6-0 b {
  position: relative;
  top: -0.5rem;
  font-size: 0.3rem;
}
/* 回答 按钮 */
.b_btn {
  width: 100%;
  background-color: #fff;
  position: fixed;
  bottom: 0px;
  box-shadow: 0px 6px 9px #333;
}
.b_btn > div {
  display: flex;
  height: 50px;
  justify-content: space-around;
  align-items: center;
}
.b_btn i {
  display: inline-block;
  width: 21px;
  height: 21px;
  background: url("../assets/sprite-icon01.png") no-repeat;
  background-size: 165px 165px;
  background-position: -129px -82px;
  position: relative;
  top: 3px;
}
.b_btn b {
  display: inline-block;
  width: 50%;
  text-align: center;
}
.btn_right > i {
  background-position: -37px -144px;
  /* left:10%; */
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
  font-size: 1.2rem;
  border-radius: 0.5rem;
  border: 0.05rem solid #fff;
  outline: none;
}
.me {
  
  width: 10.75rem;
  padding: 1rem 0;
  font-size: 1.2 rem;
  border-radius: 0.5rem;
  border: 0.05rem solid #fff;
  outline: none;
  background: #fff;
  color: #666;
}
.sidee > button:first-child {
  background: #fff;
  color: #666;
}
</style>