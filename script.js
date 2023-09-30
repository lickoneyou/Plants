// popUp

const popUpBtn = document.querySelector('.nav380')
const popUp = document.querySelector('.popUp')

popUpBtn.addEventListener('click', function () {
  if (this.style.transform === 'rotate(90deg)') {
    this.style.transform = 'rotate(0deg)'
    popUp.style.right = 0
    popUp.style.right = '-100%'
  } else {
    this.style.transform = 'rotate(90deg)'
    popUp.style.right = 0
  }
})