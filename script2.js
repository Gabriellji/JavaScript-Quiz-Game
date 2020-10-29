
let pics = document.querySelectorAll("img");
let characters = document.querySelector('.characters');

  for(let i = 0; i< pics.length; i++){
     characters.addEventListener('click', function(){
      characters.style.display = 'none';
      document.querySelector('.message').innerHTML = 'Are you ready to test your JS knowledge and get a change to win great prizes? click start to begin';

     })
  }
     

// let pics = document.querySelectorAll(".pic");
// let characters = document.querySelector('.characters');
// let links = document.querySelectorAll(".link");
// links.forEach( function(element)  {
//      element.addEventListener('click', function(event) {
//           event.preventDefault();
//      })
// });
// characters.addEventListener('click', function() {
//      console.log('hello')
//      characters.style.display = 'none'
// })