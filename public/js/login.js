
//SCRIPT DE SESSION STORAGE

// Recuperar informações do formulário de login
function login() {
    const usuario = document.getElementById('login').value;
    const senha = document.getElementById('password').value;
}
//requisição para verificação de login
    const reqLogin = new XMLHttpRequest();
    reqLogin.open("POST", "http:localhost:3333/login", true);
    reqLogin.setRequestHeader("Content-Type", "application/json"); 
    reqLogin.onreadystatechange = () => {
        if (reqLogin.readyState === XMLHttpRequest.DONE && reqLogin.status ===200) {
            const response = JSON.parse(reqLogin.responseText);
            if (response.success) {
                sessionStorage.setItem("usuarioLogado", JSON.stringify(response.usuario));

                window.location.href ="/perfil";
            } else {
                alert("Usuário ou senha inválido!!")
            }
            }
        }; 
    //Enviar requisição HTTP
    reqLogin.send(JSON.stringify({ usuario:usuario, senha:senha}))

    // Função para recuperar informações do usuário a partir da sessão storage
function getInfoUsuario() {
    const infoUsuario = sessionStorage.getItem("usuarioLogado");
    if (infoUsuario) {
      return JSON.parse(infoUsuario);
    }
    return null;
  }
  