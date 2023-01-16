import style from "./project.css";
import folder from "./folder.png";
import folderOpen from "./folderOpen.png"

const project = function (name, todos) {
    const p = Object.create(null);
    p.name = name;
    p.todos = todos;
    return p;
};

const projects = [project("Todos", []), project("Project 2", [])];

const projectComponent = function (project) {
    const container = document.createElement("div");
    container.classList.add("project");
    container.onclick = () => {
        console.log(project.name);
    };

    const logo = document.createElement("img")
    logo.classList.add("logo");
    logo.src = folder;

    const text = document.createElement("div");
    text.textContent = project.name;

    container.appendChild(logo);
    container.appendChild(text);

    return container;
};

export const getAllProjects = () => {
    const projectComponents = [];
    projects.forEach(p => projectComponents.push(projectComponent(p)));
    return projectComponents;
}
