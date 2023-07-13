function enviarDadosUsuario(usuario) {
  // Simulação de uma função assíncrona para envio dos dados do usuário
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Enviando dados do usuário:", usuario);
      resolve();
    }, 2000);
  });
}

function contagemRegressiva() {
  const usuario = {};

  usuario.nome = prompt("Digite seu nome:");
  usuario.email = prompt("Digite seu email:");
  usuario.idade = parseInt(prompt("Digite sua idade:"));

  if (isNaN(usuario.idade) || usuario.idade < 0) {
    console.log("Idade inválida. A contagem regressiva não será iniciada.");
    return;
  }

  const numero = parseInt(prompt("Digite o número pelo qual deseja iniciar a contagem regressiva:"));

  if (isNaN(numero) || numero < 0) {
    console.log("Número inválido. A contagem regressiva não será iniciada.");
    return;
  }

  let contador = numero;

  const intervalId = setInterval(() => {
    console.log(contador);

    contador--;

    if (contador < 0) {
      clearInterval(intervalId);
      console.log("Fim da contagem regressiva!");

      enviarDadosUsuario(usuario)
        .then(() => {
          console.log("Dados do usuário enviados com sucesso!");
        })
        .catch((error) => {
          console.log("Erro ao enviar dados do usuário:", error);
        });
    }
  }, 1000);

  console.log("Iniciando contagem regressiva...");
}

// Exemplo de uso da função
contagemRegressiva();
