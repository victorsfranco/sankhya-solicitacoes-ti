// Definição do Usuário de inclusão do processamento da O.S
const author = 'MYKALESON.SOUSA'

// Coleta de Data e Hora Atuais
const localData = new Date().toLocaleDateString("pt-BR");

const localTime = new Date().toLocaleTimeString("pt-BR", {hour: '2-digit', minute: '2-digit'});


//Função Oculta Detalhes da O.S
const requestDetails = document.getElementById('request-details-list')
let detailsAreVisible = true
document.getElementById('hide-request-details-button').innerHTML = '-'
function hideRequestDetails() {
   if (detailsAreVisible == true) {
      requestDetails.style.display = 'none'
      document.getElementById('hide-request-details-button').innerHTML = '+'
      detailsAreVisible = false
   } else if (detailsAreVisible == false) {
      requestDetails.style.display = 'block'
      document.getElementById('hide-request-details-button').innerHTML = '-'
      detailsAreVisible = true
   }
}

//Função Oculta Processamentos da O.S
const requestProcessings = document.getElementById('processings')
let processingsAreVisible = true;
document.getElementById('hide-processings-button').innerHTML = '-'

function ocultarProcessamentosOS() {
   if (processingsAreVisible == true) {
      requestProcessings.style.display = 'none'
      document.getElementById('hide-processings-button').innerHTML = '+'
      processingsAreVisible = false
   } else if (processingsAreVisible == false) {
      requestProcessings.style.display = 'block'
      document.getElementById('hide-processings-button').innerHTML = '-'
      processingsAreVisible = true
   }
}

//Função Oculta Anexos da O.S
const requestAttachments = document.querySelector('#attachments-content');
let attachmentsAreVisible = true;
const attachmentsList = ['Anexo1.png', 'Anexo2.pdf', 'Anexo3.xls'];

if (attachmentsList.length >= 1) {
   document.querySelector("#hide-attachments-button").innerHTML = '-';
}

function hideRequestAttachments() {
   if (attachmentsAreVisible === true && attachmentsList.length >= 1) {
      requestAttachments.style.display = 'none';
      document.querySelector('#hide-attachments-button').innerHTML = '+';
      attachmentsAreVisible = false;
   } else if (attachmentsAreVisible === false && attachmentsList.length >= 1) {
      requestAttachments.style.display = 'block';
      document.querySelector('#hide-attachments-button').innerHTML = '-';
      attachmentsAreVisible = true;
   } else if (attachmentsAreVisible === false) {
      document.querySelector('#hide-attachments-button').innerHTML = '-';
      attachmentsAreVisible = true;
   }
}

// Array que Receberá os anexos

const attachmentAuthor = 'VICTOR.FRANCO';

document.querySelector('#attachments-content').innerHTML = `<ul id="attachments-list"> ${attachmentsList.map((i) => {
   return ` <li class= "attachment-item"> <a href= "#"> ${i} </a> ${attachmentAuthor} | ${localData} ${localTime} </li>`
}).join('')} </ul>`

if (attachmentsList.length <= 0) {
   document.querySelector('#attachments-content').style.display = 'none';
} else {document.querySelector('#attachments-content').style.display = 'block';
};


const textArea = document.querySelector('#return');
textArea.value = '';

const retornoOS = document.getElementById('include-return')
let retornoVisivel = false

function includeReturn() {
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
document.getElementById('request-unic-number').innerHTML = '#34367'

// Título da OS:
document.getElementById('request-title').innerHTML =
   'Erro ao alterar tipo de Contrato'

// Solicitante:
document.getElementById('requester').innerHTML = 'VICTOR ANTONIO SILVA FRANCO'

//Departamento:
document.getElementById('department').innerHTML =
   'TI - TECNOLOGIA INFORMAÇÃO-AUX'

//Sistema:
document.getElementById('request-system').innerHTML = 'Sankhya - Kothe'

//Status:
document.getElementById('request-status').innerHTML = 'Encerrada'

//Descrição da O.S:
document.getElementById(
   'request-description'
).innerHTML = `Boa tarde. Na tela Contratos de T.I , estou obtendo o erro
apresentado na foto em anexo ao tentar alterar o TIPO DE CONTRATO
do lançamento nº 1 . Desejo alterar o TIPO DE CONTRATO de
"INTERNET" para "PRESTAÇÃO DE SERVIÇOS", e não estou conseguindo
devido a esse erro. Obs: O erro acontece tambem em outros
lançamentos.`

//Inclusão do Processamento da O.S:

const mensagens = []
let requestStatus;

function send() {
   const finishRequest = document.getElementById('status-select').value

   switch (finishRequest) {
      case 'yes':
         requestStatus = 'Encerrada'
         break
      case 'no':
         requestStatus = 'Aguardando atendimento'
   }
   mensagens.push(
      `
    <ul id="included-processing">
      <li id="request-author">${author}</li>
      <li id="status">${requestStatus} - ${localData} ${localTime}</li>
      <li>${document.getElementById('return').value}</li>
    </ul>
    `
   )

   const listaProcessamentos = mensagens.join('')

   document.getElementById('current-processing').innerHTML =
      listaProcessamentos

   document.getElementById('return').value = ''
}
