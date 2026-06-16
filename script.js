// Small helper JS: smooth scrolling and simple demo
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href=a.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({behavior:'smooth',block:'start'});
    }
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href=a.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({behavior:'smooth',block:'start'});
      document.querySelector('.nav.open')?.classList.remove('open');
      document.querySelector('.nav-toggle')?.setAttribute('aria-expanded','false');
    }
  });
});

const navToggle=document.querySelector('.nav-toggle');
navToggle?.addEventListener('click',()=>{
  const nav=document.querySelector('.nav');
  const expanded=navToggle.getAttribute('aria-expanded')==='true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  nav?.classList.toggle('open');
});

// Demo: animate skill bars on load
function animateSkills(){
  document.querySelectorAll('.bar span').forEach(el=>{
    const val = getComputedStyle(el).getPropertyValue('--v') || '50%';
    el.style.width = val;
  });
}
window.addEventListener('load', animateSkills);
