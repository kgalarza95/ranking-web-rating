

const rankingData = [
    { nombre: "Paola Barros", puntos: 8 },
    { nombre: "Christopher Arteaga", puntos: 8 },
    { nombre: "Alain Campoverde", puntos: 8 },
    { nombre: "Anthony Loor", puntos: 8 },
    { nombre: "Austin Salguero", puntos: 5 },
];

const medallas = ["🥇", "🥈", "🥉", "4", "5"];

const modulos = ["GIT", "EDA", "JS"];

const rankingList = document.getElementById("ranking-list");
rankingData.forEach((persona, index) => {
    const div = document.createElement("div");
    div.classList.add("ranking-item");

    let identifier = index < 3 ? `<span class="medal">${medallas[index]}</span>` :
        (index < 5 ? `<span class="position">${index + 1}°</span>` : "");

    div.innerHTML = `${identifier} ${persona.nombre} <span>${persona.puntos} pts</span>`;
    rankingList.appendChild(div);
});