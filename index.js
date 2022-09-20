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
document.getElementById('botaoOcultaDetalhesOS').innerHTML = '-'
function ocultarDetalhesOS() {
   if (detalhesVisiveis == true) {
      detalhesOS.style.display = 'none'
      document.getElementById('botaoOcultaDetalhesOS').innerHTML = '+'
      detalhesVisiveis = false
   } else if (detalhesVisiveis == false) {
      detalhesOS.style.display = 'block'
      document.getElementById('botaoOcultaDetalhesOS').innerHTML = '-'
      detalhesVisiveis = true
   }
}

var processamentosOS = document.getElementById('Processamentos')
var processamentosVisiveis = true
document.getElementById('botaoOcultaProcessamentos').innerHTML = '-'

function ocultarProcessamentosOS() {
   if (processamentosVisiveis == true) {
      processamentosOS.style.display = 'none'
      document.getElementById('botaoOcultaProcessamentos').innerHTML = '+'
      processamentosVisiveis = false
   } else if (processamentosVisiveis == false) {
      processamentosOS.style.display = 'block'
      document.getElementById('botaoOcultaProcessamentos').innerHTML = '-'
      processamentosVisiveis = true
   }
}

var retornoOS = document.getElementById('incluirRetorno')
var retornoVisivel = false

function incluirRetorno() {
   if (retornoVisivel == true) {
      retornoOS.style.display = 'none'
      retornoVisivel = false
   } else if (retornoVisivel == false) {
      retornoOS.style.display = 'flex'
      retornoVisivel = true
   }
}

//Importação de campos - SANKHYA
// Número Único da OS:
document.getElementById('numeroUnicoOS').innerHTML = '#34367'

// Título da OS:
document.getElementById('tituloOS').innerHTML =
   'Erro ao alterar tipo de Contrato'

// Solicitante:
document.getElementById('solicitante').innerHTML = 'VICTOR ANTONIO SILVA FRANCO'

//Departamento:
document.getElementById('departamento').innerHTML =
   'TI - TECNOLOGIA INFORMAÇÃO-AUX'

//Sistema:
document.getElementById('sistemaOS').innerHTML = 'Sankhya - Kothe'

//Status:
document.getElementById('statusOS').innerHTML = 'Encerrada'

//Descrição da O.S:
document.getElementById(
   'descricaoOS'
).innerHTML = `Boa tarde. Na tela Contratos de T.I , estou obtendo o erro
apresentado na foto em anexo ao tentar alterar o TIPO DE CONTRATO
do lançamento nº 1 . Desejo alterar o TIPO DE CONTRATO de
"INTERNET" para "PRESTAÇÃO DE SERVIÇOS", e não estou conseguindo
devido a esse erro. Obs: O erro acontece tambem em outros
lançamentos.`

//Inclusão do Processamento da O.S:

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
    <ul id="processamentoIncluido">
      <li id="autor"></li>
      <li id="status">${statusOS} - ${dataAtual} ${horaAtual}</li>
      <li>${document.getElementById('retorno').value}</li>
    </ul>
    `
   )

   var listaProcessamentos = mensagens.join('')

   document.getElementById('processamentosExistentes').innerHTML =
      listaProcessamentos

   document.getElementById('retorno').value = ''
}
