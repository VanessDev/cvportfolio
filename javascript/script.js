const footer = document.querySelector("footer ul.container li");

  function toggleInterets() {
    const p = document.getElementById("interets");
    const icon = document.getElementById("toggleIcon");
    const button = document.getElementById("toggleBtn");

    const isHidden = p.style.display === "none";
    p.style.display = isHidden ? "block" : "none";
    icon.textContent = isHidden ? "➖" : "➕";
    button.innerHTML = `<span id="toggleIcon">${icon.textContent}</span> ${isHidden ? "Masquer" : "Afficher"} les centres d'intérêt`;
  }