// get modal element
var modal = document.getElementById('simpleModal');
//get open modal button
var modalBtn = document.getElementById('modalBtn');
//get close btn; but im not going to use close closeBtn

//listen for open click on modal closeBtn
modalBtn.addEventListener('click',openModal);

//function to open modalBtn
function openModal(){
  modal.style.display = 'block';
  modalBtn.style.display = 'none';
}

//close modal if outside click
window.addEventListener('click', clickOutside);

function clickOutside(e) {
  if (e.target == modal) {
    modalBtn.style.display = 'block';
    modal.style.display = 'none';
  }
}
