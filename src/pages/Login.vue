<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handlerLogin">
      <p class="col-12 text-h5 text-center">Login</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input
          label="Email"
          v-model="form.email"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Email is required']"
          type="email"
        />
        <q-input
          label="Password"
          v-model="form.password"
          lazy-rules
          :rules="[val => (val && val.length >= 6) || 'Password is required and greater than or equal to 6 characters']"
        />
        <div class="full-width q-pt-md">
          <q-btn
            label="Login"
            color="primary"
            class="full-width"
            outline
            rounded
            size="lg"
            type="submit"
          />
        </div>
        <div class="full-width q-gutter-y-md">
          <q-btn
            label="Register"
            color="primary"
            class="full-width"
            flat
            to="/register"
            size="sm"
          />
          <q-btn
            label="Forgot Password"
            color="primary"
            class="full-width"
            flat
            :to="{ name: 'forgot-password'}"
            size="sm"
          />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import useNotify from 'src/composables/UseNotify'

export default defineComponent({
  name: 'PageLogin',
  setup () {
    const router = useRouter()
    const { notifySuccess } = useNotify()

    const form = ref({
      email: '',
      password: ''
    })

    const handlerLogin = async () => {
      router.push({ name: 'index-page' })
      notifySuccess('Logged')
    }

    return {
      form,
      handlerLogin
    }
  }
})
</script>
