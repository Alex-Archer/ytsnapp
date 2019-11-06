<template>
    <div>
        <div>
            <img class="titleimg" src="../assets/jiaotang.jpg">
        </div>
        <div class="titletext">
            <span>在越南过个人少景不错的国庆</span>
        </div>
        <div class="texttime">
             <span>19-10-12</span>
        </div>
        <div class="user">
            <div class="userimg">
                    <img src="../assets/user1.jpeg">
                    <span class="people">our</span>
            </div>
            <div class="loca">
                <h2>越南</h2>
            </div>
        </div>
        <div class="news">
            <span>我的出行信息</span>
            <ul class="allnews">
                <li class="time">出发时间:2019-09-30</li>
                <li class="peo">人物:家庭出游</li>
                <li class="money">人均费用:3540</li>
                <li class="day">出行天数:7</li>
            </ul>
        </div>
        <div class="detail">
            <div>
               <h2>东南亚的行程还是个事？随便定张机票吧</h2>
               <div class="rend">
                 <div class="text">
              <p class="_j_renditem" data-nodeindex="872665433" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: 0.8rem; word-break: break-all; font-size: 0.48rem; line-height: 1.5; color: rgb(71, 71, 71);"><a href="https://m.mafengwo.cn/travel-scenic-spot/mafengwo/10155.html" class="link _j_keyword_mdd" data-kw="绍兴" target="_self" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(71, 71, 71);">绍兴</a>&nbsp;如画<br style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">是一副典型的水墨山水图<br style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">且一定是挥毫泼墨那种洒脱的&nbsp;<a href="https://m.mafengwo.cn/travel-scenic-spot/mafengwo/23934.html" class="link _j_keyword_mdd" data-kw="江南" target="_self" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(71, 71, 71);">江南</a>&nbsp;山水<br style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">勾破得法，彰显大气<br style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">细细看来，却又精致到位，笔墨到点，意境深远<br style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><a href="https://m.mafengwo.cn/travel-scenic-spot/mafengwo/10155.html" class="link _j_keyword_mdd" data-kw="绍兴" target="_self" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(71, 71, 71);">绍兴</a>&nbsp;如诗<br style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">是一首温柔的抒怀情诗<br style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">且一定是柔柔细语那种缠绵的<br style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">清香四溢，沁人心脾<br style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">细细品来，却又伤感萧瑟，为人唏嘘<br style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></p><div class="ard-tit t9 _j_renditem _j_paragraph" data-index="1" data-nodeindex="872697640" id="_j_paragraph_1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(71, 71, 71); font-size: 24px;"><i class="day" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></i><h2 style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: 0.8rem; word-break: break-all; font-size: 0.64rem; line-height: 1.25;">沈园</h2></div><p class="_j_renditem" data-nodeindex="872704340" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: 0.8rem; word-break: break-all; font-size: 0.48rem; line-height: 1.5; color: rgb(71, 71, 71);">沈园被世人所熟识，大抵是因为陆游和唐婉的爱情故事，墙上题着两阙《钗头凤》，第一阙是陆游所作，第二阙是陆游的前妻唐婉第二年所和。两阙词虽然出自不同的人之手，却浸润着同样的情怨和无奈，因为它们共同诉说着一个凄婉的爱情故事。</p><p class="_j_renditem" data-nodeindex="872704340" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: 0.8rem; word-break: break-all; font-size: 0.48rem; line-height: 1.5; color: rgb(71, 71, 71);"><img src="http://172.242.18.31:3000/uimg/timg/1571456890995.jpg"><br></p>
                 </div>
               </div>
            </div>
        </div>
        <div class="put">
            <h3>推荐游记</h3>
        </div>
         <div class="ltext">
            <div class="title">
                <h3>|新加坡| ⭐️泡在汽水里的星岛夏日～</h3>
                <div class="user">
                    <img src="../assets/tuzi.jpeg">
                    <span>兔子家..在新加坡</span>
                </div>
            </div>
            <div class="xin">
                <img src="../assets/xin.jpg">
            </div>
    </div>
    <hr>
    </div>
</template>
<script>
export default {
    data(){
       return{}
    },
    created() {
       var tid=this.$route.query.tid
        this.axios.get("user/tidtra",{params:{
            tid:tid
        }}).then(res=>{
            console.log(res)
        })
    },
}
</script>
<style scoped>
    li{list-style: none}
    .titleimg{
        width: 100%;
    }
    .titletext{
      margin-top: 1.4rem;
      padding: 0 0.7rem;
    }
    .titletext>span{
        font-size: 2.5rem;
    }
    .texttime{
        padding-left:0.65rem;
        margin-top: 1.4rem;
    }
    .user{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
       

    }
    .userimg>img{
        width: 40%;
        border-radius:50%; 
    }
    .people{
        font-size: 1.4rem;
        color: #999;
    }
    .loca>h2{
        font-size:2.2rem;
        margin-left:-98%;
        line-height:6.1rem; 
        color: #111;
    }
    .news{
        border: 1px solid #e5e5e5;
        margin: 0 1.4rem;
        margin-top: 1.4rem;
    }
    .allnews{
        display: flex;
        flex-wrap: wrap;
        justify-content:space-between;
        padding: 0 1.4rem;
    }
    .time,.peo,.money,.day{
        font-size: 0.99rem;
        padding: 0.5rem 0.5rem;
    }
   .text{
       text-indent:1.56rem;
       font-size:1rem;
   }
   .rend{
       margin-top: 2rem;
   }
   .text img{
       width:100%;
   }
   .text p{
       text-indent:0 !important;
   }
   .detail{
       margin-top:5rem; 
       padding: 0 1.4rem;
   }
   .put{
       margin:5rem 0 0.5rem 0.8rem;

   }
.ltext{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.title{
    width: 40%;
    margin-left:10px; 
}
.user{
    width: 100%;

}
.user>img{
    width:20%;
    border-radius:50%; 
}
.xin{
    width: 50%;
}
.xin>img{
    width: 100%;
}
</style>
