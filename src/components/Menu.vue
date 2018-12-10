<template>
  <v-navigation-drawer permanent height="100vh">
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-avatar>
            <img src="../assets/pl-logo.jpg" aria-hidden="true">
          </v-list-tile-avatar>
          <v-list-tile-title class="title">{{ appName }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list dense class="pt-0">
      <v-list-tile v-for="item in menuItems" :key="item.to" :to="item.to">
        <v-list-tile-content>
          <v-list-tile-title>{{ item.page }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      appName: 'Fantasy Golden League',
      menuItems: [
        { to: '/', page: 'Strona główna' },
        { to: '/table', page: 'Tabela' },
        { to: '/myTeam', page: 'Skład' },
        { to: '/points', page: 'Punkty' },
        { to: '/transfers', page: 'Transfery' },
      ],
    };
  },
};
</script>
