
const API_URL = 'https://6af11b4211a6aa866e7fec10.mockapi.io/api/v1/alunos'

export async function buscarAlunos() {
  const resposta = await fetch(API_URL)

  if (!resposta.ok) {
    throw new Error('Erro ao buscar alunos da API')
  }

  return await resposta.json()
}

export async function cadastrarAluno(novoAluno) {
  const resposta = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(novoAluno)
  })

  if (!resposta.ok) {
    throw new Error('Erro ao cadastrar aluno na API')
  }

  return await resposta.json()
}

export async function atualizarAluno(id, dadosAtualizados) {
  const resposta = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dadosAtualizados)
  })

  if (!resposta.ok) {
    throw new Error('Erro ao atualizar aluno na API')
  }

  return await resposta.json()
}

export async function excluirAluno(id) {
  const resposta = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  })

  if (!resposta.ok) {
    throw new Error('Erro ao excluir aluno na API')
  }

  return true
}

