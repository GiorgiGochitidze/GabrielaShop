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

 const listen = racxa.addEventListener('click', () => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('window');
    appear.append(newDiv);
    console.log(newDiv);
 });

 //msoflio dro
setInterval(myFunction, 1000);

function myFunction() {
    let d = new Date();
    document.getElementById("demo").innerHTML = 
    d.getHours() + ":" + 
    d.getMinutes() + ":" + 
    d.getSeconds();
}