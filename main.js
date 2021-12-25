/*Animação do topo */
const target = document.querySelectorAll('[data-animation],[data-animationDownload],[data-animationImg]');
const animationClass = 'animation';
const animationClassImg = 'animationImg';
const animationClassDownload = 'animationD';

function animeMouse(){
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
  animeMouse();
})

/*Animação scroll */
const workTarget = document.querySelectorAll('[data-animationImgWorks]');
const animationClassWorks = 'animationImgWorks';

function animeScroll(){
  const windowScroll = window.scrollY + ((window.innerHeight *3)/4);
  workTarget.forEach(function(elt){
    if((windowScroll) > elt.scrollTop){
      elt.classList.add(animationClassWorks)
    }
  })
}

window.addEventListener('scroll', function(){
  animeScroll();
})

/* logica para alterar animação mobile */
const mobileAnimation = 989;
const mobileFix = window.innerWidth;

function animeMobile(){
  const windowTop = window.screenY+1;
  target.forEach(function(elt){
    if((windowTop) > elt.scrollTop){
      elt.classList.add(animationClass)
      elt.classList.add(animationClassDownload);
      elt.classList.add(animationClassImg);
    }
  })
}

if(mobileFix <= mobileAnimation){
  window.addEventListener('scroll',function(){
    animeMobile();
  })
}


