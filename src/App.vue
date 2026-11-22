<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { RouterView } from 'vue-router'
import {
  buscarAlunos,
  cadastrarAluno,
  atualizarAluno,
  excluirAluno
} from './services/alunosService'

import Cabecalho from './components/Cabecalho.vue'
import Rodape from './components/Rodape.vue'
import {
  buscarNotas,
  cadastrarNota,
  atualizarNota,
  excluirNota
} from './services/notasService'

import { useRouter } from 'vue-router'

const router = useRouter()

const alunos = ref([])

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
  return alunos.value[0]?.notas?.length ?? 0
})

const busca = ref('')
const alunoSelecionado = ref(null)
const mostrarMensagem = ref(false)
const carregandoAlunos = ref(false)
const erroAlunos = ref('')
const erroNotas = ref('')
const nomeNovoAluno = ref('')
const alunoEmEdicao = ref(null)
const nomeAlunoEdicao = ref('')
const turmaAlunoEdicao = ref('')
const turmaNovoAluno = ref('')

const turnoNovoAluno = computed(() => {
  const turmaEncontrada = turmas.value.find(
    turma => turma.nome === turmaNovoAluno.value
  )

  return turmaEncontrada?.turno ?? ''
})

watch(
  () => router.currentRoute.value.path,
  (novaRota, rotaAnterior) => {
    if (novaRota === '/alunos' && rotaAnterior !== '/alunos') {
      busca.value = ''
    }

    if (novaRota !== '/alunos') {
      alunoEmEdicao.value = null
    }
  }
)

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
  if (!notas || notas.length === 0) {
    return 0
  }

  const soma = notas.reduce((total, item) => total + item.nota, 0)
  return soma / notas.length
}

function selecionarAluno(aluno) {
  alunoSelecionado.value = aluno
  mostrarMensagem.value = false
  router.push('/notas')
}

async function salvarNovoAluno() {
  const nome = nomeNovoAluno.value.trim()
  const turma = turmaNovoAluno.value

  if (!nome || !turma) {
    alert('Preencha o nome e selecione uma turma.')
    return
  }

  const novoAluno = {
    name: nome,
    turma: turma,
    turno: turnoNovoAluno.value
  }
  
try {
  const alunoCadastrado = await cadastrarAluno(novoAluno)

  const alunoAdaptado = {
    id: Number(alunoCadastrado.id),
    nome: alunoCadastrado.name,
    turma: alunoCadastrado.turma,
    turno: alunoCadastrado.turno,
    notas: []
  }

  alunos.value.push(alunoAdaptado)
  
  nomeNovoAluno.value = ''
  turmaNovoAluno.value = ''

  console.log('Aluno cadastrado no MockAPI:', alunoAdaptado)
} catch (erro) {
  console.error('Erro ao cadastrar aluno:', erro)
  alert('Não foi possível cadastrar o aluno. Tente novamente.')
}
}

async function salvarNovaNota(dadosNota) {
  try {
    const novaNota = await cadastrarNota(dadosNota)

    console.log('Nota cadastrada no MockAPI:', novaNota)

    const aluno = alunos.value.find(
      item => String(item.id) === String(dadosNota.alunoId)
    )

    if (aluno) {
      aluno.notas.push({
        id: novaNota.id,
        disciplina: novaNota.disciplina,
        nota: Number(novaNota.nota)
      })
    }

  } catch (erro) {
    console.error('Erro ao cadastrar nota:', erro)
    alert('Não foi possível cadastrar a nota. Tente novamente.')
  }
}

async function salvarEdicaoNota(dadosNota) {
  try {
    const notaAtualizada = await atualizarNota(
      dadosNota.id,
      {
        alunoId: dadosNota.alunoId,
        disciplina: dadosNota.disciplina,
        nota: dadosNota.nota
      }
    )

    const aluno = alunos.value.find(
      item => String(item.id) === String(dadosNota.alunoId)
    )

    if (aluno) {
      const notaLocal = aluno.notas.find(
        item => String(item.id) === String(dadosNota.id)
      )

      if (notaLocal) {
        notaLocal.disciplina = notaAtualizada.disciplina
        notaLocal.nota = Number(notaAtualizada.nota)
      }
    }

    console.log('Nota atualizada com sucesso:', notaAtualizada)
  } catch (erro) {
  console.error('Erro ao atualizar nota:', erro)
  alert('Não foi possível atualizar a nota. Tente novamente.')
}
}

async function confirmarExclusaoNota(dadosNota) {
  const confirmado = window.confirm(
    `Tem certeza de que deseja excluir a nota de ${dadosNota.disciplina}?`
  )

  if (!confirmado) {
    return
  }

  try {
    await excluirNota(dadosNota.id)

    const aluno = alunoSelecionado.value

    if (aluno) {
      aluno.notas = aluno.notas.filter(
        nota => String(nota.id) !== String(dadosNota.id)
      )
    }

    console.log('Nota excluída com sucesso.')
  } catch (erro) {
    console.error('Erro ao excluir nota:', erro)
    alert('Não foi possível excluir a nota.')
  }
}

function prepararEdicaoAluno(aluno) {
  alunoEmEdicao.value = aluno
  nomeAlunoEdicao.value = aluno.nome
  turmaAlunoEdicao.value = aluno.turma

  console.log('Aluno em edição:', alunoEmEdicao.value)
}

