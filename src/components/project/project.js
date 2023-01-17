import style from "./project.css";
import { defaultProject, projects } from "../../storage";
import { todoComponent } from "../todo/todo";

let active = null;

const toggleActiveProject = function (component) {
    if (active) active.classList.remove("project--open");
    active = component;
    component.classList.add("project--open");
};

const projectComponent = function (project) {
    const component = document.createElement("div");
    component.classList.add("project");

    const logo = document.createElement("img");
    logo.classList.add("logo");

    const text = document.createElement("div");
    text.textContent = project.name;

    component.appendChild(logo);
    component.appendChild(text);

    component.onclick = () => {
        toggleActiveProject(component);
        showProjectTodos(project.todos);
    };

    return component;
};

const showProjectTodos = function (todos) {
    const todoElements = [];
    todos.forEach((pt) => {
        todoElements.push(todoComponent(pt));
    });

    const todosContainer = document.querySelector(".todos");
    todosContainer.replaceChildren(...todoElements);
};

export const projectsComponent = () => {
    const container = document.createElement("div");
    container.classList.add("projects");

    const defaultProjectComponent = projectComponent(defaultProject);
    toggleActiveProject(defaultProjectComponent);

    container.appendChild(defaultProjectComponent);
    projects.forEach((p) => container.appendChild(projectComponent(p)));

    return container;
};
