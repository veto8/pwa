<script>
import Add_to_desktop from '../components/Add_to_desktop.vue';
import Sqlite from '../components/Sqlite.vue';
export default {
  components: { Add_to_desktop, Sqlite }
}
</script>
<template>
    <main class="container">
      <router-view />
    </main>
    <Add_to_desktop />
    <Sqlite />
</template>

