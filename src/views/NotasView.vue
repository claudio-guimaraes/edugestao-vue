
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
  },
  erroNotas: {
    type: String,
    default: ''
  }
})

const emit = defineEmits([
  'alunoAlterado',
  'mostrarAviso',
  'cadastrarNota',
  'atualizarNota',
  'excluirNota'
])
</script>

<template>
  <main class="container-escolar">
    <section class="secao">

      <p v-if="erroNotas" class="alert alert-danger" role="alert">
        {{ erroNotas }}
      </p>

      <ConsultaNotas
        v-if="aluno"
        :aluno="aluno"
        :erro-notas="erroNotas"
        @aluno-alterado="emit('alunoAlterado', $event)"
        @mostrar-aviso="emit('mostrarAviso')"
        @cadastrar-nota="emit('cadastrarNota', $event)"
        @atualizar-nota="emit('atualizarNota', $event)"
        @excluir-nota="emit('excluirNota', $event)"
      />

      <p v-if="aluno && mostrarMensagem" class="mensagem-sucesso">
        Consulta realizada com sucesso para {{ aluno.nome }}.
      </p>
    </section>
  </main>
</template>
