<script setup>
defineProps({
  nome: String,
  turma: String,
  media: Number
})

const emit = defineEmits(['selecionar'])

function situacao(media) {
  if (media >= 7) {
    return 'Aprovado'
  }

  if (media >= 5) {
    return 'Recuperação'
  }

  return 'Reprovado'
}
</script>

<template>
  <article class="card">
    <div class="avatar">
      {{ nome.charAt(0) }}
    </div>

    <div class="dados">
      <h3>{{ nome }}</h3>
      <p>Turma: {{ turma }}</p>

      <div class="rodape-card">
        <span>Média: <strong>{{ media.toFixed(1) }}</strong></span>

        <span
          v-if="media >= 7"
          class="situacao aprovado"
        >
          {{ situacao(media) }}
        </span>

        <span
          v-else-if="media >= 5"
          class="situacao recuperacao"
        >
          {{ situacao(media) }}
        </span>

        <span
          v-else
          class="situacao reprovado"
        >
          {{ situacao(media) }}
        </span>
      </div>

      <button @click="emit('selecionar')">
        Consultar notas
      </button>
    </div>
  </article>
</template>

<style scoped>
.card {
  display: flex;
  gap: 15px;
  padding: 20px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
}

.avatar {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #dbeafe;
  color: #1e40af;
  font-weight: bold;
  font-size: 20px;
}

.dados {
  width: 100%;
}

h3 {
  margin: 0;
  font-size: 18px;
}

p {
  margin: 5px 0 14px;
  color: #64748b;
}

.rodape-card {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
}

.situacao {
  padding: 5px 9px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: bold;
}

.aprovado {
  background: #dcfce7;
  color: #166534;
}

.recuperacao {
  background: #fef3c7;
  color: #92400e;
}

.reprovado {
  background: #fee2e2;
  color: #991b1b;
}

button {
  margin-top: 16px;
  padding: 9px 13px;
  border: 0;
  border-radius: 8px;
  background: #2563eb;
  color: white;
  cursor: pointer;
}

button:hover {
  background: #1d4ed8;
}
</style>