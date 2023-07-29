<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-table
        flat bordered
        grid
        title="Treats"
        :rows="rows"
        :columns="columns"
        row-key="name"
        :filter="filter"
        hide-header
        
      >
        <template v-slot:top-right>
          <q-input outlined dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="mdi-magnify"/>
            </template>
          </q-input>
        </template>
        <template v-slot:item="props">
          <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
            <q-card class="cursor-pointer" v-ripple:purple @click="handleShowDetails(props.row)">
              <q-card-section class="text-left">
                <div class="text-h6">{{ `${props.row.name} ${props.row.turma} `}}</div><br>
                <div class="text-subtitle">{{ `Quantidade de alunos: ${props.row.qtdAlunos} `}}</div>
                <div class="text-subtitle2">{{ props.row.escola }}</div>
              </q-card-section>
            </q-card>
          </div>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import DialogDetails from 'src/components/Dialog.vue'
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

const columns = [
  {
    name: 'serie',
    required: true,
    label: 'serie',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'turma', align: 'center', label: 'turma', field: 'turma', sortable: true },
  { name: 'qtdAlunos', label: 'Quantidade de alunos', field: 'qtdAlunos' },
  { name: 'escola', label: 'escola', field: 'escola' }
]

const rows = [
  {
    name: '3° Ano',
    turma: 'A',
    qtdAlunos: 45,
    escola: 'Sebastião de Moraes Cardoso'
  },
  {
    name: '3° Ano',
    turma: 'B',
    qtdAlunos: 32,
    escola: 'Sebastião de Moraes Cardoso'
  },
  {
    name: '2° Ano',
    turma: 'A',
    qtdAlunos: 38,
    escola: 'Sebastião de Moraes Cardoso'
  },
  {
    name: '2° Ano',
    turma: 'B',
    qtdAlunos: 35,
    escola: 'Sebastião de Moraes Cardoso'
  },
  {
    name: '1° Ano',
    turma: 'A',
    qtdAlunos: 40,
    escola: 'Sebastião de Moraes Cardoso'
  },
  {
    name: '1° Ano',
    turma: 'B',
    qtdAlunos: 42,
    escola: 'Sebastião de Moraes Cardoso'
  },
  {
    name: '9° Ano',
    turma: 'A',
    qtdAlunos: 39,
    escola: 'Sebastião de Moraes Cardoso'
  },
  {
    name: '9° Ano',
    turma: 'B',
    qtdAlunos: 37,
    escola: 'Sebastião de Moraes Cardoso'
  },
]

export default defineComponent({
  name: 'ListSalas',
  components: {
    DialogDetails
  },
  setup () {
    const salaDetails = ref({})
    const router = useRouter()

    const handleShowDetails = (sala) => {
      salaDetails.value = sala
      router.push({ name: 'graph'})
    }
    return {
      handleShowDetails,
      filter: ref(''),
      columns,
      rows
    }
  }
})
</script>
