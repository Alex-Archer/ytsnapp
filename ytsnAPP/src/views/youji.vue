<template>
  <div>
    <mt-header style="background:#FFF; color:#ff9d00" title="看游记">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="titlebg">
      <div class="fs">
        <span>|16|</span>
        <span>2019|</span>
        <span>蜂首纪念|</span>
      </div>
      <div class="titlelb">
        <mt-swipe :auto="4000">
          <mt-swipe-item>
            <a href>
              <img class="image" src="../assets/youji1.jpeg" />
              <div class="footlb">
                <h2>【神雕侠侣】广州味，能否满足...</h2>
                <p>我是一蕊 我在广州</p>
              </div>
            </a>
          </mt-swipe-item>
          <mt-swipe-item>
            <a href>
              <img class="image" src="../assets/youji2.png" />
              <div class="footlb">
                <h2>【神雕侠侣】广州味，能否满足...</h2>
                <p>我是一蕊 我在广州</p>
              </div>
            </a>
          </mt-swipe-item>
          <mt-swipe-item>
            <a href>
              <img class="image" src="../assets/youji3.png" />
              <div class="footlb">
                <h2>【神雕侠侣】广州味，能否满足...</h2>
                <p>我是一蕊 我在广州</p>
              </div>
            </a>
          </mt-swipe-item>
          <mt-swipe-item>
            <a href>
              <img class="image" src="../assets/youji4.png" />
              <div class="footlb">
                <h2>【神雕侠侣】广州味，能否满足...</h2>
                <p>我是一蕊 我在广州</p>
              </div>
            </a>
          </mt-swipe-item>
          <mt-swipe-item>
            <a href>
              <img class="image" src="../assets/youji5.png" />
              <div class="footlb">
                <h2>【神雕侠侣】广州味，能否满足...</h2>
                <p>我是一蕊 我在广州</p>
              </div>
            </a>
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
    <div>
      <div v-for="(item,i) in content" :key="i">
        <router-link :to="{path: '/tuijian', query: {tid: item.tid}}">
          <div class="ltext">
            <div class="title">
              <h3>{{item.title}}</h3>
              <div class="user">
                <img :src="url+item.icon" />
                <span>{{item.uname}}</span>
              </div>
            </div>
            <div class="xin">
              <img :src="url+item.himg" />
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <hr />
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: "",
      aa: "",
      url: ""
    };
  },
  created() {
    this.url = this.host;
    var content = this.content;
    var aa = this.aa;
    this.axios.get("user/seek/travels").then(res => {
      if(res.data.code==0){
        return;
      }
      this.content = res.data;
      console.log(res.data);
    });
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.titlebg {
  width: 100%;
  height: 410px;
  position: relative;
  background-size: cover;
  padding: 0.8rem 0rem 0;
  background: #309296;
}
.fs {
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 5px;
}
.fs > span {
  font-size: 25px;
  color: #fff;
}
.titlelb {
  height: 300px;
  text-align: center;
  padding: 0 10px;
}
.footlb {
  background: #fff;
  height: 70px;
}
.image {
  width: 100%;
}
.footlb > h2,
p {
  color: black;
}
.footlb > p {
  font-size: 15px;
}
.ltext {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
}
.title {
  width: 40%;
  margin-left: 10px;
}
.user {
  width: 100%;
  display: flex;
  align-items: center;
}
.user img {
  width: 1.56rem;
  height: 1.56rem;
  border-radius: 50%;
  margin-right: 10px;
}
.xin {
  width: 50%;
}
.xin img {
  width: 100%;
}
.title {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
