<template>
  <div class="div-m">
    <mt-header style="background:#FFF; color:#ff9d00" title="回答">
      <router-link to="/yemian" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="div-my">
      <!-- 输入框 -->
      <input type="text" placeholder="请输入你的问题，不少于10个字哦" v-model="list" class="in-my" />
    </div>
    <!-- 问题说明  框-->
    <div class="div-my_2">
      <p>问题说明 (可选)</p>
      <textarea id="text-a" rows="15" v-model="title"></textarea>
    </div>
    <div class="div-my_3">
      <p>选择目的地</p>
      <div class="m-div_7">
        <!-- <div >
          <img src="../assets/loc.png" class="img-my"> 
        </div>-->
        <input type="text" class="my-input" v-model="subtitle" />
      </div>
      <router-link to="">
        <button class="btn-my1" @click="btn">发布问题</button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: "",
      title: "",
      subtitle: "",
      uid: ""
    };
  },
  methods: {
    btn() {
      this.$router.push("/yemian");
      this.axios
        .get("user/ask", {
          params: {
            ask: this.list,
            title: this.title,
            subtitle: this.subtitle
          }
        })
        .then(res => {
          this.uid = res.data.uid;
          this.$router.go(-1)
          this.$toast("发布成功")
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      // this.$roter.push("yemian")
    }

  },
  created() {}
};
</script>
<style  scoped>
.div-m {
  padding: 0 15px;
}
.div-my {
  margin-top: 2rem;
  text-align: center;
}
.in-my {
  /* text-align: center; */
  height: 3rem;
  width: 100%;
  background-color: #f0f0f0;
  font-size: 1rem;
  color: #666;
  border-radius: 0.5rem;
  border: 0;
}
/* .div-my_2{
} */
.div-my_2 p {
  font-size: 15px;
  color: #666;
  line-height: 3rem;
}
#text-a {
  background-color: #f0f0f0;
  width: 94%;
}
.div-my_3 {
  font-size: 15px;
  color: #666;
  line-height: 3rem;
}
.my-input {
  height: 2.3rem;
  width: 100%;
  background-color: #f0f0f0;
  font-size: 1rem;
  color: #666;
  border-radius: 0.5rem;
  border: 0;
  outline: none;
  padding-left: 4rem;
  background-image: url("../assets/loc.png");
  background-repeat: no-repeat;
  background-size: 1.6rem;
  background-position: 1.6rem;
  box-sizing: border-box;
}
.btn-my1 {
  margin-top: 0.8rem;
  background-color: #ffa800;
  width: 100%;
  height: 2rem;
  border-radius: 0.5rem;
  color: #fff;
  font-size: 1rem;
  border: 0;
}
.m-div_7 {
  display: flex;
  overflow: hidden;
}
.m-div_7 img {
  height: 1.6rem;
  /* width: 10%; */
  position: relative;
}
.img-my {
  position: absolute;
  /* left: 1.5rem; */
}
</style>