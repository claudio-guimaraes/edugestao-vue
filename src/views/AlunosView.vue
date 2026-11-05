
<script setup>
import AlunoCard from '../components/AlunoCard.vue'

defineProps({
  alunos: {
    type: Array,
    required: true
  },
  calcularMedia: {
    type: Function,
    required: true
  }
})

const emit = defineEmits(['selecionarAluno'])

const busca = defineModel('busca', {
  type: String,
  default: ''
})

</script>

<template>
  <main class="container-escolar">
    <section class="secao">
      <div class="titulo-secao">
        <div>
          <p class="etiqueta">ALUNOS</p>
          <h2>Lista de alunos</h2>
        </div>

        <input
          v-model="busca"
          class="campo-busca form-control"
          type="search"
          placeholder="Pesquisar aluno..."
          aria-label="Pesquisar aluno"
        />
        </div>


      <div class="grade-alunos">
        <AlunoCard
          v-for="aluno in alunos"
          :key="aluno.id"
          :nome="aluno.nome"
          :turma="aluno.turma"
          :media="calcularMedia(aluno.notas)"
          @selecionar="emit('selecionarAluno', aluno)"
        />
      
      </div>

      <p v-if="alunos.length === 0" class="vazio">
        Nenhum aluno encontrado.
      </p>
    </section>
  </main>
</template>

