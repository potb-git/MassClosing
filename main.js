// FAQ accordion
function toggleFaq(el) {
  const answer = el.nextElementSibling;
  const isOpen = el.classList.contains('open');

  document.querySelectorAll('.faq-q.open').forEach(q => {
    q.classList.remove('open');
    q.nextElementSibling.classList.remove('visible');
  });

  if (!isOpen) {
    el.classList.add('open');
    answer.classList.add('visible');
  }
}

// Register form
document.getElementById('regForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = '✅ Registered! Check your email.';
  btn.style.background = '#16a34a';
  btn.style.color = '#fff';
  btn.disabled = true;
  e.target.reset();
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
