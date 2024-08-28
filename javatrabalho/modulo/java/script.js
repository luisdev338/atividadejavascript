//criar seu nome
var nome = "luis felipe ramos de limas";
console.log(nome);

//gosta de programação
const gosto = true;
const naogosto =false;
console.log(gosto);

//dados matematicos
//2+(3*4)-5
const a = 3;
const b = 4;
const c = 2;
const d = 5;
const o = a*b;
const i = c+o;
const y = i-d;
console.log(y);

//2*(3+4)-5/5
const l =3;
const p =4;
const ç = 5/5;
const m = 2;
const li = l+p;
const pi = m*li;
const çi = ç/ç;
const mi = pi-çi;
console.log(mi);

//{[(10-4)/2]*3+1}
const lo = 10-4;
const ly = lo/2;
const lr = ly*3;
const le = lr+1;
console.log(le);

//3*4/2+1-5
const nn = 3*4;
const ni = nn/2;
const nu = ni+1;
const nr = nu-5;
console.log(nr);

//poema
const linha1 = "No reino dos codigos e luzes a brilhar\n"
const linha2 = "linguas de maquinas começam a dançar \n"
const linha3 = "linhas de logicas tecem o sonho e o planear \n"
const linha4 = "enquanto algoritmos ao futuro vao guiar\n"
const texto = linha1+linha2+linha3+linha4;
console.log(texto)

//crie uma data
const dia = 28;
const mes = 8;
const ano = 2024;
console.log(`hoje é ${dia}/${mes}/${ano}`);

//crie um retangulo para saber a area dele
function calcularArea() {
    // Solicita a base e a altura ao usuário
    const base = parseFloat(prompt("Digite a base do retângulo:"));
    const altura = parseFloat(prompt("Digite a altura do retângulo:"));

    // Verifica se os valores são válidos
    if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos e positivos para a base e a altura.");
        return;
    }

    // Calcula a área do retângulo
    const area = base * altura;

    // Exibe o resultado utilizando interpolação
    alert(`A área do retângulo é: ${area}`);
}

//crie uma vogal
function conferir(){
    var a = document.getElementById('questao');
    var b = document.getElementById('primeiro');
    var c = document.getElementById('segundo');
    var greeting ="";

    if(a==b){
        greeting = 'voce acertou';
    }
    else  {
        greeting = 'voce errou';
    }

    document.getElementById('demo').innerHTML = greeting; 
}

//crie um numero par ou impa
const numero = 8;

if (numero%2==0){

console.log(`${numero} é u numero par`);
}
else{
console.log(`${numero} é um numero impar`);
}

//fim




