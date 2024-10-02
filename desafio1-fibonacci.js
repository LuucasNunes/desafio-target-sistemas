const fibonacci = (n) => {
  let a = 2, b = 3; // defina o primeiro e o segundo número para a sequência  
  console.log('Sequência de fibonnaci:'); 

  for (let i = 0; i < n; i++){
    console.log(a)
    const somaFib = a;
    a = b;
    b = somaFib + b;
  }
};

fibonacci(10) //defina o máximo de números na sequência 