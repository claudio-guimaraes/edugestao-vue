# EduGestão

Aplicação One Page desenvolvida em Vue.js para o Projeto Prático da disciplina de Frameworks Front-End, do curso de Análise e Desenvolvimento de Sistemas (ADS) da UNAMA – Universidade da Amazônia.

**Professor: André Avelino**

**Integrantes da equipe:**

* Arthur Napoleão Figueiredo Neto - 04211004
* Beatriz Miranda da Costa - 04221323
* Cláudio Fernandes Guimarães - 26128810
* Valéria de Sousa Moreira - 04222055

## Tema

Gestão Escolar: alunos, turmas e notas.

## Objetivo

O objetivo do projeto é criar uma aplicação simples de gestão escolar e colocar em prática os principais conceitos de Vue.js estudados na disciplina.

Durante o desenvolvimento foram utilizados:

* Componentes;
* Props;
* Diretivas;
* Eventos;
* Reatividade;
* `ref()`;
* `computed()`;
* `v-if`;
* `v-else-if`;
* `v-else`;
* `v-show`;
* `v-for`;
* `v-model`;
* CSS com `scoped`;
* Reúso de componentes.

## Componentes

O projeto foi dividido nos seguintes componentes:

* `Cabecalho.vue` — mostra o cabeçalho e o nome da aplicação.
* `Resumo.vue` — mostra a quantidade de alunos, turmas e disciplinas.
* `AlunoCard.vue` — mostra os dados de cada aluno, sua média e sua situação.
* `ListaTurmas.vue` — mostra as turmas cadastradas e a quantidade de alunos em cada uma.
* `ConsultaNotas.vue` — mostra as notas do aluno selecionado e calcula sua média.
* `Rodape.vue` — mostra as informações do rodapé da aplicação.

## Reúso de componentes

O componente `AlunoCard.vue` é utilizado para mostrar os diferentes alunos cadastrados.

As informações de cada aluno são passadas para o componente por meio de props, como nome, turma e média.

Dessa forma, não foi necessário criar um componente diferente para cada aluno.

## Diretivas utilizadas

### `v-for`

É utilizada para percorrer as listas de alunos, turmas e notas e mostrar essas informações na tela.

### `v-if`, `v-else-if` e `v-else`

São utilizadas para mostrar a situação do aluno de acordo com sua média:

* Média igual ou maior que 7: Aprovado;
* Média entre 5 e 6,9: Recuperação;
* Média menor que 5: Reprovado.

### `v-show`

É utilizada para mostrar a mensagem de confirmação depois que o usuário realiza uma consulta.

### `v-model`

É utilizada no campo de pesquisa dos alunos. Conforme o usuário digita, a lista de alunos é filtrada.

## Reatividade

A aplicação utiliza `ref()` para trabalhar com dados que podem mudar durante o uso da aplicação, como a pesquisa, o aluno selecionado e a mensagem de confirmação.

Também é utilizada a função `computed()` para realizar alguns cálculos automaticamente, como a quantidade de alunos por turma e a quantidade de disciplinas.

## Cálculo das médias

As médias dos alunos não são informadas manualmente.

A aplicação recebe as notas das disciplinas e calcula a média automaticamente. Essa média é utilizada para mostrar a situação do aluno no `AlunoCard.vue`.

O boletim também calcula e mostra a média das disciplinas do aluno selecionado.

## Eventos

São utilizados eventos para permitir a interação do usuário com a aplicação.

Por exemplo, o botão de consulta de notas utiliza `@click` e o componente `AlunoCard.vue` envia um evento para o `App.vue` quando o usuário seleciona um aluno.

## Inteligência Artificial

A inteligência artificial foi utilizada como ferramenta de apoio durante o desenvolvimento do projeto.

Os prompts abaixo foram utilizados pela equipe para fazer alterações, tirar dúvidas sobre a implementação e revisar algumas partes do código. Depois das sugestões da IA, o código foi colocado no projeto e testado no navegador.

