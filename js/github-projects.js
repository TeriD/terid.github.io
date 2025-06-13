const projectContainer = document.querySelector(".projects .section-content");

async function fetchCustomProjects() {
    try {
        const response = await fetch("https://terid.github.io/data/projects.json");
        if (!response.ok) throw new Error("Failed to load projects.json");

        const projects = await response.json();

        projects.forEach(project => {
            const div = document.createElement("div");
            div.classList.add("item");

            if (project.links) {
                // Render links list for overview-type project
                const linksList = project.links.map(link =>
                    `<li><a href="${link.href}" target="_blank">${link.label}</a></li>`
                ).join("");

                div.innerHTML = `
                    <p><strong>Description:</strong> ${project.description}</p>
                    <ul>${linksList}</ul>
                `;
            } else {
                // Render regular project item
                div.innerHTML = `
                    <h3><a href="${project.link}" target="_blank">${project.title}</a></h3>
                    <p><strong>Description:</strong> ${project.description}</p>
                    <p><strong>Technologies:</strong> ${project.technologies}</p>
                    <p><strong>Role:</strong> ${project.role}</p>
                `;
            }

            projectContainer.appendChild(div);
        });
    } catch (error) {
        projectContainer.innerHTML = `<p>Error loading project data. Please try again later.</p>`;
        console.error("Fetch error:", error);
    }
}

document.addEventListener("DOMContentLoaded", fetchCustomProjects);