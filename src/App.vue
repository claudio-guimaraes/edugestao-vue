<script setup>
import { ref, computed } from 'vue'

import Cabecalho from './components/Cabecalho.vue'
import Resumo from './components/Resumo.vue'
import AlunoCard from './components/AlunoCard.vue'
import ListaTurmas from './components/ListaTurmas.vue'
import ConsultaNotas from './components/ConsultaNotas.vue'
import Rodape from './components/Rodape.vue'

const alunos = ref([
  {
    id: 1,
    nome: 'Lucas Almeida',
    turma: '1º A',
  
    notas: [
      { disciplina: 'Matemática', nota: 8.5 },
      { disciplina: 'Língua Portuguesa', nota: 9.0 },
      { disciplina: 'História', nota: 8.0 },
      { disciplina: 'Geografia', nota: 8.5 },
      { disciplina: 'Filosofia', nota: 8.0 }
    ]
  },
  {
    id: 2,
    nome: 'Mariana Santos',
    turma: '1º A',
    
    notas: [
      { disciplina: 'Matemática', nota: 7.0 },
      { disciplina: 'Língua Portuguesa', nota: 8.0 },
      { disciplina: 'História', nota: 7.5 },
      { disciplina: 'Geografia', nota: 6.5 },
      { disciplina: 'Filosofia', nota: 7.0 }
    ]
  },
  {
    id: 3,
    nome: 'Pedro Oliveira',
    turma: '1º B',
    
    notas: [
      { disciplina: 'Matemática', nota: 6.5 },
      { disciplina: 'Língua Portuguesa', nota: 7.0 },
      { disciplina: 'História', nota: 6.5 },
      { disciplina: 'Geografia', nota: 7.0 },
      { disciplina: 'Filosofia', nota: 7.0 }
    ]
  },
  {
    id: 4,
    nome: 'Ana Costa',
    turma: '1º B',
    
    notas: [
      { disciplina: 'Matemática', nota: 9.0 },
      { disciplina: 'Língua Portuguesa', nota: 9.5 },
      { disciplina: 'História', nota: 8.5 },
      { disciplina: 'Geografia', nota: 8.5 },
      { disciplina: 'Filosofia', nota: 8.5 }
    ]
  },
  {
    id: 5,
    nome: 'Gabriel Souza',
    turma: '2º A',
    
    notas: [
      { disciplina: 'Matemática', nota: 5.5 },
      { disciplina: 'Língua Portuguesa', nota: 6.5 },
      { disciplina: 'História', nota: 5.0 },
      { disciplina: 'Geografia', nota: 6.0 },
      { disciplina: 'Filosofia', nota: 6.0 }
    ]
  },
  {
    id: 6,
    nome: 'Beatriz Lima',
    turma: '2º A',
    
    notas: [
      { disciplina: 'Matemática', nota: 9.5 },
      { disciplina: 'Língua Portuguesa', nota: 9.0 },
      { disciplina: 'História', nota: 9.5 },
      { disciplina: 'Geografia', nota: 9.0 },
      { disciplina: 'Filosofia', nota: 9.0 }
    ]
  },
  {
    id: 7,
    nome: 'Rafael Martins',
    turma: '3º A',
    
    notas: [
      { disciplina: 'Matemática', nota: 4.5 },
      { disciplina: 'Língua Portuguesa', nota: 5.0 },
      { disciplina: 'História', nota: 4.0 },
      { disciplina: 'Geografia', nota: 5.5 },
      { disciplina: 'Filosofia', nota: 5.0 }
    ]
  },
  {
    id: 8,
    nome: 'Camila Ferreira',
    turma: '3º A',
    
    notas: [
      { disciplina: 'Matemática', nota: 8.0 },
      { disciplina: 'Língua Portuguesa', nota: 8.5 },
      { disciplina: 'História', nota: 7.5 },
      { disciplina: 'Geografia', nota: 7.0 },
      { disciplina: 'Filosofia', nota: 8.0 }
    ]
  }
])

const turmas = ref([
  { nome: '1º A', turno: 'Manhã' },
  { nome: '1º B', turno: 'Manhã' },
  { nome: '2º A', turno: 'Tarde' },
  { nome: '3º A', turno: 'Tarde' }
])

const turmasComQuantidade = computed(() => {
  return turmas.value.map(turma => {
    const quantidade = alunos.value.filter(
      aluno => aluno.turma === turma.nome
    ).length

    return {
      ...turma,
      alunos: quantidade
    }
  })
})

