function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);

  modal.style.display = '';

  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
}

function openModal(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);

  modal.style.display = 'block';

  const padding = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = padding + 'px';

  if (modalTimerId) {
    clearTimeout(modalTimerId);
  }
}

const modals = () => {

  let btnPressed = false;

  function bindModals(triggerSelector, popupSelector, buttonClose, modalTimerId, destroy = false) {

    const trigger = document.querySelectorAll(triggerSelector);
    const popup = document.querySelector(popupSelector);
    const triggerClose = popup.querySelector(buttonClose);
    const modals = document.querySelectorAll('[data-modal]');

    trigger.forEach(item => {
      item.addEventListener('click', (event) => {
        event.preventDefault();

        btnPressed = true;

        if (destroy) {
          item.remove();
        }

        modals.forEach(item => {
          item.style.display = 'none';
          item.classList.add('animated', 'fadeIn');
        });

        openModal(popupSelector, modalTimerId);
      });
    });


    triggerClose.addEventListener('click', (event) => {
      event.preventDefault();
      closeModal(popupSelector);
    });


    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        closeModal(popupSelector);
      }
    });


    document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && getComputedStyle(popup).display === 'block') {
        closeModal(popupSelector);
      }
    });

  }

  function showModalBottom() {

    const winScrollTop = Math.floor(window.pageYOffset || document.documentElement.scrollTop);

    if ((winScrollTop + document.documentElement.clientHeight >= document.documentElement.offsetHeight) &&
      !btnPressed) {
      document.querySelector('.popup-gift').classList.add('animated', 'fadeIn');
      openModal('.popup-gift', modalTimerId);
      document.querySelector('.fixed-gift').remove();
      document.removeEventListener('scroll', showModalBottom);
    }
  }

  document.addEventListener('scroll', showModalBottom);

  const modalTimerId = setTimeout(() => openModal('.popup-consultation', modalTimerId), 60000);

  bindModals('.button-design', '.popup-design', '.popup-design .popup-close', modalTimerId);
  bindModals('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close', modalTimerId);
  bindModals('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', modalTimerId, true);
};

export { modals, closeModal, openModal };