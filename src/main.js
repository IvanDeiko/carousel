const buttonNext = document.querySelector('#next');
const buttonPrevious = document.querySelector('#previous');
const container = document.querySelector('#container');

buttonNext.addEventListener('click', () => {
  if (container.scrollLeft === 910) return;
  container.scrollLeft += 130;
}) 

buttonPrevious.addEventListener('click', () => {
  if(container.scrollLeft === 0) return;
  container.scrollLeft -= 130;
})

console.log(scroll.scrollLeft)