const sliders = (sliderSelector, dir, next, prev, timer = 4000) => {

  let slideIndex = 1;
  const sliders = document.querySelectorAll(sliderSelector);

  function showSlider(num = 0) {

    slideIndex += num;

    sliders.forEach((item) => {
      item.classList.add('animated');
      item.style.display = 'none';
    });

    if (slideIndex < 1) {
      slideIndex = sliders.length;
    }

    if (slideIndex > sliders.length) {
      slideIndex = 1;
    }

    sliders[slideIndex - 1].style.display = 'block';
  }

  showSlider();

  try {
    const nextBtn = document.querySelector(next);
    const prevBtn = document.querySelector(prev);

    nextBtn.addEventListener('click', (e) => {
      showSlider(1);
      sliders[slideIndex - 1].classList.remove('slideInLeft');
      sliders[slideIndex - 1].classList.add('slideInRight');
    });

    prevBtn.addEventListener('click', (e) => {
      showSlider(-1);
      sliders[slideIndex - 1].classList.remove('slideInRight');
      sliders[slideIndex - 1].classList.add('slideInLeft');
    });
  } catch (error) { }


  let timerId;
  function showSliderInterval() {
    if (dir === 'vertical') {
      timerId = setInterval(() => {
        showSlider(1);
        sliders[slideIndex - 1].classList.add('slideInDown');
      }, timer);
    } else {
      timerId = setInterval(() => {
        showSlider(-1);
        sliders[slideIndex - 1].classList.remove('slideInRight');
        sliders[slideIndex - 1].classList.add('slideInLeft');
      }, timer);
    }
  }
  showSliderInterval();

  sliders[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(timerId);
  });

  sliders[0].parentNode.addEventListener('mouseleave', () => {
    showSliderInterval();
  });
};

export default sliders;