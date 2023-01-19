import style from "./project.css";
import { defaultProject, projects } from "../../storage";
import { todoComponent, todosHeaderRow } from "../todo/todo";
import plus from "./plus.png";

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
    todoElements.push(todosHeaderRow());
    todos.forEach((pt) => {
        todoElements.push(todoComponent(pt));
    });

    const todosContainer = document.querySelector(".todos");
    todosContainer.replaceChildren(...todoElements);
};

export const projectsComponent = () => {
    const container = document.createElement("div");
    container.classList.add("projects");

    container.appendChild(projectsHeaderRow());

    const defaultProjectComponent = projectComponent(defaultProject);
    toggleActiveProject(defaultProjectComponent);

    container.appendChild(defaultProjectComponent);
    projects.forEach((p) => container.appendChild(projectComponent(p)));

    container.appendChild(projectsAddButton());

    return container;
};

const projectsHeaderRow = function() {
    const header = document.createElement("div");
    header.textContent = "Categories";
    header.classList.add("projects__header");
    return header;
}

const projectsAddButton = function() {
    const button = document.createElement("button");
    button.classList.add("projects__addbutton");

    const img = document.createElement("img");
    img.src = plus;
    button.appendChild(img);
    return button;
}
