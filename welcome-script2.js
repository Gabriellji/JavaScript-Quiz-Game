console.log('hello')
let pics = document.querySelectorAll("img");
let characters = document.querySelector('.characters');

let roxana = document.querySelector('.roxana')
let jane = document.querySelector('.jane')
let nadine = document.querySelector('.nadine')
let viet = document.querySelector('.viet')

 roxana.addEventListener('click', function(){
   window.location.href='./index.roxana.html'
 })

 jane.addEventListener('click', function(){
   window.location.href='./index.jane.html'
 })

 nadine.addEventListener('click', function(){
   window.location.href='./index.nadine.html'
 })
  
 viet.addEventListener('click', function(){
   window.location.href='./index.viet.html'
 })