if (typeof CONFIG === 'undefined') {
  console.error('Erro: arquivo config.js não foi carregado. Crie config.js baseado em config.example.js');
}

const CONTACT_EMAIL = CONFIG?.CONTACT_EMAIL || 'email-nao-configurado@exemplo.com';

function enviarEmail(event) {
  event.preventDefault();
  
  const nome = document.getElementById('nome').value;
  const numero = document.getElementById('numero').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;
  
  const btn = document.querySelector('.btn');
  const feedbackDiv = document.getElementById('feedback-message');
  
  btn.disabled = true;
  btn.value = 'Enviando...';
  feedbackDiv.style.display = 'none';
  
  fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      'Nome': nome,
      'Telefone': numero,
      'Email': email,
      'Mensagem': mensagem,
      '_template': 'table',
      '_subject': 'Novo Contato - Alfa Gym'
    })
  })
  .then(response => response.json())
  .then(data => {
    feedbackDiv.style.display = 'block';
    feedbackDiv.style.backgroundColor = '#d4edda';
    feedbackDiv.style.color = '#155724';
    feedbackDiv.style.border = '1px solid #c3e6cb';
    feedbackDiv.textContent = '✓ E-mail enviado com sucesso! Entraremos em contato em breve.';
    
    document.getElementById('formulario-contato').reset();
    btn.disabled = false;
    btn.value = 'Enviar';
    
    setTimeout(() => {
      feedbackDiv.style.display = 'none';
    }, 5000);
  })
  .catch(error => {
    feedbackDiv.style.display = 'block';
    feedbackDiv.style.backgroundColor = '#f8d7da';
    feedbackDiv.style.color = '#721c24';
    feedbackDiv.style.border = '1px solid #f5c6cb';
    feedbackDiv.textContent = '✗ Erro ao enviar. Tente novamente mais tarde.';
    
    btn.disabled = false;
    btn.value = 'Enviar';
    
    setTimeout(() => {
      feedbackDiv.style.display = 'none';
    }, 5000);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('year').textContent = new Date().getFullYear();
  
  window.addEventListener('scroll', function(){
    const barranavegacao = document.querySelector('.barra-navegacao');
    barranavegacao.classList.toggle("sticky", window.scrollY > 50);  
  });
  
  const alternadorbarranavegacao = document.querySelector('.alternador');
  const opcoes = document.querySelector('ol');
  
  window.alternadorBarra = function() {
    alternadorbarranavegacao.classList.toggle("active");
    opcoes.classList.toggle("active");
  };
});
