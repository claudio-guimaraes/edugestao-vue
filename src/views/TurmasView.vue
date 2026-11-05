
<script setup>
import ListaTurmas from '../components/ListaTurmas.vue'

defineProps({
  turmas: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <main class="container-escolar">
    <section class="secao">
      <ListaTurmas :turmas="turmas" />
    </section>
  </main>
</template>