### Prompt da etapa 1 — Alteração dos alunos

> No meu projeto Vue.js de Gestão Escolar, substitua os alunos atuais por 8 alunos fictícios, distribuídos em 4 turmas, utilizando as disciplinas Matemática, Língua Portuguesa, História, Geografia e Filosofia. Mantenha a estrutura atual do projeto e utilize apenas os recursos de Vue já estudados na disciplina.

**Uso:** alteração dos alunos e das disciplinas utilizadas no projeto.

### Prompt da etapa 2 — Média automática

> No meu projeto Vue.js de Gestão Escolar, quero que a média de cada aluno seja calculada automaticamente a partir das notas das disciplinas, em vez de deixar a média digitada manualmente nos dados do aluno. Faça essa alteração mantendo o projeto simples e utilizando apenas os conceitos de Vue estudados na disciplina.

**Uso:** alteração do cálculo das médias dos alunos.

### Prompt da etapa 3 — Situação automática

> No meu projeto Vue.js de Gestão Escolar, quero que a situação de cada aluno seja determinada automaticamente a partir da média: média igual ou superior a 7 deve resultar em Aprovado, média entre 5 e 6,9 deve resultar em Recuperação e média abaixo de 5 deve resultar em Reprovado. Utilize conceitos simples de Vue e JavaScript já estudados na disciplina e mantenha a estrutura atual do projeto.

**Uso:** verificar e organizar a forma como a situação dos alunos é determinada.

**Observação:** durante a análise do projeto, verificamos que essa funcionalidade já estava implementada no `AlunoCard.vue`. Por isso, a função que havia sido criada no `App.vue` foi removida por não ser necessária.

### Prompt da etapa 4 — Quantidade automática de alunos por turma

> No meu projeto Vue.js de Gestão Escolar, quero que a quantidade de alunos de cada turma seja calculada automaticamente a partir da lista de alunos, em vez de informar manualmente essa quantidade no objeto de cada turma. Utilize `computed()` e mantenha o código simples, usando apenas os conceitos de Vue estudados na disciplina.

**Uso:** fazer com que a quantidade de alunos de cada turma seja calculada automaticamente.

### Prompt da etapa 5 — Situação no boletim

> No meu projeto Vue.js de Gestão Escolar, quero que o boletim de cada aluno mostre também sua situação acadêmica, calculada automaticamente a partir da média das notas. Utilize as categorias Aprovado para média igual ou superior a 7, Recuperação para média entre 5 e 6,9 e Reprovado para média abaixo de 5. Utilize `computed()`, diretivas Vue e CSS próprio, mantendo o código simples e compatível com os conceitos estudados na disciplina.

**Uso:** verificar a possibilidade de mostrar a situação do aluno também na consulta de notas.

### Prompt da etapa 6 — Quantidade automática de disciplinas

> No meu projeto Vue.js de Gestão Escolar, o componente Resumo.vue mostra atualmente a quantidade de alunos, turmas e disciplinas. A quantidade de disciplinas está fixa como 3, mas agora cada aluno possui 5 disciplinas. Quero que a quantidade de disciplinas seja calculada automaticamente a partir dos dados dos alunos e enviada ao componente Resumo.vue por meio de uma prop, mantendo o código simples e utilizando apenas os conceitos de Vue estudados na disciplina.

**Uso:** fazer com que a quantidade de disciplinas mostrada no resumo seja atualizada automaticamente.

## Como executar

É necessário ter o Node.js instalado.

Depois de abrir a pasta do projeto no terminal, execute:

```bash
npm install
npm run dev
```

Depois, abra no navegador o endereço informado pelo Vite.

## Tecnologias utilizadas

* Vue.js
* JavaScript
* HTML
* CSS
* Vite

## Limites do projeto

O projeto foi desenvolvido sem utilizar:

* Vue Router;
* Bootstrap;
* Tailwind;
* bibliotecas externas de componentes;
* bibliotecas externas de gerenciamento de estado;
* backend;
* banco de dados.

