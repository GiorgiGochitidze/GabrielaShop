const meniusButton = document.querySelector(".menius-button")

meniusButton.addEventListener('click', () => {
    const meniusCategories = document.querySelector(".menius-buttons-list")
    meniusCategories.classList.toggle('none');
})

const motherx = document.querySelector('.containerX')

const boxes = document.querySelectorAll('.buy-btn')

boxes.forEach(buybtn => {
  buybtn.addEventListener('click', () => {
    const slelectGanxorcieleba = document.querySelector('.ganxorcieleba')
    slelectGanxorcieleba.classList.toggle('none')
    })
  })