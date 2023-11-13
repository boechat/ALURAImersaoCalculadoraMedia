// Criar um conversor de moedas
var valorEmDolar = 30;
var cotacaoDoDolar = 5.32;

var valorEmReal = valorEmDolar * cotacaoDoDolar;
// Usa toFixed para arredondar em 2 caracteres após o '.'(virgula)
valorEmReal = valorEmReal.toFixed(2);

alert("Valor em real : R$ " + valorEmReal);

//Desafio #1 : colocar uma criptomoeda

var valorEmBitcoin13112023 = valorEmDolar;
var cotacaoDoBitcoin13112023 = 180333.02;

var valorDaCriptoMoeda = valorEmBitcoin13112023 * cotacaoDoBitcoin13112023;
valorDaCriptoMoeda = valorDaCriptoMoeda.toFixed(2);

alert(
  "Valor do Bitcoin do dia 13/11/2023 às 14:50 em real : R$ " +
    valorDaCriptoMoeda
);

//Desafio #2 : colocar o nome da Pessoa pedindo o valor

var meuNome = "Alves";
alert(
  meuNome +
    " pediu para saber que U$" +
    valorEmDolar +
    " está custando R$" +
    valorEmReal +
    " e que o valor em Real do Bitcoin no dia 13/11/2023 às 14:50h está custando R$" +
    valorDaCriptoMoeda
);

//Desafio #3 : Criar um conversor de quilômetros para anos-luz e descobrir o tempo necessário para viajar de uma estrela para outra.

//Mudando o conversor de Moedas (HTML) para Conversor Interestelar e alterar o background para um filme de espaço
var cMetros;
var segundosNoAno = 60 * 60 * 24 * 365.25;

var distanciaAnosLuz = 9460536207068016; /*em metros*/
var velocidadeLuz = 299792458; /*metros por segundo */
var distanciaMediaEstrelas = 5; /*5 anos Luz*/

var distanciaCalculadaMetros =
  velocidadeLuz * distanciaMediaEstrelas * segundosNoAno;
cMetros = distanciaCalculadaMetros;
var conversorKM = cMetros / 1000;

alert(
  "Entre uma estrela e outra, temos em média uma distância de " +
    distanciaCalculadaMetros +
    " metros ou em " +
    conversorKM +
    " kilometros"
);
//######Conteudo Extra##########
