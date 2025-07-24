// Mobile nav toggle
const toggle = document.querySelector('.toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Simple past‑event hider (for /events page)
// Looks for elements with .event[data-date="YYYY-MM-DD"].
// Hides if date has passed.
(function hidePastEvents() {
  const today = new Date();
  document.querySelectorAll('.event[data-date]').forEach(el => {
    const date = new Date(el.dataset.date);
    if (date < today) el.style.display = 'none';
  });
})();