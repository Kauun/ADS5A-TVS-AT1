
const dadosEstudante = require('./dadosEstudante');

describe('Teste da função recebeDados', () => {
  test('Verifica se a função processa corretamente o nome "Kauan Davi Fraga Gomes" e o RA "189675"', () => {
    const nome = "Kauan Davi Fraga Gomes";
    const RA = "189675";
    const esperado = `Dados recebidos - Nome: ${nome}, RA: ${RA}`;

    expect(dadosEstudante(nome, RA)).toBe(esperado);
  });
});
