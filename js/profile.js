function saveProfile() {
  const session = JSON.parse(localStorage.getItem("session"));
  if (!session) return alert("No autorizado");

  const profile = {
    name: session.name,
    position: document.getElementById("position").value,
    age: document.getElementById("age").value,
    club: document.getElementById("club").value,
    goals: document.getElementById("goals").value,
    assists: document.getElementById("assists").value
  };

  localStorage.setItem("profile_" + session.email, JSON.stringify(profile));
  alert("Perfil guardado");
}

document.addEventListener("DOMContentLoaded", () => {
  const session = JSON.parse(localStorage.getItem("session"));
  const saved = JSON.parse(localStorage.getItem("profile_" + session.email));

  if (saved) {
    position.value = saved.position;
    age.value = saved.age;
    club.value = saved.club;
    goals.value = saved.goals;
    assists.value = saved.assists;
  }
});
