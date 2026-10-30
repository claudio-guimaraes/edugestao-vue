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


O objetivo do projeto é desenvolver uma aplicação simples de gestão escolar, colocando em prática os conceitos de Vue.js estudados na disciplina de Frameworks Front-End.

Na primeira atividade, desenvolvemos a estrutura e as funcionalidades do EduGestão, utilizando componentes, diretivas, eventos e reatividade do Vue.js.

Na segunda atividade, integramos o Bootstrap 5 para melhorar a interface, os cartões, os botões, as tabelas e a responsividade da aplicação, preservando as funcionalidades desenvolvidas anteriormente.

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

Além do componente principal `App.vue`, o projeto utiliza os seguintes componentes:

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

## Segunda atividade — Integração do Bootstrap 5

Na segunda atividade, integramos o Bootstrap 5.3.8 ao EduGestão para melhorar a apresentação visual e a responsividade da aplicação.

O Bootstrap foi instalado pelo npm e importado no arquivo `src/main.js`.

As principais melhorias foram:

* Painel inicial: aplicação de cores diferentes nos cartões de alunos, turmas e disciplinas.
* Lista de alunos: melhorias no espaçamento, nas bordas, nas sombras e nos botões de consulta.
* Campo de pesquisa: utilização de classes do Bootstrap para melhorar sua apresentação.
* Tabela de turmas: aplicação de linhas alternadas e destaque ao passar o mouse.
* Consulta de notas: destaque visual da média e da situação acadêmica.
* Responsividade: ajustes na organização dos elementos para computadores e celulares.

As alterações foram realizadas mantendo os componentes Vue.js, as funcionalidades existentes e a reatividade da aplicação.

### Prompts da segunda atividade — Integração do Bootstrap

**Observação:** Os prompts apresentados a seguir foram reconstruídos com base nas alterações realizadas durante a segunda atividade, para documentar o processo de integração do Bootstrap 5.

#### Prompt 1 — Instalação do Bootstrap 5

> No meu projeto EduGestão, desenvolvido em Vue.js com Vite, quero integrar o Bootstrap 5 para melhorar a interface visual e a responsividade. Oriente-me a instalar o Bootstrap pelo npm e importá-lo no arquivo `src/main.js`, preservando os componentes e as funcionalidades existentes.

**Uso:** instalação do Bootstrap 5.3.8 e configuração de sua utilização no projeto.


#### Prompt 2 — Melhorias no painel inicial

> No projeto EduGestão, quero utilizar classes do Bootstrap 5 para melhorar a aparência dos cartões de resumo que mostram a quantidade de alunos, turmas e disciplinas. Aplique cores diferentes para destacar cada informação, melhore os espaçamentos e mantenha a organização responsiva para computadores e celulares. Preserve o funcionamento do componente `Resumo.vue` e os dados recebidos por props.

**Uso:** melhorias visuais nos cartões do painel inicial, com destaque para as cores, os espaçamentos e a responsividade.


#### Prompt 3 — Melhorias na lista de alunos

> No projeto EduGestão, quero melhorar a aparência dos cartões dos alunos utilizando classes do Bootstrap 5. Ajuste os espaçamentos, as bordas, as sombras e os botões de consulta de notas, deixando a interface mais organizada e agradável. Preserve as informações dos alunos, o cálculo das médias, a situação acadêmica e o evento de seleção do componente `AlunoCard.vue`. Mantenha também a responsividade para computadores e celulares.

**Uso:** melhorias visuais nos cartões dos alunos e nos botões de consulta, preservando as funcionalidades existentes.


#### Prompt 4 — Melhorias no campo de pesquisa

> No projeto EduGestão, desenvolvido em Vue.js, quero melhorar a aparência do campo de pesquisa de alunos utilizando classes do Bootstrap 5. Ajuste as bordas, os espaçamentos e a apresentação visual do campo para que ele fique mais organizado e se adapte a computadores e celulares. Preserve o funcionamento do `v-model` e da propriedade computada que filtra os alunos pelo nome, sem alterar a lógica da pesquisa.

