<template>
  <div>
    <mt-header style="background:#FFF; color:#ff9d00" title="回答">
      <router-link to="/wenzhang" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="div-my">
      <!-- 问题 -->
    </div>
    <div class="div-m">
      <div class="div-my_2">
        <textarea id="text-a" rows="15" v-model="subtitle"></textarea>
      </div>
      <div class="div-my_3">
        <!-- <router-link :to="{path:'/wenzhang',query:{list,uid}}"> -->
          <button class="btn-my1" @click="btn">回答</button>
        <!-- </router-link> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
//接参数
      subtitle: ""  // 问题

    };
  },
  created() {

  },
  methods: {
    btn() {
      var aid=this.$route.query.aid;
      var subtitle=this.subtitle
      this.axios.get("user/user").then(res=>{
      var uid=res.data.result[0].uid
      var obj={aid,uid,subtitle}
      this.axios.post("user/miss",obj).then(res=>{
        if(res.data.code==1){
          this.$router.go(-1)
        }
      })

    })
    }
  }
};
</script>
<style  scoped>
.div-m {
  padding: 0 15px;
}
.div-my {
  width: 100%;
  padding: 15px;
  background-color: #f5f5f5;
  font-size: 16px;
  color: #666;
  line-height: 1.6em;
  box-sizing: border-box;
}

.div-my_2 {
  padding-top: 10px;
}
.div-my_2 p {
  font-size: 15px;
  color: #666;
  line-height: 3rem;
}
#text-a {
  background-color: #fff;
  width: 97%;
  outline: none;
  border: 2px solid #ffa800;
  border-radius: 5px;
  font-size: 15px;
  color: #666;
  padding: 3px 3px;
  font-family: "PingFangSC-Light", Arial, Helvetica, sans-serif;
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
</style>