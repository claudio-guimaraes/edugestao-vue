<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  aluno: {
    type: Object,
    required: true
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

const disciplinaSelecionada = ref('')
const valorNota = ref('')
const notaEmEdicao = ref(null)
const ordemDisciplinas = [
  'Matemática',
  'Língua Portuguesa',
  'História',
  'Geografia',
  'Filosofia'
]

const notasOrdenadas = computed(() => {
  return [...props.aluno.notas].sort((a, b) => {
    return ordemDisciplinas.indexOf(a.disciplina) -
           ordemDisciplinas.indexOf(b.disciplina)
  })
})

const mediaNotas = computed(() => {
  if (props.aluno.notas.length === 0) {
    return 0
  }

  const total = props.aluno.notas.reduce(
    (soma, item) => soma + item.nota, 0
  )

  return total / props.aluno.notas.length
})

const situacao = computed(() => {
  if (props.aluno.notas.length === 0) {
    return 'Sem notas'
  }

  if (mediaNotas.value >= 7) {
    return 'Aprovado'
  }

  if (mediaNotas.value >= 5) {
    return 'Recuperação'
  }

  return 'Reprovado'
})

function consultar() {
  emit('mostrarAviso')
}

function salvarNota() {
  if (disciplinaSelecionada.value === '') {
    alert('Selecione uma disciplina.')
    return
  }

  if (
    valorNota.value === '' ||
    !Number.isFinite(valorNota.value) ||
    valorNota.value < 0 ||
    valorNota.value > 10
  ) {
    alert('Digite uma nota válida entre 0 e 10.')
    return
  }

  const disciplinaJaExiste = props.aluno.notas.some(
    item =>
      item.disciplina === disciplinaSelecionada.value &&
      String(item.id) !== String(notaEmEdicao.value)
  )

  if (disciplinaJaExiste) {
    alert('Este aluno já possui uma nota nessa disciplina.')
    return
  }

  if (notaEmEdicao.value !== null) {
    emit('atualizarNota', {
      id: notaEmEdicao.value,
      alunoId: props.aluno.id,
      disciplina: disciplinaSelecionada.value,
      nota: valorNota.value
    })

    return
  }

  emit('cadastrarNota', {
    alunoId: props.aluno.id,
    disciplina: disciplinaSelecionada.value,
    nota: valorNota.value
  })
}

function iniciarEdicao(item) {
  notaEmEdicao.value = item.id
  disciplinaSelecionada.value = item.disciplina
  valorNota.value = item.nota
}

function cancelarEdicao() {
  notaEmEdicao.value = null
  disciplinaSelecionada.value = ''
  valorNota.value = ''
}

</script>

<template>
  <div class="consulta rounded-3">
    <div class="cabecalho">
      <div>
        <p class="etiqueta">BOLETIM</p>
        <h2>Consulta de notas</h2>
    </div>

      <button class="btn btn-primary" @click="consultar">
        Confirmar consulta
      </button>
    </div>

    <div class="aluno">
      <strong>{{ aluno.nome }}</strong>
      <span>{{ aluno.turma }}</span>
    </div>

    <div class="notas">
    <div class="mb-3">
      <label for="disciplina" class="form-label">
        Disciplina
      </label>

      <select
        id="disciplina"
        v-model="disciplinaSelecionada"
        class="form-select"
      >
        <option value="">Selecione uma disciplina</option>
        <option value="Matemática">Matemática</option>
        <option value="Língua Portuguesa">Língua Portuguesa</option>
        <option value="História">História</option>
        <option value="Geografia">Geografia</option>
        <option value="Filosofia">Filosofia</option>
      </select>
    </div>

    <div class="mb-3">
      <label for="valorNota" class="form-label">
        Nota
      </label>

      <input
        id="valorNota"
        v-model.number="valorNota"
        type="number"
        min="0"
        max="10"
        step="0.1"
        class="form-control"
        placeholder="Digite uma nota de 0 a 10"
      />
    </div>

    <div class="mb-4">
      <button
        type="button"
        class="btn btn-success"
        @click="salvarNota"
      >
        {{ notaEmEdicao !== null ? 'Salvar alteração' : 'Salvar nota' }}
      </button>

      <button
        v-if="notaEmEdicao !== null"
        type="button"
        class="btn btn-secondary ms-2"
        @click="cancelarEdicao"
      >
        Cancelar edição
      </button>
    </div>

      <div
        v-for="item in notasOrdenadas"
        :key="item.id"
        class="nota"
      >
        <span>{{ item.disciplina }}</span>

        <div class="d-flex align-items-center gap-2">
          <strong>{{ item.nota.toFixed(1) }}</strong>

          <button
            type="button"
            class="btn btn-outline-primary btn-sm"
            @click="iniciarEdicao(item)"
          >
            Editar
          </button>
          <button
            type="button"
            class="btn btn-outline-danger btn-sm"
            @click="emit('excluirNota', item)"
          >
            Excluir
          </button>
        </div>
      </div>
    </div>

<div class="media bg-primary text-white shadow-sm">
  <span>Média das disciplinas</span>

  <strong v-if="erroNotas">
    Notas indisponíveis
  </strong>

  <strong v-else-if="aluno.notas.length > 0">
    {{ mediaNotas.toFixed(1) }}
  </strong>

  <strong v-else>
    Sem notas
  </strong>
</div>

<div class="situacao">
  <span>Situação</span>

  <strong
    v-if="erroNotas"
    class="badge bg-secondary fs-6"
  >
    Notas indisponíveis
  </strong>

  <strong
    v-else-if="aluno.notas.length === 0"
    class="badge bg-secondary fs-6"
  >
    Sem notas
  </strong>

  <strong
    v-else-if="mediaNotas >= 7"
    class="badge bg-success fs-6"
  >
    {{ situacao }}
  </strong>

  <strong
    v-else-if="mediaNotas >= 5"
    class="badge bg-warning text-dark fs-6"
  >
    {{ situacao }}
  </strong>

  <strong
    v-else
    class="badge bg-danger fs-6"
  >
    {{ situacao }}
  </strong>
</div>

  </div>
</template>

<style scoped>
.consulta {
  padding: 24px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
}

.cabecalho {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 15px;
}

.etiqueta {
  margin: 0 0 8px;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1.5px;
  color: #2563eb;
}

h2 {
  margin: 0;
  font-size: 25px;
}

button {
  padding: 10px 14px;
  border: 0;
  border-radius: 8px;
  background: #1e3a8a;
  color: white;
  cursor: pointer;
}

.aluno {
  display: flex;
  justify-content: space-between;
  margin: 25px 0 15px;
  padding: 15px;
  border-radius: 10px;
  background: #f8fafc;
}

.aluno span {
  color: #64748b;
}

.notas {
  border-top: 1px solid #e5e7eb;
}

.nota {
  display: flex;
  justify-content: space-between;
  padding: 13px 5px;
  border-bottom: 1px solid #e5e7eb;
}

.nota:nth-child(even) {
  background-color: #f1f5f9;
}

.nota:hover {
  background-color: #dbeafe;
}

.media {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  padding: 18px;
  border-radius: 10px;
}

.media strong {
  font-size: 24px;
}

.situacao {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 15px;
  border-radius: 10px;
  background: #f8fafc;
}

.aprovado {
  color: #166534;
}

.recuperacao {
  color: #92400e;
}

.reprovado {
  color: #991b1b;
}

@media (max-width: 600px) {
  .cabecalho {
    align-items: stretch;
    flex-direction: column;
  }
}
</style>