window.addEventListener("scroll", reveal);

function reveal(){
  const reveals = document.querySelectorAll(".reveal");

  for(let i = 0; i < reveals.length; i++){

    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 120;

    if(elementTop < windowHeight - elementVisible){
      reveals[i].classList.add("active");
    }
  }
}

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  nav.classList.toggle('open');
});

// Close menu when link is clicked
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
  });
});