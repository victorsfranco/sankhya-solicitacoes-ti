// Definição do Usuário de inclusão do processamento da O.S
const autor = 'MYKALESON.SOUSA'

// Coleta de Data e Hora Atuais
const dataLocal = new Date().toLocaleDateString("pt-BR");

const horaLocal = new Date().toLocaleTimeString("pt-BR", {hour: '2-digit', minute: '2-digit'});


//Função Oculta Detalhes da O.S
const detalhesOS = document.getElementById('listaDetalhesOS')
let detalhesVisiveis = true
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

//Função Oculta Processamentos da O.S
const processamentosOS = document.getElementById('Processamentos')
let processamentosVisiveis = true;
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

//Função Oculta Anexos da O.S
const anexosOS = document.querySelector('#conteudoAnexos');
let anexosVisiveis = true;
document.querySelector("#botaoOcultaAnexos").innerHTML = '-';

function ocultaAnexosOS() {
   if (anexosVisiveis === true) {
      anexosOS.style.display = 'none';
      document.querySelector('#botaoOcultaAnexos').innerHTML = '+';
      anexosVisiveis = false;
   } else if (anexosVisiveis === false) {
      anexosOS.style.display = 'block';
      document.querySelector('#botaoOcultaAnexos').innerHTML = '-';
      anexosVisiveis = true;
   }
}

// Array que Receberá os anexos
const listaAnexos = ['anexo 1', 'asdmasodmasd', 'ssa', 3];
const autorAnexo = 'VICTOR.FRANCO';

document.querySelector('#conteudoAnexos').innerHTML = `<ul id="listaAnexos"> ${listaAnexos.map((i) => {
   return ` <li class= "anexoItem"> <a href= "#"> ${i} </a> ${autorAnexo} | ${dataLocal} ${horaLocal} </li>`
}).join('')} </ul>`

if (listaAnexos.length <= 0) {
   document.querySelector('#anexos').style.display = 'none';
} else {document.querySelector('#anexos').style.display = 'block';
};


const textArea = document.querySelector('#retorno');
textArea.value = '';

const retornoOS = document.getElementById('incluirRetorno')
let retornoVisivel = false

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

const mensagens = []
let statusOS;

function enviar() {
   const encerraOS = document.getElementById('encerraOS').value

   switch (encerraOS) {
      case 'sim':
         statusOS = 'Encerrada'
         break
      case 'nao':
         statusOS = 'Aguardando atendimento'
   }
   mensagens.push(
      `
    <ul id="processamentoIncluido">
      <li id="autor">${autor}</li>
      <li id="status">${statusOS} - ${dataLocal} ${horaLocal}</li>
      <li>${document.getElementById('retorno').value}</li>
    </ul>
    `
   )

   const listaProcessamentos = mensagens.join('')

   document.getElementById('processamentosExistentes').innerHTML =
      listaProcessamentos

   document.getElementById('retorno').value = ''
}
