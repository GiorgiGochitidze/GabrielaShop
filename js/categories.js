const categories = document.querySelector('.categories-btn');

categories.addEventListener('click', () => {
    const check = document.querySelector('.categories-meniu');
    check.classList.toggle('none');
});