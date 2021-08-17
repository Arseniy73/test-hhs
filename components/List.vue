<template>
  <v-card v-if="items.length" class="card" tile>
    <v-list dense>
      <h2>Список элементов</h2>
      <listItem />
    </v-list>
  </v-card>
  <h2 v-else>
    Элементы отсутствуют
  </h2>
</template>

<script>
import { mapGetters } from 'vuex'
import ListItem from '../components/ListItem'

export default {
  components: { ListItem },
  computed: {
    ...mapGetters(['items'])
  }
}
</script>

<style scoped lang="scss">
  h2 {
    padding: 10px 16px;
  }
  .card {
    width: 100%;
  }
</style>
