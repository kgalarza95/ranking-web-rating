

const rankingData = [
    { nombre: "Paola Barros", puntos: 9.3 },
    { nombre: "Christopher Arteaga", puntos: 9.2},
    { nombre: "Anthony Loor", puntos: 4.2 },
    { nombre: "Austin Salguero", puntos: 3.7 },
    { nombre: "Alain Campoverde", puntos: 3.2 },
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