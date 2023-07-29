<template>
    <q-page padding>
      <list-salas/>
    </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import ListSalas from 'src/pages/salas/ListSalas.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    ListSalas
  }
})
</script>
