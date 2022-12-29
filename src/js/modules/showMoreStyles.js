import getResource from "../services/getResource";

const showMoreStyles = (trigger, selector) => {

  const btn = document.querySelector(trigger);
  const wrapper = document.querySelector(selector);

  function createStyles(data) {

    data.forEach(({ src, title, link }) => {

      const div = document.createElement('div');

      div.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'styles-2');
      wrapper.append(div);

      div.innerHTML = `
        <div class='animated fadeIn styles-block'>
          <img src=${src} alt='${link.slice(1)}'>
          <h4>${title}</h4>
          <a href="${link}">Подробнее</a>
				</div>
      `;

    });
  }

  btn.addEventListener('click', function () {
    getResource('http://localhost:3000/styles')
      .then(json => {
        createStyles(json);
      })
      .catch(err => console.log(err));
    this.remove();
  });
};

export default showMoreStyles;