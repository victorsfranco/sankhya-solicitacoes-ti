function incluirRetorno() {
  document.getElementById('retorno').innerHTML = `
    <div id="incluirRetorno">
      <div>
        <label for="encerrarOS">Encerrar O.S:</label>
        <select name="encerrarOS" id="encerra">
          <option value="1">Sim</option>
          <option value="2">Não</option>
        </select>
      </div>
      <label for="retorno">Retorno:</label>
      <textarea name="retorno" id="resposta" cols="30" rows="10">
      </textarea>
      <button onclick="enviar()">Enviar</button>
    </div>
    `
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

  document.getElementById('processamentos').innerHTML = `
  <div class="cabecario">
   <h3>Atividades Recentes</h3>
    <button onclick="incluirRetorno()" id="botaoIncluirRetorno">Incluir Retorno</button>
    <button onclick="ocultarProcessamentosOS()" class="alternaVisualizacao" id="botaoOcultaProcessamentos">-</button>
  </div>
  <ul id="respostaProcessamento">
    <li id="autor">MYKAELSON.SOUSA</li>
    <li id="status">${statusOS} - 03/08/2022 17:33:47</li>
    <li>
      ${mensagem}
    </li>
  </ul>
  `
}

var detalhesOS = document.getElementById('listaDetalhesOS')
var detalhesVisiveis = true

function ocultarDetalhesOS() {


  if (detalhesVisiveis == true) {
    detalhesOS.style.display = "none"
    detalhesVisiveis = false
  } else if (detalhesVisiveis == false) {
    detalhesOS.style.display = "block"
    detalhesVisiveis = true
  } else {}

}

var processamentosOS = document.getElementById('respostaProcessamento')
var processamentosVisiveis = true

function ocultarProcessamentosOS() {
  console.log(processamentosOS);
  if (processamentosVisiveis == true) {
    processamentosOS.style.display = "none"
    processamentosVisiveis = false
  } else if (processamentosVisiveis == false) {
    processamentosOS.style.display = "block"
    processamentosVisiveis = true
  } else {}
}