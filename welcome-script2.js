let pic = document.querySelectorAll(".pic");
let characters = document.querySelector('.characters-roxana');
let wrapper = document.querySelector('.main_panel-roxana');
let button = document.querySelector('.start-btn');
let bubble = document.querySelector('.bubble')

let roxana = document.querySelector('.roxana');
let jane = document.querySelector('.jane');
let nadine = document.querySelector('.nadine');
let viet = document.querySelector('.viet');


pic.forEach((item)=>{
    item.addEventListener('click',function(el){
       if(el.target.classList.contains('roxana')){
        document.querySelector('.card-container-roxana').style.display = 'block';
       }else if(el.target.classList.contains('jane')){
        document.querySelector('.card-container-jane').style.display = 'block';
       }else if(el.target.classList.contains('nadine')){
        document.querySelector('.card-container-nadine').style.display = 'block';
       }else {
        document.querySelector('.card-container-viet').style.display = 'block';
       }
       wrapper.style.display = 'none';
       button.style.display = 'block';
       bubble.style.display = 'block';
    })
})

