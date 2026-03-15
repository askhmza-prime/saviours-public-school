function toggleMob() { document.getElementById('mobNav').classList.toggle('open'); }
const obs = new IntersectionObserver(e => e.forEach(x => { if(x.isIntersecting) x.target.classList.add('visible'); }), {threshold:0.1});
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
const pg = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => { if(a.getAttribute('href') === pg) a.classList.add('active'); });
function handleForm(id, msg) {
  const f = document.getElementById(id); if(!f) return;
  f.addEventListener('submit', e => {
    e.preventDefault();
    const b = f.querySelector('button[type=submit]');
    b.textContent = '✅ ' + msg; b.style.background = '#0d9488'; b.disabled = true;
    setTimeout(() => { f.reset(); b.textContent = 'Submit'; b.style.background = ''; b.disabled = false; }, 3000);
  });
}
handleForm('contactForm', 'Message Sent!');
handleForm('enquiryForm', 'Enquiry Submitted!');
