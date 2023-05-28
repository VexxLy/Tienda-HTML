const openModal = document.querySelector('#abrir');
const closeModal = document.querySelector('#cerrar');
const modal = document.querySelector('#modal');

openModal.addEventListener('click', () => {
    modal.setAttribute('open', '');
});

closeModal.addEventListener('click', () => {
    modal.removeAttribute('open');
});
