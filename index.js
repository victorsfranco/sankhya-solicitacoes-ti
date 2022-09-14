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

var processamentosOS = document.getElementById('Processamentos')
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

var retornoOS = document.getElementById('Processamentos')
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

var mensagens = []

function enviar() {
  mensagens.push('<li>' + document.getElementById('retorno').value + '</li>')
  var encerraOS = document.getElementById('encerraOS').value

  switch (encerraOS) {
    case '1':
      var statusOS = 'Concluída'
      break
    case '2':
      var statusOS = 'Aguardando atendimento'
  }

  respostas = mensagens.join('')

  document.getElementById('processamentosExistentes').innerHTML = `
  <ul>
    <li id="autor">MYKAELSON.SOUSA</li>
    <li id="status">${statusOS} - 03/08/2022 17:33:47</li>
    ${respostas}
  </ul>
  `
  document.getElementById('retorno').value = ''
}
