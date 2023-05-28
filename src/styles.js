const openModal = document.getElementsByClassName('modal');

openModal.addEventListener('click',(e)=>{
    e.preventDefault();
   
    openModal.classList.toggle("modal-show", undefined);
})