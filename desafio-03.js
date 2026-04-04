class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase(); // garante minúsculo
    }

    atacar() {
        // Objeto com os ataques correspondentes
        const ataques = {
            "mago": "magia",
            "guerreiro": "espada",
            "monge": "artes marciais",
            "ninja": "shuriken"
        };

        // Pega o ataque ou usa mensagem padrão se o tipo não existir
        const ataque = ataques[this.tipo] || "um ataque desconhecido";

        // Exibe a mensagem exatamente como pedido
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// ========================
// Testando a classe
// ========================

console.log("=== Heróis em Ação ===\n");

const heroi1 = new Heroi("Arthur", 28, "Guerreiro");
const heroi2 = new Heroi("Merlin", 120, "Mago");
const heroi3 = new Heroi("Li", 35, "Monge");
const heroi4 = new Heroi("Kage", 22, "Ninja");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();

// Teste com tipo inválido
const heroi5 = new Heroi("Desconhecido", 25, "Arqueiro");
heroi5.atacar();