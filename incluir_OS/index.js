const requestTitle = document.querySelector('#request-title').value;

const requestSystem = document.querySelector('#request-system').value;

const problemLocation = document.querySelector('#problem-location').value;

const descriptionText = document.querySelector('#description-text').value;


function cancelRequest() {
   document.querySelectorAll('.informations-insert').forEach((item) => {item.value = ''});
}
