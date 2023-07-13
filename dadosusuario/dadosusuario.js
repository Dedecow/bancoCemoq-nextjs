const mostrarDados = () => {
    const dadosUsuario = localStorage.getItem("dadosUsuario");
  
    if (dadosUsuario) {
      const usuario = JSON.parse(dadosUsuario);
      const dadosElement = document.getElementById("dados");
  
      const html = `
        <p><strong>Nome:</strong> ${usuario.nome}</p>
        <p><strong>Email:</strong> ${usuario.email}</p>
        <p><strong>Idade:</strong> ${usuario.idade}</p>
      `;
  
      dadosElement.innerHTML = html;
    } else {
      console.log("Dados do usuário não encontrados.");
    }
  };
  
  const editarDados = () => {
    localStorage.removeItem("dadosUsuario");
    window.location.href = "index.html";
  };
  
  // Exibir os dados ao carregar a página
  window.addEventListener("load", mostrarDados);
  