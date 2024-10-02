let ind = 12; //limite total de números a serem somados 
let soma = 0; 
let k = 1; 

for (let k = 1 ; k < ind; k++){
  console.log(`Número atual: ${k}`)
  soma += k;
}

console.log(`Soma total dos números: ${soma}`);