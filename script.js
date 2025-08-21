// Mobile nav toggle
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
if (navToggle) {
  navToggle.addEventListener('click', () => nav.classList.toggle('open'));
}

// Simple portfolio filter
const filters = document.querySelectorAll('.filter');
const works = document.querySelectorAll('.work');
filters.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filter.active')?.classList.remove('active');
    btn.classList.add('active');
    const cat = btn.dataset.filter;
    works.forEach(w => {
      const show = cat === 'all' || w.classList.contains(cat);
      w.style.display = show ? 'block' : 'none';
    });
  });
});
