<template>
  <v-content>
    <h1>
      Wybierz skład
    </h1>
    <TeamSquad ref="teamSquad"></TeamSquad>
  </v-content>
</template>

<script>
import TeamSquad from '../components/TeamSquad.vue';

export default {
  name: 'MyTeamPage',
  components: { TeamSquad },
};
</script>
