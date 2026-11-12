
<script setup>
import AlunoCard from '../components/AlunoCard.vue'

defineProps({
  alunos: {
    type: Array,
    required: true
  },
  carregandoAlunos: {
    type: Boolean,
    default: false
  },
  erroAlunos: {
    type: String,
    default: ''
  },
  calcularMedia: {
    type: Function,
    required: true
  },
  turmas: {
    type: Array,
    required: true
  },
  alunoEmEdicao: {
    type: Object,
    default: null
  }
})

const emit = defineEmits([
  'selecionarAluno',
  'cadastrarAluno',
  'editarAluno',
  'salvarEdicaoAluno',
  'excluirAluno'
])

const busca = defineModel('busca', {
  type: String,
  default: ''
})

const nomeNovoAluno = defineModel('nomeNovoAluno', {
  type: String,
  default: ''
})

const turmaNovoAluno = defineModel('turmaNovoAluno', {
  type: String,
  default: ''
})

const nomeAlunoEdicao = defineModel('nomeAlunoEdicao', {
  type: String,
  default: ''
})

const turmaAlunoEdicao = defineModel('turmaAlunoEdicao', {
  type: String,
  default: ''
})

</script>

<template>
  <main class="container-escolar">  
  
  <section v-if="alunoEmEdicao" class="secao mb-4">
    <h2>Editar aluno</h2>

  <div class="mb-3">
    <label for="nomeAlunoEdicao" class="form-label">
      Nome do aluno
    </label>

    <input
      id="nomeAlunoEdicao"
      v-model="nomeAlunoEdicao"
      type="text"
      class="form-control"
      placeholder="Digite o nome do aluno"
    />
  </div>

<div class="mb-3">
  <label for="turmaAlunoEdicao" class="form-label">
    Turma
  </label>

  <select
    id="turmaAlunoEdicao"
    v-model="turmaAlunoEdicao"
    class="form-select"
  >
    <option value="">Selecione uma turma</option>

    <option
      v-for="turma in turmas"
      :key="turma.nome"
      :value="turma.nome"
    >
      {{ turma.nome }} - {{ turma.turno }}
    </option>
  </select>
</div>

    <button
      type="button"
      class="btn btn-success"
      @click="emit('salvarEdicaoAluno')"
    >
      Salvar alterações
    </button>

  </section>
  
  <section class="secao mb-4">
  <h2>Cadastrar novo aluno</h2>

  <div class="mb-3">
    <label for="nomeNovoAluno" class="form-label">
      Nome do aluno
    </label>

    <input
      id="nomeNovoAluno"
      v-model="nomeNovoAluno"
      type="text"
      class="form-control"
      placeholder="Digite o nome do aluno"
    />
  </div>

<div class="mb-3">
  <label for="turmaNovoAluno" class="form-label">
    Turma
  </label>

  <select
    id="turmaNovoAluno"
    v-model="turmaNovoAluno"
    class="form-select"
  >
    <option value="">Selecione uma turma</option>

    <option
      v-for="turma in turmas"
      :key="turma.nome"
      :value="turma.nome"
    >
      {{ turma.nome }} - {{ turma.turno }}
    </option>
  </select>
</div>

<button
  type="button"
  class="btn btn-primary"
  @click="emit('cadastrarAluno')"
>
  Cadastrar aluno
</button>

  </section>

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

      <p v-if="carregandoAlunos" class="alert alert-info">
        Carregando alunos...
      </p>

      <p v-if="erroAlunos" class="alert alert-danger">
        {{ erroAlunos }}
      </p>
        
      <div
        v-if="!carregandoAlunos && !erroAlunos"
        class="grade-alunos"
      >
        <AlunoCard
          v-for="aluno in alunos"
          :key="aluno.id"
          :nome="aluno.nome"
          :turma="aluno.turma"
          :media="calcularMedia(aluno.notas)"
          :possui-notas="aluno.notas.length > 0"
          @selecionar="emit('selecionarAluno', aluno)"
          @editar="emit('editarAluno', aluno)"
          @excluir="emit('excluirAluno', aluno)"
        />
      
      </div>

    <p
      v-if="!carregandoAlunos && !erroAlunos && alunos.length === 0"
      class="vazio"
    >
      Nenhum aluno encontrado.
    </p>
    </section>
  </main>
</template>

