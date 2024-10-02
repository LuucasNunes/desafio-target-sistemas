// Função para verificar e contar a letra 'a' ou 'A'
const verificarLetraA = (str) => {
  let contador = 0;

  for (let char of str) {
    if (char === "a" || char === "A") {
      contador++;
    }
  }
  contador > 0
    ? console.log(`A letra 'a' aparece ${contador} vezes.`)
    : console.log("A letra 'a' não aparece durante o texto");
};

const stringTeste = "Aqui está uma Amostra de texto."; //escreva o texto a ser encontrado
verificarLetraA(stringTeste); //parametro que utiliza a variável stringTeste