async function confirmarExclusaoAluno(aluno) {
  const confirmado = window.confirm(
    `Tem certeza de que deseja excluir o aluno ${aluno.nome}?`
  )

  if (!confirmado) {
    return
  }

  try {
    await excluirAluno(aluno.id)

    console.log('Aluno excluído do MockAPI:', aluno.nome)
    
    alunos.value = alunos.value.filter(
      estudante => estudante.id !== aluno.id
)

  } catch (erro) {
  console.error('Erro ao excluir aluno:', erro)
  alert('Não foi possível excluir o aluno. Tente novamente.')
  }
}

async function salvarEdicaoAluno() {
  if (!alunoEmEdicao.value) {
    return
  }

const turmaEncontrada = turmas.value.find(
  turma => turma.nome === turmaAlunoEdicao.value
)
  
const dadosAtualizados = {
  name: nomeAlunoEdicao.value.trim(),
  turma: turmaAlunoEdicao.value,
  turno: turmaEncontrada?.turno ?? ''
}

  console.log('Dados preparados para atualização:', dadosAtualizados)

  try {
    const alunoAtualizado = await atualizarAluno(
      alunoEmEdicao.value.id,
      dadosAtualizados
    )

    console.log('Resposta do MockAPI:', alunoAtualizado)

    const alunoLocal = alunos.value.find(
      aluno => aluno.id === Number(alunoAtualizado.id)
    )

    if (alunoLocal) {
      alunoLocal.nome = alunoAtualizado.name
      alunoLocal.turma = alunoAtualizado.turma
      alunoLocal.turno = alunoAtualizado.turno
    }

    alunoEmEdicao.value = null

  } catch (erro) {
  console.error('Erro ao atualizar aluno:', erro)
  alert('Não foi possível atualizar o aluno. Tente novamente.')
}
}

function atualizarAlunoSelecionado(aluno) {
  alunoSelecionado.value = aluno
  mostrarMensagem.value = false
}

function mostrarAviso() {
  mostrarMensagem.value = true
}

async function testarAtualizacaoNota() {
  try {
    const notaAtualizada = await atualizarNota(1, {
      alunoId: 1,
      disciplina: 'Matemática',
      nota: 8.5
    })

    console.log('Nota atualizada no MockAPI:', notaAtualizada)
  } catch (erro) {
    console.error('Erro ao atualizar nota:', erro)
  }
}

async function testarExclusaoNota() {
  try {
    const notaExcluida = await excluirNota(2)

    console.log('Nota excluída do MockAPI:', notaExcluida)
  } catch (erro) {
    console.error('Erro ao excluir nota:', erro)
  }
}

onMounted(async () => {
  erroNotas.value = ''

  let notasDaAPI = []

  try {
    notasDaAPI = await buscarNotas()

    console.log('Notas recebidas do MockAPI:', notasDaAPI)

  } catch (erro) {
  console.error('Erro ao carregar notas:', erro)
  erroNotas.value = 'Não foi possível carregar as notas. Verifique sua conexão e tente novamente.'
  alert(erroNotas.value)
  }

  carregandoAlunos.value = true
  erroAlunos.value = ''

  try {
    const alunosDaAPI = await buscarAlunos()

    const alunosAdaptados = alunosDaAPI.map(alunoAPI => {
      const alunoLocal = alunos.value.find(
        aluno => String(aluno.id) === String(alunoAPI.id)
      )

      return {
        id: Number(alunoAPI.id),
        nome: alunoAPI.name,
        turma: alunoAPI.turma,
        turno: alunoAPI.turno,
        notas: notasDaAPI
        .filter(nota => String(nota.alunoId) === String(alunoAPI.id))
        .map(nota => ({
          id: nota.id,
          disciplina: nota.disciplina,
          nota: Number(nota.nota)
        }))
      }
    })
 
    console.log('Alunos adaptados:', alunosAdaptados)

alunos.value = alunosAdaptados

if (alunos.value.length > 0) {
  alunoSelecionado.value = alunos.value[0]
}

  } catch (erro) {
  console.error('Erro ao consultar o MockAPI:', erro)
  erroAlunos.value = 'Não foi possível carregar os alunos. Tente novamente.'
} finally {
  carregandoAlunos.value = false
}
})

</script>

<template>
  <Cabecalho />

  <RouterView v-slot="{ Component }">

    <component
      :is="Component"
      :turmas="turmasComQuantidade"
      :alunos="alunosFiltrados"
      :carregando-alunos="carregandoAlunos"
      :erro-alunos="erroAlunos"
      :calcular-media="calcularMedia"
      v-model:busca="busca"
      :aluno="alunoSelecionado"
      :mostrar-mensagem="mostrarMensagem"
      :erro-notas="erroNotas"
      :total-alunos="alunos.length"
      :total-turmas="turmas.length"
      :total-disciplinas="totalDisciplinas"
      :aluno-em-edicao="alunoEmEdicao"
      @selecionar-aluno="selecionarAluno"      
      @aluno-alterado="atualizarAlunoSelecionado"
      @mostrar-aviso="mostrarAviso"
      @cadastrar-nota="salvarNovaNota"
      @atualizar-nota="salvarEdicaoNota"
      @excluir-nota="confirmarExclusaoNota"
      v-model:nomeNovoAluno="nomeNovoAluno"
      v-model:turmaNovoAluno="turmaNovoAluno"
      v-model:nomeAlunoEdicao="nomeAlunoEdicao"
      v-model:turmaAlunoEdicao="turmaAlunoEdicao"
      @cadastrarAluno="salvarNovoAluno"
      @editar-aluno="prepararEdicaoAluno"
      @salvar-edicao-aluno="salvarEdicaoAluno"
      @excluir-aluno="confirmarExclusaoAluno"
    />
  </RouterView>

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

.container-escolar {
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
  max-width: 100%;
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