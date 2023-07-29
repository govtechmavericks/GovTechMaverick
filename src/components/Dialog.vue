<template>
    <q-page padding>
      <q-card>
        <q-card-section>
          <graph-component/>
        </q-card-section>
        <q-card-section class="q-gutter-y-sm">
          <div class="text-h6">
            {{ "3° ano A "}}
          </div>
          <div class="text-subtitle2">
            {{ "Sebastião de Moraes Cardoso" }}
          </div>
          <div class="text-body2" v-html="45"></div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn label="Cancel" color="primary" outline :to="{ name: 'index-page'}"/>
          <q-btn
            class="text-size1"
            dense
            label="Solicitar plano de Ensino"
            :to="{ name: 'plano-estudo' }"
            icon="mdi-google-analytics"
            color="primary"
          />
        </q-card-actions>
      </q-card>
    </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import GraphComponent from './GraphComponent.vue'

export default defineComponent({
  name: 'DialogDetails',
  components: {
    GraphComponent
  },
  setup () {
    return {
    }
  }
})
</script>
