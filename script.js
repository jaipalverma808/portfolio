// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');

navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

siteNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Highlight active nav link based on scroll position
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.site-nav a');

const setActiveLink = () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
};

window.addEventListener('scroll', setActiveLink, { passive: true });
setActiveLink();

// Contact form: no backend attached, so confirm locally and hand off to mailto
const form = document.getElementById('contact-form');
const formNote = document.getElementById('form-note');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get('name');
  const email = data.get('email');
  const message = data.get('message');

  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:jaipalverma808@gmail.com?subject=${subject}&body=${body}`;

  formNote.textContent = 'Opening your email client to send this message…';
  form.reset();
});
