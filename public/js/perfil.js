const { detalhar } = require("../../controllers/usuarioController");

window.addEventListener("DOMContentLoaded", function() {
  const userInfoDiv = document.querySelector("#user-info");

  async function getUserInfo() {
    try {
    const response = await axios.get("https://localhost:3001/perfil");
    const perfil = response.data;
  userInfoDiv.innerHTML = `
      <p>Nome completo: ${perfil.name} ${perfil.lastname}</p>
      <p>E-mail: ${perfil.email}</p>
      <p>Endereço: ${perfil.address}</p>
  `;
} catch (error) {
  console.error(error);
}
}})