var detalhesOS = document.getElementById('listaDetalhesOS')
var detalhesVisiveis = true

function ocultarDetalhesOS() {
  if (detalhesVisiveis == true) {
    detalhesOS.style.display = 'none'
    detalhesVisiveis = false
  } else if (detalhesVisiveis == false) {
    detalhesOS.style.display = 'block'
    detalhesVisiveis = true
  }
}

var processamentosOS = document.getElementById('respostaProcessamento')
var processamentosVisiveis = true

function ocultarProcessamentosOS() {
  console.log(processamentosOS)
  if (processamentosVisiveis == true) {
    processamentosOS.style.display = 'none'
    processamentosVisiveis = false
  } else if (processamentosVisiveis == false) {
    processamentosOS.style.display = 'block'
    processamentosVisiveis = true
  }
}

var retornoOS = document.getElementById('respostaProcessamento')
var retornoVisivel = false

function incluirRetorno() {
  if (retornoVisivel == true) {
    retornoOS.style.display = 'none'
    retornoVisivel = false
  } else if (retornoVisivel == false) {
    retornoOS.style.display = 'block'
    retornoVisivel = true
  }
}

function enviar() {
  var mensagem = document.getElementById('resposta').value
  var encerraValor = document.getElementById('encerra').value

  switch (encerraValor) {
    case '1':
      var statusOS = 'Concluída'
      break
    case '2':
      var statusOS = 'Aguardando atendimento'
  }

  document.getElementById('processamentosExistentes').innerHTML = `
  <ul>
    <li id="autor">MYKAELSON.SOUSA</li>
    <li id="status">${statusOS} - 03/08/2022 17:33:47</li>
    <li>
      ${mensagem}
    </li>
  </ul>
  `
  var textoEscrito = document.getElementById('resposta')
  textoEscrito.value = ''
}
