<template>
  <div id="app">
    <navBar v-if="this.$route.path != '/'" />
    <router-view />
  </div>
</template>
<script>
// @ is an alias to /src
import navBar from "@/views/layout/navBar.vue";

export default {
  name: "home",
  components: {
    navBar
  }
};
</script>
