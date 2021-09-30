elMenuBtn = document.querySelector('.menu-icon');
elCloseBtn = document.querySelector('.x-icon');
elWrapper = document.querySelector('.wrapper');


elMenuBtn.addEventListener('click', function(){
  elWrapper.classList.remove('remove')
  elCloseBtn.classList.remove('remove')
  elMenuBtn.classList.add('remove')
})

elCloseBtn.addEventListener('click', function(){
  elWrapper.classList.add('remove')
  elCloseBtn.classList.add('remove')
  elMenuBtn.classList.remove('remove')
})