<script setup>
defineProps({
  turmas: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div>
    <div class="titulo">
      <p class="etiqueta">TURMAS</p>
      <h2>Turmas cadastradas</h2>
    </div>

    <div class="tabela">
      <div class="linha cabecalho">
        <strong>Turma</strong>
        <strong>Turno</strong>
        <strong>Alunos</strong>
      </div>

      <div
        v-for="turma in turmas"
        :key="turma.nome"
        class="linha"
      >
        <span>{{ turma.nome }}</span>
        <span>{{ turma.turno }}</span>
        <span>{{ turma.alunos }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.etiqueta {
  margin: 0 0 8px;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1.5px;
  color: #2563eb;
}

h2 {
  margin: 0 0 16px;
  font-size: 25px;
}

.tabela {
  overflow: hidden;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
}

.linha {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 15px 18px;
  border-bottom: 1px solid #e5e7eb;
}

.linha:last-child {
  border-bottom: 0;
}

.cabecalho {
  background: #f8fafc;
  color: #475569;
}
</style>