<script setup>
import { computed } from 'vue'

const props = defineProps({
  aluno: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['alunoAlterado', 'mostrarAviso'])

const mediaNotas = computed(() => {
  const total = props.aluno.notas.reduce((soma, item) => soma + item.nota, 0)
  return total / props.aluno.notas.length
})

const situacao = computed(() => {
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
</script>

<template>
  <div class="consulta">
    <div class="cabecalho">
      <div>
        <p class="etiqueta">BOLETIM</p>
        <h2>Consulta de notas</h2>
      </div>

      <button @click="consultar">
        Confirmar consulta
      </button>
    </div>

    <div class="aluno">
      <strong>{{ aluno.nome }}</strong>
      <span>{{ aluno.turma }}</span>
    </div>

    <div class="notas">
      <div
        v-for="item in aluno.notas"
        :key="item.disciplina"
        class="nota"
      >
        <span>{{ item.disciplina }}</span>
        <strong>{{ item.nota.toFixed(1) }}</strong>
      </div>
    </div>

    <div class="media">
  <span>Média das disciplinas</span>
  <strong>{{ mediaNotas.toFixed(1) }}</strong>
</div>

<div class="situacao">
  <span>Situação</span>

  <strong
    v-if="mediaNotas >= 7"
    class="aprovado"
  >
    {{ situacao }}
  </strong>

  <strong
    v-else-if="mediaNotas >= 5"
    class="recuperacao"
  >
    {{ situacao }}
  </strong>

  <strong
    v-else
    class="reprovado"
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

.media {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  padding: 15px;
  border-radius: 10px;
  background: #eff6ff;
  color: #1e40af;
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