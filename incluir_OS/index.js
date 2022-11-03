let requestTitle = document.querySelector('#request-title').value;

document.querySelector('#request-title').addEventListener('change', (event) => {
   requestTitle = event.target.value;
})

let requestSystem = document.querySelector('#request-system').value;

document.querySelector('#request-system').addEventListener('change', (event) => {
   requestSystem = event.target.value;
})

let issueScreen = document.querySelector('#issue-screen').value;

document.querySelector('#issue-screen').addEventListener('change', (event) => {
   issueScreen = event.target.value
})

let descriptionText = document.querySelector('#description-text').value;

document.querySelector('#description-text').addEventListener('change', (event) => {
   descriptionText = event.target.value
})

function saveRequest() {
   const requestData = {
      title: requestTitle,
      system: requestSystem,
      screen: issueScreen,
      description: descriptionText,

   }
   console.log(requestData);
}

function cancelRequest() {
   console.log('Cancelou');
}
