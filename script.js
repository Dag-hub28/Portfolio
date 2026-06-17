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
if (contactForm && formStatus) {
  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    formStatus.textContent = 'Sending your message...';
    formStatus.style.display = 'block';
    formStatus.style.color = '#333';

    const formData = new FormData(contactForm);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        formStatus.textContent = '✓ Message sent successfully! I will get back to you shortly.';
        formStatus.style.color = '#27ae60';
        contactForm.reset();
      } else {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || 'Submission failed');
      }
    } catch (error) {
      formStatus.textContent = '✗ Something went wrong. Please try again or email me directly.';
      formStatus.style.color = '#e74c3c';
      console.error('Form submit error:', error);
    }
  });
}


