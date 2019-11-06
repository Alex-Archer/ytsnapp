<template>
  <div>
    <mt-header style="background:#FFF; color:#ff9d00" title="问达人">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!-- 标题图片 -->
    <img src="../assets/h5_banner.jpg" id="my_img" />
    <!--搜索框  -->
    <div style="height:4rem" id="mint-searchbar">
      <mt-search cancel-text="取消" placeholder="搜索"></mt-search>
    </div>
    <hr />
    <div class="text">
      <!-- 文章推荐 -->
      <!--文章 -->
      <div class="divmy" v-for="(item,i) of litem" :key="i">
        <router-link
          :to="{path:'/wenzhang',query:{aid:item.aid}}"
        >
          <div class="my-class">
            <h2 class="my-h1">{{item.ask}}</h2>
            <p class="my-p">
              <img :src="url+item.icon" />
              <span>{{item.uname}}</span>
            </p>
          </div>
          <!-- 布局 -->
          <div class="m-div">
            <div class="m-img">
              <img src="../assets/32.jpg" />
            </div>
            <div class="m-div_2">
              <p>{{item.title}}</p>
            </div>
          </div>
          <!--  底部 -->
          <div class="myspan">
            <span class="span_1">{{item.subtitle}}</span>
            <span class="span_2">
              <b>876464</b>
              <b>浏览</b>
              <b>.</b>
              <b>46465回答</b>
              <b>.</b>
              <b class="my-b">87544顶</b>
            </span>
          </div>
        </router-link>
      </div>

      <div class="mydiv"></div>
      <button class="my-bin_1" @click="log">+ 我要提问</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      litem: [],
      url:""
    };
  },
  methods: {
    log() {
      this.$router.push("tiwen");
      // if()
    }
  },
  created() {
    this.url=this.host
    this.axios.get("user/seachask").then(res => {
      this.litem = res.data.result;
      console.log(res.data.result);
    });
  }
};
</script>
<style scoped>
.text {
  background-color: #d9d9d9;
}
.myrouter {
  text-decoration: none;
  /* width: 90%;
  height: 80%; */
}
.divmy {
  background-color: #fff;
  padding: 10px 0px;
  margin-bottom: 10px;
}
#my_img {
  width: 100%;
}
.btn-a {
  display: inline-block;
  width: 4rem;
  height: 3.5rem;
  background: url("../assets/i_head5.png");
  background-size: 6.25rem 18.75rem;
}
/* .h-1{
  display: inline-block;
  font-size: 20px;
  color: #6666;
  text-align: center;
} */

.my-class {
  background: #fff;
  padding: 0.5rem;
}
.my-h1 {
  color: black;
  font-weight: normal;
  font-size: 1.3rem;
  /* margin-left: 0.5rem; */
  margin-bottom: 0.5rem;
}
.my-p {
  color: #666;
  font-size: 1rem;
  position: relative;
}
.my-p img {
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  margin-right: 0.3rem;
  position: absolute;
}
.my-p span {
  margin-left: 2rem;
  line-height: 1rem;
}
span {
  font-size: 15px;
  color: #999;
  font-weight: normal;
}

.span_1 {
  float: left;
  font-size: 0.8rem;
}
.span_2 {
  float: right;
  font-size: 0.8rem;
}
.m-div {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.m-img {
  width: 40%;
}
.m-img > img {
  width: 95%;
  height: 100%;
  padding: 0.2rem;
  margin-left: 0.5rem;
}
.m-div_2 {
  width: 55%;
  font-size: 1rem;
  color: #666;
  line-height: 1.8rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
}
.my-b {
  color: goldenrod;
}
.myspan {
  padding: 0.5rem;
  padding-bottom: 1rem;
}
.mydiv {
  background: #FFF;
  width: 100%;
  height: 3rem;
  margin: 0.5rem;
  margin-left: 0;
}
.my-bin_1 {
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 3.5rem;
  background-color: #ffa800;
  color: #fff;
  font-size: 1rem;
  border: 0.6rem solid #fff;
}
</style>