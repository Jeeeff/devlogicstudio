// ==============================
// DevLogic Studio - JavaScript
// ==============================

// === Atualizar ano automaticamente ===
document.getElementById('year').textContent = new Date().getFullYear();

// === Scroll suave para âncoras ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Fechar menu mobile se estiver aberto
      const mobileMenu = document.getElementById('mobileMenu');
      if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
      }
    }
  });
});

// === Menu Mobile Toggle ===
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// === Header com efeito de scroll ===
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// === Formulário de Contato ===
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = {
    name: this.name.value,
    email: this.email.value,
    message: this.message.value
  };
  
  console.log('Dados do formulário:', formData);
  
  // Aqui você pode adicionar integração com backend ou serviço de email
  // Exemplo: enviar para API, EmailJS, Netlify Forms, etc.
  
  alert('Mensagem enviada com sucesso! Retornarei em breve.');
  this.reset();
});

// === Animação de entrada dos elementos ===
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Aplicar animação aos cards
document.querySelectorAll('.service-card, .tech-item, .project-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
