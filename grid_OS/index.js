const statusElements = document.querySelectorAll('.request-status');
const requestStatus = Array.from(statusElements);

requestStatus.forEach((item) => {
  if (item.textContent === 'Concluída' || item.textContent === 'Encerrada') {
    item.classList.add('completed');
  } else if (item.textContent === 'Cancelada') {
    item.classList.add('canceled');
  } else {
    item.classList.add('inAttendance');
  }
})

let statusAll = document.querySelector('#todos');

statusAll.addEventListener('change', (event) => {
  statusAll = event.target.checked;

  let statusCheckbox = document.querySelectorAll('.status-checkbox');

  if (statusAll === true) {
    statusCheckbox.forEach((item) => {
      item.checked = true;
    })

  } else if (statusAll === false) {
    statusCheckbox.forEach((item) => {
      item.checked = false;
    })
  }

})

document.querySelectorAll('.status-checkbox').forEach((item) => {
  item.addEventListener('change', (event) => {
    let allBoxesChecked = event.target.checked;

    if (allBoxesChecked === false) {
      document.querySelector('#todos').checked = false
    }

  })

});


