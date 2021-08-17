<template>
  <v-row justify="center" class="modal-btn">
    <v-dialog
      v-model="isShowDialog"
      width="600px"
    >
      <template #activator="{ on }">
        <v-btn
          color="primary"
          dark
          v-on="on"
        >
          Количество элементов
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Количество элементов: {{ items.length }}</span>
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="green darken-1"
            text
            @click="toggleDialog"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
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
