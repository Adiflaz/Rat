document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("logoutBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    firebase.auth().signOut().then(() => {
      location.replace("login.html");
    });
  });
});
