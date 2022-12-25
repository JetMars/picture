const checkTextInputs = (selector) => {
  const textInputs = document.querySelectorAll(selector);

  textInputs.forEach(input => {
    input.addEventListener('keypress', (e) => {
      if (!e.key.match(/[а-яё 0-9]/ig) || input.value.length > 20) {
        e.preventDefault();
      }
    });


    input.addEventListener('input', (e) => {
      for (let char of input.value) {
        if (!/[а-яё 0-9]/ig.test(char)) {
          input.value = '';
        }
      }
    });
  });
};

export default checkTextInputs;