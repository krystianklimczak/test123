(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-contact-open]'),
    closeModalBtn: document.querySelector('[data-modal-contact-close]'),
    modal: document.querySelector('[data-modal-contact]'),
  };
  for (let i = 0; i < refs.openModalBtns.length; i++) {
    refs.openModalBtns[i].addEventListener('click', toggleModal);
  }
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
