const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntar(texto) {
    return new Promise(resolve => readline.question(texto, resolve));
}

function calcularRank(vitorias, derrotas) {
    const saldo = vitorias - derrotas;
    let nivel = vitorias < 10 ? "Ferro" :
                vitorias <= 20 ? "Bronze" :
                vitorias <= 50 ? "Prata" :
                vitorias <= 80 ? "Ouro" :
                vitorias <= 90 ? "Diamante" :
                vitorias <= 100 ? "Lendário" : "Imortal";
    
    return { saldo, nivel };
}

async function main() {
    console.log("=== Calculadora de Partidas Rankeadas ===\n");
    
    while (true) {
        const vitorias = parseInt(await perguntar("Vitórias: "));
        const derrotas = parseInt(await perguntar("Derrotas: "));
        
        const { saldo, nivel } = calcularRank(vitorias, derrotas);
        
        console.log(`\nO Herói tem de saldo de ${saldo} está no nível de ${nivel}\n`);
        
        const resp = await perguntar("Calcular outro herói? (s/n): ");
        if (resp.toLowerCase() !== 's') break;
    }
    
    console.log("\nPrograma encerrado!");
    readline.close();
}

main();