<template>
  <v-app>
    <div id="main">
      <Menu></Menu>
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
}
h1 {
  padding: 15px;
}
</style>
