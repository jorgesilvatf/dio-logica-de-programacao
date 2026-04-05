// Função
function calcularRank(vitorias, derrotas) {
    return vitorias - derrotas;    
}

// Calculadora de Partidas Rankeadas 
console.log("=== Calculadora de Partidas ===");

// Entrada de Valores: vitorias e derrotas
const vitorias = 90
const derrotas = 3

// Cálculo do Rank(Saldo)
const saldo = calcularRank(vitorias, derrotas)

// Cálculo do Nível
let nivel;
if (vitorias < 10) {
    nivel = "Ferro";
}
else if (vitorias <= 20) {
    nivel = "Bronze";
}
else if (vitorias <= 50) {
    nivel = "Prata";
}
else if (vitorias <= 80) {
    nivel = "Ouro";
}
else if (vitorias <= 90) {
    nivel = "Diamante";
}
else if (vitorias <= 100) {
    nivel = "Lendário";
}
else {
    nivel = "Imortal";
}

// Saída de Resultados
console.log(`O Herói tem de saldo de ${saldo} está no nível de ${nivel}`)