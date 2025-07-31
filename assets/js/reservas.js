document.getElementById('reserva-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const dados = {
      nome: document.getElementById('nome').value,
      email: document.getElementById('e-mail').value,
      telefone: document.getElementById('phone').value,
      instagram: document.getElementById('instagram').value,
      data: document.getElementById('data').value,
      pessoas: document.getElementById('pessoas').value,
      mensagem: document.getElementById('mensagem').value,
    };
  
    // Integrar com um backend ou serviço de e-mail (ex: EmailJS, Formspree)
    console.log("Dados enviados:", dados);
    alert("Reserva enviada com sucesso!");
  });