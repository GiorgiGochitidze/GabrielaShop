const items = document.querySelectorAll('.accordion .accordion-item');

items.forEach(item => {
    const trigger = item.querySelector('.accordion-header');

    trigger.addEventListener('click', () => {
        trigger.nextElementSibling.classList.toggle('active');
    });
});

const meniusButton = document.querySelector(".menius-button")

meniusButton.addEventListener('click', () => {
    const meniusCategories = document.querySelector(".menius-buttons-list")
    meniusCategories.classList.toggle('none');
})