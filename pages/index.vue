<template>
  <div data-app class="app">
    <buttons />
    <list />
  </div>
</template>

<script>
import Buttons from '../components/Buttons'
import List from '../components/List'

export default {
  components: { Buttons, List }
}
</script>

<style scoped lang="scss">
  .app {
    width: 60%;
  }
</style>
