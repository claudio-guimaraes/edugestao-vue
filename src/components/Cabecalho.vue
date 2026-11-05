
<template>
  <header class="cabecalho">
    <div class="cabecalho-conteudo container d-flex justify-content-between align-items-center">
      
<RouterLink to="/" class="logo text-decoration-none text-white">
  <span class="icone">E</span>
  <div>
    <strong>EduGestão</strong>
    <small>Gestão Escolar</small>
  </div>
</RouterLink>


      <nav class="menu">
        <RouterLink to="/">Início</RouterLink>
        <RouterLink to="/alunos">Alunos</RouterLink>
        <RouterLink to="/turmas">Turmas</RouterLink>
        <RouterLink to="/notas">Notas</RouterLink>
      </nav>
      
      <span class="status badge bg-warning text-dark">
      Sistema de Gestão Escolar
      </span>

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
  padding: 6px 10px;
  border: none;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 500;
  cursor: default;
}

.menu {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
}

.menu a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.menu a:hover {
  text-decoration: underline;
}

.menu a.router-link-exact-active {
  color: #facc15;
  font-weight: bold;
}

@media (max-width: 700px) {
  .cabecalho-conteudo {
    flex-wrap: wrap;
    gap: 15px;
    padding: 15px 0;
  }

  .menu {
    order: 3;
    width: 100%;
    justify-content: center;
    gap: 15px;
  }
}

</style>