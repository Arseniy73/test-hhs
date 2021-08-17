<template>
  <div class="btn-wrapper">
    <v-btn class="add-btn" @click="addItem(`Любой текст ${items.length + 1}`)">
      Добавить элемент
    </v-btn>
    <modal />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Modal from '../components/Modal'

export default {
  components: { Modal },
  data: () => ({
    isShowDialog: false
  }),
  computed: {
    ...mapGetters(['items'])
  },
  methods: {
    ...mapActions(['addItem']),
    toggleDialog () {
      this.isShowDialog = !this.isShowDialog
    }
  }
}
</script>

<style scoped lang="scss">
  .btn-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
  }
  .modal-btn {
    margin-left: 20px;
  }
  @media (max-width: 784px) {
    .modal-btn {
      margin-left: 0;
      width: 100%;
    }
    .add-btn {
      width: 100%;
      margin-bottom: 10px;
    }
    .btn-wrapper {
      display: block;
    }
    .row {
      margin: 0;
    }
    .v-btn {
      width: 100%;
    }
  }
</style>
