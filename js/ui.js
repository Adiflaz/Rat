// UI Logic for Sidebar Toggle
function initMobileSidebar() {
    const toggleBtn = document.querySelector(".mobile-toggle");
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".sidebar-overlay");

    if (toggleBtn && sidebar && overlay) {
        // Remove existing listeners to avoid duplicates (if re-run)
        const newToggle = toggleBtn.cloneNode(true);
        toggleBtn.parentNode.replaceChild(newToggle, toggleBtn);

        // Toggle Sidebar
        newToggle.addEventListener("click", () => {
            sidebar.classList.toggle("active");
            overlay.classList.toggle("active");
        });

        // Close when clicking overlay
        overlay.addEventListener("click", () => {
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
        });
    } else {
        // Elements not found, silent fail
    }
}

// Run when DOM is ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMobileSidebar);
} else {
    initMobileSidebar();
}

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar-right");
  if (!navbar) return;

  if (!document.getElementById("logoutBtn")) {
    navbar.insertAdjacentHTML(
      "beforeend",
      `<button id="logoutBtn" class="btn btn-danger btn-sm">Logout</button>`
    );
  }

  document.getElementById("logoutBtn").onclick = () => {
    firebase.auth().signOut().then(() => {
      location.replace("login.html");
    });
  };
});
