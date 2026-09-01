// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Dark / light mode
const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const storedTheme = localStorage.getItem('jv-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
root.setAttribute('data-theme', storedTheme || (prefersDark ? 'dark' : 'light'));

themeToggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('jv-theme', next);
});

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

// Certificate gallery — stored locally in this browser (no backend)
const CERT_KEY = 'jv-certificates';
const certUpload = document.getElementById('cert-upload');
const certGallery = document.getElementById('cert-gallery');

const loadCerts = () => {
  try {
    return JSON.parse(localStorage.getItem(CERT_KEY)) || [];
  } catch {
    return [];
  }
};

const saveCerts = (certs) => localStorage.setItem(CERT_KEY, JSON.stringify(certs));

const renderCerts = () => {
  const certs = loadCerts();
  certGallery.innerHTML = '';

  if (certs.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'cert-gallery-empty';
    empty.textContent = 'No certificates uploaded yet — use "Upload Certificate" to add one.';
    certGallery.appendChild(empty);
    return;
  }

  certs.forEach((cert) => {
    const card = document.createElement('div');
    const isImage = cert.type.startsWith('image/');
    card.className = isImage ? 'cert-card' : 'cert-card is-file';

    if (isImage) {
      const img = document.createElement('img');
      img.src = cert.data;
      img.alt = cert.name;
      card.appendChild(img);
    } else {
      card.textContent = cert.name;
    }

    card.addEventListener('click', (e) => {
      if (e.target.closest('.cert-remove')) return;
      const win = window.open();
      if (win) win.location.href = cert.data;
    });

    const label = document.createElement('span');
    label.className = 'cert-card-name';
    label.textContent = cert.name;
    card.appendChild(label);

    const removeBtn = document.createElement('button');
    removeBtn.className = 'cert-remove';
    removeBtn.setAttribute('aria-label', `Remove ${cert.name}`);
    removeBtn.textContent = '×';
    removeBtn.addEventListener('click', () => {
      const remaining = loadCerts().filter((c) => c.id !== cert.id);
      saveCerts(remaining);
      renderCerts();
    });
    card.appendChild(removeBtn);

    certGallery.appendChild(card);
  });
};

certUpload.addEventListener('change', () => {
  const files = Array.from(certUpload.files || []);
  if (files.length === 0) return;

  let pending = files.length;
  const certs = loadCerts();

  files.forEach((file) => {
    const reader = new FileReader();
    reader.onload = () => {
      certs.push({
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        name: file.name,
        type: file.type,
        data: reader.result,
      });
      pending -= 1;
      if (pending === 0) {
        saveCerts(certs);
        renderCerts();
      }
    };
    reader.readAsDataURL(file);
  });

  certUpload.value = '';
});

renderCerts();
