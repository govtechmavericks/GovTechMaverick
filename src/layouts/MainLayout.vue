<template style="background-color: dark">
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          GovTech Maverick
        </q-toolbar-title>
        <dark-mode-toogle />
        <q-btn-dropdown flat color="white" icon="person">
          <q-list>
            <q-item clickable v-close-popup @click="handlerLogout()">
              <q-item-section>
                <q-item-label>LogOut</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { useRouter } from 'vue-router'
import DarkModeToogle from 'src/components/DarkModeToogle.vue'

const linksList = [
  {
    title: 'Avaliações',
    caption: 'acompanhamento de notas',
    icon: 'school',
    routeName: 'index-page'
  },
  {
    title: 'Análises',
    caption: 'aproveitamento',
    icon: 'mdi-chart-pie',
    routeName: 'graph'
  },
  {
    title: 'Plano de Estudos',
    caption: 'gerados anteriormente',
    icon: 'mdi-finance',
    routeName: 'plano-estudo'
  },

]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    DarkModeToogle
  },

  setup () {
    const leftDrawerOpen = ref(false)
    const router = useRouter()

    const handlerLogout = () => {
      router.push({ name: 'login' })
    }

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      handlerLogout
    }
  }
})
</script>

