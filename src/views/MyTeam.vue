<template>
  <v-container>
    <v-flex mb-3>
      <h1>
        Wybierz skład
      </h1>
    </v-flex>
    <TeamSquad ref="teamSquad"></TeamSquad>
  </v-container>
</template>

<script>
import TeamSquad from '../components/TeamSquad.vue';

export default {
  name: 'MyTeamPage',
  components: { TeamSquad },
};
</script>
