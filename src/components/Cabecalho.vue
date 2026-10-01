<template>
  <header class="cabecalho">
    <div class="cabecalho-conteudo">
      <div class="logo">
        <span class="icone">E</span>
        <div>
          <strong>EduGestão</strong>
          <small>Gestão Escolar</small>
        </div>
      </div>

      <span class="status">Painel escolar</span>
    </div>
  </header>
</template>

<style scoped>
.cabecalho {
  background: #1e3a8a;
  color: white;
}

.cabecalho-conteudo {
  width: min(1100px, 92%);
  margin: 0 auto;
  min-height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo strong,
.logo small {
  display: block;
}

.logo small {
  margin-top: 2px;
  opacity: 0.75;
}

.icone {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: white;
  color: #1e3a8a;
  font-weight: bold;
  font-size: 20px;
}

.status {
  padding: 7px 11px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 20px;
  font-size: 13px;
}
</style>