const target = document.querySelectorAll('[data-animation]');
const animationClass = 'animation';
const animationClassImg = 'animationImg';
const animationClassDownload = 'animationDownload';

function animeScroll(){
  const windowTop = window.screenY++;
  target.forEach(function(elt){
    if((windowTop) > elt.scrollTop){
      elt.classList.add(animationClass)
      elt.classList.add(animationClassDownload);
    }
  })
}

window.addEventListener('mouseout', function(){
  animeScroll();
})