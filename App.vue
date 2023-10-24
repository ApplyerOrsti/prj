<template>
  <div id="app">
    <HeaderSite></HeaderSite>
    <RouterView></RouterView>
    <FooterSide></FooterSide>
  </div>
</template>

<script>

import HeaderSite from './components/Header/HeaderSite.vue'
import FooterSide from './components/Footer/FooterSide.vue'

export default {
  name: 'App',
  components: { HeaderSite, FooterSide }
}
</script>

<style>

body {
  margin: 0;
  padding: 0;
}

</style>