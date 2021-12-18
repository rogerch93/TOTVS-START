const target = document.querySelectorAll('[data-animation]');
const animationClass = 'animation';

function animeScroll(){
  const windowTop = window.scrollY+1;
  target.forEach(function(elt){
    if((windowTop) > elt.scrollTop){
      elt.classList.add(animationClass)
    }
  })
}

window.addEventListener('scroll', function(){
  animeScroll();
})