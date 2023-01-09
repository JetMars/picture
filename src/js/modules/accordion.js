const accordion = (triggerSelector) => {
  const btns = document.querySelectorAll(triggerSelector);


  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      btns.forEach(item => {
        if (item !== this) {
          item.classList.remove('active');
          item.nextElementSibling.classList.remove('active-content');
          item.nextElementSibling.style.maxHeight = '0px';
        }
      });
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('active-content');

      if (this.classList.contains('active')) {
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
      } else {
        this.nextElementSibling.style.maxHeight = '0px';
      }

    });

  });
};

export default accordion;