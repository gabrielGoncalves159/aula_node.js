// DESCRIPTAR ====================================================
const aes256 = require('aes256');
const senha = 'letscode2022';

const mensagemDescriptografada = (
  aes256.decrypt(
    senha,
    'SLSNLsMKtcBRhq2Ppyu4TYDxtVk2nZ4hQq7CMsRFbMamJQSGK4NBwA==',
  )
);

console.log(mensagemDescriptografada)
// ===============================================================

