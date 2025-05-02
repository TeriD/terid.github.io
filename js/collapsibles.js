function setupCollapsibles() {
  const collapsibles = document.querySelectorAll(".collapsible");

  collapsibles.forEach(section => {
    const header = section.querySelector("h2");

    // Remove existing click listeners to avoid duplicates
    const newHeader = header.cloneNode(true);
    header.parentNode.replaceChild(newHeader, header);

    // Reattach click handler
    newHeader.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        section.classList.toggle("collapsed");
      }
    });

    // Collapse by default on mobile, expand on desktop
    if (window.innerWidth < 768) {
      section.classList.add("collapsed");
    } else {
      section.classList.remove("collapsed");
    }
  });
}

console.log("Collapsible setup for:", section);

// Setup on load
window.addEventListener("DOMContentLoaded", setupCollapsibles);
window.addEventListener("resize", setupCollapsibles);