
<script setup>
import ConsultaNotas from '../components/ConsultaNotas.vue'

defineProps({
  aluno: {
    type: Object,
    required: true
  },
  mostrarMensagem: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits([
  'alunoAlterado',
  'mostrarAviso'
])
</script>

<template>
  <main class="container-escolar">
    <section class="secao">
      <ConsultaNotas
        :aluno="aluno"
        @aluno-alterado="emit('alunoAlterado', $event)"
        @mostrar-aviso="emit('mostrarAviso')"
      />

      <p v-show="mostrarMensagem" class="mensagem-sucesso">
        Consulta realizada com sucesso para {{ aluno.nome }}.
      </p>
    </section>
  </main>
</template>
