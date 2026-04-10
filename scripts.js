// scripts.js
document.addEventListener('DOMContentLoaded', () => {

  // ====================== SMOOTH SCROLLING ======================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      if (this.getAttribute('href') === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ====================== COPY IP BUTTON ======================
  const copyIPBtn = document.createElement('button');
  copyIPBtn.innerHTML = `
    <i class="fas fa-copy"></i> Copy IP
  `;
  copyIPBtn.className = `
    mt-4 bg-zinc-800 hover:bg-zinc-700 transition px-6 py-3 
    rounded-lg text-sm flex items-center gap-2 mx-auto
  `;

  // Find the IP paragraph and add the button
  const ipParagraph = document.querySelector('p span.text-green-400');
  if (ipParagraph) {
    const container = ipParagraph.parentElement;
    container.classList.add('flex', 'flex-col', 'items-center');
    container.appendChild(copyIPBtn);
  }

  copyIPBtn.addEventListener('click', () => {
    const ip = "play.dayzrp.com:2302";
    navigator.clipboard.writeText(ip).then(() => {
      const originalText = copyIPBtn.innerHTML;
      copyIPBtn.innerHTML = `<i class="fas fa-check text-green-400"></i> Copied!`;
      
      setTimeout(() => {
        copyIPBtn.innerHTML = originalText;
      }, 2000);
    });
  });

  // ====================== MOBILE HAMBURGER MENU ======================
  const nav = document.querySelector('nav');
  
  const menuButton = document.createElement('button');
  menuButton.className = "md:hidden text-2xl";
  menuButton.innerHTML = `<i class="fas fa-bars"></i>`;
  
  const navLinks = document.querySelector('nav > div:last-child');
  
  // Insert hamburger button
  nav.querySelector('div').appendChild(menuButton);

  let isMenuOpen = false;

  menuButton.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
      navLinks.classList.add('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'right-0', 
                             'bg-black/95', 'border-t', 'border-green-600', 'p-6', 'gap-6', 'text-lg');
      menuButton.innerHTML = `<i class="fas fa-times"></i>`;
    } else {
      navLinks.classList.remove('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'right-0', 
                                'bg-black/95', 'border-t', 'border-green-600', 'p-6', 'gap-6', 'text-lg');
      menuButton.innerHTML = `<i class="fas fa-bars"></i>`;
    }
  });

  // Close mobile menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (isMenuOpen) {
        menuButton.click();
      }
    });
  });

  // ====================== FAKE SERVER STATUS (Optional) ======================
  function updateServerStatus() {
    const statusHTML = `
      <div class="inline-flex items-center gap-2 bg-green-900/30 text-green-400 px-4 py-2 rounded-full text-sm">
        <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        ONLINE • 87 Players
      </div>
    `;
    // You can insert this somewhere if you want
  }

  // Call it on load
  updateServerStatus();

  // ====================== SCROLL EFFECT FOR NAVBAR ======================
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      nav.classList.add('shadow-2xl', 'bg-black/95');
    } else {
      nav.classList.remove('shadow-2xl', 'bg-black/95');
    }
  });

});
