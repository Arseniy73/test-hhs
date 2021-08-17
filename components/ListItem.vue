<template>
  <v-list-item-group color="primary" class="list">
    <v-list-item v-for="(item, i) in items" :key="item.id" class="list-item">
      <div>
        {{ i + 1 }}. {{ item.name }}
      </div>
      <div class="delete-btn" @click="removeItem(item.id)">
        Удалить
      </div>
    </v-list-item>
  </v-list-item-group>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['items'])
  },
  methods: {
    ...mapActions(['removeItem'])
  }
}
</script>

<style scoped lang="scss">
  .list {
    &-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      border: 1px solid rgb(184, 182, 182);
      border-radius: 5px;
      &:after {
        content: none;
      }
    }
  }
  .delete-btn {
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: red;
  }
</style>
