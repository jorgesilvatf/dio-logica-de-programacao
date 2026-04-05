// Classe Heroi com método atacar
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    // Método atacar baseado no tipo do herói
    atacar() {
        const ataque = {
            "mago": "magia",
            "guerreiro": "espada",
            "monge": "artes marciais",
            "ninja": "shuriken"
        }
        console.log(`o ${this.tipo} atacou usando ${ataque[this.tipo]}`);
    }
}

// Iniciar batalha
console.log("=== Começar batalha ===");

// Cria heróis
const heroi1 = new Heroi("Aragorn", 87, "guerreiro");
const heroi2 = new Heroi("Gandalf", 1000, "mago");
const heroi3 = new Heroi("Yujiro", 35, "monge");
const heroi4 = new Heroi("Naruto", 16, "ninja");

// Realiza ataques
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();