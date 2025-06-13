// js/github-projects.js
const projectContainer = document.querySelector(".projects .section-content");

async function fetchGitHubRepos() {
    try {
        const response = await fetch("https://api.github.com/users/tdowdy/repos");
        if (!response.ok) throw new Error("GitHub API fetch failed");

        const repos = await response.json();

        // Filter out forked or irrelevant repos (optional)
        const filtered = repos.filter(repo => !repo.fork && !repo.private);

        filtered.forEach(repo => {
            const div = document.createElement("div");
            div.classList.add("item");

            div.innerHTML = `
                <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                <p><strong>Description:</strong> ${repo.description || "No description provided."}</p>
                <p><strong>Tech:</strong> ${repo.language || "N/A"}</p>
            `;
            projectContainer.appendChild(div);
        });
    } catch (error) {
        projectContainer.innerHTML = `<p>Error loading GitHub projects. Please try again later.</p>`;
        console.error(error);
    }
}

document.addEventListener("DOMContentLoaded", fetchGitHubRepos);