import contentStyle from "./content.css";
import { projectsComponent } from "../project/project";
import { todosContainerComponent } from "../todo/todo";

export const content = function () {
    const divWithClass = (c) => {
        const div = document.createElement("div");
        div.classList.add(c);
        return div;
    };

    const content = divWithClass("content");
    content.appendChild(projectsComponent());
    content.appendChild(todosContainerComponent());

    return content;
};
