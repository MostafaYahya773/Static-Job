const box = document.querySelectorAll('.main__boxes .box');
box.forEach((ele) => {
  ele.addEventListener('click', () => {
    ele.classList.toggle('border-left');
  });
});

function search() {
  let searchInput = document.querySelector('#search');
  box.forEach((ele) => {
    ele
      .querySelectorAll('.skill')
      .forEach((ele1) =>
        ele1.innerHTML.includes(searchInput.value)
          ? ele.classList.add('grid')
          : ele.classList.add('none')
      );
  });
  searchInput.value = '';
}

const searchBtn = document.querySelector('button');
searchBtn.addEventListener('click', () => {
  search();
});

searchBtn.addEventListener('keydown', (e) => {
  e.key === 'Enter' ? search() : false;
});
