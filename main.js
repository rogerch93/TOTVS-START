const target = document.querySelectorAll('[data-animation]');
const animationClass = 'animation';

function animeScroll(){
  const windowTop = window.scrollY;
  console.log(windowTop)
}

window.addEventListener('scroll', function(){
  animeScroll();
})