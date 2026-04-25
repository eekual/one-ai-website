/* ONE — SELFWEAR Website JS */

// ---- Nav scroll behavior ----
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ---- Sticky CTA ----
const stickyCta = document.getElementById('sticky-cta');
window.addEventListener('scroll', () => {
  stickyCta.classList.toggle('visible', window.scrollY > 600);
}, { passive: true });

// ---- Active nav link highlighting ----
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}, { passive: true });

// ---- Reveal on scroll ----
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ---- Smooth anchor scrolling with offset ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 72;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH, behavior: 'smooth' });
  });
});

// ---- Proof stat count-up ----
const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const raw = el.dataset.count;
      if (!raw) return;
      const target = parseFloat(raw);
      const suffix = el.dataset.suffix || '';
      let current = 0;
      const inc = target / 60;
      const timer = setInterval(() => {
        current += inc;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = (raw.includes('.') ? current.toFixed(1) : Math.floor(current)) + suffix;
      }, 16);
      statObserver.unobserve(el);
    });
  },
  { threshold: 0.5 }
);
document.querySelectorAll('[data-count]').forEach(el => statObserver.observe(el));

// ---- Form submit (basic, no backend) ----
document.querySelectorAll('.lead-form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.btn-form');
    const data = Object.fromEntries(new FormData(form));
    btn.textContent = 'Sent ✓';
    btn.style.background = '#008c38';
    btn.disabled = true;
    console.log('Form submission:', form.id, data);
  });
});
