import style from "./project.css";

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
    container.textContent = project.name;
    container.onclick = () => {
        console.log(project.name);
    };
    return container;
};

export const getAllProjects = () => {
    const projectComponents = [];
    projects.forEach(p => projectComponents.push(projectComponent(p)));
    return projectComponents;
}
