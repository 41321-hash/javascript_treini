let frases = [
    "Nunca subestima o poder do trabalho em equipe - Halo 3",
    "O aço ganha as batalhas. o ouro ganha a guerra - Davion Dotta 2",
    "Existe  diferença entre sobrivever e viver - The last of Us",
    "Ás vazes é melhor ter paciência do que agir impulsivamente - Zelda BOTW",
    "Goool - FC 2026",
    "Não importa o quão  escura seja a noite, o amanhã sempre chega - Final Fantasy x",
    "Espaço. Espaço. Eu tô no ESPAAAAÇOO - Portal 2",
    "Showtime!", "Magic!", "Fireball! - clach royle",
    "New high score! (Nova pontuação máxima), Player one, get ready! (Jogador um, prepare-se), Insert coin (Inserir moeda), You lose (Você perdeu) e Game over -  8-bit brawl stars "
];

let cliques = 0;

function gerarFrases(){
    let indice = Math.floor(Math.random() * frases.length);

    let frasesEscolhida = frases[indice];

    cliques = cliques+1;

    document.getElementById("frase").innerText = frasesEscolhida;

    document.getElementById("contador").innerText = "Frases geradas: " + cliques;
}