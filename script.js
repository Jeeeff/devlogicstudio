/**
 * DevLogic Studio - Scripts Principais (Versão Final Corrigida)
 */

(function() {

  // Função para atualizar o ano no rodapé automaticamente.
  function updateYear() {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  }

  // A função de manipulação do formulário foi removida para
  // permitir que o Netlify/Render controle o envio sem conflitos.

  // Inicializa as funções quando o documento estiver pronto
  document.addEventListener('DOMContentLoaded', function() {
    updateYear();
  });

})();