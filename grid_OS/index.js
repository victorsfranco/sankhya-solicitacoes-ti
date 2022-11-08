const statusElements = document.querySelectorAll('.request-status');
const requestStatus = Array.from(statusElements);

requestStatus.map((item) => {
  if (item.textContent === 'Concluída' || item.textContent === 'Encerrada') {
    item.classList.add('completed');
  } else if (item.textContent === 'Cancelada') {
    item.classList.add('canceled');
  } else {
    item.classList.add('inAttendance');
  }
})
