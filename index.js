
function exibeMensagem(nome, idade) {
  let temArroba = false 

  for (let i = 0; i < nome.length; i++) {
    if (nome[i] === '@') {
      temArroba = true
    }
  }

  temArroba = nome.indexOf('@') > -1

  if (temArroba) {
    alert('TA CERTO')
  } else {
    alert('TA ERRADO')
  }
}

const ehUmaString = (variavel) => typeof variavel !== 'number'

const filtraString = (listaDeItems) => listaDeItems.filter(ehUmaString)

function chamaFuncoes() {
  const novaLista = filtraString([10, 'alyson', 'gui', 10, 8, 'bla', 'mundo'])
}

document.getElementById("btn").addEventListener('click', () => {
  chamaFuncoes()
})
document.getElementById("texto").addEventListener('change', () => {
  chamaFuncoes()
})