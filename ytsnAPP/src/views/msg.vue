<template>
  <div>
    <mt-header style="background:#FFF; color:#ff9d00" title="评论攻略">
        <mt-button  slot="left" icon="back" @click="goback"></mt-button>
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
      comment: "", //评论内容
      userImg: "", //用户头像
      uname: "", //用户名字
      uid: "" //用户id
    };
  },
  methods: {
    goback(){
      this.$router.go(-1)
    },
    btn() {
      this.axios.get("user/user").then(res => {
        var uid = res.data.result[0].uid;
        var comment = this.comment;
        var pid = this.$route.query.pid;
        if (comment.length < 5) {
          this.$messagebox("消息", "评论不能少于5个字");
          return;
        }
        this.axios
          .post("user/psp/comment", { pid,comment, uid })
          .then(res => {
            console.log(res);
          });
      });
      //   console.log(pid);
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

