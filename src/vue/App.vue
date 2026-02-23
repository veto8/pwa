<script>
import Header from './Header.vue'
import Description from './Description.vue'

export default {
  components: { Header,Description }
}
</script>



<template>
  <div id="app">
    <Header />

    <Description />
    
    <main class="container">
      <router-view />
    </main>
  </div>
</template>




