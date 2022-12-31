import postData from '../services/postData';

const forms = (stateForm) => {
  const forms = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('[name="upload"');

  const messageData = {
    loading: 'Загрузка',
    success: 'Загрузка завершилась успешно! Спасибо за ожидание!',
    failure: 'Ошибка загрузки',
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png'
  };

  function validateInput() {
    inputs.forEach(item => {
      item.previousElementSibling.textContent = 'Файл не выбран';
    });
  }

  inputs.forEach(item => {
    item.addEventListener('input', (e) => {
      const arr = item.files[0].name.split('.');

      let dots = arr[0].length > 6 ? '...' : '.';
      let name = arr[0].slice(0, 6) + dots + arr[1];

      item.previousElementSibling.textContent = name;
    });
  });


  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMessage = document.createElement('div');
      statusMessage.classList.add('status', 'animated', 'fadeInUp');
      form.parentNode.append(statusMessage);

      form.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        form.style.display = 'none';
      }, 400);

      const statusImg = document.createElement('img');
      statusImg.setAttribute('src', messageData.spinner);
      statusMessage.append(statusImg);

      const texMessage = document.createElement('div');
      texMessage.textContent = messageData.loading;
      statusMessage.append(texMessage);

      const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
      };

      let api;

      if (form.closest('.popup-design') || form.classList.contains('form__calc')) {
        // api = path.designer;
        api = path.question;
      } else {
        api = path.question;
      }

      const formData = new FormData(form);


      postData(api, formData)
        .then(res => {
          console.log(res);
          statusImg.setAttribute('src', messageData.ok);
          texMessage.textContent = messageData.success;
        })
        .catch(err => {
          statusImg.setAttribute('src', messageData.fail);
          texMessage.textContent = messageData.failure;
        })
        .finally(() => {
          form.reset();
          validateInput();
          setTimeout(() => {
            statusMessage.remove();
            form.style.display = 'block';
            form.classList.remove('fadeOutUp');
            form.classList.add('fadeInUp');
          }, 4000);
        });
    });
  });



};

export default forms;