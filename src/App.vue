<template>
  <div id="app">
    <h1>App Componente</h1>
    <Menu />

    <router-view></router-view>
    <hr />
  </div>
</template>

<script>
import Menu from "./components/navegacion/Menu.vue";
export default {
  name: "App",
  components: {
    Menu,
  },
};
</script>

<style>
</style>
