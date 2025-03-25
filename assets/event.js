

console.log("hola mundo");


const rankingData = [
    { nombre: "Juan Pérez", puntos: 150 },
    { nombre: "Ana Gómez", puntos: 140 },
    { nombre: "Carlos López", puntos: 130 },
    { nombre: "María Fernández", puntos: 120 },
    { nombre: "Pedro Sánchez", puntos: 110 },
    { nombre: "Laura Ramírez", puntos: 100 }
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