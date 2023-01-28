const { perfil } = require("../../controllers/usuarioController");

window.addEventListener("DOMContentLoaded", function() {
  const userInfoDiv = document.querySelector("#user-info");

  const perfil = {
      name: 'Joao',
      lastname: 'Silva',
      email: 'joao@silva.com',
      address: 'Rua do Ouro, 123'
  };

  userInfoDiv.innerHTML = `
      <p>Nome completo: ${perfil.name} ${perfil.lastname}</p>
      <p>E-mail: ${perfil.email}</p>
      <p>Endereço: ${perfil.address}</p>
  `;
});



