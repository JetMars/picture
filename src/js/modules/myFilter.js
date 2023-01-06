const myFilter = (contentSelector, menuSelector, triggersSelector, no, active) => {

  const contents = document.querySelectorAll(contentSelector);
  const menu = document.querySelector(menuSelector);
  const triggersMenu = document.querySelectorAll(triggersSelector);
  const noContent = document.querySelector(no);


  function clearContent() {
    contents.forEach(mark => {
      mark.classList.remove('animated', 'fadeIn');
      mark.style.display = 'none';
    });

    noContent.classList.remove('animated', 'fadeIn');
    noContent.style.display = 'none';
  }


  menu.addEventListener('click', (e) => {
    const target = e.target;
    const type = target.getAttribute('data-type');

    clearContent();

    let filterMarks = Array.from(contents).filter(item => item.classList.contains(type));

    if (filterMarks.length !== 0) {
      filterMarks.forEach(item => {
        item.style.display = 'block';
        item.classList.add('animated', 'fadeIn');
      });
    } else {
      noContent.style.display = 'block';
      noContent.classList.add('animated', 'fadeIn');
    }

    if (target && target.tagName == 'LI') {
      triggersMenu.forEach(item => item.classList.remove(active));
      target.classList.add(active);
    }
  });
};

export default myFilter;