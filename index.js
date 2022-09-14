var dataAtual = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric'
}).format()

var horaAtual = new Intl.DateTimeFormat('pt-BR', {
  hour: 'numeric',
  minute: 'numeric'
}).format()

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
  var encerraOS = document.getElementById('encerraOS').value

  switch (encerraOS) {
    case '1':
      var statusOS = 'Concluída'
      break
    case '2':
      var statusOS = 'Aguardando atendimento'
  }
  mensagens.push(
    `
    <ul id="teste">
      <li id="autor">MYKAELSON.SOUSA</li>
      <li id="status">${statusOS} - ${dataAtual} ${horaAtual}</li>
      <li>${document.getElementById('retorno').value}</li>
    </ul>
    `
  )

  var listaProcessamentos = mensagens.join(' ')

  document.getElementById('processamentosExistentes').innerHTML =
    listaProcessamentos

  document.getElementById('retorno').value = ''
}
