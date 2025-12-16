# Gerador de Herói e Simulador de Ataque

Este projeto é a solução para o desafio DIO de criação de classes (POO - Programação Orientada a Objetos) para um jogo de aventura. O objetivo é criar uma classe genérica Heroi capaz de simular um ataque específico com base no seu tipo (mago, guerreiro, monge, ninja).

O projeto foi implementado em uma interface web minimalista e clean para demonstrar o uso da lógica orientada a objetos na prática, utilizando HTML, CSS e JavaScript.

## Objetivo do desafio

Criar uma classe `Heroi` que possua as propriedades `nome`, `idade`, `tipo` e um método `atacar()` que exiba a mensagem: `O herói {nome} ({tipo}) atacou usando {ataque}.`

## Regras de ataque

O tipo de ataque é determinado pela classe do herói:

| Tipo      | Ataque (Saída)     |
|-----------|--------------------|
| Mago      | magia              |
| Guerreiro | espada             |
| Monge     | artes marciais     |
| Ninja     | shuriken           |

## Conceitos aplicados

- **Classes e Objetos (POO):** definição da classe `Heroi` com construtor e propriedades.
- **Métodos:** implementação do método `atacar()`.
- **Estruturas de decisão:** uso de `switch` dentro do método `atacar()` para definir o ataque.
- **Manipulação do DOM (JavaScript):** leitura dos dados do formulário e exibição do resultado.
- **Design:** estilos customizados para uma aparência moderna e clean (Tailwind foi removido na versão atual).

## Estrutura do projeto

O projeto está dividido em três arquivos principais:

- `index.html` — estrutura principal, formulário e links para CSS/JS.
- `css/styles.css` — estilos customizados e regras de layout para o design minimalista.
- `js/script.js` — definição da classe `Heroi` e toda a lógica de interação com o formulário.

## Como executar

1. Certifique-se de que `index.html`, `css/styles.css` e `js/script.js` estão na mesma pasta.
2. Abra o arquivo `index.html` no seu navegador (Chrome, Firefox, etc.).
3. Preencha os campos do formulário e clique em **ATACAR!** para ver a mensagem de ataque.

Opcional — executar via servidor local (recomendado para evitar restrições de CORS em alguns navegadores):

Use sua ferramenta de servidor local preferida (por exemplo, a extensão **Live Server** no VSCode ou uma ferramenta HTTP estática).

---

