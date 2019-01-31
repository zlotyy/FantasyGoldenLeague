<template>
  <v-flex>
    <v-layout>
      <v-flex>
        <v-data-table
          :headers="headers"
          :items="items"
        >
          <template slot="items" slot-scope="props">
            <td>
              {{ props.item.var1 }}
            </td>
            <td>
              {{ props.item.var2 }}
            </td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
// import { Header } from '../common/Common';

export default {
  name: 'TeamSquad',
  data() {
    return {
      headers: [
        { text: 'Nazwisko', value: 'var1' },
        { text: 'Pozycja', value: 'var2' },
        { text: 'Forma', value: 'var2' },
        { text: 'Przeciwnik', value: 'var2' },
        { text: 'Punkty razem', value: 'var2' },
        { text: 'Punkty w kolejce ', value: 'var2' },
        { text: 'Opcje', value: 'var2' },
      ],
      items: [
        {
          var1: 'var1',
          var2: 'var2',
        },
      ],
    };
  },
};
</script>
