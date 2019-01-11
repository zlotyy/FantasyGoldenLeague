<template>
  <v-app>
    <div id="main">
      <Menu height="100vh"></Menu>
      <v-content>
        <router-view></router-view>
      </v-content>
    </div>
  </v-app>
</template>

<script>
import Menu from './components/Menu.vue';

export default {
  components: { Menu },
};
</script>

<style>
#main {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
}
h1 {
  padding: 15px;
}
</style>
