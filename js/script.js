// 1. CLASSE HEROI (Lógica principal do desafio)
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque desconhecido";
        }

        // Retorna a mensagem formatada para ser exibida na web
        return `O herói ${this.nome} (${this.tipo}) atacou usando ${ataque}.`;
    }
}

// 2. LÓGICA DE INTERAÇÃO COM O DOM
// Garante que o script só execute após todo o HTML ser carregado.
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('hero-form');
    
    // Verifica se o formulário foi encontrado
    if (!form) {
        console.error("Erro: Elemento 'hero-form' não encontrado no DOM.");
        return;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Captura os valores dos campos
        const nome = document.getElementById('nome').value.trim();
        const idade = parseInt(document.getElementById('idade').value);
        const tipo = document.getElementById('tipo').value;
        const outputElement = document.getElementById('output-message');

        // Validação básica
        if (!nome || isNaN(idade) || !tipo) {
            outputElement.textContent = "Por favor, preencha todos os campos corretamente.";
            outputElement.classList.add('text-error');
            outputElement.classList.remove('text-primary');
            return;
        }

        // Cria a instância da classe Heroi
        const heroi = new Heroi(nome, idade, tipo);

        // Chama o método atacar e obtém a mensagem
        const mensagemAtaque = heroi.atacar();

        // Exibe a mensagem de saída na interface
        outputElement.textContent = mensagemAtaque;
        outputElement.classList.remove('text-error');
        outputElement.classList.add('text-primary');
    });
});