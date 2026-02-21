<template>
    <Header />
    <main class="container">
      <router-view />
    </main>
</template>

<script>
import Header from './Header.vue'
export default {
  components: { Header }
}
</script>




