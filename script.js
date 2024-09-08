particlesJS.load('particles-container', 'particlesjs-config.json');

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Front-End", "UI/UX Designer","Back-End", "Web", "Mobile"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 300; // Delay between current and next text
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
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});


const hoverText = document.getElementById('hover-text');
const icon = document.getElementById('icon');

// Adiciona o evento de mouseover
hoverText.addEventListener('mouseover', function() {
  icon.style.color = 'white'; // Muda a cor do ícone ao passar o mouse
});


document.addEventListener('DOMContentLoaded', function () {
var ExemploModalCentralizado = document.getElementById('ExemploModalCentralizado');
var blurLayer = document.createElement('div');
blurLayer.className = 'blur-layer';
document.body.appendChild(blurLayer);

// Adicionar evento quando o modal for mostrado
$(ExemploModalCentralizado).on('show.bs.modal', function () {
  blurLayer.style.display = 'block';
});

// Adicionar evento quando o modal for escondido
$(ExemploModalCentralizado).on('hidden.bs.modal', function () {
  blurLayer.style.display = 'none';
});
});


