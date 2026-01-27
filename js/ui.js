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
  const menu =
    document.querySelector(".sidebar ul") ||
    document.querySelector(".sidebar .menu");

  if (!menu) {
    console.warn("Sidebar menu not found");
    return;
  }

  if (document.getElementById("logoutBtn")) return;

  menu.insertAdjacentHTML(
    "beforeend",
    `
    <li class="menu-item">
      <a href="#" id="logoutBtn" class="menu-link text-danger">
        🚪 Logout
      </a>
    </li>
    `
  );

  document.getElementById("logoutBtn").addEventListener("click", e => {
    e.preventDefault();
    firebase.auth().signOut().then(() => {
      location.replace("login.html");
    });
  });
});
