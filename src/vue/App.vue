<template>
    <Header />
    <main class="container">
      <router-view />
    </main>
    <Add_to_desktop />    
</template>

<script>
import Header from './Header.vue';
import Add_to_desktop from './Add_to_desktop.vue';
export default {
  components: { Header,Add_to_desktop }
}
</script>




