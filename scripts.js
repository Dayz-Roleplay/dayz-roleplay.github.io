document.addEventListener('DOMContentLoaded', () => {

  // Blood Dripping Animation
  function createBloodDrop() {
    const drop = document.createElement('div');
    drop.className = 'blood-drop';
    drop.style.left = Math.random() * 100 + 'vw';
    drop.style.animationDuration = (Math.random() * 2 + 2) + 's';
    drop.style.opacity = Math.random() * 0.7 + 0.5;
    document.querySelector('.drips').appendChild(drop);

    setTimeout(() => drop.remove(), 6000);
  }

  setInterval(createBloodDrop, 120);

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      document.querySelector('nav').classList.add('shadow-2xl', 'bg-black');
    }
  });

  // Fake player count
  let players = 67;
  setInterval(() => {
    players = Math.floor(Math.random() * 30) + 55;
  }, 8000);
});
