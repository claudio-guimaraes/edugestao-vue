<script setup>
defineProps({
  totalAlunos: Number,
  totalTurmas: Number,
  totalDisciplinas: Number
})
</script>

<template>
  <section class="resumo row g-3">
    
<div class="col-md-4">
  <RouterLink
    to="/alunos"
    class="item bg-primary rounded-3 p-3 d-block text-decoration-none"
  >
    <span class="text-white">Alunos</span>
    <strong class="text-white">{{ totalAlunos }}</strong>
  </RouterLink>
</div>


    
<div class="col-md-4">
  <RouterLink
    to="/turmas"
    class="item bg-success rounded-3 p-3 d-block text-decoration-none"
  >
    <span class="text-white">Turmas</span>
    <strong class="text-white">{{ totalTurmas }}</strong>
  </RouterLink>
</div>


    
<div class="col-md-4">
  <RouterLink
    to="/notas"
    class="item bg-secondary rounded-3 p-3 d-block text-decoration-none"
  >
    <span class="text-white">Disciplinas</span>
    <strong class="text-white">{{ totalDisciplinas }}</strong>
  </RouterLink>
</div>

  </section>
</template>

<style scoped>

.item {
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 20px;
}

.item span,
.item strong {
  display: block;
}

.item span {
  font-size: 14px;
}

.item strong {
  margin-top: 7px;
  font-size: 30px;
}

@media (max-width: 600px) {
  .resumo {
    grid-template-columns: 1fr;
  }
}
</style>