const buttonNext = document.querySelector('#next');
const buttonPrevious = document.querySelector('#previous');
const container = document.querySelector('#container');


buttonNext.addEventListener('click', () => {
  buttonPrevious.classList.remove('isDisabled')

  container.scrollLeft += container.clientWidth;

  if ((container.scrollLeft + container.clientWidth) === container.scrollWidth) {
    buttonNext.classList.add('isDisabled');
  }
}) 



buttonPrevious.addEventListener('click', () => {
  buttonNext.classList.remove('isDisabled');
  container.scrollLeft -= container.clientWidth;

  if (container.scrollLeft === 0) {
    buttonPrevious.classList.add('isDisabled')
  }
})

console.log(scroll.scrollLeft)