function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);

  // modal.classList.toggle('show');
  modal.style.display = '';

  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
}

function openModal(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);

  // modal.classList.remove('hide');
  // modal.classList.toggle('show');
  modal.style.display = 'block';


  const padding = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = padding + 'px';

  if (modalTimerId) {
    clearTimeout(modalTimerId);
  }
}

const modals = () => {

  function bindModals(triggerSelector, popupSelector, buttonClose, modalTimerId, closeClickOverlay = true) {

    const trigger = document.querySelectorAll(triggerSelector);
    const popup = document.querySelector(popupSelector);
    const triggerClose = popup.querySelector(buttonClose);
    const modals = document.querySelectorAll('[data-modal]');


    trigger.forEach(item => {
      item.addEventListener('click', (event) => {
        event.preventDefault();

        // modals.forEach(item => {
        //   item.classList.add('hide');
        //   item.classList.remove('show');
        //   document.body.style.overflow = '';
        //   document.body.style.paddingRight = '';
        // });

        openModal(popupSelector, modalTimerId);
      });
    });


    triggerClose.addEventListener('click', (event) => {
      event.preventDefault();

      // modals.forEach(item => {
      //   item.classList.remove('hide');
      // });

      closeModal(popupSelector);
    });


    popup.addEventListener('click', (e) => {
      if (e.target === popup && closeClickOverlay) {

        // modals.forEach(item => {
        //   item.classList.remove('hide');
        // });

        closeModal(popupSelector);
      }
    });


    document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && getComputedStyle(popup).display === 'block') {
        console.log('hello');
        closeModal(popupSelector);
      }
    });
  }

  const modalTimerId = setTimeout(() => openModal('.popup-consultation', modalTimerId), 5000);

  bindModals('.button-design', '.popup-design', '.popup-design .popup-close', modalTimerId);
  bindModals('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close', modalTimerId);

};

export { modals, closeModal, openModal };