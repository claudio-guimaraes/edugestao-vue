<script setup>
defineProps({
  totalAlunos: Number,
  totalTurmas: Number,
  totalDisciplinas: Number
})
</script>

<template>
  <section class="resumo">
    <div class="item">
      <span>Alunos</span>
      <strong>{{ totalAlunos }}</strong>
    </div>

    <div class="item">
      <span>Turmas</span>
      <strong>{{ totalTurmas }}</strong>
    </div>

    <div class="item">
      <span>Disciplinas</span>
      <strong>{{ totalDisciplinas }}</strong>
    </div>
  </section>
</template>

<style scoped>
.resumo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.item {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 20px;
}

.item span,
.item strong {
  display: block;
}

.item span {
  color: #64748b;
  font-size: 14px;
}

.item strong {
  margin-top: 7px;
  font-size: 30px;
  color: #1e3a8a;
}

@media (max-width: 600px) {
  .resumo {
    grid-template-columns: 1fr;
  }
}
</style>