
<script setup>
import Resumo from '../components/Resumo.vue'

defineProps({
  totalAlunos: {
    type: Number,
    required: true
  },
  totalTurmas: {
    type: Number,
    required: true
  },
  totalDisciplinas: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <main class="container-escolar">
    <section class="introducao">
      <div>
        <p class="etiqueta">GESTÃO ESCOLAR</p>

        <h1>Alunos, turmas e notas em um só lugar.</h1>

        <p class="descricao">
          Uma demonstração de uma aplicação escolar desenvolvida
          com Vue.js utilizando componentes, props, diretivas,
          eventos e reatividade.
        </p>
      </div>
    </section>

    <Resumo
      :total-alunos="totalAlunos"
      :total-turmas="totalTurmas"
      :total-disciplinas="totalDisciplinas"
    />
  </main>
</template>