const totalDisciplinas = computed(() => {
  return alunos.value[0].notas.length
})

const busca = ref('')
const alunoSelecionado = ref(alunos.value[0])
const mostrarMensagem = ref(false)

const alunosFiltrados = computed(() => {
  const termo = busca.value.toLowerCase().trim()

  if (!termo) {
    return alunos.value
  }

  return alunos.value.filter(aluno =>
    aluno.nome.toLowerCase().includes(termo)
  )
})
function calcularMedia(notas) {
  const soma = notas.reduce((total, item) => total + item.nota, 0)
  return soma / notas.length
}

function selecionarAluno(aluno) {
  alunoSelecionado.value = aluno
  mostrarMensagem.value = false
}

function atualizarAluno(aluno) {
  alunoSelecionado.value = aluno
  mostrarMensagem.value = false
}

function mostrarAviso() {
  mostrarMensagem.value = true
}
</script>

<template>
  <Cabecalho />

  <main class="container">
    <section class="introducao">
      <div>
        <p class="etiqueta">GESTÃO ESCOLAR</p>
        <h1>Alunos, turmas e notas em um só lugar.</h1>
        <p class="descricao">
          Uma demonstração de uma aplicação escolar desenvolvida com Vue.js
          utilizando componentes, props, diretivas, eventos e reatividade.
        </p>
      </div>
    </section>

    <Resumo
      :total-alunos="alunos.length"
      :total-turmas="turmas.length"
      :total-disciplinas="totalDisciplinas"
    />

    <section class="secao">
      <div class="titulo-secao">
        <div>
          <p class="etiqueta">ALUNOS</p>
          <h2>Lista de alunos</h2>
        </div>

        <input
          v-model="busca"
          class="campo-busca"
          type="text"
          placeholder="Pesquisar aluno..."
        />
      </div>

      <div class="grade-alunos">
        <AlunoCard
          v-for="aluno in alunosFiltrados"
          :key="aluno.id"
          :nome="aluno.nome"
          :turma="aluno.turma"
          :media="calcularMedia(aluno.notas)"
          @selecionar="selecionarAluno(aluno)"
        />
      </div>

      <p v-if="alunosFiltrados.length === 0" class="vazio">
        Nenhum aluno encontrado.
      </p>
    </section>

    <section class="secao">
      <ListaTurmas :turmas="turmasComQuantidade" />
    </section>

    <section class="secao">
      <ConsultaNotas
        :aluno="alunoSelecionado"
        @aluno-alterado="atualizarAluno"
        @mostrar-aviso="mostrarAviso"
      />

      <p v-show="mostrarMensagem" class="mensagem-sucesso">
        Consulta realizada com sucesso para {{ alunoSelecionado.nome }}.
      </p>
    </section>
  </main>

  <Rodape />
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #f4f6f8;
  color: #1f2937;
}

button,
input,
select {
  font: inherit;
}

.container {
  width: min(1100px, 92%);
  margin: 0 auto;
}

.introducao {
  margin: 36px 0 24px;
  padding: 34px;
  border-radius: 18px;
  background: white;
  border: 1px solid #e5e7eb;
}

.etiqueta {
  margin: 0 0 8px;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1.5px;
  color: #2563eb;
}

h1,
h2 {
  margin: 0;
}

h1 {
  max-width: 700px;
  font-size: clamp(30px, 5vw, 48px);
  line-height: 1.1;
}

h2 {
  font-size: 25px;
}

.descricao {
  max-width: 720px;
  line-height: 1.6;
  color: #64748b;
}

.secao {
  margin: 28px 0;
}

.titulo-secao {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 20px;
  margin-bottom: 16px;
}

.campo-busca {
  width: 260px;
  padding: 12px 14px;
  border: 1px solid #cbd5e1;
  border-radius: 9px;
  background: white;
}

.grade-alunos {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.vazio {
  padding: 20px;
  background: white;
  border-radius: 12px;
  color: #64748b;
}

.mensagem-sucesso {
  margin-top: 14px;
  padding: 14px;
  border-radius: 10px;
  background: #dcfce7;
  color: #166534;
}

@media (max-width: 700px) {
  .grade-alunos {
    grid-template-columns: 1fr;
  }

  .titulo-secao {
    align-items: stretch;
    flex-direction: column;
  }

  .campo-busca {
    width: 100%;
  }

  .introducao {
    padding: 24px;
  }
}
</style>