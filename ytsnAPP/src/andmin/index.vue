<template>
  <div>
    <div class="flex header colorf">
      <div>andmin 1.0版本</div>
      <div>
        <div>
          <span>管理员:{{user}}</span>
          <i></i>
          <router-link to="/" class="colorf">前台首页</router-link>
        </div>
      </div>
    </div>
    <div class="main flex">
      <div class="list-left" :style="cnaHeight">
        <ul>
          <li>
            <mt-navbar v-model="selected" style="flex-direction:column;background-color:#eeeeee">
              <mt-tab-item id="6">数据统计</mt-tab-item>
              <mt-tab-item id="1">用户管理</mt-tab-item>
              <mt-tab-item id="2">游记文章</mt-tab-item>
              <mt-tab-item id="3">攻略文章</mt-tab-item>
              <mt-tab-item id="4">问答系统</mt-tab-item>
              <mt-tab-item id="5">结伴系统</mt-tab-item>
              <mt-tab-item id="7">轮播广告</mt-tab-item>
            </mt-navbar>
          </li>
        </ul>
      </div>
      <div class="fun-right">
        <mt-tab-container v-model="selected" >
          <mt-tab-container-item id="1">
            <table>
              <tr>
                <th>id</th>
                <th>用户名</th>
                <th>头像</th>
                <th>密码</th>
                <th>邮箱</th>
                <th>操作</th>
              </tr>
              <tr v-for="(item,i) of userlist" :key="i">
                <td>{{item.uid}}</td>
                <td>{{item.uname}}</td>
                <td class="userimg">
                  <img :src="url+item.icon" alt />
                </td>
                <td>{{item.upwd}}</td>
                <td>{{item.email}}</td>
                <td>
                  <mt-button :data-id="item.uid" @click="del" class="btn">删除</mt-button>
                </td>
              </tr>
            </table>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <div class="flex">
              <p>
                <mt-button class="btn" @click="allcha">查询全部</mt-button>
              </p>
              <p>
                <mt-button class="btn" @click="uidcha">uid查询</mt-button>
              </p>
              <p>
                <mt-button class="btn" @click="tidcha">tid查询</mt-button>
              </p>
              <p>
                <mt-button class="btn" @click="dimcha">模糊查询</mt-button>
              </p>
            </div>
            <div>
              <table v-for="(item,i) of tralist" :key="i" class="ttab">
                <tr>
                  <td>{{item.uname}}</td>
                  <td>
                    <img style="width:2rem;height:2rem;border-radius:50%" :src="url+item.icon" alt />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img style="width:10rem" :src="url+item.himg" alt />
                  </td>
                  <td>{{item.title}}</td>
                </tr>
                <tr style="text-align: center">
                  <td></td>
                  <td>
                    <mt-button>预览</mt-button>
                    <mt-button :data-tid="item.tid" @click="tradel">删除</mt-button>
                  </td>
                </tr>
              </table>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
            <div class="flex">
              <p>
                <mt-button class="btn" @click="pspcha">查询全部</mt-button>
              </p>
              <p>
                <mt-button class="btn" @click="pspuidcha">uid查询</mt-button>
              </p>
              <p>
                <mt-button class="btn" @click="pidcha">pid查询</mt-button>
              </p>
              <p>
                <mt-button class="btn" @click="pmhcha">模糊查询</mt-button>
              </p>
            </div>
            <div>
              <table v-for="(item,i) of psplist" :key="i" class="ttab">
                <tr>
                  <td>{{item.uname}}</td>
                  <td>
                    <img style="width:2rem;height:2rem;border-radius:50%" :src="url+item.icon" alt />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img style="width:10rem" :src="url+item.himg" alt />
                  </td>
                  <td>{{item.title}}</td>
                </tr>
                <tr style="text-align: center">
                  <td></td>
                  <td>
                    <mt-button>预览</mt-button>
                    <mt-button :data-pid="item.pid" @click="pspdel">删除</mt-button>
                  </td>
                </tr>
              </table>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="4">
            <mt-button @click="askall" class="btn">查询</mt-button>
            <table>
              <tr>
                <th>aid</th>
                <th>uid</th>
                <th>问题</th>
                <th>操作</th>
              </tr>
              <tr v-for="(item, index) in asklist" :key="index">
                <td>{{item.aid}}</td>
                <td>{{item.uid}}</td>
                <td>{{item.ask}}</td>
                <td>
                  <mt-button :data-aid="item.aid" @click="wendel" class="btn">删除</mt-button>
                </td>
              </tr>
            </table>
          </mt-tab-container-item>
          <mt-tab-container-item id="5">
            <mt-button @click="jiecha" class="btn">查询</mt-button>
            <table>
              <tr>
                <th>fid</th>
                <th>用户名</th>
                <th>问题</th>
                <th>操作</th>
              </tr>
              <tr v-for="(item, index) in jielist" :key="index">
                <td>{{item.fid}}</td>
                <td>{{item.uname}}</td>
                <td>{{item.title}}</td>
                <td>
                  <mt-button :data-fid="item.fid" @click="jiedel" class="btn">删除</mt-button>
                </td>
              </tr>
            </table>
          </mt-tab-container-item>
          <mt-tab-container-item id="6">
            <p>待添加....</p>
          </mt-tab-container-item>
          <mt-tab-container-item id="7">
            <p>待添加....</p>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cnaHeight: { height: screen.height + "px" },
      selected: "1",
      userlist: [], //用户列表数据
      user: "", //管理员
      tralist: [], //游记列表
      psplist: [],
      asklist: [],
      jielist: [],
      url: ""
    };
  },
  methods: {
    del(e) {
      var uid = e.target.dataset.id;
      this.$messagebox
        .confirm("确定执行此操作?")
        .then(action => {
          this.axios.post("and/del", { uid: uid }).then(res => {
            if (res.data.code == 1) {
              this.axios.post("user/Xuser").then(res => {
                this.userlist = res.data;
              });
            }
          });
        })
        .catch(err => {
          this.$toast({
            message: "已取消"
          });
        });
    },
    allcha() {
      //查询全部游记
      this.axios.get("and/seek/travels").then(res => {
        if (res.data.code == 0) {
          this.$toast("没有数据");
          return;
        }
        this.tralist = res.data;
      });
    },
    uidcha() {
      //游记用户id查询
      this.$messagebox
        .prompt("请输入需要查询的用户id")
        .then(({ value, action }) => {
          if (value == null) {
            this.$toast({
              message: "不能查询空值"
            });
          } else {
          }
        })
        .catch(err => {
          this.$toast({
            message: "已取消"
          });
        });
    },
    tidcha() {
      //游记tid查询
      this.$messagebox
        .prompt("请输入需要查询的文章id")
        .then(({ value, action }) => {
          if (value == null) {
            this.$toast({
              message: "不能查询空值"
            });
          } else {
          }
        })
        .catch(err => {
          this.$toast({
            message: "已取消"
          });
        });
    },
    dimcha() {
      //游记模糊查询
      this.$messagebox
        .prompt("请输入内容")
        .then(({ value, action }) => {
          if (value == null) {
            this.$toast({
              message: "不能查询空值"
            });
          } else {
          }
        })
        .catch(err => {
          this.$toast({
            message: "已取消"
          });
        });
    },
    tradel(e) {
      //删除指定游记文章
      var tid = e.target.dataset.tid;
      this.$messagebox
        .confirm("确定执行此操作?")
        .then(action => {
          this.axios.get("and/tradel", { params: { tid: tid } }).then(res => {
            if (res.data.code == 1) {
              this.$toast({
                message: "删除成功"
              });
              this.allcha();
            }
          });
        })
        .catch(err => {
          this.$toast({
            message: "已取消"
          });
        });
    },
    pspcha() {
      //查询全部攻略文章
      this.axios.get("and/seek/psp").then(res => {
        if (res.data.code == 0) {
          this.$toast("没有数据");
          return;
        }
        this.psplist = res.data;
      });
    },
    pspuidcha() {
      //游记用户id查询
      this.$messagebox
        .prompt("请输入需要查询的用户id")
        .then(({ value, action }) => {
          if (value == null) {
            this.$toast({
              message: "不能查询空值"
            });
          } else {
          }
        })
        .catch(err => {
          this.$toast({
            message: "已取消"
          });
        });
    },
    pidcha() {
      //游记tid查询
      this.$messagebox
        .prompt("请输入需要查询的文章id")
        .then(({ value, action }) => {
          if (value == null) {
            this.$toast({
              message: "不能查询空值"
            });
          } else {
          }
        })
        .catch(err => {
          this.$toast({
            message: "已取消"
          });
        });
    },
    pmhcha() {
      //游记模糊查询
      this.$messagebox
        .prompt("请输入内容")
        .then(({ value, action }) => {
          if (value == null) {
            this.$toast({
              message: "不能查询空值"
            });
          } else {
          }
        })
        .catch(err => {
          this.$toast({
            message: "已取消"
          });
        });
    },
    pspdel(e) {
      //删除指定游记文章
      var pid = e.target.dataset.pid;
      this.$messagebox
        .confirm("确定执行此操作?")
        .then(action => {
          this.axios.get("and/pspdel", { params: { pid: pid } }).then(res => {
            if (res.data.code == 1) {
              this.$toast({
                message: "删除成功"
              });
              this.pspcha();
            }
          });
        })
        .catch(err => {
          this.$toast({
            message: "已取消"
          });
        });
    },
    askall() {
      this.axios.get("and/seachask").then(res => {
        this.asklist = res.data.result;
        if (res.data.result == undefined) {
          this.$toast("没有数据");
        }
      });
    },
    wendel(e) {
      var aid = e.target.dataset.aid;
      this.axios.get("and/askdel", { params: { aid: aid } }).then(res => {
        if (res.data.code == 1) {
          this.$toast("删除成功");
          this.askall();
        } else {
          this.$toast("删除失败");
        }
      });
    },
    jiecha() {
      this.axios.get("and/seachfriend").then(res => {
        this.jielist = res.data.result;
        if (res.data.result == undefined) {
          this.$toast("无结伴数据");
        }
      });
    },
    jiedel(e) {
      var fid = e.target.dataset.fid;
      this.axios.get("and/jiedel", { params: { fid: fid } }).then(res => {
        if (res.data.code == 1) {
          this.$toast("删除成功");
          this.jiecha();
        } else {
          this.$toast("删除失败");
        }
      });
    }
  },
  created() {
    this.url = this.host;
    this.axios.get("user/isadn").then(res => {
      if (res.data.code == 0) {
        this.$router.push({ path: "/andmin" });
        return;
      } else if (res.data.code == 1) {
        this.user = res.data.andmin;
      }
    });
    this.axios.post("user/Xuser").then(res => {
      this.userlist = res.data;
    });
    //   }
    // });
  }
};
</script>
<style scoped>
tr > th,
tr > td {
  padding: 0.2rem 0.1rem;
  text-align: center;
}
table {
  width: 100%;
  border: 1px solid rgb(219, 216, 216);
  border-radius: 1rem;
  margin: 1rem 0;
}
.ttab td {
  width: 50%;
}
.btn {
  font-size: 0.5rem;
}
.userimg > img {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}
.header {
  height: 2rem;
  background-color: #222;
  line-height: 2rem;
  padding: 0 1rem;
}
.colorf {
  color: rgba(255, 255, 255, 0.7);
}
.list-left {
  width: 20%;
  background-color: #eeeeee;
  text-align: center;
}
.list-left li {
  padding: 1rem 0;
}
.fun-right {
  width: 80%;
  padding: 1rem;
}
.justify {
  justify-content: space-around;
}
</style>