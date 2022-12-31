const calc = (size, material, options, promocode, result, stateForm) => {

  const sizeBlock = document.querySelector(size);
  const materialBlock = document.querySelector(material);
  const optionsBlock = document.querySelector(options);
  const promocodeBlock = document.querySelector(promocode);
  const resultBlock = document.querySelector(result);


  function calcFunc() {
    let sum = 0;

    sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

    if (!sizeBlock.value || !materialBlock.value) {
      resultBlock.textContent = 'Выберите размер и материал картины';
    } else if (promocodeBlock.value === 'IWANTPOPART') {
      resultBlock.textContent = sum * 0.7;
    } else {
      resultBlock.textContent = sum;
    }
  }

  sizeBlock.addEventListener('change', calcFunc);
  materialBlock.addEventListener('change', calcFunc);
  optionsBlock.addEventListener('change', calcFunc);
  promocodeBlock.addEventListener('input', calcFunc);

};

export default calc;