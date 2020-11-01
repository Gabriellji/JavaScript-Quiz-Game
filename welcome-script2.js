let pics = document.querySelectorAll(".pic");
let characters = document.querySelector('.characters');
let wrapper = document.querySelector('.main_panel');
let button = document.querySelector('.start-btn');
let bubble = document.querySelector('.bubble')

let roxana = document.querySelector('.roxana');
let jane = document.querySelector('.jane');
let nadine = document.querySelector('.nadine');
let viet = document.querySelector('.viet');

roxana.addEventListener('click', function () {
    wrapper.style.display = 'none';
    document.querySelector('.card-container-roxana').style.display = 'block';
    button.style.display = 'block';
    bubble.style.display = 'block';

})

jane.addEventListener('click', function () {
    wrapper.style.display = 'none';
    document.querySelector('.card-container-jane').style.display = 'block';
    button.style.display = 'block';
    bubble.style.display = 'block';
})

nadine.addEventListener('click', function () {
    wrapper.style.display = 'none';
    document.querySelector('.card-container-nadine').style.display = 'block';
    button.style.display = 'block';
    bubble.style.display = 'block';
})

viet.addEventListener('click', function () {
    wrapper.style.display = 'none';
    document.querySelector('.card-container-viet').style.display = 'block';
    button.style.display = 'block';
    bubble.style.display = 'block';
})