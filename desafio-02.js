const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para calcular o ranking
function calcularRank(vitorias, derrotas) {
    const saldo = vitorias - derrotas;
    
    let nivel;
    if (vitorias < 10) nivel = "Ferro";
    else if (vitorias <= 20) nivel = "Bronze";
    else if (vitorias <= 50) nivel = "Prata";
    else if (vitorias <= 80) nivel = "Ouro";
    else if (vitorias <= 90) nivel = "Diamante";
    else if (vitorias <= 100) nivel = "Lendário";
    else nivel = "Imortal";
    
    return { saldo, nivel };
}

// Programa principal
console.log("=== Calculadora de Partidas Rankeadas ===\n");

rl.question('Digite a quantidade de vitórias: ', (vitoriasInput) => {
    rl.question('Digite a quantidade de derrotas: ', (derrotasInput) => {
        
        const vitorias = parseInt(vitoriasInput);
        const derrotas = parseInt(derrotasInput);

        // Validação simples
        if (isNaN(vitorias) || isNaN(derrotas)) {
            console.log("❌ Por favor, digite apenas números.");
        } else {
            const resultado = calcularRank(vitorias, derrotas);
            console.log(`\nO Herói tem um saldo de ${resultado.saldo} e está no nível de ${resultado.nivel}`);
        }
        
        rl.close();
    });
});