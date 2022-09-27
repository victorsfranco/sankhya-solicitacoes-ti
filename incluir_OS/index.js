const tituloOS = document.querySelector('#tituloOS').value;

const sistemaOS = document.querySelector('#sistemaOS').value;

const telaOcorrencia = document.querySelector('#telaOcorrencia').value;

const descricaoOS = document.querySelector('#descricaoOS').value;


function cancelarOS() {
   document.querySelectorAll('.preenchimentoDeInformacoes').forEach((item) => {item.value = ''});
}
