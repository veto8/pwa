<template>
    <Header />
    <main class="container">
      <router-view />
    </main>
    <Add_to_desktop />
    <Sqlite />
</template>

<script>
import Header from './Header.vue';
import Add_to_desktop from './Add_to_desktop.vue';
import Sqlite from './Sqlite.vue';
export default {
  components: { Header, Add_to_desktop, Sqlite }
}
</script>




