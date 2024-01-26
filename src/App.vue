<template>
    <div id="app" class="app">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    watch: {
    '$route'(val) {
      if (!document.getElementsByClassName('app') || !document.getElementsByClassName('app').length) {
        return
      }
      document.getElementsByClassName('app').scrollTop = 0
    }
  }
}
</script>
<style>
   @import "./assets/css/index.css";
    @import "./assets/css/main.css";
    @import "./assets/css/color-dark.css";     /*深色主题*/
    /*@import "./assets/css/theme-green/color-green.css";   浅绿色主题*/
</style>