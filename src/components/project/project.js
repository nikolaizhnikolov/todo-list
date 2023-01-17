import style from "./project.css";
import { projects } from "../../storage";

const projectComponent = function (project) {
    const container = document.createElement("div");
    container.classList.add("project");
    container.onclick = () => {
        console.log(project.name);
    };

    const logo = document.createElement("img")
    logo.classList.add("logo");

    const text = document.createElement("div");
    text.textContent = project.name;

    container.appendChild(logo);
    container.appendChild(text);

    return container;
};

export const projectsComponent = () => {
    const container = document.createElement("div");
    container.classList.add("projects");
    
    let active = null;
    projects.forEach((p) => {
        const component = projectComponent(p);
        component.onclick = () => {
            component.classList.add("project--open");
            active.classList.remove("project--open");
            active = component;
        }
        container.appendChild(component);
    })
    active = container.firstChild;

    return container;
}