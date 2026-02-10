function loadPlayers() {
  const list = document.getElementById("playersList");
  list.innerHTML = "";

  const pos = document.getElementById("filterPosition").value.toLowerCase();
  const age = document.getElementById("filterAge").value;
  const club = document.getElementById("filterClub").value.toLowerCase();

  for (let key in localStorage) {
    if (key.startsWith("profile_")) {
      const player = JSON.parse(localStorage.getItem(key));

      if (
        (pos && !player.position.toLowerCase().includes(pos)) ||
        (age && player.age !== age) ||
        (club && !player.club.toLowerCase().includes(club))
      ) continue;

      const card = document.createElement("div");
      card.style.border = "1px solid #333";
      card.style.padding = "10px";
      card.style.marginBottom = "10px";
      card.style.borderRadius = "8px";

      card.innerHTML = `
        <strong>${player.name}</strong><br>
        Posición: ${player.position}<br>
        Edad: ${player.age}<br>
        Club: ${player.club}<br>
        Goles: ${player.goals} | Asistencias: ${player.assists}
      `;

      list.appendChild(card);
    }
  }

  if (list.innerHTML === "") {
    list.innerHTML = "<p>No se encontraron jugadores</p>";
  }
}

document.addEventListener("DOMContentLoaded", loadPlayers);
