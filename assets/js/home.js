document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav a');
    const sections = document.querySelectorAll('section'); // Или другие блоки
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
              link.classList.toggle('active', link.hash === `#${id}`);
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '-100px 0px -50% 0px' }
    );
    
    sections.forEach(section => observer.observe(section));
    
    // Плавный скролл
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.hash);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  });
