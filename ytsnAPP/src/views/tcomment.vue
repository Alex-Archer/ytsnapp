<template>
  <div>
    <mt-header style="background:#FFF; color:#ff9d00" title="游记评论">
        <mt-button  slot="left" icon="back" @click="go"></mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="mydiv">
      <textarea name="msg" id="mytext" cols="30" rows="10" v-model="comment"></textarea>
    </div>
    <div class="mydiv-1">
      <button @click="btn" class="mybtn">发 表 评 论</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      comment: ""
    };
  },
  methods: {
    go(){
      this.$router.go(-1)
    },
    btn() {
      this.axios.get("user/user").then(res => {
        if (res.data.code != 1) {
          this.$messagebox("消息", "请登录");
          this.$router.push("/login");
          return;
        }
        var uid = res.data.result[0].uid;
        var tid = this.$route.query.tid;
        var comment = this.comment;
        if (comment.length < 5) {
          this.$messagebox("消息", "评论不能少于五个字");
          return;
        }
        console.log(tid);
        this.axios
          .post("user/comment/tarval", { uid, tid, comment })
          .then(res => {
            if ((res.data.code = 1)) {
              this.$messagebox("消息", "评论成功");
              history.go(-1);
            }
            console.log(res);
          });
      });
    }
  }
};
</script>

<style scoped>
.mydiv {
  text-align: center;
}
#mytext {
  background: #999;
  width: 90%;
  /* tex */
  margin: 1rem;
}
.mydiv-1 {
  text-align: center;
}

.mybtn {
  width: 80%;
  height: 3rem;
  background: #ff9d00;
  font-size: 1.5rem;
  color: #fff;
  border-radius: 0.5rem;
  border: 0;
  outline: none;
}
</style>