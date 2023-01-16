import contentStyle from "./content.css";
import { getAllProjects } from "../project/project";

export const content = function () {
    const divWithClass = (c) => {
        const div = document.createElement("div");
        div.classList.add(c);
        return div;
    };

    const content = divWithClass("content");

    const projects = divWithClass("projects");
    getAllProjects().forEach(p => projects.appendChild(p));
    content.appendChild(projects);
    content.appendChild(divWithClass("todos"));

    return content;
};
