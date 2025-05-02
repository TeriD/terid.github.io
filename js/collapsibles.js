function setupCollapsibles() {
  const collapsibles = document.querySelectorAll(".collapsible");

  collapsibles.forEach(section => {
    const header = section.querySelector("h2");

    // Replace header to prevent duplicate listeners
    const newHeader = header.cloneNode(true);
    header.parentNode.replaceChild(newHeader, header);

    // Attach click toggle
    newHeader.addEventListener("click", () => {
      section.classList.toggle("collapsed");
    });

    // Only collapse Education and Skills by default on mobile
    const id = section.classList.contains("education") ? "education"
              : section.classList.contains("skills") ? "skills"
              : "";

    if (window.innerWidth < 768 && (id === "education" || id === "skills")) {
      section.classList.add("collapsed");
    }
  });
}

window.addEventListener("DOMContentLoaded", setupCollapsibles);
window.addEventListener("resize", setupCollapsibles);