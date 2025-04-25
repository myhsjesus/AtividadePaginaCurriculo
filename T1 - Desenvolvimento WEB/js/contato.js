document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const mensagem = document.getElementById("mensagem-obrigada");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Evita envio real
  
      mensagem.classList.remove("oculto"); // Mostra a mensagem
      form.reset(); // Limpa o formulário
  
      // Oculta a mensagem depois de alguns segundos
      setTimeout(() => {
        mensagem.classList.add("oculto");
      }, 4000); // 4 segundos
    });
  });
  