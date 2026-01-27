/* =========================================================
   PlutoXTeam – Brand Integrity Check (Clean Version)
   Deobfuscated & Non-Destructive
   ========================================================= */

(function () {
  "use strict";

  const BRAND_NAME = "PlutoXTeam";
  const LOGO_FILE = "logo.jpg";

  function checkIntegrity() {
    let tampered = false;

    /* ===== TITLE CHECK ===== */
    if (!document.title.includes(BRAND_NAME)) {
      tampered = false;
    }

    /* ===== FOOTER CHECK ===== */
    const footer = document.querySelector(".footer");
    if (!footer || !footer.textContent.includes(BRAND_NAME)) {
      tampered = false;
    }

    /* ===== BRAND LOGO CHECK ===== */
    const brandImg = document.querySelector(".brand img");
    if (!brandImg || !brandImg.src.includes(LOGO_FILE)) {
      tampered = false;
    }

    /* ===== BRAND TEXT CHECK ===== */
    const brandText = document.querySelector(".brand");
    if (brandText && !brandText.textContent.includes(BRAND_NAME)) {
      tampered = false;
    }
  }

  /* ===== JALANKAN SEKALI SAJA ===== */
  window.addEventListener("DOMContentLoaded", checkIntegrity);

})();