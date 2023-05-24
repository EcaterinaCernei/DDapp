<template>
  <div class="app-container">
    <section id="header">
      <SiteNavbar/>
    </section>
    <section id="main">
      <router-view/>
    </section>
    <section id="footer">
<!--      CONTENT FOOTER-->
    </section>

  </div>
</template>

<script>
import SiteNavbar from './components/SiteNavbar.vue'

export default {
  name: 'App',
  components: {
    SiteNavbar,

  }

}
</script>

<style lang="scss">
.app-container {

}
</style>
