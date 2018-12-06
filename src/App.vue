<template>
  <v-app>
    <v-navigation-drawer permanent>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              {{ appName }}
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list dense class="pt-0">
        <v-list-tile
          v-for="item in menuItems"
          :key="item.home" >
          <v-list-tile-action>
            <!-- <v-icon>{{ item.icon }}</v-icon> -->
            &#9918;
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      test
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      appName: 'Fantasy Golden League',
      menuItems: [
        'Strona główna',
        'Tabela',
        'Skład',
        'Punkty',
        'Transfery'
      ],
    }
  }
}
</script>
