function register() {
  const name = regName.value;
  const email = regEmail.value;
  const password = regPassword.value;
  const plan = document.getElementById("plan").value;

  if (!name || !email || !password) {
    alert("Completa todos los campos");
    return;
  }

  const user = {
    name,
    email,
    password,
    role: plan === "scouting" ? "Scouting" : "Jugador",
    premium: plan === "premium"
  };

  localStorage.setItem("user_" + email, JSON.stringify(user));
  alert("Cuenta creada correctamente");
  window.location.href = "login.html";
}


function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const user = JSON.parse(localStorage.getItem("user_" + email));

  if (!user || user.password !== password) {
    alert("Datos incorrectos");
    return;
  }

  localStorage.setItem("session", JSON.stringify(user));

  if (user.role === "Scouting") {
    window.location.href = "scouting.html";
  } else {
    window.location.href = "dashboard.html";
  }
}


function logout() {
  localStorage.removeItem("session");
  window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const session = JSON.parse(localStorage.getItem("session"));
  if (session && document.getElementById("welcome")) {
    document.getElementById("welcome").innerText = "Bienvenido " + session.name;
    document.getElementById("role").innerText = session.role || "Jugador";
  }
});
