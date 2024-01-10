const openModal = document.querySelector('#abrir');
const closeModal = document.querySelector('#cerrar');
const modal = document.querySelector('#modal');

openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.setAttribute('open', '');
});

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('llegue')
    modal.removeAttribute('open');
});
