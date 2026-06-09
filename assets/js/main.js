'use strict';

/* ---------- Scroll - Show Top Button ---------- */
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
  if (scrollTopBtn) {
    scrollTopBtn.classList.toggle('show-scroll', window.scrollY >= 200);
  }
});

if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
