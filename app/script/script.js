const box = document.querySelectorAll('.main__boxes .box');

box.forEach((ele) => {
  ele.addEventListener('click', () => {
    ele.classList.toggle('border-left');
  });
});
