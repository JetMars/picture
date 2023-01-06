const tabs = (menuSelector, contentSelector, tabParentSelector, activeClass) => {
  const menu = document.querySelectorAll(menuSelector);
  const blocks = document.querySelectorAll(contentSelector);
  const tabParent = document.querySelector(tabParentSelector);

  console.log(blocks);
  console.log(menu);


  function hideContents() {
    blocks.forEach(element => {
      element.style.display = 'none';
    });
  }


  function showContents(i) {
    blocks.forEach(item => {
      if (item.getAttribute == i) {
        item.style.display = 'block';
      }
    });

  }

  showContents();


  tabParent.addEventListener('click', (e) => {
    const target = e.target;
    console.log(target);



    menu.forEach((item, i) => {
      item.classList.remove(activeClass);
      if (item === target) {
        item.classList.add(activeClass);

        hideContents();
        showContents(i);
      }
    });

  });

};

export default tabs;