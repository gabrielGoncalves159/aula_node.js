// EXERCICIO REALIZADO =======================================================
function randomNumberBetween(min = 2000, max = 7000) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/*
Criar função que que retorna uma Promise com um
número aleatório após esperar x milisegundos
(criar tempo de espera e número aleatório usando randomNumberBetween)
*/
function randomNumberAsync() {
  const tempo = randomNumberBetween();
  console.log(`tempo estimado ${tempo} milisegundos!`);

  return new Promise((resolve) => {
    setTimeout(() => {
      const numeroAleatorio = randomNumberBetween();
      console.log('numero aleatorio gerado: ', numeroAleatorio);

      resolve(numeroAleatorio);
    }, tempo);
  });
}

// chamar usando async
(async () => {
  try {
    const numeroAleatorio = await randomNumberAsync();
    console.log(`O valor do número aleatório: `, numeroAleatorio);
  } catch (err) {
    console.log('Erro ao executar', err);
  }
})();

// chamar usando then/catch
randomNumberAsync() 
  .then(numeroAleatorio => { 
      console.log(numeroAleatorio);
    })
  .catch (err => {
    console.log('Erro ao executar', err);
  });
// ===========================================================================


