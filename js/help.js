const items = document.querySelectorAll('.accordion .accordion-item');

items.forEach(item => {
    const trigger = item.querySelector('.accordion-header');

    trigger.addEventListener('click', () => {
        trigger.nextElementSibling.classList.toggle('active');
    });
});
// favoritebis 

    // document.getElementById("email").value,
    // document.getElementById("password").value,

 const categories = document.querySelector('.categories-btn');

 categories.addEventListener('click', () => {
     const check = document.querySelector('.categories-meniu');
     check.classList.toggle('none');
 });
 
 //yidvis

 const racxa = document.querySelector('.buy-btn');

 const appear = document.querySelector('.containerX');

const meniusButton = document.querySelector(".menius-button")

meniusButton.addEventListener('click', () => {
    const meniusCategories = document.querySelector(".menius-buttons-categories")
    meniusCategories.classList.toggle('none');
})