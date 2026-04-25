/* ONE — SELFWEAR Website JS */

// ---- Nav scroll behavior ----
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
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
  { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ---- Smooth anchor scrolling with offset ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 72;
    const top = target.getBoundingClientRect().top + window.scrollY - navH;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// ---- Stat number count-up animation ----
function countUp(el, target, suffix = '') {
  const isDecimal = target.toString().includes('.');
  const isRange = typeof target === 'string' && target.includes('–');
  if (isRange) return; // skip range values — display as-is

  let current = 0;
  const increment = target / 60;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = (isDecimal ? current.toFixed(1) : Math.floor(current)) + suffix;
  }, 16);
}

const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const raw = el.dataset.count;
      if (!raw) return;
      const num = parseFloat(raw);
      const suffix = el.dataset.suffix || '';
      countUp(el, num, suffix);
      statObserver.unobserve(el);
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('[data-count]').forEach(el => statObserver.observe(el));
