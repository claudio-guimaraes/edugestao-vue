
const API_URL = 'https://6af11b4211a6aa866e7fec10.mockapi.io/api/v1/notas'

export async function buscarNotas() {
  const resposta = await fetch(API_URL)

  if (!resposta.ok) {
    throw new Error('Erro ao buscar notas')
  }

  return await resposta.json()
}

export async function cadastrarNota(novaNota) {
  const resposta = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(novaNota)
  })

  if (!resposta.ok) {
    throw new Error('Erro ao cadastrar nota')
  }

  return await resposta.json()
}

export async function atualizarNota(id, dadosAtualizados) {
  const resposta = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dadosAtualizados)
  })

  if (!resposta.ok) {
    throw new Error('Erro ao atualizar nota')
  }

  return await resposta.json()
}


export async function excluirNota(id) {
  const resposta = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  })

  if (!resposta.ok) {
    throw new Error('Erro ao excluir nota')
  }

  return await resposta.json()
}
