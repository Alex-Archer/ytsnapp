<template>
  <div>
    <mt-header style="background:#999" title="写游记">
      <router-link to="/user" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="title">
      <h2>写游记</h2>
    </div>
    <div data-page="releaseNotice">
      <p style="margin-left:1rem;">封面图片:</p>
      <div class="positi">
        <input class="input" style="opacity:0;" type="file" @change="fimg" />
        <div class="file">
          <img :src="img" alt />
        </div>
      </div>
      <div class="pspti">
        <p>标题：</p>
        <input v-model="title" type="text" class="biaoti" />
        <br />
        <p>副标题</p>
        <input type="text" v-model="subhead" class="biaoti" />
        <p>地点：</p>
        <input type="text" v-model="site" />
        <br />
      </div>
      <vue-html5-editor @change="updateData" :content="content" :height="500"></vue-html5-editor>
      <mt-button size="large" @click="updata">发表</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uid: "", //用户id

      img: "", //封面图
      title: "", //标题
      subhead: "", //副标题
      date: "", //时间
      site: "", //地点
      content: "" //主体内容
    };
  },
  methods: {
    fimg(e) {
      let _this = this;
      var file = e.currentTarget.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function(e) {
        _this.img = e.target.result;
      };
      console.log(file);

      var params = new FormData();
      console.log(params);
      params.append("file", file);

      var config = {
        headers: { "Content-Type": "multipart/form-data" }
      };

      this.axios.post("fied/upload/timg", params, config).then(res => {
        if (res.data.err == 0) {
          console.log("上传失败");
        } else {
          this.img = res.data.img;
        }
      });
    },
    updateData(e = "") {
      this.content = e;
    },
    updata() {
      var aData = new Date(); //Wed Aug 21 2019 10:00:58 GMT+0800 (中国标准时间)
      this.date =
        aData.getFullYear() +
        "-" +
        (aData.getMonth() + 1) +
        "-" +
        aData.getDate();
      var date = this.date;
      var site = this.site;
      var uid = this.uid;

      var title = this.title;
      var subhead = this.subhead;
      var content = this.content;
      var himg = this.img;
      if (site.length > 4) {
        this.$toast("地点不能多于四个字");
        return;
      } else {
        this.axios
          .post("user/psp/text", {
            uid,
            himg,
            title,
            date,
            site,
            content,
            subhead
          })
          .then(res => {
            if (res.data.code == 1) {
              console.log("发表成功");
              this.$messagebox("消息", "发表成功");
            } else {
              console.log("发表失败");
            }
          });
      }
    }
  },
  created() {
    this.axios.get("user/user").then(res => {
      this.uid = res.data.result[0].uid;
    });
  }
};
</script>
<style scoped>
.title {
  width: 100%;
  height: 30px;
  text-align: center;
  padding: 20px 0;
}
.positi {
  position: relative;
  margin-left: 1rem;
  margin-bottom: 2rem;
}
.file {
  width: 10rem;
  height: 10rem;
  background: url("../assets/file.jpg") no-repeat;
  background-size: 10rem 10rem;
  border: 1px dashed #333;
}
.file > img {
  width: 100%;
}
.input {
  width: 10rem;
  height: 10rem;
  position: absolute;
  top: 0px;
  left: 0px;
}
.pspti {
  margin-left: 1rem;
}
.biaoti {
  width: 90%;
  height: 3rem;
}
</style>
