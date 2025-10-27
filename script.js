/**
 * DevLogic Studio - Scripts Principais (Versão Final Corrigida)
 */

(function() {

  // Função para atualizar o ano no rodapé automaticamente.
  // Esta é a única funcionalidade que o nosso JavaScript
  // precisa de controlar nesta página.
  function updateYear() {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  }

  // A função 'handleContactForm' foi intencionalmente removida para
  // permitir que o Netlify controle o envio do formulário sem conflitos.
  // O Netlify irá capturar o envio do formulário através do 
  // atributo 'data-netlify="true"' no ficheiro HTML.

  // Inicializa as funções quando o documento estiver pronto
  document.addEventListener('DOMContentLoaded', function() {
    updateYear();
  });

})();