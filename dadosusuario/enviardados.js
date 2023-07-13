const enviarDados = (event) => {
    event.preventDefault();
  
    const usuario = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      idade: parseInt(document.getElementById("idade").value),
    };
  
    if (isNaN(usuario.idade) || usuario.idade < 0) {
      console.log("Idade inválida. A contagem regressiva não será iniciada.");
      return;
    }
  
    const numero = parseInt(document.getElementById("numero").value);
  
    if (isNaN(numero) || numero < 0) {
      console.log("Número inválido. A contagem regressiva não será iniciada.");
      return;
    }
  
    const dadosUsuario = JSON.stringify(usuario);
  
    // Salvar os dados em um arquivo separado ou em um banco de dados
    // Exemplo de como salvar em um arquivo separado utilizando localStorage
    localStorage.setItem("dadosUsuario", dadosUsuario);
  
    let contador = numero;
  
    const intervalId = setInterval(() => {
      console.log(contador);
  
      contador--;
  
      if (contador < 0) {
        clearInterval(intervalId);
        console.log("Fim da contagem regressiva!");
  
        // Redirecionar para outra página onde a pessoa pode conferir e alterar os dados
        window.location.href = "dadosUsuario.html";
      }
    }, 1000);
  
    console.log("Iniciando contagem regressiva...");
  };
  
  