**Uso:** melhoria visual do campo de pesquisa com Bootstrap, mantendo a filtragem reativa dos alunos.


#### Prompt 5 — Melhorias na tabela de turmas

> No projeto EduGestão, desenvolvido em Vue.js, quero melhorar a apresentação da tabela de turmas utilizando classes do Bootstrap 5. Aplique linhas alternadas, destaque visual quando o usuário passar o mouse sobre uma linha e melhore os espaçamentos e a organização da tabela. Mantenha as informações de turma, turno e quantidade de alunos, preservando o `v-for` e os dados recebidos pelo componente `ListaTurmas.vue`. A tabela também deve se adaptar a telas menores, como celulares.

**Uso:** melhoria visual da tabela de turmas com Bootstrap, incluindo linhas alternadas, efeito ao passar o mouse e responsividade.


#### Prompt 6 — Melhorias na consulta de notas

> No projeto EduGestão, desenvolvido em Vue.js, quero melhorar a aparência do painel de consulta de notas utilizando classes do Bootstrap 5. Organize melhor a apresentação das disciplinas e das notas, destaque visualmente a média final e a situação acadêmica do aluno e melhore os espaçamentos e a responsividade do painel. Preserve o cálculo automático da média, as informações do aluno selecionado e os eventos existentes no componente `ConsultaNotas.vue`, sem alterar o funcionamento da aplicação.

**Uso:** melhoria visual do painel de consulta de notas, com destaque para a média e a situação acadêmica, preservando os cálculos e a reatividade do Vue.js.


#### Prompt 7 — Melhorias no cabeçalho e no rodapé

> No projeto EduGestão, desenvolvido em Vue.js, quero melhorar a aparência do cabeçalho e do rodapé utilizando classes do Bootstrap 5. Ajuste os espaçamentos, o alinhamento e a apresentação visual dos elementos, mantendo a identidade do projeto. Preserve os componentes `Cabecalho.vue` e `Rodape.vue` e garanta que os elementos continuem organizados em computadores e celulares.

**Uso:** melhorias visuais no cabeçalho e no rodapé, com ajustes de espaçamento, alinhamento e responsividade.


#### Prompt 8 — Revisão da responsividade e do funcionamento

> No projeto EduGestão, desenvolvido em Vue.js e atualizado com Bootstrap 5, quero revisar a responsividade da aplicação para verificar se os elementos estão organizados corretamente em computadores e celulares. Verifique o painel inicial, a lista de alunos, o campo de pesquisa, a tabela de turmas e a consulta de notas. Preserve as funcionalidades existentes, incluindo a pesquisa de alunos, a seleção de alunos, o cálculo automático das médias e a exibição da situação acadêmica. Oriente-me também a executar `npm run build` para verificar se o projeto compila sem erros.

**Uso:** revisão da responsividade e das funcionalidades do projeto após a integração do Bootstrap, incluindo a verificação da compilação.


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
* Bootstrap 5.3.8
* Node.js
* npm
* Vite

## Limites do projeto

O projeto foi desenvolvido sem utilizar:

- Vue Router;
- Tailwind CSS;
- bibliotecas externas de componentes Vue;
- bibliotecas externas de gerenciamento de estado;
- backend;
- banco de dados.

O Bootstrap 5 foi utilizado como framework CSS para melhorar a interface, mantendo a aplicação como uma One Page desenvolvida em Vue.js.

## Demonstração do projeto

As duas versões do EduGestão podem ser acessadas pelo StackBlitz.

**Primeira atividade — Vue.js sem Bootstrap:**

https://stackblitz.com/github/claudio-guimaraes/edugestao-vue/tree/68b4e56

**Segunda atividade — Vue.js com Bootstrap 5:**

https://stackblitz.com/github/claudio-guimaraes/edugestao-vue

Esses links permitem visualizar o código e executar as aplicações diretamente no navegador, facilitando a comparação entre as duas etapas do projeto.