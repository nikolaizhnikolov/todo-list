import style from "./project.css";

const project = function (name, todos) {
    const p = Object.create(null);
    p.name = name;
    p.todos = todos;
    return p;
};

const testProjects = [project("default", []), project("Test", [])];

const projectComponent = function (project) {
    const p = document.createElement("div");
    p.classList.add("project");
    p.textContent = project.name;
    p.onclick = () => {
        console.log(project.name);
    };
    return p;
};

export const getAllProjects = () => {
    const projectComponents = [];
    testProjects.forEach(p => projectComponents.push(projectComponent(p)));
    return projectComponents;
}
