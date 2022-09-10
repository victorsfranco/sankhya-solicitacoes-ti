function incluirRetorno() {
  document.getElementById('retorno').innerHTML = `
    <div id="incluirRetorno">
      <div>
        <label for="encerrarOs">Encerrar O.S:</label>
        <select name="encerrarOs" id="encerra">
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
      var statusOs = 'Concluída'
      break
    case '2':
      var statusOs = 'Aguardando atendimento'
  }

  document.getElementById('processamentos').innerHTML = `
  <div class="cabecario">
   <h3>Atividades Recentes</h3>
    <button onclick="incluirRetorno()">Incluir Retorno</button>
  </div>
  <ul id="respostaProcessamento">
    <li id="autor">MYKAELSON.SOUSA</li>
    <li id="status">${statusOs} - 03/08/2022 17:33:47</li>
    <li>
      ${mensagem}
    </li>
  </ul>
  `
}
