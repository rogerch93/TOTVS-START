const target = document.querySelectorAll('[data-animation],[data-animationDownload],[data-animationImg]');
const animationClass = 'animation';
const animationClassImg = 'animationImg';
const animationClassDownload = 'animationD';

function animeScroll(){
  const windowTop = window.screenY++;
  target.forEach(function(elt){
    if((windowTop) > elt.scrollTop){
      elt.classList.add(animationClass)
      elt.classList.add(animationClassDownload);
      elt.classList.add(animationClassImg);
    }
  })
}

window.addEventListener('mouseout', function(){
  animeScroll();
})