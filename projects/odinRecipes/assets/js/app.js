const btn = document.querySelector('.toggle-btn');
const men = document.querySelector('.menu-lists');

btn.addEventListener('click', function(){
    btn.classList.toggle('active');
    men.classList.toggle('active');
});