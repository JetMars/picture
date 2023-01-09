const puctureSize = (blockSelector) => {
  const blocks = document.querySelectorAll(blockSelector);

  function showImg(block) {
    const img = block.querySelector('img');
    img.src = img.src.slice(0, -4) + '-1.png';
    img.classList.add('animated', 'fadeIn');
    block.querySelectorAll('p:not(.sizes-hit)').forEach(el => {
      el.style.display = 'none';
    });
  }


  function hideImg(block) {
    const img = block.querySelector('img');
    img.src = img.src.slice(0, -6) + '.png';
    img.classList.remove('animated', 'fadeIn');
    block.querySelectorAll('p:not(.sizes-hit)').forEach(el => {
      el.style.display = 'block';
    });
  }


  blocks.forEach(block => {
    block.addEventListener('mouseover', (e) => {
      showImg(block);
    });
    block.addEventListener('mouseout', (e) => {
      hideImg(block);
    });
  });


};

export default puctureSize;