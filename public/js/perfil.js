const { perfil } = require("../../controllers/usuarioController");

const userInfoDiv = document.querySelector("#user-info");

const cadastro = {
    name: 'Joao',
    lastname: 'Silva',
    email: 'joao@silva.com',
    address: 'Rua do Ouro, 123'
};

userInfoDiv.innerHTML = `
    <p>Nome completo: ${cadastro.name} ${cadastro.lastname}</p>
    <p>E-mail: ${cadastro.email}</p>
    <p>Endereço: ${cadastro.address}</p>
`;



