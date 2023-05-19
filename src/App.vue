<template>
 <div id="app">
<SiteNavbar />


<div class="auth-wrapper">
  <div class="auth-inner">
    <router-view />
  </div>
  </div>
  </div>
</template>

<script>
import SiteNavbar from './components/SiteNavbar.vue'
export default {
  name: 'App',
  components:{
    SiteNavbar,

  }
 
}
</script>

<style>

</style>
