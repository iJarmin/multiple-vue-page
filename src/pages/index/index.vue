<template>
  <div id="app">
    <img src="../../assets/logo.png">
    <button @click="toOther('传到别的组件了')">点我向其他组件传值</button>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'app',
  methods:{
    ...mapMutations({
      toOther:'DEMO'
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
