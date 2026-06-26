let pontos = 0;
let totalPlantas = 0;

const btnPlantar = document.getElementById("btnPlantar");
const fazenda = document.getElementById("fazenda");

const spanPontos = document.getElementById("pontos");
const spanPlantas = document.getElementById("plantas");
const mensagem = document.getElementById("mensagem");

/*
====================================
PLANTAR
====================================
*/
btnPlantar.addEventListener("click", () => {
    criarPlanta();
});

/*
====================================
CRIAR PLANTA
====================================
*/
function criarPlanta() {

    const planta = document.createElement("div");
    planta.classList.add("planta");

    // posição aleatória dentro da fazenda
    const x = Math.random() * 90;
    const y = Math.random() * 90;

    planta.style.left = x + "%";
    planta.style.top = y + "%";

    fazenda.appendChild(planta);

    totalPlantas++;
    atualizarUI();

    mensagem.innerText = "🌱 Plantando... aguarde o crescimento";

    // crescimento após tempo
    setTimeout(() => {
        planta.style.background = "yellow";
        mensagem.innerText = "🌾 Pronto para colher! Clique na planta";
        planta.dataset.pronta = "true";
    }, 4000);

    // clique para colher
    planta.addEventListener("click", () => {

        if (planta.dataset.pronta === "true") {

            planta.remove();

            pontos += 10;
            totalPlantas--;

            atualizarUI();

            mensagem.innerText = "✅ Colheita realizada com sucesso!";
        }
    });
}

/*
====================================
ATUALIZAR INTERFACE
====================================
*/
function atualizarUI() {
    spanPontos.innerText = pontos;
    spanPlantas.innerText = totalPlantas;
}
