<template>
  <q-page padding>
    <div >
      <q-card class="q-mx-xl">
        <q-scroll-area style="height: 900px; max-width: 100%;">
          <div class="q-ml-xl">
            Aqui está um plano de estudos para alunos do ensino médio que estão com dificuldades em função de 1 grau e de segundo grau, de forma intuitiva e cativante, com exemplos de aulas cativantes:

            <br>
  Semana 1
  <br>
  Introdução a funções de primeiro grau<br>
  Definição de função de primeiro grau<br>
  Gráfico de funções de primeiro grau<br>
  Interpretação de funções de primeiro grau no contexto da vida real<br>
  Aula 1:<br>

  Comece apresentando o conceito de função de primeiro grau.<br>
  Use uma linguagem clara e concisa, e evite jargões matemáticos.<br>
  Use exemplos da vida real para ilustrar os conceitos.<br>
  Por exemplo, você pode usar o exemplo de um objeto que está em movimento para ilustrar a função de primeiro grau.<br><br>
  Aula 2:<br>

  Ensine os alunos como graficar funções de primeiro grau.<br>
  Use recursos visuais, como gráficos e animações, para tornar o aprendizado mais divertido e envolvente.<br><br>
  Aula 3:<br>

  Ensine os alunos como interpretar funções de primeiro grau no contexto da vida real.<br>
  Use exemplos da vida real para ilustrar os conceitos.<br><br>
  Semana 2<br>

  Resolução de funções de primeiro grau<br>
  Método da substituição<br>
  Método de fatoração<br>
  Método da soma<br>
  Aula 4:<br>

  Ensine os alunos como resolver funções de primeiro grau usando o método da substituição.<br>
  Use uma linguagem clara e concisa, e evite jargões matemáticos.<br>
  Use exemplos da vida real para ilustrar os conceitos.<br><br>
  Aula 5:<br>

  Ensine os alunos como resolver funções de primeiro grau usando o método de fatoração.<br>
  Use recursos visuais, como gráficos e animações, para tornar o aprendizado mais divertido e envolvente.<br><br>
  Aula 6:<br>

  Ensine os alunos como resolver funções de primeiro grau usando o método da soma.<br>
  Use exemplos da vida real para ilustrar os conceitos.<br><br>
  Semana 3<br>

  Funções de segundo grau<br>
  Definição de função de segundo grau<br>
  Gráfico de funções de segundo grau<br>
  Interpretação de funções de segundo grau no contexto da vida real<br><br>
  Aula 7:<br>

  Comece apresentando o conceito de função de segundo grau.<br>
  Use uma linguagem clara e concisa, e evite jargões matemáticos.<br>
  Use exemplos da vida real para ilustrar os conceitos.<br>
  Por exemplo, você pode usar o exemplo de uma planta que está crescendo para ilustrar a função de segundo grau.<br>
  Aula 8: <br>

  Ensine os alunos como graficar funções de segundo grau. <br>
  Use recursos visuais, como gráficos e animações, para tornar o aprendizado mais divertido e envolvente. <br> <br>
  Aula 9: <br>

  Ensine os alunos como interpretar funções de segundo grau no contexto da vida real. <br>
  Use exemplos da vida real para ilustrar os conceitos. <br> <br>
  Semana 4 <br>

  Resolução de funções de segundo grau <br>
  Método da bhaskara <br>
  Método da fórmula quadrática <br> <br>
  Aula 10: <br>

  Ensine os alunos como resolver funções de segundo grau usando o método da bhaskara. <br>
  Use uma linguagem clara e concisa, e evite jargões matemáticos. <br>
  Use exemplos da vida real para ilustrar os conceitos. <br> <br>
  Aula 11: <br>

  Ensine os alunos como resolver funções de segundo grau usando o método da fórmula quadrática. <br>
  Use recursos visuais, como gráficos e animações, para tornar o aprendizado mais divertido e envolvente. <br> <br>
  Semana 5 <br>

  Estudo de caso: aplicação de funções de primeiro e segundo grau na vida real <br>
  Exemplos de como as funções de primeiro e segundo grau podem ser usadas para modelar o movimento dos objetos, o crescimento das plantas e o comportamento dos mercados financeiros <br> <br>
  Aula 12: <br> 

  Ensine os alunos como aplicar funções de primeiro e segundo grau em problemas da vida real. <br>
  Use exemplos da vida real para ilustrar os conceitos. <br>
  Por exemplo, você pode usar o exemplo de um projétil em movimento para ilustrar a função de primeiro grau, e o exemplo de uma planta crescendo para ilustrar a função de segundo grau. <br>
  Espero que este plano de estudos ajude você a criar aulas cativantes e informativas sobre funções de primeiro e segundo grau.
          </div>
         </q-scroll-area> 
      </q-card>
    </div>
  </q-page>
</template>
<script>
import { defineComponent, onMounted, ref } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'ConsumingChatGpt',
  setup () {
    let responseIA = ''
    const messageIA = 'gere um plano de estudos para alunos do ensino médio que estão com dificuldades em função de 1 grau e de segundo grau, de forma intuitiva e cativante'
    const $q = useQuasar()
    const visible = ref(true)


    onMounted(() => {
      $q.loading.show({
        delay: 100, // ms
        message: 'Some important process  is in progress. Hang on...'
      })
      setTimeout(() => {
          $q.loading.hide()
        }, 1000)
    })
    return{
      responseIA,
      visible
    }
  }

})
</script>
