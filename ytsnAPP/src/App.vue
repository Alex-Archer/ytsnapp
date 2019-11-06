<template>
  <div id="app">
    <router-view v-if="isRouter" />
  </div>
</template>

<script>
export default {
  name: 'App',
  provide(){
    return{
      reload:this.reload
    }
  },
  data(){
    return{
      isRouter:true
    }
  },
  methods: {
    reload(){
      this.isRouter=false
      this.$nextTick(()=>{
        this.isRouter=true
      })
    }
  },
}
</script>
<style>
#app{
  height:100%;
}
  *{
    margin:0;
    padding: 0;
  }
  a{
    text-decoration: none;
    color:#333;
  }
  .flex{
  display:flex;
  justify-content:space-between;
}
  ul{
    list-style:none
  }
</style>
