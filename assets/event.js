

console.log("hola mundo");


const rankingData = [
    { nombre: "Christopher Arteaga", puntos: 0 },
    { nombre: "Alain Campoverde", puntos: 0 },
    { nombre: "Paola Barros", puntos: 0 },
    { nombre: "Anthony Loor", puntos: 0 },
    { nombre: "Austin Salguero", puntos: 0 }
];

const medallas = ["🥇", "🥈", "🥉"];

const rankingList = document.getElementById("ranking-list");
rankingData.forEach((persona, index) => {
    const div = document.createElement("div");
    div.classList.add("ranking-item");
    
    const medal = index < 3 ? `<span class="medal">${medallas[index]}</span>` : "";

    div.innerHTML = `${medal} ${persona.nombre} <span>${persona.puntos} pts</span>`;
    rankingList.appendChild(div);
});