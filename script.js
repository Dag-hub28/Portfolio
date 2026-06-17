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

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    if(!formStatus) return;

    formStatus.textContent = 'Sending your message...';
    formStatus.style.display = 'block';
    formStatus.style.color = '#333';

    const formData = new FormData(contactForm);
    fetch('https://formsubmit.co/ajax/dauglasnyongesa1@gmail.com', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => response.json())
      .then(data => {
        if(data.success === 'Thank you for your message!'){
          formStatus.textContent = '✓ Message sent successfully! Thank you.';
          formStatus.style.color = '#27ae60';
          contactForm.reset();
        } else {
          throw new Error(data.message || 'Unknown response');
        }
      }).catch(error => {
        formStatus.textContent = '✗ Something went wrong. Please try again or email me directly.';
        formStatus.style.color = '#e74c3c';
        console.error('Form submit error:', error);
      });
  });
}


