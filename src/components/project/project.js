import style from "./project.css";
import { allProjects } from "../../storage";

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
    allProjects.forEach((p) => {
        const component = projectComponent(p);
        component.onclick = () => {
            active.classList.remove("project--open");
            active = component;
            component.classList.add("project--open");
        }
        container.appendChild(component);
    })
    active = container.firstChild;
    active.classList.add("project--open");

    return container;
}