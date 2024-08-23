const caixaPrincipal = document.queryselector(".caixa-Principal");
const caixaPerguntas = document.queryselector(".caixa-perguntas");
const caixaAlternativas = document.queryselector(".caixa-alternativas");
const caixaResultado = document.queryselector(".caixa-resultado");
const textoPrincipal = document.queryselector(".caixa-resultado");

const perguntas =[
    {
        enunciado: ""
        alternativas: [
        {
            texto:
            afirmacao:
        },
        {
            texto:
            afirmacao:
        }
      ]
   },
   
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appenChild(botaoAlternativas);

    }
}
mostraPergunta();