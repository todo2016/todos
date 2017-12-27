<template>
  <div id="app">
    <v-header></v-header>

    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header';

  export default {
    name: 'app',
    components: {
      'v-header': header
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus">
  @import "../static/css/reset.css"
  @import "./common/stylus/index.styl"
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50

</style>
