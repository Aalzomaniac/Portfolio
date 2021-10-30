

"use strict";

(function() {
  var burgerMenu = document.getElementsByClassName('b-menu')[0];
  var burgerContain = document.getElementsByClassName('b-container')[0];
  var burgerNav = document.getElementsByClassName('b-nav')[0];

  burgerMenu.addEventListener('click', function toggleClasses() {
    [ burgerContain, burgerNav].forEach(function (el) {
      el.classList.toggle('open');
    });
  }, false);
})();




const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Student", "Developer", "Designer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 2000);
});

var tl = gsap.timeline({});
tl.to('.preloader',{
  yPercent:-100,
  duration:2,
  opacity:0,
  display:"none",
  delay:3.8
});

tl.to('.dpnone',{
  ease:"ease-in",
  display:"block",
  delay:-2
});


gsap.from(".intro-txt h1",{
  yPercent:-100,
  opacity:0,
  duration:2,
  ease:"ease-in-out",
  stagger:0.5,
  delay:5
})


  gsap.from(".social-links",{
  opacity:0,
  duration:4, 
   ease:"ease-in",
  delay:6,
  stagger:2
})




// submit
var inputs = document.querySelectorAll('.inputs');
document.querySelector('myform').onsubmit = e => {
  e.inputs.reset();
  return false;
};






