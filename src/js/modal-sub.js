(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-sub-open]'),
    closeModalBtn: document.querySelector('[data-modal-sub-close]'),
    modal: document.querySelector('[data-modal-sub]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
