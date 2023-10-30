let cells = document.querySelectorAll(".cell");
let jogador = document.querySelector(".jogador");
let reiniciarBtn = document.querySelector(".reiniciarJogo");

let vitoria = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let jogadas = ["", "", "", "", "", "", "", "", ""];
let jogando = true;

let jogadorAtual = "X";

function jogar() {
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      let index = cell.getAttribute("index");

      if (cell.textContent == "" && jogando) {
        cell.textContent = jogadorAtual;
        jogadas[index] = jogadorAtual;
        jogadorAtual = jogadorAtual === "X" ? "O" : "X";
      }

      jogador.textContent = `Jogador atual ${jogadorAtual}`;

      ganhador();
    });
  });
}

jogar();

function ganhador() {
  for (let i = 0; i < vitoria.length; i++) {
    let condicao = vitoria[i];

    let cellA = jogadas[condicao[0]];
    let cellB = jogadas[condicao[1]];
    let cellC = jogadas[condicao[2]];

    if (cellA != "" || cellB != "" || cellC != "") {
      if (cellA == cellB && cellB == cellC) {
        console.log("vencedor");
        jogando = false;
        return;
      }
    }
  }

  if (!jogadas.includes("")) {
    console.log("Empate");
  }
}

reiniciarBtn.addEventListener("click", reiniciarJogo);

function reiniciarJogo() {
  jogadas = ["", "", "", "", "", "", "", "", ""];
  cells.forEach((cell) => (cell.textContent = ""));
  jogadorAtual = "X";
  jogando = true;
}
